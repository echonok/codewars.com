function wave(someString){
  const stringLength = someString.length;
  
  const newArr = Array.apply(null, Array(5)).map(function () {});
  console.log(newArr);

  const finalArr = newArr.map((elem, index) => capitalezeLetter(someString, index + 1));
  console.log(finalArr);
}

function capitalezeLetter(text, index){
  const newText = text.substring(0, index - 1) + text.substring(index - 1, index).toUpperCase() + text.substring(index, text.length) ;
  return newText;
}
