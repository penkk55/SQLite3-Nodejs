console.log('aaa')


const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./chinook.db');
// const db = new sqlite3.Database(':memory:');
const db = new sqlite3.Database('./db_1.db');
const queryModel = require('./query')
const table = require('./tables')
console.log(table)

db.serialize(() => {
  db.run(`CREATE TABLE ${table.code} (FCCODE TEXT, FCNAME TEXT, FCSKID TEXT, FCCORP TEXT)`);
  db.run(`CREATE TABLE ${table.corp}  (FCCODE TEXT, FCNAME TEXT, FCSKID TEXT) `);
  db.run(`CREATE TABLE ${table.product} (FCCODE TEXT, FCNAME TEXT, FCCORP TEXT, FCCOOR TEXT, FNQTY REAL(10,2))`);

  //TABLE CODE----------------------------------------------------------------------------------------------------
  const stmt_code = db.prepare(`INSERT INTO ${table.code} (FCCODE) VALUES (?)`);
  // for (let i = 0; i < 10; i++) {
  stmt_code.run(`51-01824`);
  stmt_code.run(`006951-1`);
  stmt_code.run(`Q00004`);
  stmt_code.run(`SR2-00190`);
  stmt_code.run(`ST-0002`);
  // }
  stmt_code.finalize();

  //TABLE CROP----------------------------------------------------------------------------------------------------
  const stmt_corp = db.prepare(`INSERT INTO ${table.corp} (FCCODE) VALUES (?)`);
  for (let i = 0; i < 10; i++) {
    stmt_corp.run(`Ipsum_corp ${i}`);
  }
  stmt_corp.finalize()
  //TABLE PRODUCT----------------------------------------------------------------------------------------------------
  const stmt_product = db.prepare(`INSERT INTO ${table.product} (FCCODE,FNQTY) VALUES (?,?)`);
  for (let i = 0; i < 10; i++) {
    stmt_product.run(`Ipsum_product ${i}`, i + 0.321);
  }
  stmt_product.finalize()
  db.each(queryModel.select_code(), (err, row) => {
    // console.log(row.id + ": " + row.FCCODE);
    console.log(row);
  });
  db.each(queryModel.select_corp(), (err, row) => {
    // console.log(row.id + ": " + row.FCCODE);
    console.log(row);
  });
  db.each(queryModel.select_product(), (err, row) => {
    // console.log(row.id + ": " + row.FCCODE);
    console.log(row);
  });
});

db.close();