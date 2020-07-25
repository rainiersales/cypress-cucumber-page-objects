import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import HeaderPage from '../../PageObjects/Header/HeaderPage';
import HomePage from "../../PageObjects/Home/HomePage";

const header = new HeaderPage();
const home = new HomePage();

Given(`I navigate to the Docler Holding home page`, () => {
    home.visitUrl();
});

Then(`I want to have visible the title and subtitle`, () => {
    header.verifyPageLoaded();
    home.verifyPageLoaded();
});






