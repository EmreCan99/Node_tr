import LanguageSelector from "./LanguageSelector"


export default function Navbar(props) {
    return (
        <header>
            <span> </span>
            <nav>
                <ul>
                    <li className="nav-item">
                        <button type="button" onClick={() => props.setWhichPage("Landing")} >
                            {props.languageSelect === "english" ? "Landing" : "Başlangıç"}
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" onClick={() => props.setWhichPage("Experiment")}>
                            {props.languageSelect === "english" ? "Experimental" : "Deneysel"}
                        </button>
                    </li>
                </ul>
            </nav>
            <LanguageSelector setLanguageSelect={props.setLanguageSelect}/>
        </header>
    )
}