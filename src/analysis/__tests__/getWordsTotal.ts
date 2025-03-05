import { getWordsTotal } from "../index.js";

console.log("2. Calcular total de palabras:");

const test1 = (): void => {
  const text = " ";
  console.log(`\n\nTest 1: "${text}"`);

  const expectedWordsTotal = 0;
  const wordsTotal = getWordsTotal(text);
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
  console.log(`\n\nTest 2: "${text}"`);

  const expectedWordsTotal = 0;
  const wordsTotal = getWordsTotal(text);
  console.log(`\nExpected result: 0 | Actual result: ${wordsTotal}`);

  if (expectedWordsTotal === wordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test2();

const test3 = (): void => {
  const text = "Hello";
  console.log(`\n\nTest 3: "${text}"`);

  const expectedWordsTotal = 1;
  const wordsTotal = getWordsTotal(text);
  console.log(`\nExpected result: 1 | Actual result: ${wordsTotal}`);

  if (expectedWordsTotal === wordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test3();

const test4 = (): void => {
  const text = "Hello stupid world";
  console.log(`\n\nTest 4: "${text}"`);

  const expectedWordsTotal = 3;
  const wordsTotal = getWordsTotal(text);
  console.log(`\nExpected result: 3 | Actual result: ${wordsTotal}`);

  if (expectedWordsTotal === wordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test4();

const test5 = (): void => {
  const text = "0";
  console.log(`\n\nTest 5: "${text}"`);

  const expectedWordsTotal = 1;
  const wordsTotal = getWordsTotal(text);
  console.log(`\nExpected result: 1 | Actual result: ${wordsTotal}`);

  if (expectedWordsTotal === wordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test5();

const test6 = (): void => {
  const text = "Hello \n world";
  console.log(`\n\nTest 6: "${text}"`);

  const expectedWordsTotal = 2;
  const wordsTotal = getWordsTotal(text);
  console.log(`\nExpected result: 2 | Actual result: ${wordsTotal}`);

  if (expectedWordsTotal === wordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test6();

const test7 = (): void => {
  const text = "Hello \n";
  console.log(`\n\nTest 7: "${text}"`);

  const expectedWordsTotal = 1;
  const wordsTotal = getWordsTotal(text);
  console.log(`\nExpected result: 1 | Actual result: ${wordsTotal}`);

  if (expectedWordsTotal === wordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test7();
