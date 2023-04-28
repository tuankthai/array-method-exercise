// Prompt: Write a function that removes the last element of an array and returns it.
const array = [1,2,3,4,5,6,7,8];

function removeLastElement(arr) {
    // TODO: Implement the logic here
  let item = arr.pop();
  console.log("item:", item,  "array: ", arr);
  return item;
  }
  
removeLastElement(array)

// Prompt: Write a function that adds an element to the end of an array and returns the new length of the array.
function addElementToEnd(arr, element) {
    // TODO: Implement the logic here
  arr.push(element);
  console.log("array: ", arr)
}
  
addElementToEnd(array,5)

// Prompt: Write a function that removes the first element of an array and returns it.
function removeFirstElement(arr) {
    // TODO: Implement the logic here
  arr.shift();
  console.log("array: ", arr)
  
  }
removeFirstElement(array);
  
// Prompt: Write a function that adds an element to the beginning of an array and returns the new length of the array.
function addElementToBeginning(arr, element) {
    // TODO: Implement the logic here
  arr.unshift(element);
  console.log("array: ", arr)

}
addElementToBeginning(array, 9);
  
// Prompt: Write a function that returns a section of an array based on a start and end index.
function getArraySection(arr, start, end) {
    // TODO: Implement the logic here
  const new_arr = arr.slice(start, end);
  console.log("new array: ", new_arr)
}
  
getArraySection(array, 1, 3);

// Prompt: Write a function that removes a section of an array and returns the removed elements.
function removeArraySection(arr, start, end) {
    // TODO: Implement the logic here
  const rmved_items = arr.splice(start, end);
  console.log("rmved items: ", rmved_items, "array: ", arr)
  
  }
removeArraySection(array, 1, 3);