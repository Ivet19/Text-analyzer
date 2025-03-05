import { getShortWordsTotal } from "../index.js";

console.log("4. Calcular total de palabras cortas:");

const test1 = (): void => {
  const text = " ";
  console.log(`\n\nTest 1: "${text}"`);

  const expectedShortWordsTotal = 0;
  const shortWordsTotal = getShortWordsTotal(text);
  console.log(`\nExpected result: 0 | Actual result: ${shortWordsTotal}`);

  if (expectedShortWordsTotal === shortWordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test1();

const test2 = (): void => {
  const text = "";
  console.log(`\n\nTest 2: "${text}"`);

  const expectedShortWordsTotal = 0;
  const shortWordsTotal = getShortWordsTotal(text);
  console.log(`\nExpected result: 0 | Actual result: ${shortWordsTotal}`);

  if (expectedShortWordsTotal === shortWordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test2();

const test3 = (): void => {
  const text = "Hi";
  console.log(`\n\nTest 3: "${text}"`);

  const expectedShortWordsTotal = 1;
  const shortWordsTotal = getShortWordsTotal(text);
  console.log(`\nExpected result: 1 | Actual result: ${shortWordsTotal}`);

  if (expectedShortWordsTotal === shortWordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test3();

const test4 = (): void => {
  const text = "Amazing";
  console.log(`\n\nTest 4: "${text}"`);

  const expectedShortWordsTotal = 0;
  const shortWordsTotal = getShortWordsTotal(text);
  console.log(`\nExpected result: 0 | Actual result: ${shortWordsTotal}`);

  if (expectedShortWordsTotal === shortWordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test4();

const test5 = (): void => {
  const text = "0";
  console.log(`\n\nTest 5: "${text}"`);

  const expectedShortWordsTotal = 1;
  const shortWordsTotal = getShortWordsTotal(text);
  console.log(`\nExpected result: 1 | Actual result: ${shortWordsTotal}`);

  if (expectedShortWordsTotal === shortWordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test5();

const test6 = (): void => {
  const text = "Hello\nyou";
  console.log(`\n\nTest 6: "${text}"`);

  const expectedShortWordsTotal = 1;
  const shortWordsTotal = getShortWordsTotal(text);
  console.log(`\nExpected result: 1 | Actual result: ${shortWordsTotal}`);

  if (expectedShortWordsTotal === shortWordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test6();

const test7 = (): void => {
  const text = "Hello my name is Paco";
  console.log(`\n\nTest 7: "${text}"`);

  const expectedShortWordsTotal = 4;
  const shortWordsTotal = getShortWordsTotal(text);
  console.log(`\nExpected result: 4 | Actual result: ${shortWordsTotal}`);

  if (expectedShortWordsTotal === shortWordsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test7();
