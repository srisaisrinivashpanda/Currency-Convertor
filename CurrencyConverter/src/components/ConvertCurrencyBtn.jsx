export default function ConvertCurrencyBtn({ fromCurrency, toCurrency }) {
   return (
      <div>
         <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
         </button>
      </div>
   );
}
