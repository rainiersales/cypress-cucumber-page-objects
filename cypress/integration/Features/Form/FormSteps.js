import {Then, When, And} from "cypress-cucumber-preprocessor/steps";
import HeaderPage from '../../PageObjects/Header/HeaderPage';
import HomePage from "../../PageObjects/Home/HomePage";
import FormPage from "../../PageObjects/Form/FormPage";
import FormResultPage from "../../PageObjects/FormResult/FormResultPage";

const form = new FormPage();
const formResult = new FormResultPage();
const header = new HeaderPage();
const home = new HomePage();

Then(`I navigate to the form page`, () => {
    form.visitUrl();
});

And(`a form should be visible with one input box and one submit button`, () => {
    form.verifyPageLoaded();
});

When(`I submit the form with {string}`, (value) => {
    form.insertValue(value);
    form.buttonFormClick();
})

Then(`I should get redirect to the Hello page`, () => {
    formResult.verifyStatusPage(200);
});

And(`the following text should appear: {string}`, (value) => {
    formResult.verifyDynamicTitleGenerated(value);
});