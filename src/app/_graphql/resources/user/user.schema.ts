// import { composeWithMongoose } from 'graphql-compose-mongoose';
// import { schemaComposer } from 'graphql-compose';
// import { UserModel } from '../../../models/user';

// export const UserTC = composeWithMongoose(UserModel, {});

// schemaComposer.Query.addFields({
//   users: UserTC.getResolver('findMany')
// });

// schemaComposer.Mutation.addFields({
//   createUser: UserTC.getResolver('createOne'),
//   updateUser: UserTC.getResolver('updateUser'),
//   deleteUser: UserTC.getResolver('removeById'),
//   signIn: UserTC.getResolver('signIn'),
// });

// export const userSchema = schemaComposer.buildSchema();
