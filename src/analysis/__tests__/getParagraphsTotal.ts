import { getParagraphsTotal } from "../index.js";

console.log("1. Calcular total de párrafos:");

const test1 = (): void => {
  const text = " ";
  console.log(`\n\nTest 1: "${text}"`);

  const expectedParagraphsTotal = 0;
  const paragraphsTotal = getParagraphsTotal(text);
  console.log(`\nExpected result: 0 | Actual result: ${paragraphsTotal}`);

  if (expectedParagraphsTotal === paragraphsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test1();

const test2 = (): void => {
  const text = "";
  console.log(`\n\nTest 2: "${text}"`);

  const expectedParagraphsTotal = 0;
  const paragraphsTotal = getParagraphsTotal(text);
  console.log(`\nExpected result: 0 | Actual result: ${paragraphsTotal}`);

  if (expectedParagraphsTotal === paragraphsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test2();

const test3 = (): void => {
  const text = `
    
    `;
  console.log(`\n\nTest 3: "${text}"`);

  const expectedParagraphsTotal = 0;
  const paragraphsTotal = getParagraphsTotal(text);
  console.log(`\nExpected result: 0 | Actual result: ${paragraphsTotal}`);

  if (expectedParagraphsTotal === paragraphsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test3();

const test4 = (): void => {
  const text = `
`;
  console.log(`\n\nTest 4: "${text}"`);

  const expectedParagraphsTotal = 0;
  const paragraphsTotal = getParagraphsTotal(text);
  console.log(`\nExpected result: 0 | Actual result: ${paragraphsTotal}`);

  if (expectedParagraphsTotal === paragraphsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test4();

const test5 = (): void => {
  const text = `My name is Ivet.
    
    I'm 27 years old.`;
  console.log(`\n\nTest 5: "${text}"`);

  const expectedParagraphsTotal = 2;
  const paragraphsTotal = getParagraphsTotal(text);
  console.log(`\nExpected result: 2 | Actual result: ${paragraphsTotal}`);

  if (expectedParagraphsTotal === paragraphsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test5();

const test6 = (): void => {
  const text = `My name is Ivet.
    I'm 27 years old.`;
  console.log(`\n\nTest 6: "${text}"`);

  const expectedParagraphsTotal = 1;
  const paragraphsTotal = getParagraphsTotal(text);
  console.log(`\nExpected result: 1 | Actual result: ${paragraphsTotal}`);

  if (expectedParagraphsTotal === paragraphsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test6();

const test7 = (): void => {
  const text = "My name is Ivet";
  console.log(`\n\nTest 7: "${text}"`);

  const expectedParagraphsTotal = 1;
  const paragraphsTotal = getParagraphsTotal(text);
  console.log(`\nExpected result: 1 | Actual result: ${paragraphsTotal}`);

  if (expectedParagraphsTotal === paragraphsTotal) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test7();
