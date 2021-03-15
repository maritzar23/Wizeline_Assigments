import {Selector} from 'testcafe'
import {t} from 'testcafe'

class ProductPage{
    constructor(){
        this.productsLabel = Selector ('#inventory_filter_container > div')
        //this.allItems = Selector ('.inventory_list').find('button')
    }


}

export async function addOneProduct(){
    var allItems = Selector ('.inventory_list').find('button')
    var count = await allItems.count
    for (let i = 0; i < 1; i++){
        var allNames=  await Selector ('#item_'+ i +'_title_link > div').innerText
        await t.click(allItems.nth(i))
       // console.log(allNames)
    }
return allNames
}

export async function addMultProducts(){
    var allItems = Selector ('.inventory_list').find('button')
    var count = await allItems.count
    //console.log(count)
    for (var i = 0; i < count; i++)
    {
        var allNames=  await Selector ('#item_'+ i +'_title_link > div').innerText
        await t.click(allItems.nth(i));
    }
return allNames
}


export default new ProductPage()