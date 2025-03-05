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

  console.log(unfilteredCharacters);

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

  console.log(shortWords);

  return shortWords.length;
};
