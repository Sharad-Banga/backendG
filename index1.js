import fs from "fs";
import chalk from "chalk";

let content = fs.readFileSync("./a.txt" , "utf-8");


console.log(chalk.green(content));
