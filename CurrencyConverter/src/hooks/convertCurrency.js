const convert = (setConvertedAmount, amount, currencyInfo, toCurrency) => {
   setConvertedAmount(amount * currencyInfo[toCurrency]);
};

export default convert;
