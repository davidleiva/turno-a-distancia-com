
const request = require("request-promise");
exports.qeue_number = (req, res) => {

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
    let in_the_qeue = item.records[0].fields.in_the_qeue;
    let in_the_qeuePlusone = in_the_qeue + 1

    var customBody = {"records":[
        {
          "id":record_id,
        "fields": {
          "in_the_qeue":in_the_qeuePlusone
        }
      }]}

      const options = {
        url: "https://api.airtable.com/v0/appYBkvMYtxoqvgjn/board",
        method: 'PATCH',
        headers: {'Content-Type': 'application/json','Authorization': 'Bearer keyA52yfS8H7shplX'},
        body:JSON.stringify(customBody)
       };
    return request(options);
}).then(result => {
    const item = JSON.parse(result);
    let number = item.records[0].fields.in_the_qeue;
    let letter = item.records[0].fields.area_table[0];

    let payload = {}
    
    payload.success = true;
    payload.qeue_letter_number = `${letter}${number}`
    
    
    
    res.status(200).send(payload);


}).catch(err => {
    console.log(err);
  }
);
  
  
};