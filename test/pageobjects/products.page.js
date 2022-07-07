

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
    get pageTitle () {
        return $('.title');
    }

    get productsList () {
        return $$('.inventory_item');
    }

    get productTitles() {
        return $$('.inventory_item_name');
    }

    get productDescriptions() {
        return $$('.inventory_item_desc');
    }

    get productPrices() {
        return $$('.inventory_item_price');
    }

    getProductByName(name) {
        return $(`=${name}`)
    }
}
module.exports = new ProductsPage();
