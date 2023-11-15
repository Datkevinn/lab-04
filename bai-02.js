const carsArray = [
  { name: "BMW", color: "Red", capacity: 4 },
  { name: "Audi", color: "Green", capacity: 8 },
  { name: "BMW", color: "Blue", capacity: 6 },
  { name: "Merc", color: "Green", capacity: 4 },
];

function listOutBMWCars(arr) {
  // Liệt kê các loại xe BMW trong mảng.
  return arr.filter((car) => car.name === "BMW");
}

function sumCarCapacities(arr) {
  // Tính tổng các sức chứa của tất cả các xe trong mảng.
  return arr.reduce((sum, car) => sum + car.capacity, 0);
}

function countGreenCars(arr) {
  // Đếm số lượng xe có màu xanh lá trong mảng.
  return arr.filter((car) => car.color === "Green").length;
}

function findMaxCapacity(arr) {
  // Tìm xe có sức chứa lớn nhất trong mảng.
  const maxCapacityCar = arr.reduce(
    (maxCar, car) => (car.capacity > maxCar.capacity ? car : maxCar),
    arr[0]
  );
  return maxCapacityCar;
}

function sortDescending(arr) {
  // Sắp xếp mảng số nguyên tăng dần theo sức chứa.
  return arr.slice().sort((a, b) => a.capacity - b.capacity);
}

function sortAscending(arr) {
  // Sắp xếp mảng số nguyên giảm dần theo tên xe.
  return arr.slice().sort((a, b) => a.name.localeCompare(b.name));
}


console.log("Các loại xe BMW:", listOutBMWCars(carsArray));
console.log("Tổng sức chứa của các xe:", sumCarCapacities(carsArray));
console.log("Số lượng xe màu xanh lá:", countGreenCars(carsArray));
console.log("Xe có sức chứa lớn nhất:", findMaxCapacity(carsArray));
console.log(
  "Mảng số nguyên tăng dần theo sức chứa:",
  sortDescending(carsArray)
);
console.log("Mảng số nguyên giảm dần theo tên xe:", sortAscending(carsArray));
