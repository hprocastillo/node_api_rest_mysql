import {config} from "dotenv";

config();

console.log(process.env.PORT);
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_DATABASE);

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || '194.62.98.26';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || 'hpro';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'H.arrison82';
export const DB_DATABASE = process.env.DB_DATABASE || 'cyber';

