module.exports = (sequelize, DataTypes) => {
    const Goal = sequelize.define('Goal', {
      goal_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      profile_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      goal_description: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
    return Goal;
  };
  