import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class WeekDay extends Model<InferAttributes<WeekDay>, InferCreationAttributes<WeekDay>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date>;

    static associate(models: any) {
        WeekDay.belongsToMany(models.WeekDay,
            { through: 'class_schedule_week_days' }
        )
    }
}

WeekDay.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
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
    tableName: "weekdays",
    timestamps: true,
    underscored: true,
    paranoid: true,
})

export default WeekDay;
