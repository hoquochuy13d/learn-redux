import mysql from 'mysql';
let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abc12345',
    // database: 'react_native_ex1'
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