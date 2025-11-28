let orderStatus: "pending" | "shipped" | "delivered" //tipo literal

orderStatus = "pending"
console.log(orderStatus)

orderStatus = "shipped"
console.log(orderStatus)

orderStatus = "delivered"
console.log(orderStatus)

enum logLevel  {
    Info = "Info",
    Warning = "Warning",
    Error = "Error"
}

function logMessage(level: logLevel, message: string): void{
    console.log(`${level}: &{message}`)
}

logMessage(logLevel.Info, "Mensaje informativo");
logMessage(logLevel.Warning, "Mensaje de advertencia");
logMessage(logLevel.Error, "Mensaje de Error"); 