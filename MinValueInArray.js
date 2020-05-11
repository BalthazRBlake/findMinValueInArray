const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]

let min = findMinValueInArray(arr)
alert(min)
//console.log(min)

function findMinValueInArray(arr) {
  let min = arr[0]

  arr.forEach(number => {
    if (min > number) {
      min = number
    }
  })

  return min
}
