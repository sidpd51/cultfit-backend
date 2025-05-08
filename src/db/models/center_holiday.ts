import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";
import Center from "./center";

class CenterHoliday extends Model<InferAttributes<CenterHoliday>, InferCreationAttributes<CenterHoliday>> {
    declare id: CreationOptional<number>;
    declare centerId: number;
    declare holidayDate: Date;
    declare reason: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date>;

    static associate(models: any) {
        CenterHoliday.belongsTo(Center, {
            foreignKey: 'centerId',
            as: 'center'
        })
    }
}

CenterHoliday.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    centerId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'centers',
            key: 'id'
        }
    },
    holidayDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    reason: {
        type: DataTypes.TEXT,
        allowNull: false
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
    tableName: "center_holidays",
    timestamps: true,
    underscored: true,
    paranoid: true,
});



export default CenterHoliday;