// Closest elevator
function elevator(left, right, call) {
  if (call - left < call - right) {
    return 'left'
  } else return 'right'
}

console.log(elevator(0, 2, 0));
