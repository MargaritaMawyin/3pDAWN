var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const dispositivop = require('../models/dispositivop.js');


const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
const wearable = require('../models/wearable.js');
var models = initModels(sequelize);

/* GET home page. */
router.get('/', function (req, res, next) {
    models.dispositivop.findAll({ 
        include:{
            model: models.wearable,
            as:'wearables'
        }
    })
        .then(dispositivos => {
            res.json(dispositivos);
        })
        .catch(error => res.status(400).send(error))
})

router.get('/id/:id', function (req, res, next) {
    models.dispositivop.findOne({
        where: { 
            idD: req.params.id
          }
    })
        .then(dispositivos => {
            res.json(dispositivos );
        })
        .catch(error => res.status(400).send(error))
})

module.exports = router;
