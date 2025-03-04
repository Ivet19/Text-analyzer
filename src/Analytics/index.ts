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
