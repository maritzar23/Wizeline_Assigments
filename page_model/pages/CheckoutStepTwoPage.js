import { Selector } from 'testcafe'

class CheckoutStepTwoPage{
    constructor(){
        this.checkoutTitlePage = Selector ('#contents_wrapper > div.subheader').withExactText('Checkout: Overview')
        this.cartItems = Selector ('#checkout_summary_container > div > div.cart_list')
        this.cancelButton = Selector ('#checkout_summary_container > div > div.summary_info > div.cart_footer > a.cart_cancel_link.btn_secondary').withExactText('CANCEL')
        this.finishButton = Selector ('#checkout_summary_container > div > div.summary_info > div.cart_footer > a.btn_action.cart_button').withExactText('FINISH')
    }
}

export async function getItems(){
    var cartItms = Selector ('#checkout_summary_container > div > div.cart_list')
    var count = await cartItms.count
    console.log(count)  
}

export default new CheckoutStepTwoPage()