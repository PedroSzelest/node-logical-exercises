const capitalizeLetters = async (str) => {
    if(typeof str !== "string") throw new Error("Invalid string!")

    try {
        res = await str.split(" ")
        console.log(res)
        for(let c = 0; c < res.length; c++) {
            res[c] = res[c][0].toUpperCase() + res[c].slice(1)
            console.log(res[c])
        }
        res = res.join(" ")
        
        return res

    } catch(error) {
        console.log(error)
    }

}


module.exports = {
    capitalizeLetters
}