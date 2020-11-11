exports.up = function(knex) {
    return knex.schema.createTable("movies", tbl => {
      tbl.increments();
        
      tbl.integer("release_year").notNullable();
      tbl.string("title", 255).notNullable();
      tbl.string("origin", 255)
      tbl.string("director", 255);
      tbl.string("cast", 255);
      tbl.string("wiki_page", 255);
      tbl.string("plot", 255); 
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("movies");
  };
