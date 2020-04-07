import getkey from ".././keys"

const axios = require("axios");

const Corona=axios.create({
    "method":"GET",
    "url":"https://covid-19-data.p.rapidapi.com/totals",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
    "x-rapidapi-key":getkey()
    },"params":{
    "format":"undefined"
    }
    })

export const IndiaAPI= axios.create({
    "method":"GET",
    "url":"https://corona-virus-world-and-india-data.p.rapidapi.com/api_india",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"corona-virus-world-and-india-data.p.rapidapi.com",
    "x-rapidapi-key":getkey()
    }
    })

export const world =axios.create({
    "method":"GET",
    "url":"https://corona-virus-world-and-india-data.p.rapidapi.com/api",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"corona-virus-world-and-india-data.p.rapidapi.com",
    "x-rapidapi-key":getkey()
    }
    })

export default Corona