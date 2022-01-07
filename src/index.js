module.exports = function toReadable (number) {
    let str = number.toString();
    let singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let twoDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tensMultiple = [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    return {
        1: singleDigits[number],
        2: str[0] == '1' ? twoDigits[+str[1]] : str[1] == '0' ? tensMultiple[+str[0]] : [tensMultiple[+str[0]], singleDigits[+str[1]]].join(" "),
        3: [singleDigits[+str[0]], 'hundred', str[1] == '1' ? twoDigits[+str[2]] : str[2] == '0' ? tensMultiple[+str[1]] : [tensMultiple[+str[1]], singleDigits[+str[2]]].join(" ").trim(" ")].join(" ").trim(" ")
    }[str.length]
}
