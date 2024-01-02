let counter = 0;

const increment = () => {
  ++counter;
  document.getElementById("counter").innerHTML = counter;
}

const decrement = () => {
  if (counter > 0) {
    --counter;
    document.getElementById("counter").innerHTML = counter;
  }
}

const reset = () => {
  counter = 0;
  document.getElementById("counter").innerHTML = counter;
}