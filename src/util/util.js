const cleanStr = (str) => {
    let newStr = '';
    for(let i in str){
        newStr += str[i].replace(/[\s|\:|\,]/, '-');
    }
    return newStr;
}

const getDate = () => new Date().toGMTString();

module.exports = {
    getDate, cleanStr
}