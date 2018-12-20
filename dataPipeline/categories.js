const data = require("./data/sojs18.json");

const categoryMap = {
  "$0-$10k": 1,
  "$10k-$30k": 2,
  "$30k-$50k": 3,
  "$50k-$100k": 4,
  "$100k-$200k": 5,
  "$200k+": 6,
};

/**
 * Takes data and returns an Object which contains each category as key and
 * frequency as value.
 *
 * @param {Array<rows>} data
 * @returns {Object}
 */
function getSalariesMap(data) {
  const salariesMap = {};
  const salaries = [];
  data.forEach(item => {
    if (
      item.about_you_yearly_salary
    ) {
      salaries.push(item.about_you_yearly_salary);
    }
  });

  salaries.forEach(item =>
    salariesMap[item]
      ? (salariesMap[item] = salariesMap[item] + 1)
      : (salariesMap[item] = 1)
  );

  return salariesMap;
}

/**
 * Takes the salaries map and category to determine the 
 * payscale of the said person or row.
 *
 * @param {*} salariesMap
 * @param {*} category
 * @returns {mean | high | low}
 */
const testCategory = (salariesMap, category) => {
  const modeValue = salariesMap["mode"];
  if (categoryMap[category] === modeValue) {
    return "mean";
  }
  if (categoryMap[category] > modeValue) {
    return "high";
  }
  return "low";
};


function getSalaryRanges(data) {
  const salariesMap = getSalariesMap(data);
  const ranges = Object.keys(salariesMap).filter(key => key.includes("-"));
  const rangesAcc = ranges.map(range => {
    const [low, high] = range.split("-");

    return {
      low: parseInt(low.slice(1)) * salariesMap[range],
      high: parseInt(high.slice(1)) * salariesMap[range],
      weight: salariesMap[range]
    };
  });

  const rangeSum = rangesAcc.reduce(
    (sum, range) => ({
      low: range.low + sum.low,
      high: range.high + sum.high,
      weight: range.weight + sum.weight
    }),
    { low: 0, high: 0, weight: 0 }
  );
  const medianOfRanges =
    (rangeSum.high / rangeSum.weight + rangeSum.low / rangeSum.weight) / 2;

  const meanRange = ranges.find(range => {
    const [low, high] = range.split("-");

    return (
      medianOfRanges < parseInt(high.slice(1)) &&
      medianOfRanges > parseInt(low.slice(1))
    );
  });
  
  return meanRange;
}

getSalaryRanges(data);
