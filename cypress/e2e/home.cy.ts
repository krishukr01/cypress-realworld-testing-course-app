describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("hero section", () => {
    it("the h1 contains the correct word", () => {
      cy.get("[data-test=hero-heading]")
        .should("exist")
        .contains("Testing Next.js Applications with Cypress")
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("course section", () => {
    it.only("Courses: testing our first NextJs application", () => {
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
  })
})
