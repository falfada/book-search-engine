import {gql} from '@apollo/client';

export const GET_ME = gql `
query singleUser($id: ID, $username: String) {
  me(_id: $id, username: $username) {
    _id
    username
    savedBooks {
      title
    }
  }
}
`;