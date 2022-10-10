// https://webdriver.io/docs/api

const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');

const productsData = require('../data/test/products.json');

const env = {
    username: 'standard_user',
    password: 'secret_'
}
const productsList = productsData.products

describe('My store', () => {
    it('should load login page with valid form fields', async() => {
        await LoginPage.open();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login(env.username, env.password);
       expect(await ProductsPage.pageTitle.getText()).toEqual('PRODUCTS');
    });

});

describe('Products List View', () => {
    it('should display correct number of products', async () => {
        const productListOnPage = await ProductsPage.productsList; 
        expect(productsList.length).toEqual(productsList.length);
    });

    xit('should display a title, description and price for each product', async() => {

    })

    xit('should load a product details page when selecting a product', async() => {

    });

    xit('clicking on the Sauce Labs Bolt T-Shirt add to cart button should add that product to cart', async() => {

    });

    xit('clicking on the Sauce Labs Bolt T-Shirt remove from cart button should remove that product to cart', async() => {

    });


});

describe('Product Details View', () => {

});



