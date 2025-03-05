import { getWordFrequency } from "../index.js";

console.log("6. Frecuencia de la palabra en el texto:");

const test1 = (): void => {
  const text = " ";
  const word = "Hello";
  console.log(`\n\nTest 1: "${text}"`);

  const expectedWordsTotal = 0;
  const wordsTotal = getWordFrequency(text, word);
  console.log(`\nExpected result: 0 | Actual result: ${wordsTotal}`);

  if (expectedWordsTotal === wordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test1();

const test2 = (): void => {
  const text = "";
  const word = "Hello";
  console.log(`\n\nTest 2: "${text}"`);

  const expectedWordsTotal = 0;
  const wordsTotal = getWordFrequency(text, word);
  console.log(`\nExpected result: 0 | Actual result: ${wordsTotal}`);

  if (expectedWordsTotal === wordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test2();

const test3 = (): void => {
  const text = "Hello how are you";
  const word = "Hello";
  console.log(`\n\nTest 3: "${text}"`);

  const expectedWordsTotal = 1;
  const wordsTotal = getWordFrequency(text, word);
  console.log(`\nExpected result: 1 | Actual result: ${wordsTotal}`);

  if (expectedWordsTotal === wordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test3();

const test4 = (): void => {
  const text = "Hello hello bye hello";
  const word = "Hello";
  console.log(`\n\nTest 4: "${text}"`);

  const expectedWordsTotal = 3;
  const wordsTotal = getWordFrequency(text, word);
  console.log(`\nExpected result: 3 | Actual result: ${wordsTotal}`);

  if (expectedWordsTotal === wordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test4();

const test5 = (): void => {
  const text = "Hello \n goodbye";
  const word = "Hello";
  console.log(`\n\nTest 5: "${text}"`);

  const expectedWordsTotal = 1;
  const wordsTotal = getWordFrequency(text, word);
  console.log(`\nExpected result: 1 | Actual result: ${wordsTotal}`);

  if (expectedWordsTotal === wordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test5();
