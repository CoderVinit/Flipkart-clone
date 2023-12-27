import { products } from "./constants/data.js";
import Product from "./schema/Product-schema.js";


const defaultdata = async () => {
    try {
        await Product.deleteMany()
        await Product.insertMany(products);
        console.log('Data imported Successfully');
    } catch (error) {
        console.log('Error occurs while inserting defalult data', error.message);
    }
}

export default defaultdata; 