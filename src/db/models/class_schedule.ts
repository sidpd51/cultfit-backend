import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class ClassSchedule extends Model<InferAttributes<ClassSchedule>, InferCreationAttributes<ClassSchedule>> {
    declare id: CreationOptional<number>;
    declare centerId: number;
    declare classTypeId: number;
    declare isRecurring: boolean;
    declare dayOfWeek: number;
    declare startDate: Date;
    declare endDate: Date;
    declare startTime: Date;
    declare durationMinutes: number;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date>;

    static associate(models: any) {
        ClassSchedule.belongsToMany(models.WeekDay,
            { through: 'class_schedule_week_days' }
        )
    }
};

ClassSchedule.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    centerId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    classTypeId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    isRecurring: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    dayOfWeek: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    durationMinutes: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 50
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
    tableName: "class_schedules",
    timestamps: true,
    underscored: true,
    paranoid: true
});

export default ClassSchedule;