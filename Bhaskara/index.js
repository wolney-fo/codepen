const calculate = () => {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  const delta = (b * b) - (4 * a * c);

  if (a == 0.0) {
    document.getElementById("result1").innerHTML = "Impossível resolver: A é 0";
    document.getElementById("result2").innerHTML = "";
  }
  else if (delta < 0) {
    document.getElementById("result1").innerHTML = "Impossível resolver: &Delta; < 0";
    document.getElementById("result2").innerHTML = "";
  }
  else {
    const result1 = (-b + Math.sqrt(delta)) / (2 * a);
    const result2 = (-b - Math.sqrt(delta)) / (2 * a);

    document.getElementById("result1").innerHTML = "X1 = " + result1.toFixed(7);
    document.getElementById("result2").innerHTML = "X2 = " + result2.toFixed(7);
  }
}