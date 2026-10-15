import {Worker} from "node:worker_threads";
setInterval(() => console.log("tick"), 200);

// setTimeout(() => {
//     console.time("fib")
//     const result = fib(45)
//     console.timeEnd("fib")
//     console.log(result)
// }, 1000)


const worker = new Worker(new URL("./worker.ts", import.meta.url), { workerData: 45});
worker.on("message", (resultado:number) => console.log("Resultado:", resultado));
worker.on("error", (err) => console.error("Error en worker:", err));
worker.on("exit", (codigo) => console.log("Worker terminado. Código:", codigo));