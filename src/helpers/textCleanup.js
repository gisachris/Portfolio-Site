// Text cleanUp for Recommendations Description

const textCleanup = (text, num, additional) => {
  // Remove HTML comments
  const procedureOne = text.replace(/<!---->/g, '');

  // Remove extra line breaks
  const procedureTwo = procedureOne.replace(/\s*<br>\s*/g, '\n');

  // chop text
  let finalText = '';

  if(additional){
    finalText = procedureTwo.slice(0, num) + additional;
  }else {
    finalText = procedureTwo.slice(0, num);
  }
  

  return finalText; 
}

export default textCleanup;