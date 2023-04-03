const app = require('../../app');
const request = require('supertest');

describe('register', () => {
    it('returns status code 200 if user is registered sucessfully', async () => {
        const res = await request(app).post('/register').send({ firstName: 'John', lastName: 'Doe', email: 'john.doe@gmail.com', password: 'johndoe', passwordVerify: 'johndoe' });

        expect(res.statusCode).toEqual(200);
    })

    describe('login', () => {
        it('returns status code 200 if user is logged in sucessfully', async () => {
            const res = await request(app).post('/login').send({ email: 'john.doe@gmail.com', password: 'johndoe' });
    
            expect(res.statusCode).toEqual(200);
        })
    });
});