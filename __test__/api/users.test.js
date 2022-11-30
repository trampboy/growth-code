const request = require("supertest");
const app = require("../../app");

describe("__test__/api/users.test.js", () => {
  // eslint-disable-next-line jest/no-done-callback
  it("get users", (done) => {
    request(app)
      .get("/users")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect("Content-Length", "23")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).toBe("respond with a resource");
        return done();
      });
  });
});
