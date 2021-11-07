const reverseInt = (number) => {
    if(typeof number !== "number") throw new Error("Invalid number!")

    res = number.toString().split("").reverse()
    
    if (res[(res.length - 1)] === "-") {
        res.splice((res.length - 1), 1)
        if (res[0] === "0") res.splice(0, 1)
        res.unshift("-")
    }    
    res = res.join("")
    res = parseInt(res)

    return res
}

module.exports = {
    reverseInt
}