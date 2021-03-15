import {Selector} from 'testcafe'

class MenuPage{
    constructor(){

        this.hambMenu= Selector ('#react-burger-menu-btn')
        this.logoutButton = Selector ('#logout_sidebar_link')
        this.cartButton = Selector ('#shopping_cart_container > a')

    }
}

export default new MenuPage()

