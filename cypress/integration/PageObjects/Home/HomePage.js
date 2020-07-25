class HomePage {

    TEXT_TITLE = "Welcome to the Docler Holding QA Department";
    TEXT_SUBTITLE_TEXT = "This site is dedicated to perform some exercises and demonstrate automated web testing.";
    TEXT_HOME_URL = "http://uitest.duodecadits.com/";

    SELECTOR_DOCLER_HOLDING_IMAGE = "[src='assets/img/dh_company_lux_doclerholding.jpg'][id = 'dh_logo']";
    SELECTOR_TITLE = ".ui-test h1";
    SELECTOR_SUBTITLE = ".ui-test p.lead";

    getDoclerHoldingImage() {
        return cy.get(this.SELECTOR_DOCLER_HOLDING_IMAGE);
    }

    getTitle() {
        return cy.get(this.SELECTOR_TITLE).contains(this.TEXT_TITLE.toString());
    }

    getSubTitle() {
        return cy.get(this.SELECTOR_SUBTITLE).contains(this.TEXT_SUBTITLE_TEXT.toString());
    }

    visitUrl() {
        cy.visit(this.TEXT_HOME_URL);
    }

    verifyUrl(){
        cy.url().should('include', this.TEXT_HOME_URL.toString());
    }

    verifyStatusPage(status) {
        cy.request({
            method: 'POST',
            url: this.TEXT_HOME_URL,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(status)
            expect(response.body).to.have.length(3422)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    }

    verifyPageLoaded() {
        this.getDoclerHoldingImage();
        this.getTitle();
        this.getSubTitle();
        this.verifyUrl();
    }
}

export default HomePage;