const htmlCreator = (text) => {
  const escapeRegex = /[\r\n]/g;
  return text.split(escapeRegex).filter((item) => item.length > 1);
};

const removeIndex = (instructions, regex) => {
  return instructions.replace(regex, "");
};

const removeSteps = (instructions, regex) => {
  return instructions.replace(regex, "");
};

const filterInstructions = (instructions) => {
  const stepRegex = /(step[s]?\s[0-9]?[0-9]?[\r\n\s]?)/gi;
  const indexRegex = /([0-9][.]?[\r\n\s]?)/g;

  let filteredText;

  if (stepRegex.test(instructions)) {
    filteredText = removeSteps(instructions, stepRegex);
  } else if (indexRegex.test(instructions)) {
    filteredText = removeIndex(instructions, indexRegex);
  }

  return htmlCreator(filteredText);
};

export default filterInstructions;
