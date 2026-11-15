
export default function Landing({status, languageSelect}) {

    //{props.languageSelect === "english" ? " " : " "}

    
    const STATUS_LABELS = {
        loading: {
            english: "🟡 Loading...",
            turkish: "🟡 Yükleniyor..."
        },
        alive: {
            english: "🟢 Server is Alive",
            turkish: "🟢 Sunucuya Bağlanıldı"
        },
        error: {
            english: "🔴 Server Not Reachable",
            turkish: "🔴 Sunucuya Bağlanılamadı"
        }
    }

    return (
        <main data-page="main-landing" className='w-full p-4 flex flex-col justify-start items-center '>
            <section data-element="card" className='min-h-[50vh] max-w-[90lvw] mt-14 flex flex-col justify-start gap-4'>
                <h1 className="text-2xl text-center">{languageSelect === "english" ? "Dictionator" : "Sözlük"}</h1>
                
                {/* API Status message */}
                <p>{STATUS_LABELS[status]?.[languageSelect] ?? status}</p>

                <form className="flex justify-start items-center flex-wrap gap-3">
                    <input data-element="input-search" className="min-w-0 flex-[1_1_200px] py-1 px-2 bg-gray-100 rounded-lg border-[0.5px] border-gray-400" 
                        type="text" placeholder={languageSelect === "english" ? "type your word" : "arama sözcüğünü yazın"} name="search-query" />

                    <button data-element="btn-search" className="flex-[0_0_auto] py-1 px-2 bg-[#087391] rounded-lg border-[0.5px] text-white
                                        hover:bg-[#064c60ad] active:bg-[#064D60]"
                             onClick={(e) => e.preventDefault()} >
                        {languageSelect === "english" ?  "Search" : 
                        languageSelect === "turkish" ? "Ara" : null}
                    </button>
                </form>

        </section>
      </main>
    )
}