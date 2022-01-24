const convertToRs = (dollar) => {
    if(typeof dollar === 'number') {
        return dollar * 64
     } else {
         throw Error('Amount needs to be a number')
     }

}

const myValue = convertToRs('five')
console.log(myValue);
//But what if we entered 'five' instead? You would get NaN.



try {
    const myVal = convertToRs('five')
    console.log(myVal);
} catch (error) {
    console.log(error);
    
    
}

console.log('Will not run if program crashes');
