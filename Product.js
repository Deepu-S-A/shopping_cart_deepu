class Product{
    
    constructor(productID, productName, productPrice, category){
        this.productID = productID;
        this.productName = productName;
        this.productPrice = productPrice;
        this.category = category;
    }

    getProductDetails(){
        // write your implementation here
    }

    getProductPrice(){
        // write your implementation here
    }
}

class DiscountedProduct extends Product {
  constructor(product, discount) {
    super(product);
    this.discount = discount;
  }
  getDiscountedPrice() {
    return this.productPrice - this.discount;
  }
}

module.exports = {
    Product: Product
}