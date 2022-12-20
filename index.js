let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    let firstTwo = drivers.slice(0, 2);
    return firstTwo;
}

returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function() {
    let lastTwo = drivers.slice(2, 4);
    return lastTwo;
}

returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    let fare;
    return function(fare) {
      return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

console.log(fareDoubler(200))
console.log(fareTripler(500));

function selectDifferentDrivers(arrayOfDrivers, callback) {
  return callback(arrayOfDrivers);
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(returnLastTwoDrivers));


/* describe('selectDifferentDrivers(arrayOfDrivers, function)', function () {
  it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
    expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Antonia', 'Nuru']);
  });

  it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function () {
    expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Amari', 'Mo']);
  });
});
});
 */