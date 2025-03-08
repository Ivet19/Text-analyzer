export const getParagraphsTotal = (text: string): number => {
  const trimmedText = text.replaceAll(" ", "");

  const texts: string[] = trimmedText.split("\n\n");

  const paragraphs = texts.filter((text) => text !== "" && text !== "\n");

  return paragraphs.length;
};

export const getWordsTotal = (text: string): number => {
  const trimmedText = text.replaceAll("\n", " ");

  const unfilteredWords = trimmedText.split(" ");

  const words = unfilteredWords.filter(
    (unfilteredWord) => unfilteredWord !== "" && unfilteredWord !== "\n"
  );

  return words.length;
};

export const getCharactersTotal = (text: string): number => {
  const trimmedText = text.replaceAll("\n", " ");

  const unfilteredCharacters = trimmedText.split("");

  const characters = unfilteredCharacters.filter(
    (unfilteredCharacter) => unfilteredCharacter !== " "
  );

  return characters.length;
};

export const getShortWordsTotal = (
  text: string,
  maximumLength: number = 4
): number => {
  const trimmedText = text.replaceAll("\n", " ");

  const unfilteredShortWords = trimmedText.split(" ");

  const shortWords = unfilteredShortWords.filter(
    (unfilteredShortWord) =>
      unfilteredShortWord !== "" &&
      unfilteredShortWord !== "\n" &&
      unfilteredShortWord.length <= maximumLength
  );

  return shortWords.length;
};

export const getWordsList = (words: string[]): string => {
  const filteredWords = words.filter(
    (word) => word !== "" && word !== " " && word !== "\n"
  );

  const wordsList = filteredWords.join(", ");

  return wordsList;
};

export const getWordFrequency = (text: string, word: string): number => {
  const trimmedText = text.toLowerCase().replaceAll("\n", " ");
  const lowerCaseWord = word.toLowerCase();
  const unfilteredWords = trimmedText.split(" ");

  const filteredWords = unfilteredWords.filter(
    (filteredWord) =>
      word !== "" &&
      filteredWord !== " " &&
      filteredWord !== "\n" &&
      filteredWord === lowerCaseWord
  );

  const wordFrequency = filteredWords.length;

  return wordFrequency;
};

export const getReversedWordsText = (text: string): string => {
  const reversedWordsText = text
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

  return reversedWordsText;
};

export const hideForbiddenWords = (
  text: string,
  forbiddenWords: string[]
): string => {
  const words = text.split(" ");

  const replacedWords = words.map((word) => {
    if (forbiddenWords.some((forbiddenWord) => forbiddenWord === word)) {
      return (word = "*");
    } else {
      return word;
    }
  });

  const hiddenForbiddenWords = replacedWords.join(" ");

  return hiddenForbiddenWords;
};

export const getCamelCase = (text: string): string => {
  const words = text.split(" ").map((word) => word.toLowerCase());

  const firstWord = words.shift();

  const upperCaseInitialsText = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const camelCaseWord = firstWord + upperCaseInitialsText;

  return camelCaseWord;
};
