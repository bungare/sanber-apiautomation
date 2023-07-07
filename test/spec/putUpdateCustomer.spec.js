const request = require("supertest") ("https://kasir-api.belajarqa.com");
const expect = require ("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlhYWYzNzY0LTBhOWEtNGNjOC04MWNiLTkxN2MyZTkzZGNiYyIsImNvbXBhbnlJZCI6Ijk2ZmE1MzVjLTY4MDgtNDA1YS04YWY3LWY3Y2Q1MzM0NDFmOSIsImlhdCI6MTY4ODc0MzIwMn0.q8i8tUUJc4aaTD4XVg48YcvcZ82IzJlXPD7uB1B3b3U"

describe("PUT Update Customer Detail", () => {
    it ("Verify PUT Update Customer Detail return 200", async function(){
        const response = await request
                                .put("/customers/83f469d2-0fb5-4738-9599-5a27c7abcd0a")
                                .send({    
                                    "name": "Bunga905",
                                    "phone": "081234567890",
                                    "address": "Bandung",
                                    "description": "Customer Daerah Bandung"
                            })
                                .set({
                                    Authorization : AUTH,
                                    Accept : "application/json"
                                })
        expect(await response.statusCode).to.eql(200)
        expect(await response.body.data.name).to.eql("Bunga905")
        console.log(response.body)      
        })

    it ("Verify PUT Update Customer Detail return 404 when invalid URL", async function(){
            const response = await request
                                    .put("/customer/83f469d2-0fb5-4738-9599-5a27c7abcd0a")
                                    .set({
                                        Authorization : AUTH,
                                        Accept : "application/json"
                                    })
            expect(await response.statusCode).to.eql(404)
            expect(await response.body.message).to.eql(" Your URL Not Found")
            console.log(response.body)      
            })
})