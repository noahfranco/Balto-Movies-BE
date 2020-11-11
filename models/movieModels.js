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

// HTTP delete() request

module.exports  = {
    add, 
    find
}