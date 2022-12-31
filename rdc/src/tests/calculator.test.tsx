//- User must be able to enter the total rent amount
//- User must be able to enter the number of roommates

//describe the test
describe("Calculator", () => {
    //what should the test do. 'test' or 'it' (indivudal test) are the same. The method 'todo' is used to pass a test, but it has a todo message
  
    // test('should calculate the total rent amount', () => {
    //   //expect an actual value to be the same as the expected value
    //   //toBe is a referenceal matcher
    //to Equal is a value matcher
    //   expect(1 + 1).toBe(2);
    // });
  
    //hooks are functions that run before or after each test
    //beforeEach(() => {
    //   console.log("before each test");
    // });
  
    //afterEach(() => {
    //   console.log("after each test");
    // });
  
    //beforeAll(() => {
    //   console.log("before all tests");
    // });
  
    //afterAll(() => {
    //   console.log("after all tests");
    // });
  
    //test.only will only run the test that has the only method
  
    it("should have a valid rent amount", () => {
      //check if input is a float type
      expect(1.5).toBe(1.5);
    });
  
    it("should have a valid number of roommates", () => {
      //check if input is an integer type
      expect(1).toBe(1);
    });
  
    it("should have a valid salary for one roommate", () => {
      //check if input is a float type
      expect(1.5).toBe(1.5);
    });
  
    it("should have a valid salary for all roommates"); //integration test (test that depends on the 2 tests above)
  
    it("the sum of the salaries should be equal or more to the rent amount"); //integration test
  });
  
  //- User must be able to enter the salary of each roommate, by frequency
  //- User must be able to specify how the rent will be divided (e.g. by percentage, by amount)
  //- User must be able to enter any edge cases (e.g. one roommate pays a different percentage)
  
  //end 2 end testing - cypress
  