module.exports = (sequelize, DataTypes) => {
    const Hobby = sequelize.define('Hobby', {
      hobby_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      profile_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      hobby_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Hobby;
  };
  