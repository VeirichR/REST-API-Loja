import app from "./src/app.js";
const port = 4010 || process.end.PORT;


app.listen(port, () => {
    console.log(`Escutando em http://localhost:${port}`);
})
