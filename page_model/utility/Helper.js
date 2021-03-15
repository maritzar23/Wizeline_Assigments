import { Role } from 'testcafe'
import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import MenuPage from '../pages/MenuPage'
import {credentials} from '../data/Constants'
import { t } from 'testcafe'
import CheckoutStepOnePage from '../pages/CheckoutStepOnePage'

export const validUser = Role (`https://www.saucedemo.com/`, async t => {
    await t
        .typeText(LoginPage.usernameField, credentials.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, credentials.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)      
}, { preserveUrl: true });

export const invalidUser = Role (`https://www.saucedemo.com/`, async t => {
    await t
        .typeText(LoginPage.usernameField, credentials.INVALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, credentials.INVALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
}, { preserveUrl: true });

export async function logOut(){
    await t
        .click(MenuPage.hambMenu)
        .click(MenuPage.logoutButton)
}

export async function goToCart(){
    await t
        .click(MenuPage.cartButton)
}

export async function fillInfo(){
    await t 
        .typeText(CheckoutStepOnePage.firstName, credentials.CLIENT_INFO.FIRST_NAME)
        .typeText(CheckoutStepOnePage.lastName, credentials.CLIENT_INFO.LAST_NAME)
        .typeText(CheckoutStepOnePage.postalCode, credentials.CLIENT_INFO.ZIP)
}


