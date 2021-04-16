const createConnection = require('mysql').createConnection;

export const Connection = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'C-24maikrupa',
});
