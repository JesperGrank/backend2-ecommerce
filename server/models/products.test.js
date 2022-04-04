const mongoose = require("mongoose")
const {
    getProduct,
    createProduct
} = require("./products")

const MONGODB_URL = "mongodb:127.0.0.1/test-db"

beforeAll(async () => {
    await mongoose.connect(MONGODB_URL)
})

afterAll(async () => {
    await mongoose.connection.close()
})

afterAll(async () => {
    await mongoose.connection.dropDatabase()
})

test("should create product", async () => {
    const newProduct = createProduct({
        name: "New product",
        sku: XYZ - 000,
        price: 499,
        description: "A new product",
        thumbnaik: "/fake-image-thumbnail.jpg",
        image: "/fake-image.jpg"
    })
    const product = await getProduct(newProduct.sku)
    expect(product.name).toBe(newProduct.name)
})

test("SKUs should be unique", async () => {
    const fakeProduct = {
        name: "New product",
        sku: XYZ - 000,
        price: 499,
        description: "A new product",
        thumbnaik: "/fake-image-thumbnail.jpg",
        image: "/fake-image.jpg"
    }
    await createProduct(fakeProduct)
    await createProduct(fakeProduct)
})
