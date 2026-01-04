export default function Wrapper({ children }) {
   return (
      <div className="w-full h-screen flex flex-wrap justify-center items-center">
         <div className="w-full max-w-md border border-transparent rounded-lg p-5 backdrop-blur-sm bg-gray-400">
            {children}
         </div>
      </div>
   );
}
