import { getCamelCase } from "../index.js";

console.log("8. Convertir en camelCase:\n\n");

const test1 = (): void => {
  const text = "Hola que tal";

  console.log(`Test 1: [${text}]`);

  const expectedText = "holaQueTal";
  const actualText = getCamelCase(text);

  console.log(`\nExpected result: "holaQueTal" | Actual result: ${actualText}`);

  if (expectedText === actualText) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test1();
