



/*

1. kilometerToMeter.
2. budgetCalculator.
3. hotelCost.
4. megaFriend.

*/

// All Probleam Solving Here //


// kilometerToMeter convert //

function kilometerToMeter(kilometer) {
    // 1 kilometer equal 1000 meter
    let meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(10);
console.log(result)


// budgetCalculator //

function budgetCalculator(watch, mobile, leptop) {
    // items (multiply) watch price
    let watchPrice = 50 * watch;
    let mobilePrice = 100 * mobile;
    let leptopPrice = 500 * leptop;
    // total cost
    let totalCost = (watchPrice + mobilePrice + leptopPrice);
    return totalCost;   
}

var numbersOfItems = budgetCalculator(2, 5, 2);
console.log('Total Gadgets Cost Is =', numbersOfItems);


// 3. hotelCost //

function hotelCost (days) {
  let totalCost;
  if (days <= 10) {
      totalCost = 100 * days;
  } else if (days <= 20) {
      totalCost = 80 * days;
  } else {
      totalCost = 50 * days;
  }
  return totalCost;
}

var totalHotelCost = hotelCost(20);
console.log('Total Hotel Cost is', totalHotelCost)


// 4. megaFriend //

function megaFriend(friendsName) {
  let maxWord = "";
  for (let i = 0; i < friendsName.length; i++) {
    if (maxWord.length < friendsName[i].length) {
      maxWord = friendsName[i];
    }
  }
  return maxWord;
}

var largeWord = megaFriend(['elon-musk', 'bill-gates', 'messi' , 'mark-zuckerberg', 'alienBoltu', 'sakib'])
console.log(largeWord);
