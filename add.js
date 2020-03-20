exports.addTogether = function (arr) {
    let output = 0;
    if (typeof arr === "object") {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "number") {
                output += arr[i];
            } else {
                return "Numbers must be an array of numbers";
            }
        }
        return output;
    } else {
        return "Numbers must be an array of numbers";
    }
}

//export {addTogether};