import Product from '../models/product.model.js'
import mongoose from 'mongoose'

const getProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products })
    } catch (error) {
        console.log("Error in req. fetching/getting : ", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

const createProduct = async (req, res) => {
    const product = req.body;

    // validation
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" })
    }

    // create new product
    const newProduct = new Product(product)

    try {
        // save
        await newProduct.save();
        // send
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in creating product : ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params

    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ success: false, message: "Invalid Product Id" })
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true })
        res.status(200).json({ success: true, data: updatedProduct })
    } catch (error) {
        console.log("Error in updating products : ", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    console.log("id:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ success: false, message: "Invalid Product Id" })
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product Deleted" })
    } catch (error) {
        console.log("Error in deleting products : ", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

export { getProduct, createProduct, updateProduct, deleteProduct };