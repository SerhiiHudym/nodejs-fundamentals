;// My own http library.

const PORT = process.env.PORT || 8080;
const Application = require("./framework/Application");
const userRouter = require("./src/user-router");
const jsonParser = require("./framework/parseJson");
const urlParser = require("./framework/parseUrl");
const mongoose = require("mongoose");

const app = new Application();

app.use(jsonParser);
app.use(urlParser("http://localhost:8080"));

app.addRouter(userRouter);

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        app.listen(PORT, () => { console.log("Server started on PORT: " + PORT + "."); });
    } catch (err) {
        console.log(err);
    }
}

start();