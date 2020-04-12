
function showHome() {
    document.getElementById('panel').classList.add('d-none');
    document.getElementById('error-page').classList.add('d-none');
    document.getElementById('inputcode').classList.remove('d-none');
}

function showPanel() {
    document.getElementById('inputcode').classList.add('d-none');
    document.getElementById('error-page').classList.add('d-none');
    document.getElementById('panel').classList.remove('d-none');
}

function showError() {
    document.getElementById('inputcode').classList.add('d-none');
    document.getElementById('panel').classList.add('d-none');
    document.getElementById('error-page').classList.remove('d-none');
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn-go-to-home').addEventListener('click',() => showHome());

    document.getElementById('sbmt').addEventListener('click', function(e){e.preventDefault; loadDashboardDatanoStorage()}, false);

    chrome.storage.local.get(['query_code'], function(result) {
        query_stored = result.query_code
      
    if(query_stored){
        console.log("query_stored: ",query_stored)
        loadDashboardDataStorage(query_stored)
    }
    });
})

function loadDashboardDatanoStorage(){

    // document.getElementsByClassName('table')[0].style.display = "block";
    // document.getElementById('reset').style.display = "block";
    // document.getElementById('infopanel').style.display = "block";
    
    
    let queryCode = document.getElementById('result').value

    const api_url = `https://us-central1-test-d36a6.cloudfunctions.net/load_workspace?qeue_workspace=${queryCode}`;
    
    async function getData (){
        const response = await fetch(api_url);
        const data = await response.json();
        
        if (queryCode == data.code_workspace){
            chrome.storage.local.set({'query_code': data.code_workspace})
            loadDashboard(data, queryCode)
        } else {
            showError();
            //display error TODO
        }  
    }

    getData();
}

function loadDashboardDataStorage(query_stored){
    
    // document.getElementsByClassName('table')[0].style.display = "block";
    // document.getElementById('reset').style.display = "block";
    // document.getElementById('infopanel').style.display = "block";
    let queryCode = query_stored

    const api_url = `https://us-central1-test-d36a6.cloudfunctions.net/load_workspace?qeue_workspace=${queryCode}`;
    
    async function getData (){
        const response = await fetch(api_url);
        const data = await response.json();
        
        if (queryCode == data.code_workspace){
            chrome.storage.local.set({'query_code': data.code_workspace})
            loadDashboard(data, queryCode)
        } else {
            showError();
            //display error TODO
        }        
    }
    getData();
}

function loadDashboard(content){
    showPanel();
    let info_areas = content.info_areas
    // document.getElementById('inputcode').style.display = "none";
    // document.getElementById('panel').style.display = "block";
    document.getElementById('maintitle').innerHTML = content.workspace_name;
    var table_controller = document.getElementById("table_controller");
    table_controller.innerHTML === "";
    for (var i = 0; i < info_areas.length; i++){
        area = info_areas[i].name_area
        status = info_areas[i].status
        workspace = content.workspace_name
        letter = info_areas[i].letter;
        var row = table_controller.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = letter;
        var button = null;
        button = document.createElement('BUTTON');
        button.classList = 'btn-table btn bg-wapp w-100';
        button.innerHTML = `${area}+1`;
        button.id = area;
        button.addEventListener('click', () => plusOne(workspace, area));
        // button.onclick = () => plusOne(workspace, area);
        cell2.appendChild(button);
        cell3.innerHTML = status;
    }
    
    

    // for (var i = 0; i < info_areas.length; i++){
    //     areaValue = info_areas[i].name_area
    //     document.getElementById(areaValue).addEventListener('click', function() {
    //         plusOne(workspace, this.id)
    //     }, false);
    // }
    addResetCode(workspace)

}

function plusOne(workspace, area){
    debugger;
    const api_url = `https://us-central1-test-d36a6.cloudfunctions.net/qeue_controller?queue_workspace=${workspace}&qeue_area=${area}`;
    
    async function plusOneRequest (){
        const response = await fetch(api_url);
        const data = await response.json();
        refreshDashboard(data)
    }
    
    plusOneRequest();
    
}

function addResetCode(){
    var reset_section = document.getElementById("reset");
    if(reset_section.innerHTML === "") {
        var button = document.createElement('BUTTON');
        var text = document.createTextNode('REINICIAR'); 
        
        button.appendChild(text);
        button.setAttribute("id", "reset_workspace")
        button.setAttribute("value", workspace)
        button.setAttribute("class", 'btn-lg bg-wapp w-100');
        reset_section.appendChild(button);
        document.getElementById("reset_workspace").addEventListener('click', function() {
            chrome.storage.local.clear();
            resetWorkspace()
        }, false);
    }
}

function resetWorkspace(){
    
    let qeue_workspace = document.getElementById('reset_workspace').value;
    const api_url = `https://us-central1-test-d36a6.cloudfunctions.net/qeue_reset_workspace?qeue_workspace=${qeue_workspace}`;
    
    async function reset (){
        const response = await fetch(api_url);
        const data = await response.json();
        refreshDashboard(data)
    }

    reset();

}

function refreshDashboard(content){

    var table_controller = document.getElementById("table_controller");
    table_controller.innerHTML = "";

    let info_areas = content.info_areas
    document.getElementById('inputcode').style.display = "none";
    document.getElementById('maintitle').innerHTML = content.workspace_name;  
    
    for (var i = 0; i < info_areas.length; i++){
        area = info_areas[i].name_area
        status = info_areas[i].status
        workspace = content.workspace_name
        letter = info_areas[i].letter;
        debugger;
        var row = table_controller.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = letter;
        var button = null;
        button = document.createElement('BUTTON');
        button.classList = 'btn-table btn bg-wapp w-100';
        button.innerHTML = `${area}+1`;
        button.id = area;
        button.addEventListener('click', () => plusOne(workspace, area));
        // button.onclick = () => plusOne(workspace, area);
        console.log(button);
        cell2.appendChild(button);
        cell3.innerHTML = status;
    }
}
