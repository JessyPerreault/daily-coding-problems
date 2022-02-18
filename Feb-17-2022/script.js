
let numbers = [10, 15, 3, 7]
numbers.forEach(addToK);

function addToK(item, index, arr){
    let k = 30;
    arr[index] = item + item;
    // console.log(item);
    if(arr[index] === k){
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(arr[index]);
}
