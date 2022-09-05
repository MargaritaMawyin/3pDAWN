var express = require('express');
var router = express.Router();


const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

const { Sequelize, Op } = require('sequelize');
const wearable = require('../models/wearable.js');
const dispositivop = require('../models/dispositivop.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    models.wearable.findAll({
        // include : {
        //     model: models.dispositivop,
        //     as:'idD_dispositivop'
        // }
    })
        .then(wearables => {
            res.json(wearables );
        })
        .catch(error => res.status(400).send(error))
})
router.get('/id/:id', function (req, res, next) {
    models.wearable.findOne({
        where: { 
            idW: req.params.id
          }
    })
        .then(wearables => {
            res.json(wearables );
        })
        .catch(error => res.status(400).send(error))
})


module.exports = router;
