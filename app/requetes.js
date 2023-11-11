import { query } from './bdd_conection.js';


export async function get_Customer_id(id){
     return await query(`SELECT * FROM "Customer" where id=${id}`).then(
          (res) => {console.log('query performed')
                    return res},
          (err) => {console.log(err)}
          )
}

export async function get_first_name(fname){
     return await query(`SELECT * FROM "Customer" where id=${fname}`).then(
          (res) => {console.log('query performed')
                    return res.rows},
          (err) => {console.log(err)}
          )
}

export async function get_last_name(lname){
     return await query(`SELECT * FROM "Customer" where id=${lname}`).then(
          (res) => {console.log('query performed')
                    return res.rows},
          (err) => {console.log(err)}
          )
}
export async function get_city(city){
     return await query(`SELECT * FROM "Customer" where id=${city}`).then(
          (res) => {console.log('query performed')
                    return res.rows},
          (err) => {console.log(err)}
          )
}
export async function get_country(country){
     return await query(`SELECT * FROM "Customer" where id=${country}`).then(
          (res) => {console.log('query performed')
                    return res.rows},
          (err) => {console.log(err)}
          )
}
export async function get_phone(phone){
     return await query(`SELECT * FROM "Customer" where id=${phone}`).then(
          (res) => {console.log('query performed')
                    return res.rows},
          (err) => {console.log(err)}
          )
}
