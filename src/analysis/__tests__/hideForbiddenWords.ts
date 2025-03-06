import { hideForbiddenWords } from "../index.js";

console.log("7. Listar palabras:\n\n");

const test1 = (): void => {
  const text = "hola caca culo adios";
  const forbiddenWords: string[] = ["caca", "culo"];

  console.log(`Test 1: [${text}]`);

  const expectedText = "hola * * adios";
  const actualText = hideForbiddenWords(text, forbiddenWords);

  console.log(
    `\nExpected result: "hola * * adios" | Actual result: ${actualText}`
  );

  if (expectedText === actualText) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test1();

const test2 = (): void => {
  const text = "hola que tal adios";
  const forbiddenWords: string[] = ["caca", "culo"];

  console.log(`Test 1: [${text}]`);

  const expectedText = "hola que tal adios";
  const actualText = hideForbiddenWords(text, forbiddenWords);

  console.log(
    `\nExpected result: "hola * * adios" | Actual result: ${actualText}`
  );

  if (expectedText === actualText) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test2();

const test3 = (): void => {
  const text = "";
  const forbiddenWords: string[] = ["caca", "culo"];

  console.log(`Test 1: [${text}]`);

  const expectedText = "";
  const actualText = hideForbiddenWords(text, forbiddenWords);

  console.log(
    `\nExpected result: ${expectedText} | Actual result: ${actualText}`
  );

  if (expectedText === actualText) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test3();
