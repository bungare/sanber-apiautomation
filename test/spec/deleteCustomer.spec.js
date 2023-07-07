const request = require("supertest") ("https://kasir-api.belajarqa.com");
const expect = require ("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlhYWYzNzY0LTBhOWEtNGNjOC04MWNiLTkxN2MyZTkzZGNiYyIsImNvbXBhbnlJZCI6Ijk2ZmE1MzVjLTY4MDgtNDA1YS04YWY3LWY3Y2Q1MzM0NDFmOSIsImlhdCI6MTY4ODc0MzIwMn0.q8i8tUUJc4aaTD4XVg48YcvcZ82IzJlXPD7uB1B3b3U"

describe("Delete Customer Detail", () => {
    it ("Verify Delete Customer Detail return 200", async function(){
        const response = await request
                                .delete("/customers/3de739de-b706-4b2a-9c9a-f6b5b6533379")
                                .set({
                                    Authorization : AUTH,
                                    Accept : "application/json"
                                })
        expect(await response.statusCode).to.eql(200)     
        })

    it ("Verify Delete Customer Detail return 404 when invalid URL", async function(){
            const response = await request
                                    .delete("/customer/3de739de-b706-4b2a-9c9a-f6b5b6533379")
                                    .set({
                                        Authorization : AUTH,
                                        Accept : "application/json"
                                    })
            expect(await response.statusCode).to.eql(404)
            expect(await response.body.message).to.eql(" Your URL Not Found")      
            })
})