const reverseString = async (str) => {
    if(typeof str !== "string" | str.length <= 1 | str.length > 15) throw new Error("Invalid string!")

    try {
        let res = str.split("").reverse().join("")
        return res
    } catch(error) {
        console.log(error)
    }
}

module.exports = {
    reverseString
}