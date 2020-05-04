const inventors = [
  {
    first: 'Albert', last: 'Einstein', year: 1879, passed: 1955
  },
  {
    first: 'Isaac', last: 'Newton', year: 1643, passed: 1727
  },
  {
    first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642
  },
  {
    first: 'Marie', last: 'Curie', year: 1867, passed: 1934
  },
  {
    first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630
  },
  {
    first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543
  },
  {
    first: 'Max', last: 'Plank', year: 1858, passed: 1947
  }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckettm Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Mehachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Bencheley, Robert', 'Beneson Peter', 'Ben-Gurian, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Kenny', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billins, Josh', 'Biondo, Frank', 'Birell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake William'];

// filter the list of inventors for those who sere born in the 1500

const bornIn1500 = inventors.filter(inventor => inventor.year > 1500 && inventor.year < 1600);

// give us an array of the inventors first and last names

const names = inventors.map(inventor => `${inventor.first}, ${inventor.last}`);

// sort the inventors by birthdate, oldest to youngest

const sortedByBirthdate = inventors.sort((a, b) => a.year - b.year);

// how many years did all the inventors live

const allYearsCombined = inventors.reduce((years, inventor) => years + (inventor.passed - inventor.year), 0);

// sort the inventors by years lived

const sortedByYearsLived = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));

// create a list of Boulevards in paris the contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const deBoulevards = Array.from(document.querySelectorAll('.mw-category a')).map(link => link.textContent).filter(link => link.includes('de'));

// make a list of people sorted by last name
const peopleSortedByLastName = people.sort((a, b) => {
  const aPerson = a.split(', ');
  const bPerson = b.split(', ');
  const [ aLastName ] = aPerson;
  const [ bLastName ] = bPerson;
  return aLastName > bLastName;
  });

// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const sumOfTransportation = data.reduce((list, vehicle) => {

  if(!list.hasOwnProperty(vehicle)) {
    list[vehicle] = 0;
  }
  list[vehicle] += 1;
  return list;
}, {})