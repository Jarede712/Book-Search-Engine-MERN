const typeDefs = `
    type Book {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID
        username: String
        email: String
        savedBooks: [Book]
        bookCount: Int
    }
    
    type Query {
        user(username: String!): User
    }
    
    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookId: String!): User
        removeBook(bookId: String!): User
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;
