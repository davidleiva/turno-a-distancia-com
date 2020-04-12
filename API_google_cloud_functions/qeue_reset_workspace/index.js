

const request = require("request-promise");
exports.qeue_reset_workspace = (req, res) => {

    let qeue_workspace = req.query.qeue_workspace;
    getAreas(qeue_workspace)
    
    

function getAreas(workspace){
        const options = {
        url: `https://api.airtable.com/v0/appYBkvMYtxoqvgjn/board?filterByFormula=FIND("${workspace}",workspace_name)`,
        method: 'GET',
        headers: {'Content-Type': 'application/json','Authorization': 'Bearer <AIRTABLE API KEY>'},
        
       };
    
    request(options, function(err, resp, body) {
      
      var workspaceStatus = JSON.parse(body)

      var listAreas_records = []
      let records = workspaceStatus.records;
      for (var i = 0; i < records.length; i++){
        listAreas_records.push(records[i].id)
      }

      let inRecords = []

      for (var i = 0; i < listAreas_records.length; i++){
        inRecords.push({
            "id":listAreas_records[i],
          "fields": {
            "status_to_update":0,
            "in_the_qeue":0
          }})
      }

      var customBody = {"records":inRecords}
      resetAreas(customBody)

 
      
    });
}
    

function resetAreas(area_records){

        var customBody = area_records
    
          const options = {
            url: "https://api.airtable.com/v0/appYBkvMYtxoqvgjn/board",
            method: 'PATCH',
            headers: {'Content-Type': 'application/json','Authorization': 'Bearer keyA52yfS8H7shplX'},
            body:JSON.stringify(customBody)
           };
           request(options, function(err, resp, body) {
  
            var response = JSON.parse(body)
            updatedResponse()
            
            
          });
       

};

function updatedResponse(){

  const options = {
    url: `https://api.airtable.com/v0/appYBkvMYtxoqvgjn/workspaces?filterByFormula=FIND("${qeue_workspace}",code_workspace)`,
    method: 'GET',
    headers: {'Content-Type': 'application/json','Authorization': 'Bearer keyA52yfS8H7shplX'},
   };
   request(options, function(err, resp, body) {
  
    
    var workspaceStatus = JSON.parse(body)
    var recordsAreas = workspaceStatus.records[0].fields
    
    
    var list_areas = recordsAreas.list_areas
    var areas_status = recordsAreas.areas_status


    let payload = {}

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

}