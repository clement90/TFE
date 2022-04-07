module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'mysql'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'clement'),
        password: env('DATABASE_PASSWORD', 'Guitar2013Lp'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
