import {Sequelize} from "sequelize";

export const database = new Sequelize('malaika', 'root', 'Lyna2009', {
    host: 'localhost',
    dialect: 'mysql'
});
