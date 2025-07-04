import { Sequelize } from "sequelize";
import config from "../config/env.js";

export const sequelize = new Sequelize(
    config.DB_DATABASE,
    config.DB_USER,
    config.DB_PASSWORD,
    {
        host: config.DB_HOST,
        dialect: config.DB_DIALECT,
        logging: console.log(), // Puedes cambiar esto a false para desactivar los logs de SQL
        dialectOptions: config.DB_USE_SSL === 'true' ? {
            ssl: {
                require: true,
                rejectUnauthorized: false // Esto es importante si estás usando un certificado autofirmado
            },

        }
        : {},
    }
);