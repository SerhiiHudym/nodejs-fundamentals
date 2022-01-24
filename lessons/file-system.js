const fs = require("fs");
const path = require("path");
const fsPromise = require("fs/promises"); // Need to check and learn.
const { resolve } = require("path");
const { rejects } = require("assert");

// fs.mkdirSync(path.resolve(__dirname, "dir"));
// fs.rmdirSync(path.resolve(__dirname, "dir"));

// fs.mkdirSync(path.resolve(__dirname, "dir", "dir2", "dir3"), {recursive: true});

// console.log("Start.");
// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log("Folder created.")
// })
// console.log("End.");

// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//     if (err) {
//         throw err;
//     }
// })

// fs.writeFile(path.resolve(__dirname, "text.txt"), "Hello, text.", () => {
//     if (err) {
//         throw err;
//     }
//     console.log("File created.")
// })

// fs.appendFile(path.resolve(__dirname, "text.txt"), "Additional text.", (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("File content updated.")
// })


// --------------------------------------------
const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) return reject(err.message);
            resolve();
        })
    })
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, (err) => {
            if (err) return reject(err.message);
            resolve();
        })
    })
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding: "utf-8"}, (err, data) => {
            if (err) return reject(err.message);
            resolve(data);
        })
    })
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err) => {
            if (err) return reject(err.message);
            resolve();
        })
    })
}


writeFileAsync(path.resolve(__dirname, "text.txt"), "First text.")
    .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "\nSecond text."))
    .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "\nThird text."))
    .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
    .then(data => console.log(data))
    .catch(err => console.log(err));

removeFileAsync(path.resolve(__dirname, "text.txt"))
    .then(() => console.log("File was removed."))
// --------------------------------------------

// Задача
// Через переменную окружения передать строку, записать её в файл
// прочитать файл, посчитать к-во слов в файле и записать их в новый файл
// count.txt, затем удалить первый файл
