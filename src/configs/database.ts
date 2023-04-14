import { SequelizeModuleOptions } from "@nestjs/sequelize";
import { Image } from "src/models/image.model";

const config: SequelizeModuleOptions = {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    models: [
        Image
    ],
  }

export default config;
