const http = require("http");
const getCharById = require("./controllers/getCharById");
const express = require('express');


http.createServer((req,res) =>{
    const url = req.url;
    res.setHeader('Access-Control-Allow-Origin', '*');

    
    if(url.includes("/rickandmorty/character")){
        const id = extractIdFromUrl(url);

        getCharById(res, id);
        
        let controller = new getCharById(res, id);
        controller(); 
    }
  
}).listen(3001,"localHost");

function extractIdFromUrl(url) {
    const parts = url.split("/");
    return parts[parts.length - 1];
}
