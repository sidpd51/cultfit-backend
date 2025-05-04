import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare email: string;
    declare phoneNumber?: string;
    declare password: string;
    declare strikeCount: CreationOptional<number>;
    declare noStrikeCount: CreationOptional<number>;
    declare bannedUntil: CreationOptional<Date>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date>;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            is: /^\+?[1-9]\d{1,14}$/
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    strikeCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    noStrikeCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    bannedUntil: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    }
}, {
    sequelize: sequelize,
    tableName: "users",
    timestamps: true,
    underscored: true,
    paranoid: true,
})

export default User;