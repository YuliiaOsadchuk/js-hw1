const orangePrice = 15.678;
const applePrice = 123.965;
const pearPrice = 90.2345;

const maxPrice = Math.max(orangePrice, applePrice, pearPrice);
console.log(maxPrice);
const minPrice = Math.min(orangePrice, applePrice, pearPrice);
console.log(minPrice);

const sum = orangePrice + applePrice + pearPrice;
console.log(sum);

const flooredSum = Math.floor(sum);
console.log(flooredSum);

const roundedToHundreds = (Math.ceil(sum / 100)) * 100;
console.log(roundedToHundreds);


const isEvenSum = flooredSum % 2 === 0;
console.log(isEvenSum);

const moneyCount = 500;
const change = moneyCount - sum;
console.log(change);

const averagePrice = Number((sum / 3).toFixed(2));
console.log(averagePrice);

const max = 100;
const min = 0;
const discount = (Math.floor(Math.random() * (max - min + 1)) + min) / 100;
const discountSum = +(sum - (sum * discount)).toFixed(2);
const profit = +((sum / 2 - discountSum).toFixed(2));
console.log(discountSum);
console.log(profit);

console.log(`Максимальна сума: ${maxPrice} \n Мінімальна сума: ${minPrice} \n Вартість всіх товарів: ${sum} \n Сума товарів без копійок: ${flooredSum} \n Сума товарів округлена до сотень: ${roundedToHundreds}\n Сума всіх товарів парне число: ${isEvenSum}\n Решта з 500 грн: ${change}\n Середнє значення цін, округлене до другого знаку після коми: ${averagePrice}\n Сума до оплати з урахуванням знижки: ${discountSum}\n Чистий прибуток з урахуванням знижки: ${profit}`);