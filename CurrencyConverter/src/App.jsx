import { useState } from 'react';
import { InputBox, SwapBtn, Wrapper } from './components';
import useCurrencyInfo from '../../src/hooks/useCurrencyInfo';

export default function App() {
   const [amount, setAmount] = useState(0);
   const [fromCurrency, setFromCurrency] = useState('usd');
   const [toCurrency, setToCurrency] = useState('inr');
   const [convertedAmount, setConvertedAmount] = useState(0);

   const currencyInfo = useCurrencyInfo(fromCurrency);
   const options = Object.keys(currencyInfo);
   const rate = currencyInfo[toCurrency] ?? 1;

   return (
      <Wrapper>
         <InputBox
            label="From"
            amount={amount}
            onAmountChange={(amount) => {
               setAmount(amount);
               setConvertedAmount(amount * rate);
            }}
            currencyOptions={options}
            selectCurrency={fromCurrency}
            onCurrencyChange={(currency) => setFromCurrency(currency)}
            className="w-full mb-1"
         />
         <SwapBtn
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            setFromCurrency={setFromCurrency}
            setToCurrency={setToCurrency}
         />
         <InputBox
            label="To"
            amount={convertedAmount}
            onAmountChange={(convertedAmount) => {
               setConvertedAmount(convertedAmount);
               setAmount(convertedAmount / rate);
            }}
            currencyOptions={options}
            selectCurrency={toCurrency}
            onCurrencyChange={(toCurrency) => {
               setToCurrency(toCurrency);
               convert(setAmount, convertedAmount, currencyInfo, fromCurrency);
            }}
            className="w-full mt-1"
         />
      </Wrapper>
   );
}
