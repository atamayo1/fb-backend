const { graphql } = require('graphql');
const { schema } = require('./../../index');
const { createUser } = require('./../services/UserService');
const setupTest = require('./helpers');

const MUTATION_ADD_POST = `
    mutation addPost($data:PostInput!){
        createNewPost(data:$data){
            _id
            title
            user{
                email
            }
        }
    }
`;

describe('Test Create Post Mutation', () => {
    beforeEach(async () => await setupTest());

    it('Should Create Post', () => {
        const makeTest = async () => {
            const user = {
                first_name: 'prueba',
                last_name: 'prueba',
                email: 'prueba1@gmail.com',
                password: 'prueba'
            };
            const data = {
                title: 'Post de prueba',
                content: 'Contenido de post de prueba'
            };

            const userpost = await createUser(user);
            graphql(schema, MUTATION_ADD_POST, null, { userpost }, { data })
                .then( res => {
                    expect(res.data.createNewPost.user).toHaveProperty('email', user.email);
                    expect(res.data.createNewPost).toHaveProperty('_id');
                });

        };

        makeTest();
    });

    it('Should not Create a Post', () => {
        const makeTest = async () => {
            const user = {
                first_name: 'prueba',
                last_name: 'prueba',
                email: 'prueba@gmail.com',
                password: 'prueba'
            };
            const data = {
                content: 'Contenido de post de prueba'
            };

            const userpost = await createUser(user);
            graphql(schema, MUTATION_ADD_POST, null, {
                userpost
            }, {
                data
            })
                .then(res => {
                    expect(res).toHaveProperty('errors');
                });
        };

        makeTest();
    });
});
