import mongoose from "mongoose";

const Schema = mongoose.Schema;


const productSchema = new mongoose.Schema(
    {
        title: String,
        price: Number,
        imageUrl: String,
        description: String,
        date_added: Date,
    },
    {timestamps: true},
)

const Product = mongoose.model('Product', productSchema)


export {
    Product
}