const typeDefs = `
    type User{
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book{
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Auth{
        token: String
        user: User
    }
    input saveBookInput{
        authors: [String]!
        description: String!
        title: String!
        bookId: ID!
        image: String
        link: String
    }
    type Query{
        me(_id: ID, username: String): User
    }
    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: saveBookInput!): User
        removeBook(bookId: ID): User
    }
`;
module.exports = typeDefs;
