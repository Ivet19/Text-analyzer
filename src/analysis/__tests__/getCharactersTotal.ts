import { getCharactersTotal } from "../index.js";

console.log("3. Calcular total de caracteres:");

const test1 = (): void => {
  const text = " ";
  console.log(`\n\nTest 1: "${text}"`);

  const expectedCharactersTotal = 0;
  const charactersTotal = getCharactersTotal(text);
  console.log(
    `\nExpected result: ${expectedCharactersTotal} | Actual result: ${charactersTotal}`
  );

  if (expectedCharactersTotal === charactersTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test1();

const test2 = (): void => {
  const text = "Hello";
  console.log(`\n\nTest 2: "${text}"`);

  const expectedCharactersTotal = 5;
  const charactersTotal = getCharactersTotal(text);
  console.log(
    `\nExpected result: ${expectedCharactersTotal} | Actual result: ${charactersTotal}`
  );

  if (expectedCharactersTotal === charactersTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test2();

const test3 = (): void => {
  const text = "Hello world!";
  console.log(`\n\nTest 3: "${text}"`);

  const expectedCharactersTotal = 11;
  const charactersTotal = getCharactersTotal(text);
  console.log(
    `\nExpected result: ${expectedCharactersTotal} | Actual result: ${charactersTotal}`
  );

  if (expectedCharactersTotal === charactersTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test3();

const test4 = (): void => {
  const text = "Hello\n\nworld.";
  console.log(`\n\nTest 1: "${text}"`);

  const expectedCharactersTotal = 11;
  const charactersTotal = getCharactersTotal(text);
  console.log(
    `\nExpected result: ${expectedCharactersTotal} | Actual result: ${charactersTotal}`
  );

  if (expectedCharactersTotal === charactersTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test4();
