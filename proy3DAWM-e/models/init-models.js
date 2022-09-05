var DataTypes = require("sequelize").DataTypes;
var _dispositivop = require("./dispositivop");
var _sequelizemeta = require("./sequelizemeta");
var _wearable = require("./wearable");

function initModels(sequelize) {
  var dispositivop = _dispositivop(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  var wearable = _wearable(sequelize, DataTypes);

  wearable.belongsTo(dispositivop, { as: "idD_dispositivop", foreignKey: "idD"});
  dispositivop.hasMany(wearable, { as: "wearables", foreignKey: "idD"});

  return {
    dispositivop,
    sequelizemeta,
    wearable,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
