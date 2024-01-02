let clock = document.getElementById("clock");

setInterval(() => {
  let now = new Date();
  clock.textContent = ("0" + now.getHours()).substr(-2) + ":" + ("0" + now.getMinutes()).substr(-2) + ":" + ("0" + now.getSeconds()).substr(-2);
}, 300);