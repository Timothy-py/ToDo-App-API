const { expect } = require("chai");
let chai = require("chai");
let chaiHttp = require("chai-http");


// Assertion Style: expect
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
                if(error) done(error);
                expect(response).to.have.status(200);
                expect(response).to.be.an('object');
                expect(response.body.data).to.be.an('array');
                expect(response.body.message).to.be.a('string')
            done();
            })
        })
    })


    
    /**Test the GET by ID route  */
    describe("GET /todo/:id", () => {
        it("It should GET the detail of a ToDo Item", (done) => {
            
            const todoId = "5fdaa25fdabf1002c4b5e67f"

            chai.request("http://localhost:7000/todo/api")
            .get(`/todo/${todoId}`)
            .end((error, response) => {
                // assertions
                if(error) done(error);
                expect(response).to.have.status(200);
                expect(response).to.be.an('object');
                expect(response.body).to.have.property('data').to.be.an('object')
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
        })
    })


    /**Test the POST route  */
    describe("POST create", () => {
        it("It should Create a new todo item", (done) => {

            const todoItem = {
                // id
                todo_name: "Todo App Test",
                status: true,
                start_time: "2020-10-28T16:52:20.081+00:00",
                end_time: "2021-10-28T16:52:20.081+00:00",
                description: "Testing the Todo api endpoints with mocha and chai",
                priority: "high"
            };

            chai.request("http://localhost:7000/todo/api")
                .post("/create")
                .send(todoItem)
                .end((error, response) => {
                    // assertions
                    if(error) done(error);
                    expect(response).to.have.status(201);
                    expect(response.body).to.be.an('object');
                    expect(response.body.data).to.have.property('_id');
                    expect(response.body.data).to.have.property('todo_name').eq("Todo App Test");
                    expect(response.body.data).to.have.property('status').eq(true);
                    expect(response.body.data).to.have.property('start_time')
                    expect(response.body.data).to.have.property('end_time')
                    expect(response.body.data).to.have.property('description').eq("Testing the Todo api endpoints with mocha and chai");
                    expect(response.body.data).to.have.property('priority').eq("high");
                done();
                })

        })
    })


    /**Test the UPDATE route  */
    describe("POST /update/:id", () => {
        it("It should Update the ToDo Item", (done) => {
            
            const todoId = "5fdaa25fdabf1002c4b5e67f"
            const todoItem = {
                // id
                todo_name: "Todo App Test Updated",
                status: false,
                start_time: "2020-10-28T16:52:20.081+00:00",
                end_time: "2021-10-28T16:52:20.081+00:00",
                description: "Testing the Todo api endpoints with mocha and chai",
                priority: "high"
            };

            chai.request("http://localhost:7000/todo/api")
            .post(`/update/${todoId}`)
            .send(todoItem)
            .end((error, response) => {
                // assertions
                if(error) done(error);
                expect(response).to.have.status(200);
                expect(response.body).to.be.an('object');
                expect(response.body.data).to.have.property('_id');
                expect(response.body.data).to.have.property('todo_name').eq("Todo App Test Updated");
                expect(response.body.data).to.have.property('status').eq(false);
                expect(response.body.data).to.have.property('start_time')
                expect(response.body.data).to.have.property('end_time')
                expect(response.body.data).to.have.property('description').eq("Testing the Todo api endpoints with mocha and chai");
                expect(response.body.data).to.have.property('priority').eq("high");
            done();
            })
        })
    })


    /**Test the DELETE route  */
    describe("DELETE /delete/:id", () => {
        it("It should DELETE an existing todo item", (done) => {
            const todoId = "5fdba79feb6a1b1698d015cc"

            chai.request("http://localhost:7000/todo/api")
                .delete(`/delete/${todoId}`)
                .end((error, response) => {
                    // assertions
                    if(error) done(error);
                    expect(response).to.have.status(200);
                    expect(response.body).to.have.property('message').eq("Todo Item Deleted Successfully");
                done();
                })
        })
    })


    /**Test the SEARCH route  */
    describe("POST Search", () => {
        it("It should search for a todo item", (done) => {

            const todoItem = {
                todo_name: "Todo App Test",
                priority: "high"
            };

            chai.request("http://localhost:7000/todo/api")
                .post("/search")
                .send(todoItem)
                .end((error, response) => {
                    // assertions
                    if(error) done(error);
                    expect(response).to.have.status(200);
                    expect(response.body).to.be.an('object');
                    expect(response.body).to.have.property('message')
                done();
                })

        })
    })



})