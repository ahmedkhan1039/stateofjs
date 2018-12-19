function salariesMap(data) {
  const salariesMap = {};
  const salaries = [];
  data.forEach(item => {
    if (
      item.about_you_your_country &&
      item.about_you_your_country.toLowerCase().trim() === "india" &&
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
  
  const medianCategory = Object.keys(salariesMap).reduce((highest, category) => salariesMap[category] > highest ? salariesMap[category] : highest, 0)
  salariesMap["median"] = medianCategory
  return salariesMap
}

// Write Category Tests
const categoryTest = (salariesMap, category) => salariesMap["median"] === category ? true : false