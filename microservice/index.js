const { app } = require("./src/app");
const PORT = 3008;

app.listen(PORT, () => {
    console.log(`Microservice is listening on PORT ${PORT}`);
})