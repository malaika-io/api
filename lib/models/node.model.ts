import {Sequelize, Model, DataTypes, BuildOptions} from "sequelize";
import {database} from "../config/database";

export interface NodeInterface {
    name: string;
}

export class Node extends Model {
    public id!: number;
    public name!: string;
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
        }
    },
    {
        tableName: "nodes",
        sequelize: database // this bit is important
    }
);

Node.sync({force: true}).then(() => console.log("Node table created"));
