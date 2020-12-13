import start from "./src/scraper.js";
import processor from "./src/processor.js";
console.log("The web scraper has been started!")
start(processor).then((result) => {
    console.log(result);
    process.exit()
}).catch(error => {
    process.exitCode = 1;
    throw new Error(error)
});
