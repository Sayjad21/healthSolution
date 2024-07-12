const Pool=require('pg').Pool;
const pool=new Pool({
    user: "postgres",
  password: "HOTD-019105ndr",
  host: "localhost",
  port: 5432,
  database: "healthcare"
});

module.exports=pool;