export default {
  env: process.env.NODE_ENV || 'production',

  // Server port
  port: process.env.PORT || 8080,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Application database
  db: process.env.DB || 'mongodb://admin:6f91e5df-4d10-466b-ba8f-03b12c8868bf@ds153732.mlab.com:53732/buddyfinder',
}
