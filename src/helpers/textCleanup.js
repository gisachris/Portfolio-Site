// Text cleanUp for Recommendations Description

const textCleanup = (text) => {
  // Remove HTML comments
  const procedureOne = text.replace(/<!---->/g, '');

  // Remove extra line breaks
  const procedureTwo = procedureOne.replace(/\s*<br>\s*/g, '\n');

  // chop text
  const finalText = procedureTwo.slice(0, 400);

  return finalText; 
}

export default textCleanup;