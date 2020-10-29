class calculate{
    constructor(len){
        console.log('calculate 被加载2')
        this.len = len || 2
    }

    add(x,y){
        return (Number(x)+Number(y)).toFixed(this.len)
    }

    div(x,y){
        return (Number(x)/Number(y)).toFixed(this.len)
    }

    // 二进制转十进制
    BinaryToDecimal(binary){
        const bArr = String(binary).split('')
        let sumVal = 0;
        bArr.forEach(
            (item,index) => {
                const r = bArr.length - index - 1;
                sumVal += Number(item) * Math.pow(2,r);
            }
        )
        return sumVal;
    }

}

export default calculate