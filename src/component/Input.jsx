import { useId } from "react";
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
   const amountInputId=useId()

  const countryCode= selectCurrency === "eur" ? "eu" :selectCurrency.slice(0,2);
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1">
                    <img 
                        src={`https://flagcdn.com/w40/${countryCode}.png`} 
                        alt={`${selectCurrency} flag`}
                        className="w-6 h-4 object-cover rounded-sm shadow-sm"
                        onError={(e) => { 
                            e.target.src = 'https://flagcdn.com/w40/un.png'; 
                        }}
                    />
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOption.map((currency)=>(
                            <option key={currency}
                            value={currency}
                            >
                            {currency}
                        </option>
                        ))}
                
                </select>
                </div>
            </div>
        </div>
    );
}

export default InputBox;
