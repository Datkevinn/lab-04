function listOutNegativeNumbers(arr) {
    // Liệt kê các số nguyên âm trong mảng.
    return arr.filter(num => num < 0);
}

function sumEvenPositiveNumbers(arr) {
    // Tính tổng các giá trị dương chẵn trong mảng.
    return arr.filter(num => num > 0 && num % 2 === 0).reduce((acc, num) => acc + num, 0);
}

function countOddSmallerThan10(arr) {
    // Đếm số lượng số lẻ nhỏ hơn 10 trong mảng.
    return arr.filter(num => num % 2 !== 0 && num < 10).length;
}

function findMaxPositiveNumbers(arr) {
    // Tìm giá trị nguyên dương nhỏ nhất trong mảng.
    const positiveNumbers = arr.filter(num => num > 0);
    return positiveNumbers.length === 0 ? null : Math.min(...positiveNumbers);
}

function sortDescending(arr) {
    // Sắp xếp mảng số nguyên giảm dần.
    return arr.slice().sort((a, b) => b - a);
}

function sortAscending(arr) {
    // Sắp xếp mảng số nguyên tăng dần.
    return arr.slice().sort((a, b) => a - b);
}


const arrayExample = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];

console.log("Danh sách số nguyên âm:", listOutNegativeNumbers(arrayExample));
console.log("Tổng các giá trị dương chẵn:", sumEvenPositiveNumbers(arrayExample));
console.log("Số lượng số lẻ nhỏ hơn 10:", countOddSmallerThan10(arrayExample));
console.log("Giá trị nguyên dương nhỏ nhất:", findMaxPositiveNumbers(arrayExample));
console.log("Mảng số nguyên giảm dần:", sortDescending(arrayExample));
console.log("Mảng số nguyên tăng dần:", sortAscending(arrayExample));
