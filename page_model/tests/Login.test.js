import LoginPage from '../pages/LoginPage'
import ProductPage, { addOneProduct, addMultProducts } from '../pages/ProductPage'
import { validUser, invalidUser, logOut, goToCart, fillInfo } from '../utility/Helper'
import { Role } from 'testcafe'
import CartPage, {getItemsOnTheCart} from '../pages/CartPage'
import CheckoutStepOne from '../pages/CheckoutStepOnePage'
import MenuPage from '../pages/MenuPage'
import CheckoutStepOnePage from '../pages/CheckoutStepOnePage'
import CheckoutStepTwoPage, {getItems} from '../pages/CheckoutStepTwoPage'
import CheckoutCompletePage from '../pages/CheckoutCompletePage'


fixture('Login feature')
test
    .disablePageCaching
('Login validUser role', async t=> { 
    await t
        .useRole(validUser)
        .expect(ProductPage.productsLabel.innerText).eql('Products')    
});

test
    .disablePageCaching
('Login invalidUser role', async t => {
    await t
        .useRole(invalidUser)
        .expect(LoginPage.errorMessage.exists).notOk()

    })

test
    .disablePageCaching
('Logout from products page', async t => {
    await t.useRole(validUser)
    await logOut()
    await t.expect(LoginPage.usernameField.exists).ok()
})

fixture('Cart feature')

test
    .disablePageCaching
('Navigate to the shopping cart', async t => {
    await t
        .useRole(validUser)
    await goToCart()
    await t.expect(CartPage.cartPageTitle.exists).ok() 
})

test
    .disablePageCaching
('Adding a single item to the shopping cart', async t =>{
    await t
        .useRole(validUser)
    var getItem = await addOneProduct() 
    await t
        .wait(1000)
        .click(MenuPage.cartButton)
    var getItemCart = await getItemsOnTheCart()
    await t
        .expect(getItem.innerText).eql(getItemCart.innerText)

    await logOut()
    
    
})

test
    .disablePageCaching
('Adding a multiple item to the shopping cart', async t =>{

    await t
        .useRole(validUser)
    var getItems = await addMultProducts()   
    await t
        .wait(1000)
        .click(MenuPage.cartButton)
    var getItemCart = await getItemsOnTheCart()
        //.expect(CartPage.cartItems.count).eql(8)    
    for (let i=0; i<6; i++){
        await t
            .expect(getItems.innerText).eql(getItemCart.innerText)
    }
})

fixture('Checkout feature')

test
    .disablePageCaching
('Continue with missing mail info', async t =>{
    await t
        .useRole(validUser)
    await addOneProduct()      
    await t
        .wait(1000)
        .click(MenuPage.cartButton)
        .expect(CartPage.cartItems.count).eql(3)
        .click(CartPage.checkoutButton)
        .expect(CheckoutStepOnePage.checkoutTitle.exists).ok()
        .click(CheckoutStepOne.continueButton)
        .expect(CheckoutStepOne.errorMessage.exists).ok()
})

test
    .disablePageCaching
('Fill users info', async t =>{
    await t
        .useRole(validUser)
    await addOneProduct()      
    await t
        .wait(1000)
        .click(MenuPage.cartButton)
        .expect(CartPage.cartItems.count).eql(3)
        .click(CartPage.checkoutButton)
        .expect(CheckoutStepOnePage.checkoutTitle.exists).ok()
    await fillInfo()
    await t
        .click(CheckoutStepOnePage.continueButton)
        .expect(CheckoutStepTwoPage.checkoutTitlePage.exists).ok()
})

test
    .disablePageCaching
('Final order items', async t =>{
    await t
        .useRole(validUser)
    await addOneProduct()      
    await t
        .wait(1000)
        .click(MenuPage.cartButton)
        .expect(CartPage.cartItems.count).eql(3)
        .click(CartPage.checkoutButton)
        .expect(CheckoutStepOnePage.checkoutTitle.exists).ok()
    await fillInfo()
    await t
        .click(CheckoutStepOnePage.continueButton)
        .expect(CheckoutStepTwoPage.checkoutTitlePage.exists).ok()
    await getItems()
    await t 
        .expect(CheckoutStepTwoPage.cartItems.count).eql(1)
})

test
    .disablePageCaching
('Complete a purchase', async t =>{
    await t
        .useRole(validUser)
    await addOneProduct()      
    await t
        .wait(1000)
        .click(MenuPage.cartButton)
        .expect(CartPage.cartItems.count).eql(3)
        .click(CartPage.checkoutButton)
        .expect(CheckoutStepOnePage.checkoutTitle.exists).ok()
    await fillInfo()
    await t
        .click(CheckoutStepOnePage.continueButton)
        .expect(CheckoutStepTwoPage.checkoutTitlePage.exists).ok()
    await getItems()
    await t 
        .expect(CheckoutStepTwoPage.cartItems.count).eql(1)
        .click(CheckoutStepTwoPage.finishButton)
        .expect(CheckoutCompletePage.checkoutTitleLabel.exists).ok()
        .expect(CheckoutCompletePage.thanksLabel.exists).ok()
})















