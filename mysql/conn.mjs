// 커넥션 저장 파일.

import dotenv from 'dotenv';

dotenv.config({path: 'mysql/.env'});  //yarn and dotenv

export default {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password:process.env.PASSWORD,
    database: process.env.DATABASE,
  };