import { AsyncStorage } from "react-native";

export const FLASHCARD_STORAGE_KEY = "Udacity:FlashCards";

export function fetchDecks() {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then(results => {
            const data = JSON.parse(results);
            return data;
        });
}

export function submitDeck(deck) {
    return AsyncStorage.mergeItem(
        FLASHCARD_STORAGE_KEY,
        JSON.stringify({ [deck.id]: deck })
    );
};

export function removeDeck(deckID) {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then(results => {
            const data = JSON.parse(results)
            data[deckID] = undefined
            delete data[deckID]
            AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data))
        })
} 