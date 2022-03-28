const fs = require("fs")
const path = require("path")
const util = require("util") // Tar emot en callback och gör om den till en promise

const readFile = util.promisify(fs.readFile)

const readProducts = async () => {
    const productsFile = path.join(__dirname, "products.json")
    const productsJson = await readFile(productsFile)
    return JSON.parse(productsJson)
}

module.exports = { readProducts }