import {Selector} from 'testcafe'

class CheckoutStepOnePage{
    constructor(){
        this.checkoutTitle = Selector('#contents_wrapper > div.subheader').withExactText('Checkout: Your Information')
        this.firstName = Selector ('input[id="first-name"]')
        this.lastName = Selector ('input[id="last-name"]')
        this.postalCode = Selector ('input[id="postal-code"]')
        this.cancelButton = Selector ('#checkout_info_container > div > form > div.checkout_buttons > a')
        this.continueButton = Selector ('#checkout_info_container > div > form > div.checkout_buttons > input')
        this.errorMessage = Selector ('#checkout_info_container > div > form > h3')
    }
}
export default new CheckoutStepOnePage()