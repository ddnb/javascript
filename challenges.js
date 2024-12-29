// // import
// import DoorPassword from './classes/challenges/DoorPassword.js';
// import { FreelancerRates } from './classes/challenges/FreelancerRates.js';
// import { HelloWorld } from './classes/challenges/HelloWorld.js';
// import { Strings } from './classes/Strings.js';

// // Call the static method 'greet' directly on the class
// HelloWorld.greet(); // Default greeting
// HelloWorld.greet('Javascript'); // Custom greeting

// // Challenge #12: Juice Bar Helper
// // Challegne #14: Leader Board
// // Challenge #16: Rollercoaster Tycoon
// // Challenge #20: Lucky Number

// // Challenge #22: https://github.com/ddnb/javascript/issues/22


// // export
// export { DoorPassword };
// export { FreelancerRates };
// export { HelloWorld };
// export { Strings};

// import
import DoorPassword from './classes/challenges/DoorPassword.js';
import { FreelancerRates } from './classes/challenges/FreelancerRates.js';
import { HelloWorld } from './classes/challenges/HelloWorld.js';
import { Strings } from './classes/Strings.js';

// Call the static method 'greet' directly on the class
HelloWorld.greet(); // Default greeting
HelloWorld.greet('Javascript'); // Custom greeting

// export
export { DoorPassword };
export { FreelancerRates };
export { HelloWorld };
export { Strings };

// TODO
// Challenge #01: 
// Challenge #02:
// Challenge #03:
// Challenge #04:
// Challenge #05:
// Challenge #06:
// Challenge #07:
// Challenge #08:
// Challenge #09:
// Challenge #10:
// Challenge #11:
// Challenge #13:
// Challenge #15:
// Challenge #17:
// Challenge #18:
// Challenge #19:
// Challenge #21:

// Challenge #12: Juice Bar Helper
import { timeToMixJuice, limesToCut, remainingOrders } from './modules/challenges/JuiceBarHelperModule.js';
const timeToMixJuiceInput = 'Green Garden';
const limesToCutInput = [ 'small', 'medium', 'large', 'medium' ];
const remainingOrdersInput = [ 'Green Garden', 'Tropical Island', 'All or Nothing' ];
console.log(`Challenge 12 - Juice Bar Helper: timeToMixJuice(${timeToMixJuiceInput}) => ${timeToMixJuice(timeToMixJuiceInput)}`);
console.log(`Challenge 12 - Juice Bar Helper: limesToCut(${JSON.stringify(limesToCutInput)}) => ${limesToCut(24, limesToCutInput)}`);
console.log(`Challenge 12 - Juice Bar Helper: remainingOrders(${JSON.stringify(remainingOrdersInput)}) => ${remainingOrders(8, remainingOrdersInput)}`);

// Challenge #14: Leader Board
import { createScoreBoard, addPlayer, removePlayer, updateScore, applyMondayBonus } from './modules/challenges/LeaderBoardModule.js';
const createScoreBoardOutput = createScoreBoard();
console.log(`Challenge 14 - Leader Board: createScoreBoard() => ${JSON.stringify(createScoreBoardOutput)}`);
const addPlayerInput = [ 'The Best Ever', 'The Worst Ever', 'The Average Ever' ];
const addPlayerOutput = addPlayer(createScoreBoardOutput, addPlayerInput[1], 0);
console.log(`Challenge 14 - Leader Board: addPlayer(${JSON.stringify(addPlayerInput)}) => ${JSON.stringify(addPlayerOutput)}`);
const removePlayerInput = [ 'The Best Ever', 'The Average Ever' ];
const removePlayerOutput = removePlayer(addPlayerOutput, removePlayerInput[1]);
console.log(`Challenge 14 - Leader Board: removePlayer(${JSON.stringify(removePlayerInput)}) => ${JSON.stringify(removePlayerOutput)}`);
const updateScoreInput = [ 'The Best Ever', 100 ];
const updateScoreOutput = updateScore(removePlayerOutput, updateScoreInput[0], updateScoreInput[1]);
console.log(`Challenge 14 - Leader Board: updateScore(${JSON.stringify(updateScoreInput)}) => ${JSON.stringify(updateScoreOutput)}`);
const applyMondayBonusOutput = applyMondayBonus(updateScoreOutput);
console.log(`Challenge 14 - Leader Board: applyMondayBonus() => ${JSON.stringify(applyMondayBonusOutput)}`);

// Challenge #16: Rollercoaster Tycoon
import { createVisitor, revokeTicket, ticketStatus, simpleTicketStatus } from './modules/challenges/RollercoasterTycoonModule.js';
const createVisitorInput = [ 'John Doe', 30, '123456' ];
const createVisitorOutput = createVisitor(...createVisitorInput);
console.log(`Challenge 16 - Rollercoaster Tycoon: createVisitor(${JSON.stringify(createVisitorInput)}) => ${JSON.stringify(createVisitorOutput)}`);
const revokeTicketOutput = revokeTicket(createVisitorOutput);
console.log(`Challenge 16 - Rollercoaster Tycoon: revokeTicket() => ${JSON.stringify(revokeTicketOutput)}`);
const ticketStatusInput = [ { '123456   ': 'John Doe  ' }, '123456' ];
const ticketStatusOutput = ticketStatus(...ticketStatusInput);
console.log(`Challenge 16 - Rollercoaster Tycoon: ticketStatus(${JSON.stringify(ticketStatusInput)}) => ${ticketStatusOutput}`);
const simpleTicketStatusOutput = simpleTicketStatus(...ticketStatusInput);
console.log(`Challenge 16 - Rollercoaster Tycoon: simpleTicketStatus(${JSON.stringify(ticketStatusInput)}) => ${simpleTicketStatusOutput}`);

// Challenge #20: Lucky Number
import { luckyNumber } from './modules/challenges/LuckyNumbersModule.js';
const luckyNumberInput = 7;
console.log(`Challenge 20 - Lucky Number: luckyNumber(${luckyNumberInput}) => ${luckyNumber(luckyNumberInput)}`);

// Challenge #22: https://github.com/ddnb/javascript/issues/22
import { getFirstCard, getSecondCard, swapTopTwoCards, discardTopCard } from './modules/challenges/enchantments.js';  
console.log(`Challenge 22 - Enchantments: getFirstCard([3]) => ${getFirstCard([3])}`);
console.log(`Challenge 22 - Enchantments: getSecondCard([10, 4]) => ${getSecondCard([10, 4])}`);
console.log(`Challenge 22 - Enchantments: swapTopTwoCards([3, 6]) => ${swapTopTwoCards([3, 6])}`);
console.log(`Challenge 22 - Enchantments: discardTopCard([7]) => ${discardTopCard([7])}`);