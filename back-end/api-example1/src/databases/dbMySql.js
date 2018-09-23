import mysql from 'mysql';
let con = mysql.createConnection({
    port: 3306,
    ssl: {
        // DO NOT DO THIS
        // set up your ca correctly to trust the connection
        rejectUnauthorized: false
    },
    user: 'root',
    password: 'Abc12345',
    database: 'react_native_ex1'
});
let dbMysql = new Promise((resolve,reject)=>{
    con.connect( (err) =>{
        if(err) { 
            reject(new Error('NOT_CONNECTED_DATABASE'));
        } else {
            resolve(con)
        }
    })
})
export default dbMysql;