import LanguageSelector from "./LanguageSelector"

const activeNavClasses = "data-[page=true]:border-b-1 data-[page=true]:border-[#68000a] data-[page=true]:text-[#68000a]"

export default function Navbar(props) {
    return (
        <header className=" p-2 grid grid-cols-[1fr_auto_1fr] items-center justify-center]
                        bg-[#faf6ef] drop-shadow-[0px_1px_5px] drop-shadow-gray-300 border-b-[0.5px] border-b-[#e1ddd7]">
            <div />
            <nav data-element="navbar">
                <ul className="mx-6 flex justify-center flex-wrap gap-6 text-[#5B4A42]">
                    <li data-element="nav-item-landing" data-page={props.whichPage === "Landing"}
                        className={`pb-0.5 transition-colors ${activeNavClasses}`} >

                        <button type="button" onClick={() => props.setWhichPage("Landing")} >
                            {props.languageSelect === "english" ? "Landing" : "Başlangıç"}
                        </button>
                    </li>
                    <li data-element="nav-item-discover" data-page={props.whichPage === "Discover"}
                        className={`pb-0.5 transition-colors ${activeNavClasses}`}>

                        <button type="button" onClick={() => props.setWhichPage("Discover")}>
                            {props.languageSelect === "english" ? "Discover" : "Keşfet"}
                        </button>
                    </li>
                    <li data-element="nav-item-puzzles" data-page={props.whichPage === "Puzzles"}
                        className={`pb-0.5 transition-colors ${activeNavClasses}`}>
                        <button type="button" onClick={() => props.setWhichPage("Puzzles")}>
                            {props.languageSelect === "english" ? "Puzzles" : "Bulmacalar"}
                        </button>
                    </li>
                </ul>
            </nav>
            <LanguageSelector setLanguageSelect={props.setLanguageSelect} languageSelect={props.languageSelect} />
        </header>
    )
}