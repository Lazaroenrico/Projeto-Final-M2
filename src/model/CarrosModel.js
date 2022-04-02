import Sequelize from 'sequelize'
import { connection } from '../database/connection.js'

export const carro2 = connection.define( 'carro2',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false, // não pertimite nulo
        primaryKey: true,
        autoIncrement: true, //gera altomaticamente

    },
    img: {
        type: Sequelize.STRING,
        allowNull: false, //nulo

    },
    modelo: {
        type: Sequelize.STRING,
        allowNull: false, //nulo

    },
    ano: {
        type: Sequelize.INTEGER,
        allowNull: false, //nulo

    },
    tanque: {
        type: Sequelize.STRING,
        allowNull: false, //nulo

    },
    autonomia:{
        type: Sequelize.STRING,
        allowNull: false, //nulo

    },
    fabricante:{
        type: Sequelize.STRING,
        allowNull: false, //nulo

    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timetamps: false,
}
)