export default function SwapBtn({
   fromCurrency,
   toCurrency,
   setFromCurrency,
   setToCurrency,
}) {
   const handleSwap = () => {
      setFromCurrency(toCurrency);
      setToCurrency(fromCurrency);
   };
   return (
      <div className="relative w-full h-0.5">
         <button
            type="button"
            onClick={handleSwap}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
            SWAP
         </button>
      </div>
   );
}
