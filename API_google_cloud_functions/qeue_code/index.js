const request = require('request');

exports.qeue_code = (req, res) => {
    let qeue_code = req.query.qeue_code;
    
    

    getAreas(qeue_code)

    function getAreas(code){
        const options = {
        url: `https://api.airtable.com/v0/appYBkvMYtxoqvgjn/workspaces?filterByFormula=FIND("${code}",code_workspace)`,
        method: 'GET',
        headers: {'Content-Type': 'application/json','Authorization': 'Bearer <AIRTABLE API KEY>'},
        
       };
    
    request(options, function(err, resp, body) {
      
      var workspaceResponse = JSON.parse(body)
      var results = workspaceResponse.records.length
      if(results == 1){
        var workspaceAreas = workspaceResponse.records[0].fields.list_areas
        returnAreas(workspaceAreas)
      }
      res.status(200).send({"success":false, "erro":"no code"});
    });
    }

  function returnAreas(workspaceAreas){

    let payload = {};

    payload.success = true;
    payload.qeue_areas = workspaceAreas
    payload.qeue_code = qeue_code

    res.status(200).send(payload);
  }
  
  
};