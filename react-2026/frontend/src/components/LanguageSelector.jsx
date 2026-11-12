export default function LanguageSelector(props) {
    
    return (
        <form action="">
            <select 
                className="language-select" 
                name="languageSelection" 
                id="languageSelection"
                onChange={(e) => props.setLanguageSelect(e.target.value)}>,
                <option value="english">English</option>
                <option value="turkish">Türkçe</option>
            </select>
        </form>
    )
}