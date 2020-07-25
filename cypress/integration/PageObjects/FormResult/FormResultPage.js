class FormResultPage {

    TEXT_TITLE = 'Hello {%input}!';
    TEXT_FORM_RESULT_URL = "/hello.html?myName=";

    SELECTOR_TITLE_OUTPUT_FORM = "[id ='hello-text']";
    SELECTOR_DOCLER_HOLDING_IMAGE = "[src='assets/img/dh_company_lux_doclerholding.jpg'][id = 'dh_logo']";

    getDoclerHoldingImage() {
        return cy.get(this.SELECTOR_DOCLER_HOLDING_IMAGE);
    }

    getTitleResult(input) {
        return cy.get(this.SELECTOR_TITLE_OUTPUT_FORM).contains(this.TEXT_TITLE.replace('{%input}', input));
    }

    verifyUrl(input) {
        cy.url().should('include', this.TEXT_FORM_RESULT_URL+input);
    }

    verifyPageLoaded(input) {
        this.getDoclerHoldingImage();
    }

    verifyDynamicTitleGenerated(input) {
        this.getTitleResult(input);
        this.verifyUrl(input);
    }

    verifyStatusPage(status) {
        cy.request({
            method: 'POST',
            url: 'http://uitest.duodecadits.com/hello.html?myName=Rainier',
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(status)
            expect(response.body).to.have.length(2747)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    }

}

export default FormResultPage;