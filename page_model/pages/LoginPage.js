import {Selector, Role} from 'testcafe'

class LoginPage {

    constructor(){
        this.usernameField = Selector ('input[id="user-name"]')
        this.passwordField = Selector ('input[id="password"]')
        this.loginButton = Selector ('#login-button')
        this.errorMessage = Selector ('.error-button')
}
}

export default new LoginPage()