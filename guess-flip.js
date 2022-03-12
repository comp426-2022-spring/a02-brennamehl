import{coinFlip, flipACoin} from "./modules/coin.mjs"
import minimist from "minimist"
const args = minimist(process.argv.slice(2))
args['guess']
const usrGuess = args.guess
if(!(usrGuess === 'heads' || usrGuess === 'tails')){
    console.error("Error: no input")
}
else{
    console.log(flipACoin(usrGuess))
}