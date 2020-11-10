let orangePrice = 15.678;
let applePrice = 123.965;
let pearPrice = 90.2345;

console.log(Math.max(orangePrice, applePrice, pearPrice));
console.log(Math.min(orangePrice, applePrice, pearPrice));

let sum = orangePrice + applePrice + pearPrice;
console.log(sum);

let truncedSum = Math.trunc(orangePrice) + Math.trunc(applePrice) + Math.trunc(pearPrice);
console.log(Math.floor(truncedSum));


let roundedToHundreds = (Math.ceil(sum / 100)) * 100;
console.log(roundedToHundreds);

let flooredSum = Math.floor(sum);
let isEvenSum = true;
if (flooredSum / 2 != 0) {
    isEvenSum = false;
}
console.log(isEvenSum);

console.log(500 - sum);

console.log((sum / 3).toFixed(2));

let discount = Math.random();
let discountSum = sum - (sum * discount);
console.log(discountSum.toFixed(2));
console.log((sum / 2 - discountSum).toFixed(2));

console.log(`Максимальна сума: ${Math.max(orangePrice, applePrice, pearPrice)} \n Мінімальна сума: ${Math.min(orangePrice, applePrice, pearPrice)} \n Вартість всіх товарів: ${sum} \n Сума товарів без копійок: ${Math.floor(truncedSum)} \n Сума товарів округлена до сотень: ${roundedToHundreds}\n Сума всіх товарів парне число: ${isEvenSum}\n Решта з 500 грн: ${500 - sum}\n Середнє значення цін, округлене до другого знаку після коми: ${(sum / 3).toFixed(2)}\n Сума до оплати з урахуванням знижки: ${discountSum.toFixed(2)}\n Чистий прибуток з урахуванням знижки: ${(sum / 2 - discountSum).toFixed(2)}`);