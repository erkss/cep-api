module.exports = {

  development: {
    client: 'banco de dados',
    connection: {
      server: 'localhost',
      password: 'senha do banco de dados',
      user: 'nome do user',
      database: 'master'
    },
    
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/databaseKnex/migrations`
    }
  }
};