module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define('Skill', {
      skill_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      profile_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      skill_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Skill;
  };
  