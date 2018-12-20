const filteredData = require("./filteredSojs18.json");

const arrayOfSkills = [
  "java_script_flavors_reason",
  "java_script_flavors_clojure_script",
  "java_script_flavors_elm",
  "java_script_flavors_flow",
  "java_script_flavors_type_script",
  "java_script_flavors_es_6",
  "front_end_react",
  "front_end_angular",
  "front_end_ember",
  "front_end_polymer",
  "front_end_vue_js",
  "front_end_preact",
  "data_layer_redux",
  "data_layer_graph_ql",
  "data_layer_relay",
  "data_layer_apollo",
  "data_layer_mobx",
  "back_end_meteor",
  "back_end_express",
  "back_end_next_js",
  "back_end_koa",
  "back_end_sails",
  "back_end_feathers",
  "testing_storybook",
  "testing_mocha",
  "testing_jasmine",
  "testing_jest",
  "testing_enzyme",
  "testing_ava",
  "testing_karma",
  "mobile_desktop_electron",
  "mobile_desktop_react_native",
  "mobile_desktop_phone_gap_cordova",
  "mobile_desktop_native_script",
  "mobile_desktop_ionic",
  "mobile_desktop_native_apps"
];

const indiaData = filteredData.filter(
  item => item.about_you_your_country === "India"
);

const useMap = {
  worksOn: "👍 Used it > Would use again",
  alsoWorksOn: "👎 Used it > Would avoid",
  interested: "✅ Heard of it > Would like to learn"
};

/**
 * This function will return list of `n` top skills from the given data
 *
 * @param {*} data
 * @param {Array<string>} skills
 * @param {*} useMap
 * @param {number} n
 */
const findTopNSkills = (data, skills, useMap, n) => {
  // For every skill we will find the no of users interested and working
  const interestedMap = {};
  const worksMap = {};
  data.forEach((element, i) => {
    skills.forEach(skill => {
      if (
        element[skill] === useMap["worksOn"] ||
        element[skill] === useMap["alsoWorksOn"]
      ) {
        worksMap[skill]
          ? (worksMap[skill] = worksMap[skill] + 1)
          : (worksMap[skill] = 1);
      }
      if (element[skill] === useMap["interested"]) {
        interestedMap[skill]
          ? (interestedMap[skill] = interestedMap[skill] + 1)
          : (interestedMap[skill] = 1);
      }
    });
  });
  const interestedArr = [];
  for (const key in interestedMap) {
    interestedArr.push([key, interestedMap[key]]);
  }
  interestedArr.sort(function(a, b) {
    return b[1] - a[1];
  });
  const worksArr = [];
  for (const key in interestedMap) {
    worksArr.push([key, worksMap[key]]);
  }
  worksArr.sort(function(a, b) {
    return b[1] - a[1];
  });
  return {
    top3Interests: interestedArr
      .slice(0, 3)
      .map(arrEntry => ({ skill: arrEntry[0], weight: arrEntry[1] })),
    top3Skills: worksArr
      .slice(0, 3)
      .map(arrEntry => ({ skill: arrEntry[0], weight: arrEntry[1] }))
  };
};

const result = findTopNSkills(indiaData, arrayOfSkills, useMap, 3);

debugger;
