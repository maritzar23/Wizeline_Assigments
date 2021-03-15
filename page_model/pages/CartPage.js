import {Selector} from 'testcafe'

class CartPage{
    constructor(){
        this.cartPageTitle = Selector ('#contents_wrapper > div.subheader')
        this.cartItems = Selector ('#cart_contents_container > div > div.cart_list > div')
        this.checkoutButton = Selector ('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button')
        
    }
}

export async function getItemsOnTheCart(){
    var cartItms = Selector ('#cart_contents_container > div > div.cart_list > div')
    var count = await cartItms.count
    for (let i = 0; i < count; i++){
        var Name=  await Selector ('#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > a > div').innerText
        //console.log(Name)
    }
return Name
}

export default new CartPage()
