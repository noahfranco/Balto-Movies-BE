
const fs = require("fs");
const csv = require("csv-parser");
const data = [];
const path = require("path")

const filePath = path.join(__dirname, "movie_plots.csv")

const stringFs = fs.createReadStream(filePath);

  stringFs.pipe(
    csv(
      [
        "release_year",
        "title",
        "origin",
        "director",
        "cast",
        "genre",
        "wiki_page",
        "plot",
      ],
      {
        // remove white space
        trim: true,
      }
    )
  ).on("data", function (row) {
    const movie = {
      ...row,
    };
    data.push(movie);
  }).on("end", function () {
    console.log({data})
  })

  stringFs.on('error', function (error) {console.log("Caught", error);});


exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("movies")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("movies").insert(data);
    });
};
