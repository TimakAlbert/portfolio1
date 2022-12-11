const bar = document.getElementById("text");
const bar2 = document.getElementById("text2");
const bar3 = document.getElementById("text3");
const car = {
  brand: "Toyota",
  color: "red",
  units: 10,
  identity: function () {
    return `${this.color} ${this.brand}`;
  },
};
const staff = ["TJ", "Efe", "Kunmi", "Concord", "Justice"];

function mine() {
  bar.innerHTML = "This Line should change color on hover";
  bar3.innerHTML = `This is a ${car.identity()} and there are only ${
    car.units
  } available in Nigeria.`;

  let bar2 = "";
  let staffStrength = staff.length;
  for (let i = 0; i < staffStrength; i++) {
    bar2 += staff[i] + "<br>";
  }
  document.getElementById("text2").innerHTML = bar2;
}

function hov() {
  bar.style.color = "black";
}
function removeColor() {
  bar.style.color = "white";
}
