const { graphql } = require('graphql');
const { schema } = require('../../index');

const { createUser } = require('../services/UserService');

const setupTest = require('./helpers');

const MUTATION_AUTHOR = `
    mutation addUser($data: UserInput!){
        createNewUser(data:$data){
            _id
            email
        }
    }
`;

describe('Test Mutation Create User', () => {
    beforeEach(async () => await setupTest());

    it('Should create author', () => {
        const makeTest = async () => {
            const data = {
                first_name : "prueba first",
                last_name : "prueba last",
                email: "prueba@mail.com",
                password: "prueba"
            };
            graphql(schema, MUTATION_AUTHOR, null, {}, { data })
                .then(response => {
                    expect(response.data.createNewUser).toHaveProperty('email', data.email);
                    expect(response.data.createNewUser).toHaveProperty('_id');
                });
        };
        makeTest();
    });

    it('Should not Create an Author', () => {
        const makeTest = async () => {
            const data = {
                first_name: 'Prueba',
                last_name: 'prueba',
                email: 'prueba@prueba.com',
                password: 'prueba'
            };

            await createUser(data);

            graphql(schema, MUTATION_AUTHOR, null, {}, {
                data
            })
                .then(response => {
                    expect(response).toHaveProperty('errors');
                    // expect(response.data.createNewAuthor).toHaveProperty('email', data.email);
                    // expect(response.data.createNewAuthor).toHaveProperty('_id');
                });
        };

        makeTest();
    });
});
