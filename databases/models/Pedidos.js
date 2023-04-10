const { TEXT } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    const Pedidos = sequelize.define()
    'Pedidos', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        obs:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        total:{
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        data:{
            type: DataTypes.DATE,
            allowNull: false
        },
        form_pagamento_id:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        tableName:'pedidos',
        timestamp: false
    }
    return Pedidos;
}