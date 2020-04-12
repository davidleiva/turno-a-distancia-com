
const request = require('request');


exports.load_workspace = (req, res) => {
        
let qeue_workspace = req.query.qeue_workspace;

load_workspace(qeue_workspace)


function load_workspace(workspace){
    const options = {
    url: `https://api.airtable.com/v0/appYBkvMYtxoqvgjn/workspaces?filterByFormula=FIND("${workspace}",code_workspace)`,
    method: 'GET',
    headers: {'Content-Type': 'application/json','Authorization': 'Bearer <AIRTABLE API KEY>'},
   };

request(options, function(err, resp, body) {
  
    var workspaceStatus = JSON.parse(body)
    var recordsAreas = workspaceStatus.records[0].fields
    
    
    var list_areas = recordsAreas.list_areas
    var areas_status = recordsAreas.areas_status
    var code_workspace = recordsAreas.code_workspace


    let payload = {}

    payload.code_workspace = code_workspace
    payload.workspace_name = recordsAreas.workspace_name
    payload.info_areas = []

    

    for (var i =0; i < list_areas.length; i++){
        info = {}
        let letter = areas_status[i].split("")
        info.letter = letter[0];
        info.name_area = list_areas[i];
        info.status = areas_status[i];

        payload.info_areas.push(info)
    }


  res.status(200).send(payload);

});
}

};