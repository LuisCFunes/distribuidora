import {createPool} from 'mysql2/promise';

export const pool = new createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'distribuidor_proyecto',
    port: 3306
})