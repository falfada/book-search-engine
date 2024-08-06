const typeDefs = `
type User{
_id: ID
username: String
email: String
bookCount: Int
}
type Query{
me: [User]
}
`;
module.exports = typeDefs;
