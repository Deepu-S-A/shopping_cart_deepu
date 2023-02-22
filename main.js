const fs = require("fs");
const path = require("path");
const product = require('./Product.js');
const products = require('./Products.json');

const getFinalResult = (filename) => {
    try{
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) {
                console.log(err);
                process.exit(1);
            } else {
                const inputs = data.split(" ");
                let totalProductsPrice = 0;
                for(let input of inputs) {
                    totalProductsPrice += getProductDetails(input);
                }
                getProductPrice(totalProductsPrice);
            }
        });
    }catch(error){
        console.error(error);
    }
}

getProductPrice = price => console.log('Product_Price ' + price)

getProductDetails = productID => {
    const filteredItem = products.find(el => el.id  === parseInt(productID));
    if(filteredItem) {
        console.log(`Product_ID: ${productID} | Product Name:${filteredItem.name} | Category: ${filteredItem.category}
        Product_Price ${filteredItem.price}`);
        return filteredItem.price;
    }
    else {
        console.log(`Product with product id ${productID} not found!`);
        return 0;
    }
}

const filename = process.argv[2];
getFinalResult(filename);

module.exports = { getFinalResult }