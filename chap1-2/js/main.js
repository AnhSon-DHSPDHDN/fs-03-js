const height = prompt("Vui long nhap chieu cao (cm):");
console.log(height, "height ne");

const isValidNumber = Boolean(Number(height));

// Thanh 0.5
if (isValidNumber) {
  // Height is number
  const meter = parseInt(height / 100);
  const centimeter = height % 100;

  alert("Chieu cao cua Thanh la: " + meter + "m" + centimeter);
} else {
  alert("Nhap lai di ba!!!");
}
