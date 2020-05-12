const people = [
  {
    name: 'Wes', year: 1988
  },
  {
    name: 'Kait', year: 1986
  },
  {
    name: 'Irv', year: 1970
  },
  {
    name: 'Lux', year: 2015
  }
];

const comments = [
  {
    text: 'Love this!', id: 523423
  },
  {
    text: 'Super good', id: 823423
  },
  {
    text: 'You are the best', id: 2039842
  },
  {
    text: 'Ramen in my fav food ever', id: 123523
  },
  {
    text: 'Nice Nice Nice', id: 542328
  }
];

//Some and every Checks
// Array.prototype.some() // is at least one person 19?
const checkAge = function(person) {

  const now = new Date();
  const nowYear = now.getFullYear();
  const age = nowYear - person.year;
  return age > 18;
}

const isAnyoneAdult = people.some(checkAge);
// Array.prototype.every() // is everyone 19?
const isEveryoneAdult = people.every(checkAge);

// Array.prototype.find()
// Find is a like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findId = comments.find(comment => comment.id === 823423);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const eraseMe = comments.findIndex(comment => comment.id === 823423);
comments.splice(eraseMe, eraseMe);
