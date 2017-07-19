import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const UserType = new ObjectType({
  name: 'User',
  fields: {
    id: { type: new NonNull(ID) },
    email: { type: StringType },
  },
});

const me = {
  type: UserType,
  resolve() {
    return { user: 'test', id: 'test', email: 'test@test.com' };
  },
};

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
    },
  }),
});

export default schema;
