import LanguageSelector from "./LanguageSelector"


export default function Navbar(props) {
    return (
        <header className="bg-[#9fe6f9] p-2 flex justify-between content-center flex-wrap gap-4 
                        drop-shadow-[0px_1px_5px] drop-shadow-gray-300">
            <span> </span>
            <nav data-element="navbar">
                <ul className="flex flex-wrap gap-4 ">
                    <li data-element="nav-item" className="">
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
            <LanguageSelector setLanguageSelect={props.setLanguageSelect} languageSelect={props.languageSelect}/>
        </header>
    )
}