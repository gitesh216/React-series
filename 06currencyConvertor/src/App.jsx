// import { useState } from "react";
// import InputBox from "./components/InputBox";
// import useCurrencyInfo from "./hooks/useCurrencyInfo";
// import "./App.css";

// function App() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState("inr");
//   const [to, setTo] = useState("usd");
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   const currencyInfo = useCurrencyInfo(from);

//   const options = Object.keys(currencyInfo);
//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     setConvertedAmount(amount);
//     setAmount(convertedAmount);
//   };

//   const convert = () => {
//     setConvertedAmount(amount * currencyInfo[to]);
//   };

//   return (
//     <div
//       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={
//         {
//           //     backgroundImage: `url('')`,
//         }
//       }
//     >
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               convert();
//             }}
//           >
//             <div className="w-full mb-1">
//               <InputBox
//                 label="From"
//                 amount={amount}
//                 currencyOptions={options}
//                 onCurrencyChange={(currency) => setFrom(currency)}
//                 selectCurrency={from}
//                 onAmountChange={(amount) => setAmount(amount)}
//               />
//             </div>
//             <div className="relative w-full h-0.5">
//               <button
//                 type="button"
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap}
//               >
//                 swap
//               </button>
//             </div>
//             <div className="w-full mt-1 mb-4">
//               <InputBox
//                 label="To"
//                 amount={convertedAmount}
//                 currencyOptions={options}
//                 onCurrencyChange={(currency) => setTo(currency)}
//                 selectCurrency={to}
//                 amountDisable
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
//             >
//               Convert {from.toUpperCase()} to {to.toUpperCase()}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(3));
  };

  const clear = () => {
    setAmount("");
    setFrom("inr");
    setTo("usd");
    setConvertedAmount("");
  };


  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From Input */}
          <div className="mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              selectCurrency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(value) => setAmount(value)}
            />
          </div>

          {/* Swap Button */}
          <div className="relative mb-4">
            <button
              type="button"
              onClick={swap}
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
            >
              Swap
            </button>
          </div>

          {/* To Input */}
          <div className="mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              selectCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)}
              amountDisable
            />
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-300"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
           {/* Clear Button */}
           <button
            type="button"
            onClick={clear}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-lg mt-4 transition-all duration-300"
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
