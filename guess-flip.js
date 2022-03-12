import{coinFlip, flipACoin} from "./modules/coin.mjs"
import minimist from "minimist"
const args = minimist(process.argv.slice(2))
args['call']
const guess = args.call
if(!(guess === 'heads' || guess === 'tails')){
    console.error("Error: no input")
}
else{
    console.log(flipACoin(guess))
}