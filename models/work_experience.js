module.exports = (sequelize, DataTypes) => {
    const WorkExperience = sequelize.define('WorkExperience', {
      work_experience_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      profile_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      company_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: true
      }
    });
    return WorkExperience;
  };
  