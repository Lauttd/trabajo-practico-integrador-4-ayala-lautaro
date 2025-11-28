const productName: string = "Leche serenito"
console.log(productName)

const productPrice: number = 300
console.log(productPrice)

let productId: string | number //union type

productId = 1

console.log(productId)

productId = "001"
console.log(productId)

interface Product {
  name: string,
  price: number
}

const myProdcut : Product = {
    name: "Minecraft",
    price: 16000
}

