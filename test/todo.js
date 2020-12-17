const { expect } = require("chai");
let chai = require("chai");
let chaiHttp = require("chai-http");
const { response } = require("../server");
let server = require("../server");


// Assertion Style: should
chai.expect();

chai.use(chaiHttp);

describe('ToDos API', () => {

    /**Test the GET ALL route  */
    describe("GET /todos", () => {
        it("It should GET all the ToDos", (done) => {
            chai.request("http://localhost:7000/todo/api")
            .get("/todos")
            .end((error, response) => {
                // assertions
                if(error) done(err);
                expect(response).to.have.status(200);
                expect(response).to.be.an('object');
                expect(response.body.data).to.be.an('array');
                expect(response.body.message).to.be.a('string')
            done();
            })
        }).timeout(10000)
    })


    
    /**Test the GET by ID route  */
    describe("GET /todo/:id", () => {
        it("It should GET the detail of a ToDo Item", (done) => {
            
            const todoId = "5fda99d329eaaa7c6ed52059"

            chai.request("http://localhost:7000/todo/api")
            .get(`/todo/${todoId}`)
            .end((error, response) => {
                // assertions
                if(error) done(err);
                expect(response).to.have.status(200);
                expect(response).to.be.an('object');
                expect(response.body.data).to.be.an('object');
                expect(response.body.data).to.have.property('_id');
                expect(response.body.data).to.have.property('todo_name');
                expect(response.body.data).to.have.property('status');
                expect(response.body.data).to.have.property('start_time');
                expect(response.body.data).to.have.property('end_time');
                expect(response.body.data).to.have.property('description');
                expect(response.body.data).to.have.property('priority');
                expect(response.body.message).to.be.a('string');
            done();
            })
        }).timeout(10000)
    })


    /**Test the POST route  */



    /**Test the UPDATE route  */



    /**Test the DELETE route  */



    /**Test the SEARCH route  */
})