import mysql, {Connection,MysqlError} from 'mysql';

const configConnect = {
    host: 'localhost',
    port: 3306,
    ssl: {
        // DO NOT DO THIS
        // set up your ca correctly to trust the connection
        rejectUnauthorized: false
    },
    user: 'root',
    password: '123456',
    database: 'example1'
}
const connect = mysql.createConnection(configConnect);

let dbMySql = new Promise<Connection>((resolve, reject) => {
    connect.connect((err: MysqlError) => {
        if (err) {
            reject(err)
        }
        resolve(connect);
    })
})
export default dbMySql;