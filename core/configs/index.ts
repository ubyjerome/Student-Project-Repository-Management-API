require("dotenv").config();

const configuration = {
  project:{name:process.env.PROJECT_NAME},
  port: process.env.PORT,
  mongoUrl: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URL}/?retryWrites=true&w=majority`,
  mail: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
    port: process.env.MAIL_PORT,
  },
};

export const Configs = configuration;