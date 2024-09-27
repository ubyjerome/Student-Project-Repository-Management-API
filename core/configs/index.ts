require("dotenv").config();
const configuration = {
  project: {
    name: process.env.PROJECT_NAME,
    port: process.env.PORT,
    JWT:{
      key:process.env.JWT_KEY || "admin",
      duration:{
        short:process.env.JWT_DURATION_SHORT || "5m",
        medium:process.env.JWT_DURATION_MEDIUM || "15m",
        long:process.env.JWT_DURATION_LONG || "1h",
      }
    }
  },
  mongoUrl: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URL}`,
  mail: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
    port: process.env.MAIL_PORT,
  },
  sec: {
    // bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS)
    bcryptRounds: 10
  },
  firebase: {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID,
    measurementId: process.env.FB_MEASUREMENT_ID,
  },
  superAdmin:{
    email:process.env.SUADMIN_EMAIL || "admin@email.com",
    password:process.env.SUADMIN_PASS || "admin",
    firstName:process.env.SUADMIN_FNAME || "super",
    lastName:process.env.SUADMIN_LNAME || "admin",
    phoneNumber:process.env.SUADMIN_PHONE || "1234567890",
  }
};
export const Configs = configuration;
