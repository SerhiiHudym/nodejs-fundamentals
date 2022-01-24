// !!! stream !== thread !!!

// In NodeJS there is 4 types of streams:
// 1. Readable - чтение
// 2. Writable - запись
// 3. Duplex - для чтения и записи
// 4. Transform - такой же, как duplex, но может изменять данные по мере чтения

const fs = require("fs");
const path = require("path");

// fs.readFile(path.resolve(__dirname, "bigFile.txt"), (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// ======== READ STREAM ========
// Один чанк по дефолту 64кб
// const stream = fs.createReadStream(path.resolve(__dirname, "bigFile.txt"), {encoding: "utf-8"});
// stream.on("data", (chunk) => {
//     console.log(chunk);
// });

// stream.on("open", () => {
//     console.log("Stream started reading file.");
// });

// stream.on("close", () => {
//     console.log("Stream finished reading file.");
// });

// stream.on("error", (error) => {
//     console.log(error);
// });
// ======== END OF READ STREAM ========


// ======== WRITE STREAM ========
// const writeStream = fs.createWriteStream(path.resolve(__dirname, "bigText2.txt"));
// for (let i = 0; i < 20; i++) {
//     writeStream.write(i + "\n");
// }
// writeStream.end();
// writeStream.close();
// writeStream.destroy();
// ======== END OF WRITE STREAM ========

const http = require("http");

http.createServer((req, res) => {
    // req - readable stream
    // res - writable stream
    // res.on("close"); // etc
    const stream = fs.createReadStream(path.resolve(__dirname, "bigFile.txt"), {encoding: "utf-8"});

    // В таком случае пользователь может не успеть выкачать данные, так как скорость чтения кораздо выше сетевых возможностей
    // stream.on("data", chunk => res.write(chunk));
    // stream.on("end", () => res.end());

    // Правильно через пайп
    stream.pipe(res);
});