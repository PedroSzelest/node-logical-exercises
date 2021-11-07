const reverseString = (str) => {
    if(typeof str !== "string" | str.length <= 1 | str.length > 15) throw new Error("Invalid string!")

    let res = str.split("").reverse().join("")
    
    return res
}

module.exports = {
    reverseString
}