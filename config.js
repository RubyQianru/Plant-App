const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "db4free.net",
    user: "rubyqianru",
    password: "RZcp1207",
    database: "plantdb",
    connectTimeout: 60000
  },
  listPerPage: 3,
};
module.exports = config;