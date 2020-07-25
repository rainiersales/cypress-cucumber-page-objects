class HeaderPage {

    SELECTOR_HOME = "[id = 'home']";
    SELECTOR_FORM = "[id = 'form']";
    SELECTOR_ERROR = "[id = 'error']";
    SELECTOR_UI_TESTING = "[id = 'site']";
    SELECTOR_MENU = "[type='button'][data-toggle='collapse']";

    getHomeButton() {
        return cy.get(this.SELECTOR_HOME).contains('Home');
    }

    getFormButton() {
        return cy.get(this.SELECTOR_FORM).contains('Form');
    }

    getErrorButton() {
        return cy.get(this.SELECTOR_ERROR).contains('Error');
    }

    getUITestingButton() {
        return cy.get(this.SELECTOR_UI_TESTING).contains('UI Testing');
    }

    getMenuButton() {
        return cy.get(this.SELECTOR_MENU);
    }

    verifyPageLoaded() {
        this.getHomeButton();
        this.getFormButton();
        this.getErrorButton();
        this.getUITestingButton();
        this.getMenuButton();
    }
}

export default HeaderPage;