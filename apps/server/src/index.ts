import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Repository {
    description: String
  }

 
  type Query {
    repository: Repository
  }
`;

const repository = {
    description: 'Hello world',
}

const resolvers = {
    Query: {
      repository: () => repository,
    },
  };


  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
startStandaloneServer(server, {
    listen: { port: 4000 },
  }).then(({url})=> {
    console.log(`🚀  Server ready at: ${url}`);
}) 
  