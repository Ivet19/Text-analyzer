const totalsFilter = document.querySelector(
  ".filter_totals"
) as HTMLInputElement;

totalsFilter.addEventListener("change", () => {
  if (totalsFilter.checked) {
    document
      .querySelector(".analysis__item.totals")
      ?.classList.add("show_inside");
  } else {
    document
      .querySelector(".analysis__item.totals")
      ?.classList.remove("show_inside");
  }
});

const shortWordsFilter = document.querySelector(
  ".filter_short-words"
) as HTMLInputElement;

shortWordsFilter.addEventListener("change", () => {
  if (shortWordsFilter.checked) {
    document
      .querySelector(".analysis__item.short")
      ?.classList.add("show_inside");
  } else {
    document
      .querySelector(".analysis__item.short")
      ?.classList.remove("show_inside");
  }
});

const frequenciesFilter = document.querySelector(
  ".filter_frequencies"
) as HTMLInputElement;

frequenciesFilter.addEventListener("change", () => {
  if (frequenciesFilter.checked) {
    document
      .querySelector(".analysis__item.frequencies")
      ?.classList.add("show_inside");
  } else {
    document
      .querySelector(".analysis__item.frequencies")
      ?.classList.remove("show_inside");
  }
});

const reversedTextFilter = document.querySelector(
  ".filter_reversed-text"
) as HTMLInputElement;

reversedTextFilter.addEventListener("change", () => {
  if (reversedTextFilter.checked) {
    document
      .querySelector(".analysis__item.reversed-text")
      ?.classList.add("show_inside");
  } else {
    document
      .querySelector(".analysis__item.reversed-text")
      ?.classList.remove("show_inside");
  }
});

const forbiddenWordsFilter = document.querySelector(
  ".filter_forbidden-words"
) as HTMLInputElement;

forbiddenWordsFilter.addEventListener("change", () => {
  if (forbiddenWordsFilter.checked) {
    document
      .querySelector(".analysis__item.forbidden")
      ?.classList.add("show_inside");
  } else {
    document
      .querySelector(".analysis__item.forbidden")
      ?.classList.remove("show_inside");
  }
});

const camelCaseFilter = document.querySelector(
  ".filter_camel-case"
) as HTMLInputElement;

camelCaseFilter.addEventListener("change", () => {
  if (camelCaseFilter.checked) {
    document
      .querySelector(".analysis__item.camel-case")
      ?.classList.add("show_inside");
  } else {
    document
      .querySelector(".analysis__item.camel-case")
      ?.classList.remove("show_inside");
  }
});
