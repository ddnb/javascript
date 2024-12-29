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

// Challenge #23: https://github.com/ddnb/javascript/issues/23
import { translate2d, scale2d, composeTransform, memoizeTransform } from './modules/challenges/coordinate-transformation.js';
const dx = 3;
const dy = -5;
const x1 = 0;
const y1 = 0;
const expected = [3, -5];
const translator = translate2d(dx, dy);
console.log(`Challenge 23 - Coordinate Transformation: translate2d(${dx}, ${dy})(${x1}, ${y1}) => ${translator(x1, y1)}`);
const x2 = 4;
const y2 = 5;
const reusedExpected = [7, 0];
console.log(`Challenge 23 - Coordinate Transformation: translate2d(${dx}, ${dy})(${x2}, ${y2}) => ${translator(x2, y2)}`);
const dx2 = 4;
const dy2 = 2;
const x12 = 1;
const y12 = 1;
const expected2 = [4, 2];
const scaler = scale2d(dx2, dy2);
console.log(`Challenge 23 - Coordinate Transformation: scale2d(${dx2}, ${dy2})(${x12}, ${y12}) => ${scaler(x12, y12)}`);
const x22 = -2;
const y22 = 5;
const reusedExpected2 = [-8, 10];
console.log(`Challenge 23 - Coordinate Transformation: scale2d(${dx2}, ${dy2})(${x22}, ${y22}) => ${scaler(x22, y22)}`);
const composedTransform = composeTransform(translator, scaler);
console.log(`Challenge 23 - Coordinate Transformation: composeTransform(translate2d, scale2d)(${x1}, ${y1}) => ${composedTransform(x1, y1)}`);
const memoizedTransform = memoizeTransform(composedTransform);
console.log(`Challenge 23 - Coordinate Transformation: memoizeTransform(composeTransform)(${x1}, ${y1}) => ${memoizedTransform(x1, y1)}`);
console.log(`Challenge 23 - Coordinate Transformation: memoizeTransform(composeTransform)(${x1}, ${y1}) => ${memoizedTransform(x1, y1)}`);

// Challenge #24: https://github.com/ddnb/javascript/issues/24
import { notify, notifyIt } from './modules/challenges/notifier.js';
console.log(`Challenge 24 - Notifier: notifyIt('Hello, World!') => ${notifyIt('Hello, World!')}`);
import { order } from './modules/challenges/grocer.js';
import { onError, onSuccess, orderFromGrocer, postOrder } from './modules/challenges/fruit-picker.js';
const query = { variety: 'apple', quantity: 10 };
orderFromGrocer(query, onSuccess, onError);
console.log(`Challenge 24 - Notifier: orderFromGrocer(${JSON.stringify(query)}, onSuccess, onError)`);
const variety = 'banana';
const quantity = 5;
postOrder(variety, quantity);
console.log(`Challenge 24 - Notifier: postOrder(${variety}, ${quantity})`);

// Challenge #25: https://github.com/ddnb/javascript/issues/25
import { getCardPosition, doesStackIncludeCard, isEachCardEven, doesStackIncludeOddCard, getFirstOddCard, getFirstEvenCardPosition } from './modules/challenges/enchantments2.js';
console.log(`Challenge 25 - Enchantments 2: getCardPosition([1, 2, 3], 1) => ${getCardPosition([1, 2, 3], 1)}`);
console.log(`Challenge 25 - Enchantments 2: doesStackIncludeCard([1, 2, 3], 1) => ${doesStackIncludeCard([1, 2, 3], 1)}`);
console.log(`Challenge 25 - Enchantments 2: isEachCardEven([2, 4, 6]) => ${isEachCardEven([2, 4, 6])}`);
console.log(`Challenge 25 - Enchantments 2: doesStackIncludeOddCard([2, 5]) => ${doesStackIncludeOddCard([2, 5])}`);
console.log(`Challenge 25 - Enchantments 2: getFirstOddCard([2, 4, 1, 3]) => ${getFirstOddCard([2, 4, 1, 3])}`);
console.log(`Challenge 25 - Enchantments 2: getFirstEvenCardPosition([2, 4, 1, 3]) => ${getFirstEvenCardPosition([2, 4, 1, 3])}`);

// Challenge #26: https://github.com/ddnb/javascript/issues/26
import { cardTypeCheck, determineOddEvenCards } from './modules/challenges/enchantments-loop.js';
console.log(`Challenge 26 - Enchantments Loop: cardTypeCheck([1, 2, 3, 1, 1, 1], 1) => ${cardTypeCheck([1, 2, 3, 1, 1, 1], 1)}`);
console.log(`Challenge 26 - Enchantments Loop: determineOddEvenCards([1, 2, 3], isEven:false) => ${determineOddEvenCards([1, 2, 3], false)} not even cards`);
console.log(`Challenge 26 - Enchantments Loop: determineOddEvenCards([1, 2, 3], isEven:true) => ${determineOddEvenCards([1, 2, 3], true)} even cards`);

// Challenge #27: https://github.com/ddnb/javascript/issues/27
import { seeingDouble, threeOfEachThree, middleTwo, sandwichTrick, twoIsSpecial, perfectlyOrdered,  reorder  } from './modules/challenges/enchantments-transformative.js';
console.log(`Challenge 27 - Enchantments Transformative: seeingDouble([1, 2, 3, 4]) => ${seeingDouble([1, 2, 3, 4])}`);
console.log(`Challenge 27 - Enchantments Transformative: threeOfEachThree([3]) => ${threeOfEachThree([3])}`);
console.log(`Challenge 27 - Enchantments Transformative: middleTwo([1, 2, 3, 4]) => ${middleTwo([1, 2, 3, 4])}`);
console.log(`Challenge 27 - Enchantments Transformative: sandwichTrick([1, 2, 3, 4]) => ${sandwichTrick([1, 2, 3, 4])}`);
console.log(`Challenge 27 - Enchantments Transformative: twoIsSpecial() => ${twoIsSpecial([1, 2, 3, 4])}`);
console.log(`Challenge 27 - Enchantments Transformative: perfectlyOrdered([1, 2, 3, 4]) => ${perfectlyOrdered([1, 2, 3, 4])}`);
console.log(`Challenge 27 - Enchantments Transformative: reorder([1, 2, 3, 4]) => ${reorder([1, 2, 3, 4])}`);

// Challenge #28: https://github.com/ddnb/javascript/issues/28
import { pizzaPrice, orderPrice } from './modules/challenges/pizza-order.js';
console.log(`Challenge 28 - Pizza Order: pizzaPrice('Margherita') => ${pizzaPrice('Margherita')}`);
console.log(`Challenge 28 - Pizza Order: pizzaPrice('Formaggio') => ${pizzaPrice('Formaggio')}`);
console.log(`Challenge 28 - Pizza Order: pizzaPrice('Caprese') => ${pizzaPrice('Caprese')}`);
console.log(`Challenge 28 - Pizza Order: pizzaPrice('Margherita', 'ExtraSauce') => ${pizzaPrice('Margherita', 'ExtraSauce')}`);
console.log(`Challenge 28 - Pizza Order: pizzaPrice('Caprese', 'ExtraToppings') => ${pizzaPrice('Caprese', 'ExtraToppings')}`);
console.log(`Challenge 28 - Pizza Order: pizzaPrice('Formaggio', 'ExtraSauce', 'ExtraToppings') => ${pizzaPrice('Formaggio', 'ExtraSauce', 'ExtraToppings')}`);
console.log(`Challenge 28 - Pizza Order: pizzaPrice('Caprese', 'ExtraSauce', 'ExtraToppings') => ${pizzaPrice('Caprese', 'ExtraSauce', 'ExtraToppings')}`);
console.log(`Challenge 28 - Pizza Order: pizzaPrice('Caprese', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings') => ${pizzaPrice('Caprese', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings')}`);
const orders = [ { pizza: 'Margherita', extras: [] }, { pizza: 'Formaggio', extras: [ 'ExtraSauce' ] }, { pizza: 'Caprese', extras: [ 'ExtraToppings' ] } ];
console.log(`Challenge 28 - Pizza Order: orderPrice(${JSON.stringify(orders)}) => ${orderPrice(orders)}`);

// Challenge #29: https://github.com/ddnb/javascript/issues/29
import { buildBirthdaySign, graduationFor, costOf } from './modules/challenges/custom-signs.js';
console.log(`Challenge 29 - Custom Signs: buildBirthdaySign(49) => ${buildBirthdaySign(49)}`);
console.log(`Challenge 29 - Custom Signs: buildBirthdaySign(51) => ${buildBirthdaySign(51)}`);
console.log(`Challenge 29 - Custom Signs: graduationFor('Lehung IO', 2011) => ${graduationFor('Lehung IO', 2011)}`);
console.log(`Challenge 29 - Custom Signs: costOf('Happy Birthday!', 'dollars') => ${costOf('Happy Birthday!', 'dollars')}`);
console.log(`Challenge 29 - Custom Signs: costOf('Congratulations Kuromi\nClass of 2013', 'dollars') => ${costOf('Congratulations Kuromi\nClass of 2013', 'dollars')}`);
