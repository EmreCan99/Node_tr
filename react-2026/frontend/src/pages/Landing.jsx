import { useState } from "react";
import { searchWord } from "../services/dictionaryService.js"



export default function Landing({ status, languageSelect }) {

    const [query, setQuery] = useState("")
    const [translationEn, setTranslationEn] = useState([])
    const [hasSearched, setHasSearched] = useState(false)


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


    // Search And bring the Entry from local words_tr JSON
    async function handleSubmit(e) {
        e.preventDefault()
        setHasSearched(true)
        console.log("query: ", query)

        const entry = await searchWord(query)
        console.log("entry: ", entry)

        let translations_en = []

        entry?.senses.forEach((sense) => {
            translations_en.push(sense.translations_en[0])
        })
        console.log("translations_en: ", translations_en)

        // set the state for Translation
        setTranslationEn(translations_en)
        console.log("the state is: ", translationEn)
    }

    // Map the results <li> for the state array: translationEn
    // + the styling of the items
    function mapTranslationRender(array) {
        
        return(
        array.length > 0 ?
        array.map((x) => { return <li className="pb-2 list-decimal list-outside">{x} </li> })
        : <li className="list-none -ml-5">No result</li>
        )
    }



    return (
        <main data-page="main-landing" className='w-full p-4 flex flex-col justify-start items-center '>
            <section data-element="card" className='min-h-[50vh] max-w-[90lvw] mt-8 flex flex-col justify-start gap-4 '>
                <h1 className="text-2xl text-center text-[#68000a] font-serif font-bold">{languageSelect === "english" ? "Dictionator" : "Sözlük"}</h1>

                {/* API Status message */}
                <p>{STATUS_LABELS[status]?.[languageSelect] ?? status}</p>

                <form onSubmit={handleSubmit} className="flex justify-start items-center flex-wrap gap-3">
                    <input data-element="input-search" className="min-w-0 flex-[1_1_200px] py-1 px-2 bg-gray-100 rounded-lg border-[0.5px] border-gray-400 focus:shadow-[0_0_0_1px_#8e062350]"
                        type="text" placeholder={languageSelect === "english" ? "type your word" : "arama sözcüğünü yazın"} name="search-query"
                        value={query} onChange={(e) => setQuery(e.target.value)} />

                    <button data-element="btn-search" type="submit" className="flex-[0_0_auto] py-1 px-2 bg-[#ffddb8] rounded-lg border-[0.5px] text-[#754800]
                                        hover:bg-[#fccca8] active:bg-[#fac19e]" >
                        {languageSelect === "english" ? "Search" :
                            languageSelect === "turkish" ? "Ara" : null}
                    </button>
                </form>

                {hasSearched &&
                    <ol data-element="translation-results" className="pl-5" >
                        {mapTranslationRender(translationEn)}
                    </ol>
                }


            </section>
        </main>
    )
}