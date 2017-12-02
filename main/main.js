module.exports = function main(input,time) {
    let price;
    let priceTime;
    let str;
    if(time ===0){
        priceTime = 0;
    }else{
        priceTime = time * 0.25;
        console.log(priceTime);
    }
    if(input <=2){
        price = 6;
        //str = '总计：' + price.toFixed(0) + '元';

    }else if(input <=8){
        price = 6 + Math.round(input-2) * 0.8;
    }else{
        price = 6 + 6*0.8 + Math.round(input-8)*0.8*1.5;
    }
    console.log(price);
    str = '总计：' + Math.round(price+priceTime) + '元';
    return str;
};