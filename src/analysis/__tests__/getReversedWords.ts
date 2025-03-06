import { getReversedWordsText } from "../index.js";

const test1 = (): void => {
  const inputText = "Hola";

  console.log(`Test 1: ${inputText}`);

  const expectedText = "aloH";
  const actualText = getReversedWordsText(inputText);
  console.log(`\nExpected result: aloH | Actual result: ${actualText}`);

  if (expectedText === actualText) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test1();

const test2 = (): void => {
  const inputText = " ";

  console.log(`Test 2: ${inputText}`);

  const expectedText = "";
  const actualText = getReversedWordsText(inputText);
  console.log(
    `\nExpected result: ${expectedText}| Actual result: ${actualText}`
  );

  if (expectedText === actualText) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test2();

const test3 = (): void => {
  const inputText = "Hola que tal";

  console.log(`Test 3: ${inputText}`);

  const expectedText = "aloH euq lat";
  const actualText = getReversedWordsText(inputText);
  console.log(
    `\nExpected result: ${expectedText}| Actual result: ${actualText}`
  );

  if (expectedText === actualText) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test3();
