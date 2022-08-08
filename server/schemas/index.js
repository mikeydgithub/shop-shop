// index page for schemas and all the files inside of the schema folder

// setup constants for js files in schemas folder
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// export both resolvers and type definitions
module.exports = { typeDefs, resolvers };
