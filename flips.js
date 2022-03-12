import { coinFlip, coinFlips } from "./modules/coin.mjs";
import minimist from "minimist";
const args = minimist(process.argv.slice(2))
args['number']
const num = args.number || 1
console.log(coinFlips(num))
