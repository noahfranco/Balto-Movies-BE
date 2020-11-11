exports.up = function(knex) {
    return knex.schema.createTable("movies", tbl => {
      tbl.increments();
        
      tbl.integer("release_year").notNullable();
      tbl.string("title").notNullable();
      tbl.string("origin").notNullable();
      tbl.string("director");
      tbl.string("cast");
      tbl.string("wiki_page");
      tbl.string("plot"); 
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("movies");
  };
