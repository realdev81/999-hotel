import {useState} from "react";
interface ValidationInputBoxPros {
    title: any | null;
    subTitle: string | null;
    inputName: string;
    inputType: string;
}
const ValidationInputBox = (validationInputBox : ValidationInputBoxPros) => {
    const [inputValue, setInputValue] = useState(""); 
    const inputClass =
    "w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-emerald-500 transition-all duration-200";

  const textareaClass =
    "w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-emerald-500 transition-all duration-200 resize-none";
    return(
        <div className="space-y-4">
            <h2 className="text-lg font-semibold text-black">
                {validationInputBox.title}
            </h2>
            <div className="grid grid-cols-1 gap-4">
                <div>
                    <label className="block text-sm font-medium text-black mb-2">
                     {validationInputBox.subTitle}
                    </label>
                    <input
                        name={validationInputBox.inputName}
                        type={validationInputBox.inputType}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className={inputClass}
                        required
                    />
                </div>
            </div>
        </div>
        
    );
}

export default ValidationInputBox;