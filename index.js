const candidates = [
  {
    name: 'Василий Петров',
    age: 60,
    score: 98,
    serviceRecord: 36,
  },
  {
    name: 'Екатерина Фёдорова',
    age: 35,
    score: 90,
    serviceRecord: 7,
  },
  {
    name: 'Иван Иванов',
    age: 29,
    score: 67,
    serviceRecord: 2,
  },
  {
    name: 'Зинаида Абрамова',
    age: 45,
    score: 78,
    serviceRecord: 14,
  },
  {
    name: 'Виктор Олегов',
    age: 54,
    score: 85,
    serviceRecord: 21,
  },
];

const filterByAge = (element) => element.age < 50;

const filterByScore = (element) => element.score > 74;

const filterByServiceRecord = (element) => element.serviceRecord > 4;

const sortByScore = (array) => array.toSorted((a, b) => b.score - a.score);

const getMeanAge = (array) => {
  let ageSum = 0;
  array.forEach((element) => {
    ageSum += element.age;
  });
  return ageSum / array.length;
};

const getMeanAgeReduce = (array) => {
  const ageSum = array.reduce((acc, element) => acc + element.age, 0);
  return ageSum / array.length;
};

const getNameOnly = (element) => element.name;

getNameOnly(candidates);

module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getMeanAgeReduce,
  getNameOnly,
};
