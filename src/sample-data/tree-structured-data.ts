type CategoryInformation = {
  category: string;
  range: {
    upperLimit: number; // Edit by AW - since everything is dollars using suffixes and string will make computations more complex
    lowerLimit: number; // Same as above
  };
  noOfPersons: number;
  worksOn: WorkingSkillAttributes[];
  attributes: Attributes;
};

type Attributes = {
  medianSalary: number;
  avgExperience: number;
  avgSkillsExplored: number;
  happyPeople: number; // out of 100
};

type GenericSkillAttributes = {
  skill: string;
  weightage: number;
  attributes: Attributes;
};

type InterestedSkillAttributes = GenericSkillAttributes;

type WorkingSkillAttributes = GenericSkillAttributes & {
  interests: InterestedSkillAttributes[];
};

const sampleData: CategoryInformation = {
  category: "HI",
  range: {
    lowerLimit: 15000,
    upperLimit: 20000
  },
  noOfPersons: 150,
  worksOn: [
    {
      skill: "Elm",
      weightage: 50,
      interests: [
        {
          skill: "Karma",
          weightage: 30,
          attributes: {
            medianSalary: 10000,
            avgExperience: 15,
            avgSkillsExplored: 13,
            happyPeople: 80 // Percentage rest of it are sadPeople
          }
        },
        {
          skill: "ClojureScript",
          weightage: 10,
          attributes: {
            medianSalary: 10000,
            avgExperience: 15,
            avgSkillsExplored: 13,
            happyPeople: 80 // Percentage
          }
        },
        {
          skill: "Polymer",
          weightage: 10,
          attributes: {
            medianSalary: 10000,
            avgExperience: 15,
            avgSkillsExplored: 13,
            happyPeople: 80 // Percentage
          }
        }
      ],
      attributes: {
        medianSalary: 10000,
        avgExperience: 15,
        avgSkillsExplored: 13,
        happyPeople: 80 // Percentage
      }
    },
    {
      skill: "React",
      weightage: 50,
      interests: [
        {
          skill: "Karma",
          weightage: 30,
          attributes: {
            medianSalary: 10000,
            avgExperience: 15,
            avgSkillsExplored: 13,
            happyPeople: 80 // Percentage
          }
        },
        {
          skill: "ClojureScript",
          weightage: 10,
          attributes: {
            medianSalary: 10000,
            avgExperience: 15,
            avgSkillsExplored: 13,
            happyPeople: 80 // Percentage
          }
        },
        {
          skill: "Polymer",
          weightage: 10,
          attributes: {
            medianSalary: 10000,
            avgExperience: 15,
            avgSkillsExplored: 13,
            happyPeople: 80 // Percentage
          }
        }
      ],
      attributes: {
        medianSalary: 10000,
        avgExperience: 15,
        avgSkillsExplored: 13,
        happyPeople: 80 // Percentage
      }
    },
    {
      skill: "Reason",
      weightage: 50,
      interests: [
        {
          skill: "Karma",
          weightage: 30,
          attributes: {
            medianSalary: 10000,
            avgExperience: 15,
            avgSkillsExplored: 13,
            happyPeople: 80 // Percentage
          }
        },
        {
          skill: "ClojureScript",
          weightage: 10,
          attributes: {
            medianSalary: 10000,
            avgExperience: 15,
            avgSkillsExplored: 13,
            happyPeople: 80 // Percentage
          }
        },
        {
          skill: "Polymer",
          weightage: 10,
          attributes: {
            medianSalary: 10000,
            avgExperience: 15,
            avgSkillsExplored: 13,
            happyPeople: 80 // Percentage
          }
        }
      ],
      attributes: {
        medianSalary: 10000,
        avgExperience: 15,
        avgSkillsExplored: 13,
        happyPeople: 80 // Percentage
      }
    }
  ],
  attributes: {
    medianSalary: 10000,
    avgExperience: 15,
    avgSkillsExplored: 13,
    happyPeople: 80 // Percentage
  }
};
