const express = require('express');
const {Router} = require(express);
const getCharById = require("../controllers/getCharById");
const login = require('../controllers/login');



Router.get("/character/:id", getCharById);
Router.get("/login", login);

module.exports = router;