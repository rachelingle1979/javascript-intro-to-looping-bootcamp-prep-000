function forLoop(array){
  for (let i = 0; i < 25; i++){
    array.push("I am " + i + " strange loops.");
  }
  return array;
}

function whileLoop(num){
  while (num > 0){
    console.log(--num);
  }
  return "done";
}