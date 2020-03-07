import {Sequelize, Model, DataTypes, BuildOptions} from "sequelize";
import {database} from "../config/database";

export interface NodeInterface {
    name: string;
    serial: number;
    uuid: number;
}

export class Node extends Model {
    public id!: number;
    public name!: string;
    public serial!: number;
    public uuid!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Node.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        serial: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        uuid: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },

    },
    {
        tableName: "nodes",
        sequelize: database // this bit is important
    }
);

Node.sync({force: true}).then(() => console.log("Node table created"));
