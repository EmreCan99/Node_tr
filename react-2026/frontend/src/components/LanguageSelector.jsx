export default function LanguageSelector(props) {
    
    return (
        
        <select 
            data-component = "language-select"
            data-lang={props.languageSelect === "turkish"}
            className="bg-gray-50 p-2 rounded-lg hover:bg-gray-100 active:bg-gray-300 
                data-[lang=true]:bg-red-700 data-[lang=true]:text-white" 
            name="languageSelection" 
            id="languageSelection"
            onChange={(e) => props.setLanguageSelect(e.target.value)}
            >,
            <option value="english">English</option>
            <option value="turkish">Türkçe</option>
        </select>
        
    )
}