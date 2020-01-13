// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./dev.sqlite3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  // needed when using foreign keys
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run("PRAGMA foreign_keys = ON", done);
    }
  }
};
// staging: {
//   client: "postgresql",
//   connection: {
//     database: "my_db",
//     user: "username",
//     password: "password"
//   },
//   pool: {
//     min: 2,
//     max: 10
//   },
//   migrations: {
//     tableName: "knex_migrations"
//   }
// },

// production: {
//   client: "postgresql",
//   connection: {
//     database: "my_db",
//     user: "username",
//     password: "password"
//   },
//   pool: {
//     min: 2,
//     max: 10
//   },
//   migrations: {
//     tableName: "knex_migrations"
//   }
//   }
// };
