/**
 * A function that receives an array of products and processes them anyway you want
 * @param {Array} products - An array of products
 */
export default async (products) => {
    /**
     * This is just an example, but you could look for anything you want.
     * Try these: 
     * - Open a browser tab if there is a TV with more than 40% off
     * - Open a browser tab if a product's title contains Samsung and percent off is higher than 50%
     * - Alert the user if a product has free delivery cost and a discount
     * - Save each products information to a database
     */
    products.forEach(product => {
        // https://www.youtube.com/watch?v=k5YIBoWf-OA
        if(parseFloat(product.currentPrice) < 2000) {
            console.log(product)
        }
    })
}