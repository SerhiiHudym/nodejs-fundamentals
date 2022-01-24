const os = require("os");
const cluster = require("cluster");

// console.log(os.platform()); // returns type of os like linux, win32 etc.
// console.log(os.arch()); // returns architecture of os like x32 or x64
// console.log(os.cpus()); // returns an array with info about cores of the processor

// if (cluster.isMaster) {
//     for (let i = 0; i < os.cpus().length - 2; i++) { // -2 is to leave some cores to do OS tasks
//         cluster.fork();
//     }
//     cluster.on("exit", (worker) => {
//         console.log(`Worker with pid=${worker.process.pid} is dead.`);
//         cluster.fork();
//     })
// } else {
//     console.log(`Worker with pid=${process.pid} works.`);

//     setInterval(() => {
//         console.log(`Worker with pid=${process.pid} still works.`);
//     }, 5000);
// }


// Маштабировать NodeJS приложения можно по разному. Через балансировщики, кластеризацию, докер контейнеры.