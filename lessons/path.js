const path = require("path");

console.log(__dirname); // Абсолютный путь к папке, где находится файл
console.log(__filename); // Абсолютный файл к файлу
console.log(path.join(__dirname, "..", "..")); // Переход на папку выше. Можно работать как в терминале

const siteURL = "http://localhost:8080/users?id=5123";
const url = new URL(siteURL);
console.log(url);