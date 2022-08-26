export function isPangram(sentence: string) {
    sentence = sentence.toLowerCase()

    for (let i = 97; i <= 122; i++) {
      let letter: string = String.fromCharCode(i)
      if (!sentence.includes(letter)) {
        return false;
      }
    }

    return true;
}
  