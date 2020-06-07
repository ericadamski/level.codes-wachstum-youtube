import Level from "@level.codes/score";

const score = Level.prepare();

describe("Login Page", () => {
  describe("Logging in", () => {
    it("should allow me to log in", async () => {
      score("Allows logging in.", 100);
      
      expect(true).toBeTruthy()
    })
    
    it('should fail', () => {
      score("Testing a fail", 800)
      
      fail('oops')
    })
  })
})
