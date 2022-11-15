/** 
 * @author:Prathmesh Pawar
 * @type:request query
 * @descreption:getting run time
 * @date:15-11-2022
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('fname: '+req.query.fname+' lname: '+req.query.lname)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
