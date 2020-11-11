const db = require("../dbConfig");

// HTTP get() request
const find = () => {
    return db("movies");
}

// HTTP put() request
const add = (event) => {
    return db("movies").insert(event);
} 

// HTTP put() request
const update = (id, event) => {
    return db("movies").where({id}).first().update(event)
}

// HTTP delete() request
const remove = (id) => {
    return db("movies")
    .where({id}).delete()
}

module.exports  = {
    add, 
    find,
    update, 
    remove
}