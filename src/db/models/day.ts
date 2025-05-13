import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class Day extends Model<InferAttributes<Day>, InferCreationAttributes<Day>> {
    declare id: CreationOptional<number>;
    declare name: string;
    static associate(models: any) {
        Day.belongsToMany(models.ClassSchedule, {
            through: 'day_class_schedules'
        })
    }
}

Day.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: "days",
})

export default Day;