/**
 * For now, we will map a phase to a range of numbers which indicate the number
 * of days the tree has been continually growing since last planted.
 */

interface IObjectKeys {
  [key: string]: string;
}

const phaseMap: IObjectKeys = {
  "0": "Seedling",
  "1": "Seedling",
  "2": "Seedling",
  "3": "Seedling",
  "4": "Sapling",
  "5": "Sapling",
  "6": "Sapling",
  "7": "Sapling",
  "8": "Sapling",
  "9": "Development Phase",
  "10": "Development Phase",
  "11": "Development Phase",
  "12": "Development Phase",
  "13": "Development Phase",
  "14": "Development Phase",
  "15": "Development Phase",
  "16": "Refinement Phase",
  "17": "Refinement Phase",
  "18": "Refinement Phase",
  "19": "Refinement Phase",
  "20": "Refinement Phase",
};

export { phaseMap };
