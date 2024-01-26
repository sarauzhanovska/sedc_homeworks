function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}

let products = [
    new Product("cheese", "Food", false, 8),
    new Product("soap", "Personal Care", false, 5),
    new Product("perfume", "Personal Care", true, 15),
    new Product("sunglasses", "Sunglasses", true, 30),
    new Product("butter", "Food", true, 10),
    new Product("hairbrush", "Personal Care", false, 21),
    new Product("chocolate", "Food", true, 32),
    new Product("lipstick", "Makeup", false, 40),
    new Product("underwear", "Clothing", false, 26),
    new Product("airpods", "Headphones", true, 80),
    new Product("air freshener", "Household", false, 12),
    new Product("milk", "Food", true, 15),
    new Product("shampoo", "Personal Care", false, 24),
    new Product("oil", "Food", false, 15),
    new Product("pasta", "Food", true, 10),

];

console.log("PRODUCTS WITH PRICE GREATER THAN 20:");

products.filter(product => product.price > 20).map(product => console.log(`${product.name}`));


console.log("NAMES OF ALL PRODUCTS OF CATEGORY 'FOOD', THAT ARE ON DISCOUNT:");

products.filter(product => product.hasDiscount && product.category === "Food").map(product => console.log(`${product.name}`));


console.log("PRICE OF ALL PRODUCTS THAT ARE ON DISCOUNT:");

products.filter(product => product.hasDiscount).map(product => console.log(`${product.price}`));


console.log("NAME AND PRICE OF ALL PRODUCTS WITH NAME STARTING WITH A VOWEL, THAT ARE NOT ON DISCOUNT:");

products.filter(product => !product.hasDiscount && ["a", "e", "i", "o", "u"].includes(product.name.toLowerCase()[0])).map(product => console.log(`${product.name} ${product.price}`));

