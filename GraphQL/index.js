const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Define el esquema
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    age: Int
  }

  type Query {
    getUser(id: ID!): User
    getAllUsers: [User]
    getLongestNameUser: User
  }
`);

// Datos para el ejemplo
const users = [
  { id: '1', name: 'Maria', age: 15 },
  { id: '2', name: 'Ricardo', age: 20 },
  { id: '3', name: 'Maria Jose', age: 35 },
];

const root = {
  getUser: ({ id }) => users.find(user => user.id === id),
  getAllUsers: () => users,
  getLongestNameUser: () => {
    if (users.length===0) return null;
    // Encuentra el usuario con el nombre más largo
    return users.reduce((longest, currentUser) => {
      return currentUser.name.length > longest.name.length ? currentUser : longest;
    }, users[0]);
  }
};

// Configuraciones
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,  // Habilita GraphiQL
}));

// Servidor
app.listen(4000, () => {
  console.log('Servidor GraphQL ejecutándose en http://localhost:4000/graphql');
});
