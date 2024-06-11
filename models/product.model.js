import mongoose from "mongoose";

const stockItem = mongoose.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Color",
        required: true,
    },
    size: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Size",
        required: true,
    },
})

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    sku: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    }, 
    productPic: {
        type: String,
        required: true, 
    }, 
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
        required: true,
    }],
    stock: [stockItem],
})

export default mongoose.model("Product", productSchema)