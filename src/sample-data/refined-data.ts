type CategoryInformation = {
    category: string,
    range: {
        upperLimit: string,
        lowerLimit: string
    },
    noOfPersons: number;
    worksOn: Array<WorkingSkillAttributes>,
    attributes: Attributes
}

type Attributes = {
    medianSalary: number,
    avgExperience: number,
    avgSkillsExplored: number,
    happyPeople: number,
    sadPeople: number
}

type GenericSkillAttributes = {
    skill: string,
    weightage: number,
    attributes: Attributes
}

type InterestedSkillAttributes = GenericSkillAttributes;

type WorkingSkillAttributes = GenericSkillAttributes & {
    interests: Array<InterestedSkillAttributes>
}

const sampleData: CategoryInformation = {
    category: 'HI',
    range: {
        upperLimit: '20K',
        lowerLimit: '15K'
    },
    noOfPersons: 150,
    worksOn: [
        {
            skill: 'Elm',
            weightage: 50,
            interests: [
                {
                    skill: 'Karma',
                    weightage: 30,
                    attributes: {
                        medianSalary: 10000,
                        avgExperience: 15,
                        avgSkillsExplored: 13,
                        happyPeople: 80, //Percentage
                        sadPeople: 20 //Percentage
                    }
                },
                {
                    skill: 'ClojureScript',
                    weightage: 10,
                    attributes: {
                        medianSalary: 10000,
                        avgExperience: 15,
                        avgSkillsExplored: 13,
                        happyPeople: 80, //Percentage
                        sadPeople: 20 //Percentage
                    }
                },
                {
                    skill: 'Polymer',
                    weightage: 10,
                    attributes: {
                        medianSalary: 10000,
                        avgExperience: 15,
                        avgSkillsExplored: 13,
                        happyPeople: 80, //Percentage
                        sadPeople: 20 //Percentage
                    }
                }
            ],
            attributes: {
                medianSalary: 10000,
                avgExperience: 15,
                avgSkillsExplored: 13,
                happyPeople: 80, //Percentage
                sadPeople: 20 //Percentage
            }
        },
        {
            skill: 'React',
            weightage: 50,
            interests: [
                {
                    skill: 'Karma',
                    weightage: 30,
                    attributes: {
                        medianSalary: 10000,
                        avgExperience: 15,
                        avgSkillsExplored: 13,
                        happyPeople: 80, //Percentage
                        sadPeople: 20 //Percentage
                    }
                },
                {
                    skill: 'ClojureScript',
                    weightage: 10,
                    attributes: {
                        medianSalary: 10000,
                        avgExperience: 15,
                        avgSkillsExplored: 13,
                        happyPeople: 80, //Percentage
                        sadPeople: 20 //Percentage
                    }
                },
                {
                    skill: 'Polymer',
                    weightage: 10,
                    attributes: {
                        medianSalary: 10000,
                        avgExperience: 15,
                        avgSkillsExplored: 13,
                        happyPeople: 80, //Percentage
                        sadPeople: 20 //Percentage
                    }
                }
            ],
            attributes: {
                medianSalary: 10000,
                avgExperience: 15,
                avgSkillsExplored: 13,
                happyPeople: 80, //Percentage
                sadPeople: 20 //Percentage
            }
        },
        {
            skill: 'Reason',
            weightage: 50,
            interests: [
                {
                    skill: 'Karma',
                    weightage: 30,
                    attributes: {
                        medianSalary: 10000,
                        avgExperience: 15,
                        avgSkillsExplored: 13,
                        happyPeople: 80, //Percentage
                        sadPeople: 20 //Percentage
                    }
                },
                {
                    skill: 'ClojureScript',
                    weightage: 10,
                    attributes: {
                        medianSalary: 10000,
                        avgExperience: 15,
                        avgSkillsExplored: 13,
                        happyPeople: 80, //Percentage
                        sadPeople: 20 //Percentage
                    }
                },
                {
                    skill: 'Polymer',
                    weightage: 10,
                    attributes: {
                        medianSalary: 10000,
                        avgExperience: 15,
                        avgSkillsExplored: 13,
                        happyPeople: 80, //Percentage
                        sadPeople: 20 //Percentage
                    }
                }
            ],
            attributes: {
                medianSalary: 10000,
                avgExperience: 15,
                avgSkillsExplored: 13,
                happyPeople: 80, //Percentage
                sadPeople: 20 //Percentage
            }
        }
    ],
    attributes: {
        medianSalary: 10000,
        avgExperience: 15,
        avgSkillsExplored: 13,
        happyPeople: 80, //Percentage
        sadPeople: 20 //Percentage
    }
}