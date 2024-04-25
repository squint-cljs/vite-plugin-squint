import { compileString } from "squint-cljs/compiler/node";

console.log((await compileString('(+ 1 2 3)')).javascript);
