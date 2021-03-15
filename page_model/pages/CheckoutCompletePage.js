import { Selector } from 'testcafe'

class CheckoutCompletePage{
    constructor(){
        this.checkoutTitleLabel = Selector ('#contents_wrapper > div.subheader').withExactText('Finish')
        this.thanksLabel = Selector ('#checkout_complete_container > h2').withExactText('THANK YOU FOR YOUR ORDER')
    }
}

export default new CheckoutCompletePage()