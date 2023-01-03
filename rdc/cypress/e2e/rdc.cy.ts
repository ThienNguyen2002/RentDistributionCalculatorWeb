describe('RDC', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('checks if RDC is rendered correctly', () => {
    cy.get('title').should("exist");
    cy.get('.form-container').should("exist");
  }) 

})

describe('Add', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

    //added rows + 1. The one is the top row
  it('checks if "add" button works correctly', ()=> {
    cy.get(".form-button").click();
    cy.wait(500); // Wait for 500 milliseconds before making the assertion
    cy.get(".form-row").should("have.length", 3);
  })

  //added rows + 1. The one is the top row
  it('checks if the rent input is working correctly', 
  () => {
    cy.get('[placeholder="Rent"]').type("1000");
    cy.get('[placeholder="Rent"]').should("have.value", "$1,000");
  })

  it('checks if the users are inputted correctly', () => {
    cy.fixture("users.json").then((users) => {
      users.forEach((user, index) => {
        
        cy.get('[placeholder="Name"]').eq(index).type(user.name);
        cy.get('[placeholder="Salary (monthly)"]').eq(index).type(user.salary);
        cy.get(".form-button").click();
      });
    });
  });
  
  
  
  it('checks if everything is calculated', 
  () => {
    cy.get('[placeholder="Rent"]').type("3199");
    cy.fixture("users.json").then((users) => {
      users.forEach((user, index) => {
        
        cy.get('[placeholder="Name"]').eq(index).type(user.name);
        cy.get('[placeholder="Salary (monthly)"]').eq(index).type(user.salary);
        cy.get(".form-button").click();
      });

      // var totalSum = 0;
      // users.forEach((user) => {
      //   totalSum += user.salary ;
      // });
      // const expectedPercent = 3199 / totalSum;

      // var actualTotal = 0; 
      // users.forEach((user) => {
      //   actualTotal += user.rent;
      // });

      // const actualPercent = actualTotal / totalSum;
      // expect(expectedPercent).to.equal(actualPercent);
    });
   

  });



  it('checks if the rent is calculated correctly for each user when the salary is changed', 
  () => {
    cy.get('[placeholder="Rent"]').type("3199");
    cy.fixture("users.json").then((users) => {
      users.forEach((user, index) => {
        
        cy.get('[placeholder="Name"]').eq(index).type(user.name);
        cy.get('[placeholder="Salary (monthly)"]').eq(index).type(user.salary);
        cy.get(".form-button").click();
      });

      users.forEach((user, index) => {
        cy.get('[placeholder="Salary (monthly)"]').eq(index).clear();
        cy.get('[placeholder="Salary (monthly)"]').eq(index).type(Math.floor(Math.random() * 10000).toString());
      });
    });

});

it('checks if the rent is calculated correctly for each user when the rent is changed',
() => {
  cy.get('[placeholder="Rent"]').type("3199");
  cy.fixture("users.json").then((users) => {
    users.forEach((user, index) => {
      
      cy.get('[placeholder="Name"]').eq(index).type(user.name);
      cy.get('[placeholder="Salary (monthly)"]').eq(index).type(user.salary);
      cy.get(".form-button").click();
    });
    cy.get('[placeholder="Rent"]').clear();
    cy.get('[placeholder="Rent"]').type(Math.floor(Math.random() * 10000).toString());

  });
});

});








describe('Remove', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[placeholder="Rent"]').type("3199");
    cy.fixture("users.json").then((users) => {
      users.forEach((user, index) => {
        
        cy.get('[placeholder="Name"]').eq(index).type(user.name);
        cy.get('[placeholder="Salary (monthly)"]').eq(index).type(user.salary);
        cy.get(".form-button").click();
      });
    });
  })



  it('checks if "remove" button works correctly to all users',
  () => {
    cy.fixture("users.json").then((users) => {
      users.forEach((user, index) => {
        cy.get("#remove").click();
      });
    });
  });


});

