export default function Navbar(props) {
    return (
        <header>
            <nav>
                <ul>
                    <li className="nav-item">
                        <button type="button" onClick={() => props.setWhichPage("Landing")} >Landing </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" onClick={() => props.setWhichPage("Experiment")}>Experiment</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}