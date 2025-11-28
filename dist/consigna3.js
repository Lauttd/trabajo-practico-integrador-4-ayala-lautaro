"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let orderStatus; //tipo literal
orderStatus = "pending";
console.log(orderStatus);
orderStatus = "shipped";
console.log(orderStatus);
orderStatus = "delivered";
console.log(orderStatus);
var logLevel;
(function (logLevel) {
    logLevel["Info"] = "Info";
    logLevel["Warning"] = "Warning";
    logLevel["Error"] = "Error";
})(logLevel || (logLevel = {}));
function logMessage(level, message) {
    console.log(`${level}: &{message}`);
}
logMessage(logLevel.Info, "Mensaje informativo");
logMessage(logLevel.Warning, "Mensaje de advertencia");
logMessage(logLevel.Error, "Mensaje de Error");
//# sourceMappingURL=consigna3.js.map