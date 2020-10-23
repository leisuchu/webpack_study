class calculate{
    constructor(len){
        console.log('calculate 被加载2')
        this.len = len || 2
    }

    add(x,y){
        return (Number(x)+Number(y)).toFixed(this.len)
    }

}

export default calculate