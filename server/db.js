const Pool=require('pg').Pool;

//sayjad
const pool=new Pool({
  user: "postgres",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "healthcare"
});

// const pool=new Pool({
//   user: "postgres",
//   password: "HOTD-019105ndr",
//   host: "localhost",
//   port: 5432,
//   database: "healthcare"
// });

module.exports=pool;