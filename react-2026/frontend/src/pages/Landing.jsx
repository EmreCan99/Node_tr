
export default function Landing({status, languageSelect}) {

    //{props.languageSelect === "english" ? " " : " "}

    
    const STATUS_LABELS = {
        loading: {
            english: "Loading...",
            turkish: "Yükleniyor..."
        },
        alive: {
            english: "Alive",
            turkish: "Bağlanıldı"
        },
        error: {
            english: "Server Not Reachable",
            turkish: "Sunucuya Bağlanılamadı"
        }
    }

    return (
        <main className='landing'>
            <section className='card'>
                <h1>{languageSelect === "english" ? "Dictionator" : "Sözlük"}</h1>

                <p>{STATUS_LABELS[status]?.[languageSelect] ?? status}</p>

                <form className="form-search">
                    <input className="input-search-text" type="text" name="search-query" />
                    <button className="btn-search" onClick={(e) => e.preventDefault()} >
                        {languageSelect === "english" ?  "Search" : 
                        languageSelect === "turkish" ? "Ara" : null}
                    </button>
                </form>

        </section>
      </main>
    )
}