describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  it("allow user to subscribes to the email list", () => {
    cy.getByData("email-input").type("krishukrishan1211@gmail.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message")
      .should("exist")
      .contains("krishukrishan1211@gmail.com")
  })
  it("does not allow invalid email address", () => {
    cy.getByData("email-input").type("krishan")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message").should("not.exist")
    cy.getByData("success-message").should("not.exist")
  })

  it("does not allow already subscribed email address", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message").should("exist")
  })
})
