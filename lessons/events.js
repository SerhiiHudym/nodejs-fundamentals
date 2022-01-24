const Emitter = require("events");
const emitter = new Emitter();

emitter.on("message", (arg1, arg2) => {
    console.log(arg1, arg2);
});

const MESSAGE = process.env.MESSAGE || "";

if (MESSAGE) {
    emitter.emit("message", MESSAGE, 123);
} else {
    emitter.emit("message", "Message is empty.")
}

// emitter.addListener("event", callback);
// emitter.removeListener("event", callback);
// emitter.removeAllListeners();
// emitter.once("message", (arg1, arg2) => {
//     console.log(arg1, arg2);
// });

// Когда удобно использовать?
// http
// websockets
// long pulling
// clusters