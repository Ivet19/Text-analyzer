import { getWordsTotal } from "../index.js";

const test1 = (): void => {
  const text = " ";
  const expectedTotal = 0;
  const total = getWordsTotal(text);

  if (expectedTotal === total) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test1();

const test2 = (): void => {
  const text = "";
  const expectedTotal = 0;
  const total = getWordsTotal(text);

  if (expectedTotal === total) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test2();

const test3 = (): void => {
  const text = "Hello";
  const expectedTotal = 1;
  const total = getWordsTotal(text);

  if (expectedTotal === total) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test3();

const test4 = (): void => {
  const text = "Hello world";
  const expectedTotal = 2;
  const total = getWordsTotal(text);

  if (expectedTotal === total) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test4();

const test5 = (): void => {
  const text = "0";
  const expectedTotal = 1;
  const total = getWordsTotal(text);

  if (expectedTotal === total) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test5();

const test6 = (): void => {
  const text = "2025 ";
  const expectedTotal = 1;
  const total = getWordsTotal(text);

  if (expectedTotal === total) {
    console.log("Test passed ✅");
  } else {
    console.log("Test failed ❌");
  }
};

test6();
