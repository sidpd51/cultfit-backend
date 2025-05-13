import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class ClassTypes extends Model<InferAttributes<ClassTypes>, InferCreationAttributes<ClassTypes>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare description: CreationOptional<Text>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date>;

    static associate(models: any) {
        ClassTypes.hasMany(models.class_schedules);
    }
}


ClassTypes.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
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
    tableName: "class_types",
    timestamps: true,
    underscored: true,
    paranoid: true,
})

export default ClassTypes;
