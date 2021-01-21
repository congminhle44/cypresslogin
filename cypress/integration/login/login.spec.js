/** @format */

const { wait } = require('@testing-library/react');

describe('Login', { viewportHeight: 1080, viewportWidth: 1440 }, () => {
  it('Go to login page', () => {
    cy.visit('http://www.cypresslogin.tk/');
  });

  it('Responsive', () => {
    cy.viewport(375, 667);
    cy.wait(500);
    cy.viewport('ipad-2');
    cy.wait(500);
    cy.viewport(1024, 768);
    cy.wait(500);
    cy.viewport('macbook-15');
    cy.wait(500);
  });

  it('Click without any input value', () => {
    cy.get('.button_signinBtn__3NsEk')
      .click()
      .get('p')
      .should(($p) => {
        expect($p).to.contain('This field is required');
      });
    cy.get('.lang_vi__3e6el').click();
    cy.wait(300);
    cy.get('.lang_ko__1-ha3').click();
    cy.wait(300);
  });

  it('CLick after type in 6 blank spaces', () => {
    cy.get('.lang_en__2_Q7i').click();
    cy.wait(300);
    cy.get('input[name=email]')
      .type('         ')
      .get('p')
      .should(($p) => {
        expect($p).to.contain('This field is required');
      });
    cy.wait(300);
    cy.get('input[name=password]')
      .type('        ')
      .get('p')
      .should(($p) => {
        expect($p).to.contain('This field is required');
      });
    cy.wait(300);
    cy.get('.button_signinBtn__3NsEk').click();
    cy.get('.lang_vi__3e6el').click();
    cy.wait(300);
    cy.get('.lang_ko__1-ha3').click();
    cy.wait(300);
  });

  it('Click with less than min length', () => {
    cy.get('.lang_en__2_Q7i').click();
    cy.wait(300);
    cy.get('input[name=email]').clear();
    cy.get('input[name=email]')
      .type('Lorem')
      .get('p')
      .should(($p) => {
        expect($p).to.contain("This field doesn't meet the min length");
      });
    cy.wait(300);
    cy.get('input[name=password]').clear();
    cy.get('input[name=password]').type('Lorem');
    cy.wait(300);
    cy.get('.button_signinBtn__3NsEk').click();
    cy.get('.lang_vi__3e6el').click();
    cy.wait(300);
    cy.get('.lang_ko__1-ha3').click();
    cy.wait(300);
  });

  it('Type in less than 6 characters', () => {
    cy.get('.lang_en__2_Q7i').click();
    cy.wait(300);
    cy.get('input[name=email]').clear();
    cy.get('input[name=email]').type('Lorem');
    cy.get('input[name=password]').clear();
    cy.get('input[name=password]').type('Lorem');
    cy.get('.lang_vi__3e6el').click();
    cy.wait(300);
    cy.get('.lang_ko__1-ha3').click();
    cy.wait(300);
  });

  it('Type in over 24 characters', () => {
    cy.get('.lang_en__2_Q7i').click();
    cy.wait(300);
    cy.get('input[name=email]').clear();
    cy.get('input[name=email]').type(
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum velit pariatur reiciendis ad tempore sunt amet nisi nemo enim adipisci labore vero dolores?'
    );
    cy.get('input[name=password]').clear();
    cy.get('input[name=password]').type(
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum velit pariatur reiciendis ad tempore sunt amet nisi nemo enim adipisci labore vero dolores?'
    );
    cy.get('.lang_vi__3e6el').click();
    cy.wait(300);
    cy.get('.lang_ko__1-ha3').click();
    cy.wait(300);
  });

  it('Wrong type of email', () => {
    cy.get('.lang_en__2_Q7i').click();
    cy.wait(300);
    cy.get('input[name=email]').clear();
    cy.get('input[name=email]').type('abc@gmail.c');
    cy.get('input[name=email]').clear();
    cy.get('input[name=email]').type('.abc@gmail.c');
    cy.get('input[name=email]').clear();
    cy.get('input[name=email]').type('abc@gmail.co.');
    cy.get('.lang_vi__3e6el').click();
    cy.wait(300);
    cy.get('.lang_ko__1-ha3').click();
    cy.wait(300);
  });

  it('Type correctly', () => {
    const stub = cy.stub();
    cy.get('input[name=email]').clear();
    cy.get('input[name=email]').type('abc@gmail.com');
    cy.get('input[name=password]').clear();
    cy.get('input[name=password]').type('123456');
    cy.on('window:alert', stub);
    cy.get('.button_signinBtn__3NsEk')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Login success');
      });
  });
});
