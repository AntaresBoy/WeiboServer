/**
 * @description 存储配置
 * @author AntaresLpq
 */

const { isProd } = require('../utils/env')

let REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
}
 
let MYSQL_CONF = {
    host: '39.108.119.239',
    user: 'root',
    password: 'lpq',
    port: '3306',
    database: 'Weibo'
}
 
if (isProd) {
    REDIS_CONF = {
        // 线上的 redis 配置
        port: 6379,
        host: '127.0.0.1'
    }
    MYSQL_CONF = {
        // 线上的 mysql 配置
        host: '39.108.119.239',
        user: 'root',
        password: 'lpq',
        port: '3306',
        database: 'Weibo'
    }
}
 
module.exports = {
    REDIS_CONF,
    MYSQL_CONF
}
 