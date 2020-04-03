const axios = require("axios");

const Corona=axios.create({
    "method":"GET",
    "url":"https://covid-19-data.p.rapidapi.com/totals",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
    "x-rapidapi-key":"c130f1c0cdmsh0a99e57f104ddbcp1fee5djsne945825c4bb2"
    },"params":{
    "format":"undefined"
    }
    })
    // .then((response)=>{
    //   const data=response.data
    // })
    // .catch((error)=>{
    //   console.log(error)
    // })

export default Corona