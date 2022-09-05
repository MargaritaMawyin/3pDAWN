const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wearable', {
    idW: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idD: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dispositivop',
        key: 'idD'
      }
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    marca: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    modelo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    touch: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    enlazado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    src: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wearable',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idW" },
        ]
      },
      {
        name: "idD",
        using: "BTREE",
        fields: [
          { name: "idD" },
        ]
      },
    ]
  });
};
