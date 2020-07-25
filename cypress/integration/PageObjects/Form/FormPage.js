class FormPage {

    TEXT_TITLE_FORM = "Simple Form Submission";
    TEXT_BUTTON_FORM = "Go!";
    TEXT_FORM_URL = "http://uitest.duodecadits.com/form.html";

    SELECTOR_INPUT_FORM = "input[placeholder='You name here...'][id ='hello-input']";
    SELECTOR_BUTTON_FORM = "button[type='submit'][id='hello-submit']";
    SELECTOR_TITLE = ".ui-test h1";
    SELECTOR_DOCLER_HOLDING_IMAGE = "[src='assets/img/dh_company_lux_doclerholding.jpg'][id = 'dh_logo']";

    getDoclerHoldingImage() {
        return cy.get(this.SELECTOR_DOCLER_HOLDING_IMAGE);
    }

    getTitle() {
        return cy.get(this.SELECTOR_TITLE).contains(this.TEXT_TITLE_FORM.toString());
    }

    getInputForm() {
        return cy.get(this.SELECTOR_INPUT_FORM);
    }

    getButtonForm() {
        return cy.get(this.SELECTOR_BUTTON_FORM).contains(this.TEXT_BUTTON_FORM.toString());
    }

    verifyUrl() {
        cy.url().should('include', this.TEXT_FORM_URL.toString());
    }

    visitUrl() {
        cy.visit(this.TEXT_FORM_URL);
    }

    verifyStatusPage(status) {
        cy.request({
            method: 'POST',
            url: this.TEXT_FORM_URL,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(status)
            expect(response.body).to.have.length(4012)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    }

    verifyPageLoaded() {
        this.getDoclerHoldingImage();
        this.getTitle();
        this.getInputForm();
        this.getButtonForm();
        this.verifyUrl();
    }

    insertValue(input){
        this.getInputForm().type(input);
    }

    buttonFormClick(){
        this.getButtonForm().click();
    }

}

export default FormPage;