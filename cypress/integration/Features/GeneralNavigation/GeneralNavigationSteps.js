import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import HeaderPage from '../../PageObjects/Header/HeaderPage';
import HomePage from "../../PageObjects/Home/HomePage";
import FormPage from "../../PageObjects/Form/FormPage";
import ErrorPage from "../../PageObjects/Error/ErrorPage";

const header = new HeaderPage();
const home = new HomePage();
const error = new ErrorPage();
const form = new FormPage();

Then(`I will have the title 'UI Testing Site' and logo on every site`, (value) => {
    header.getUITestingButton();
    home.getDoclerHoldingImage();
});

Given(`I navigate to the {string}`, (value) => {
    switch (value) {
        case 'Home':
            home.visitUrl();
            break;
        case 'Form':
            form.visitUrl();
            break;
        case 'Error':
            error.verifyStatusPage(404);
            break;
    }
});

When(`I click on the {string}`, (navigationButton) => {
    switch (navigationButton) {
        case 'Home button':
            header.getHomeButton().click();
            break;
        case 'UI Testing button':
            header.getUITestingButton().click();
            break;
        case 'Form button':
            header.getFormButton().click();
            break;
        case 'Error button':
            header.getErrorButton().click();
            break;
    }
});

When(`I should get navigated to the {string} and {int}`, (resultPage, status) => {
    switch (resultPage) {
        case 'Home page':
            home.verifyPageLoaded();
            home.verifyStatusPage(status);
            break;
        case 'Form page':
            form.verifyPageLoaded();
            form.verifyStatusPage(status);
            break;
        case 'Error page':
            error.verifyStatusPage(status);
            break;
    }
});


