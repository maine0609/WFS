module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
      profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false
      },
      place_of_birth: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false
      },
      education: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
    return Profile;
  };