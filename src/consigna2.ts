function updateStock(currenStock: number, quantityChange: number): number {
    return currenStock + quantityChange
}

const updatedStock = updateStock(2, 4)
console.log(updatedStock);