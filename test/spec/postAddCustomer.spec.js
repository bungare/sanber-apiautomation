const request = require("supertest") ("https://kasir-api.belajarqa.com");
const expect = require ("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlhYWYzNzY0LTBhOWEtNGNjOC04MWNiLTkxN2MyZTkzZGNiYyIsImNvbXBhbnlJZCI6Ijk2ZmE1MzVjLTY4MDgtNDA1YS04YWY3LWY3Y2Q1MzM0NDFmOSIsImlhdCI6MTY4ODc0MzIwMn0.q8i8tUUJc4aaTD4XVg48YcvcZ82IzJlXPD7uB1B3b3U"
        
describe("POST Add Customer", () => {
    it ("Verify POST Add Customer return 200", async function(){
        const response = await request
                                .post("/customers")
                                .send({
                                    
                                        "name": "Gilang07",
                                        "phone": "081234567890",
                                        "address": "Lampung",
                                        "description": "Customer Daerah Lampung"
                                })
                                .set({
                                    Authorization : AUTH,
                                    Accept : "application/json"
                                })
        expect(await response.statusCode).to.eql(201)
        expect(await response.body.status).to.eql("success")
        expect(await response.body.message).to.eql("Customer berhasil ditambahkan")
        expect(await response.body.data.name).to.eql("Gilang07")
        })

        it ("Verify POST Add Customer return 404", async function(){
            const response = await request
                                    .post("/customer")
                                    .send({
                                        
                                            "name": "Gilang07",
                                            "phone": "081234567890",
                                            "address": "Lampung",
                                            "description": "Customer Daerah Lampung"
                                    })
                                    .set({
                                        Authorization : AUTH,
                                        Accept : "application/json"
                                    })
            expect(await response.statusCode).to.eql(404)
            expect(await response.body.message).to.eql(" Your URL Not Found")
            })
    })