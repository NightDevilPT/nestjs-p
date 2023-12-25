module.exports = {
	type: 'PostgreSQL 16',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: '8399',
	database: 'NestCURD',
	entities: ['dist/**/*.entity.js'], // Adjust the path to your entity files
	synchronize: true, // Auto-create database tables (use false in production)
  };
  