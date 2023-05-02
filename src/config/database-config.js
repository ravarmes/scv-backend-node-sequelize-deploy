
/*
// Configuração do bando de dados no ambiente de teste
export const databaseConfig = {
  dialect: 'sqlite',
  storage: 'database.sqlite',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  }
};
*/

/*
// Configuração do bando de dados no ambiente de desenvolvimento
export const databaseConfig = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'scv-backend-node-sequelize',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  },
};
*/


// Configuração do bando de dados no ambiente de produção
export const databaseConfig = {
  dialect: 'postgres',
  host: 'dpg-cglocp87oslael4n1oq0-a.oregon-postgres.render.com',
  username: 'scv_backend_node_sequelize_deploy_user',
  password: 'nVn7xdMp5QHiE0AlhlI06RXwUpwkCE8a',
  database: 'scv_backend_node_sequelize_deploy',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  },
  dialectOptions: {
    ssl: true
  }
};