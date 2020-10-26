/*
    服务器配置

    启动服务器
    node server.js

    http://localhost:3001
 */

 const express = require('express')

 const app = express();

 app.use(express.static('build',{maxAge:1000*3600}));

 app.listen(3001);