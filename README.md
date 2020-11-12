## Project Overview

[Trello Board](https://trello.com/b/tXisUcW0/balto-movie-app)

# API

#### Backend delpoyed at [Heroku](https://tranquil-meadow-07587.herokuapp.com/) <br>

## Getting Started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm run server** to start the local server

### Backend Framework

- Express for flexibility, simple routing
- pg for data persistence
- Helmet for security
- Cors for cross browser compatibility
- Knex.js for communicating with postgreSQl database

## Endpoints

#### Movies Routes

| Method | Endpoint  | Access Control | Description                       |
| ------ | --------- | -------------- | --------------------------------- |
| GET    | `/get`    | all users      | Returns list of all movies.       |
| Put    | `/put`    | all users      | Edits the information of a movie. |
| POST   | `/post`   | all users      | Creates a new movie.              |
| Delete | `/delete` | all users      | Delete an existing movie.         |

## Data Model

##### EXPECTS

```JSON
{
    "release_year": 2000,
    "title": "X-Man",
    "origin": "Toronto",
    "director": "Bryan Singer",
    "cast": "Hugh Jackman, Ian McKellen, Famke Janssen, James Marsden",
    "wiki_page": "https://en.wikipedia.org/wiki/X-Men_(film)",
    "plot": "In the early 1960s, during the height of the Cold War, a mutant named Charles Xavier (James McAvoy) meets a fellow mutant named Erik Lehnsherr (Michael Fassbender). Despite their vastly different backgrounds"
}
```

##### RETURNS

```JSON
{
    "release_year": 2000,
    "title": "X-Man",
    "origin": "Toronto",
    "director": "Bryan Singer",
    "cast": "Hugh Jackman, Ian McKellen, Famke Janssen, James Marsden",
    "wiki_page": "https://en.wikipedia.org/wiki/X-Men_(film)",
    "plot": "In the early 1960s, during the height of the Cold War, a mutant named Charles Xavier (James McAvoy) meets a fellow mutant named Erik Lehnsherr (Michael Fassbender). Despite their vastly different backgrounds"
}
```

#### SEEDED TABLE && RESOURCES

| csv          |
| ------------ |
| release_year |
| title        |
| origin       |
| director     |
| cast         |
| genre        |
| wiki_page    |
| plot         |

https://dev.to/isalevine/parsing-csv-files-in-node-js-with-fs-createreadstream-and-csv-parser-koi
https://stackoverflow.com/questions/51039185/fs-createreadstream-is-not-finding-file
https://www.npmjs.com/package/csv-parser

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

\_ NODE_ENV - Notates the enviroment for the server to run on. Options include 'testing', 'development', and 'production'. Auto defaults to development.

\_ DB_DEV - Notates the postgres database URL for local development.

\_DATABASE_URL - when migrating to production with Heroku, an environment variable becomes available to you called DATABASE_URL

Heroku, an environment variable becomes available to you called DATABASE_URL

## Documentation

See [Frontend Documentation](https://github.com/noahfranco/Balto-Movies-FE) for details on the frontend of our project.
