

const request = require("request-promise");
exports.qeue_controller = (req, res) => {

    let queue_workspace = req.query.queue_workspace;
    let qeue_area = req.query.qeue_area;
    let qeueCheck = [];
    qeueCheck.push(qeue_area)

Promise.all(
    qeueCheck.map((x) => {
    const options = {
        url: `https://api.airtable.com/v0/appYBkvMYtxoqvgjn/board?filterByFormula=AND(FIND("${queue_workspace}",workspace_name),FIND("${qeue_area}",area_name))`,
        method: 'GET',
        headers: {'Content-Type': 'application/json','Authorization': 'Bearer <AIRTABLE API KEY>'},
        
       };
    return request(options);
  })
).then(result => {
    const item = JSON.parse(result[0]);
    let record_id = item.records[0].id
    let status_to_update = item.records[0].fields.status_to_update;
    let status_to_updatePlusone = status_to_update + 1

    var customBody = {"records":[
        {
          "id":record_id,
        "fields": {
          "status_to_update":status_to_updatePlusone
        }
      }]}

      const options = {
        url: "https://api.airtable.com/v0/appYBkvMYtxoqvgjn/board",
        method: 'PATCH',
        headers: {'Content-Type': 'application/json','Authorization': 'Bearer keyA52yfS8H7shplX'},
        body:JSON.stringify(customBody)
       };
    return request(options);
}).then(() => {
    
  const options = {
    url: `https://api.airtable.com/v0/appYBkvMYtxoqvgjn/workspaces?filterByFormula=FIND("${queue_workspace}",code_workspace)`,
    method: 'GET',
    headers: {'Content-Type': 'application/json','Authorization': 'Bearer keyA52yfS8H7shplX'},
   };
    return request(options);
  }).then(result => {
    
    var workspaceStatus = JSON.parse(result)
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
    

}).catch(err => {
    console.log(err);
  }
);
  
  
};