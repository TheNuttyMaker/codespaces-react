export const isPangram = (guess, allLetters) => {
    return allLetters.every(letter => guess.includes(letter))
}