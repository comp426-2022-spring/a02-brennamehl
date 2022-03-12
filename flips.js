import { coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";
const args = minimist(process.argv.slice(2))
args['number']
const num = args.number || 1
let flips = coinFlips(num)
console.log(flips)
console.log(countFlips(flips))