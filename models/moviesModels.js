const db = require("../dbConfig");

// HTTP get() request
const find = () => {
    return db("flashcards");
}

// HTTP put() request
const add = (qa) => {
    return db("flashcards").insert(qa);
} 

module.exports  = {
    add, 
    find
}