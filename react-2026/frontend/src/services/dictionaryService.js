import localWordsTr from "../data/words_tr.json"

// Helper function to lowercase

function normalizeTurkish(text) {
    return text.trim().toLowerCase("tr-TR");
}

export async function searchWord(query) {
    const cleanQuery = normalizeTurkish(query);

    console.log("cleanQuery: ", cleanQuery);
    if (!cleanQuery) return null;

    const match = localWordsTr.find(
        (item) => {
            return normalizeTurkish(item.word) === cleanQuery;
        });

    return match || null;
}