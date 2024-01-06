let exp = document.getElementById("expr");
function show(num) {
  exp.value += num;
}
function equal() {
  try {
    exp.value = eval(exp.value);
  } catch (err) {
    alert("Enter a valid Expression");
  }
}
function Clear() {
  exp.value = "";
}
function del() {
  exp.value = exp.value.slice(0, -1);
}
