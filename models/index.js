const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Profile = require('./profile')(sequelize, Sequelize);
db.Skill = require('./skill')(sequelize, Sequelize);
db.Project = require('./project')(sequelize, Sequelize);
db.WorkExperience = require('./work_experience')(sequelize, Sequelize);
db.Hobby = require('./hobby')(sequelize, Sequelize);
db.Goal = require('./goal')(sequelize, Sequelize);

// Define relationships
db.User.hasOne(db.Profile, { foreignKey: 'profile_id' });
db.Profile.belongsTo(db.User, { foreignKey: 'profile_id' });

db.Profile.hasMany(db.Skill, { foreignKey: 'profile_id' });
db.Profile.hasMany(db.Project, { foreignKey: 'profile_id' });
db.Profile.hasMany(db.WorkExperience, { foreignKey: 'profile_id' });
db.Profile.hasMany(db.Hobby, { foreignKey: 'profile_id' });
db.Profile.hasMany(db.Goal, { foreignKey: 'profile_id' });

module.exports = db;
