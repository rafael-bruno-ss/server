"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.createUserInput = new graphql_1.GraphQLInputObjectType({
    name: 'createUserInput',
    description: '',
    fields: () => ({
        name: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        password: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        groups: {
            type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)))
        },
        homePage: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        store: {
            type: graphql_1.GraphQLID
        }
    })
});
exports.updateUserInput = new graphql_1.GraphQLInputObjectType({
    name: 'updateUserInput',
    description: '',
    fields: () => ({
        id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        },
        name: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        password: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        groups: {
            type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)))
        },
        homePage: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        store: {
            type: graphql_1.GraphQLID
        }
    })
});
exports.deleteUserInput = new graphql_1.GraphQLInputObjectType({
    name: 'deleteUserInput',
    description: '',
    fields: () => ({
        id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        }
    })
});
exports.signInInput = new graphql_1.GraphQLInputObjectType({
    name: 'signInInput',
    description: '',
    fields: () => ({
        name: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        password: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        }
    })
});
