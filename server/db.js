const Pool=require('pg').Pool;

// const pool=new Pool({
//   user: "postgres",
//   password: "123456",
//   host: "localhost",
//   port: 5432,
//   database: "healthcare"
// });

const pool=new Pool({
  user: "postgres",
  password: "HOTD-019105ndr",
  //   user: "postgres",
  // password: "admin",
  host: "localhost",
  port: 5432,
  database: "healthcare"
});

module.exports=pool;