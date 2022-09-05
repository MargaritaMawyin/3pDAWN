const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dispositivop', {
    idD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    marca: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    modelo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tamanio: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    touch: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    numDispositivosEnlazados: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    src: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dispositivop',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idD" },
        ]
      },
    ]
  });
};
