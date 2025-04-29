// import process from 'node:process';
// console.log(`🚀 ~ process:`, process)
import { stdin, stdout, cwd } from "node:process";
import  saludar from "./saludar.js";
saludar()

stdout.write("🚀 ~");

stdin.on("data",async (data) => {
  // console.log(`🚀 ~ stdin.on ~ data:`, data)
  // console.log( data.toString().trim().length );
  const commands = data.toString().trim();
  if (commands === "pwd") {
    const pwd= cwd();
    stdout.write(`${pwd}\n`);
  }
  stdout.write("🚀 ~");
});
