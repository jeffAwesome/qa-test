const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');

const products = require('../data/products.json');

const env = {
    username: 'standard_user',
    password: 'secret_'
}

describe('My store', () => {
    it('should load login page', async() => {
        await LoginPage.open();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login(env.username, env.password);
       expect(await ProductsPage.pageTitle.getText()).toEqual('PRODUCTS');
    });

});

describe('Products List View', () => {
    it('should display correct number of products', async () => {
        const productsList = products.products
        const productListOnPage = await ProductsPage.productsList; 
        expect(productsList.length).toEqual(productsList.length);
    });

    
    it('should display a title, description, and price for each product', async() => {
        const productsList = products.products

    });

    it('should load a product details page when selecting a product', async() => {

    })

});

describe('Product Details View', () => {
// extra credit: test product details view however you like
});


