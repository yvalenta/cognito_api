export default () => ({
 port: parseInt(process.env.PORT || '3000', 10),
  aws: {
    region: process.env.AWS_REGION,
    cognito: {
      userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
      clientId: process.env.AWS_COGNITO_CLIENT_ID,
      clientSecret: process.env.AWS_COGNITO_CLIENT_SECRET,
      domain: process.env.AWS_COGNITO_DOMAIN,
      issuer: `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_COGNITO_USER_POOL_ID}`,
    },
  },
  oauth: {
    callbackUrl: process.env.OAUTH_CALLBACK_URL,
    logoutUrl: process.env.OAUTH_LOGOUT_URL,
  },
  session: {
    secret: process.env.SESSION_SECRET || 'default-secret-change-in-production',
  },
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});
