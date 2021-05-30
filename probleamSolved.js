
// All Probleam Solving Here //


// kilometer To Meter convert //

function kilometerToMeter(kilometer) {
    // 1 kilometer equal 1000 meter
    let meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(10);
console.log(result)


// budgetCalculator Gadget Total Cost //

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
console.log("Total Gadgets Cost Is =", numbersOfItems);


// 3. hotelCost Total Hotel Cost //

function hotelCost (days) {
  let totalCost = 0;
  if (days <= 10) {
      // total cost is here
      totalCost = days * 100;
  } else if (days <= 20) {
      // store (1-10) days cost
      let firstTen = 10 * 100;
      let remaining = days - 10;
      let secondTen = remaining * 80;
      // total cost is here
      totalCost = firstTen + secondTen;
  } else {
      let firstTen = 10 * 100;
      // store (11-20) days cost
      let secondTen = 10 * 80;
      let remaining = days - 20;
      let thirdpart = remaining * 50;
      // total cost is here
      totalCost = firstTen + secondTen + thirdpart
  }
  return totalCost;
}

var totalHotelCost = hotelCost(25);
console.log("Total Hotel Cost is", totalHotelCost)



// 4. megaFriend Find Array to longest word //

function megaFriend(friendsName) {
  let maxWord = "";
  for (let i = 0; i < friendsName.length; i++) {
    if (friendsName[i].length > maxWord.length) {
      maxWord = friendsName[i];
    }
  }
  return maxWord;
}

var longestWord = megaFriend(["elon-musk", "bill-gates", "messi" , "mark-zuckerberg", "alienBoltu", "sakib"])
console.log(longestWord);
