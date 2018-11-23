function wave(someString){
  const stringLength = someString.replace(/\s/g,'').length;
  
  console.log(stringLength);
  const newArr = Array.apply(null, Array(stringLength)).map(function () {});
  
  const finalArr = newArr.map((elem, index) => {
      //if (someString.substring(index, index) !== ' ') {
        return capitalazeLetter(someString, index + 1);
      //}      
    });
  
  return finalArr;
}

function capitalazeLetter(text, index){
  const newText = text.substring(0, index - 1) + text.substring(index - 1, index).toUpperCase() + text.substring(index, text.length) ;
  return newText;
}