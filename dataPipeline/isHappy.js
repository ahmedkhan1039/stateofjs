/**
 * Takes the 6 opinionated values and returns if the person is happy or not
 * we use the happy index to denote if a person is happy 
 * happy index means > 2 happy and less than 2 not happy(doesn't means he is sad either) 
 * isOverlyComplex and isOverlyUsed are questions where we need to invert the scale i.e. 0 -> , 1 -> 3 
 * reverting scale => |value - 4| 
 * At the end we take average of all the scales and if resulting scale is > 3 its happy
 * @author {Ahmed Waleed}
 * 
 * @param {number} isRightDirection
 * @param {number} isOverlyComplex
 * @param {number} isOverused
 * @param {number} isJoyToUse
 * @param {number} beMainLanguage
 * @param {number} changingTooFast
 * 
 * @returns {boolean} isHappy 
 */
function isPersonHappy(isRightDirection, isOverlyComplex, isOverused, isJoyToUse, beMainLanguage, changingTooFast) {
  let happyCounter = 0
  let givenMetrics = 0
  const invertValue = (val) => Math.abs(val-4)
  if (isRightDirection) {
    happyCounter = happyCounter + isRightDirection
    givenMetrics = givenMetrics + 1
  }
  if (isJoyToUse) {
    happyCounter = happyCounter + isJoyToUse
    givenMetrics = givenMetrics + 1
  }
  if (beMainLanguage) {
    happyCounter = happyCounter + beMainLanguage
    givenMetrics = givenMetrics + 1
  }

  if (isOverlyComplex) {
    happyCounter = happyCounter + invertValue(isOverlyComplex)
    givenMetrics = givenMetrics + 1
  }
  if (isOverused) {
    happyCounter = happyCounter + invertValue(isOverused)
    givenMetrics = givenMetrics + 1
  }
  if (changingTooFast) {
    happyCounter = happyCounter + invertValue(changingTooFast)
    givenMetrics = givenMetrics + 1
  }
  
  return happyCounter / givenMetrics > 2
}
