import { coinFlip, coinFlips } from "./modules/coin.mjs";
const args = require('minimist')(process.argv.slice(2))
args['number']
const num = args.number
console.log(num)
if(num>=1){
    console.log(coinFlips(num))
}
else{
    console.log(coinFlips(1))
}
