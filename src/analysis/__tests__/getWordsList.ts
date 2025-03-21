import { getShortWordsList } from "../index.js";

console.log("5. Listar palabras:\n\n");

const test1 = (): void => {
  const wordsList: string[] = [" ", "Hola"];

  console.log(`Test 1: [${wordsList}]`);

  const expectedList = "Hola";
  const actualList = getShortWordsList(wordsList);

  console.log(`\nExpected result: "Hola" | Actual result: ${actualList}`);

  if (expectedList === actualList) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test1();

const test2 = (): void => {
  const wordsList: string[] = ["manzanas", "leche", "arroz", "zumo"];

  console.log(`\n\nTest 2: [${wordsList}]`);

  const expectedList = "manzanas, leche, arroz, zumo";
  const actualList = getShortWordsList(wordsList);
  console.log(
    `\nExpected result: ${expectedList} | Actual result: ${actualList}`
  );

  if (expectedList === actualList) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test2();

const test3 = (): void => {
  const wordsList: string[] = ["manzanas", "leche", "arroz", "\n"];

  console.log(`\n\nTest 3: [${wordsList}]`);

  const expectedList = "manzanas, leche, arroz";
  const actualList = getShortWordsList(wordsList);
  console.log(
    `\nExpected result: ${expectedList} | Actual result: ${actualList}`
  );

  if (expectedList === actualList) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test3();
