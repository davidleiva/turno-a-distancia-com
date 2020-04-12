
const request = require('request');


exports.qeue_status = (req, res) => {
        
let qeue_letter_number = req.query.qeue_letter_number //"A3";
let qeue_workspace = req.query.qeue_workspace;

checkStatusAreas(qeue_workspace, qeue_letter_number)



function checkStatusAreas(workspace, letter_number){
    const options = {
    url: `https://api.airtable.com/v0/appYBkvMYtxoqvgjn/workspaces?filterByFormula=FIND("${workspace}",code_workspace)`,
    method: 'GET',
    headers: {'Content-Type': 'application/json','Authorization': 'Bearer <AIRTABLE API KEY>'},
    
   };

request(options, function(err, resp, body) {
  
  var workspaceStatus = JSON.parse(body)
  var statusAreas = workspaceStatus.records[0].fields.areas_status
  
  returnStatus(statusAreas, letter_number)
});
}

function returnStatus (status, letter_number){
    
    
    let arrletter = letter_number.split("")
    let letter = arrletter[0]
    
    let statusdisplay = '';

    for (var i = 0; i < status.length; i++){
          console.log([i],status[i])  
        if (status[i].includes(letter)){
            statusdisplay += ` \n *${status[i]}*`
        } else {
            statusdisplay += ` \n ${status[i]}`
        }
    
    }
    let payload = {}
    payload.status = status;
    payload.letter_number = letter_number
    payload.success = true;
    payload.qeue_status = statusdisplay


  
  res.status(200).send(payload);
  };

};