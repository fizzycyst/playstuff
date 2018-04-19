function onlyUnique(value, index, self) {
    if (self.indexOf(value) === self.lastIndexOf(value)) {
      return self;
    } else {
      return false;
    }
}
const myArray =[ 12,13,13,3,3,5,66,66,7];

const sortedAsc = Array.from(myArray);


console.log('Ascending sort: ' + sortedAsc.sort((a, b) => a - b));

const sortedDsc =  myArray.slice();

sortedDsc.sort((a, b) => b - a);



console.log('Descending sort: ' + sortedDsc);

const uniqueSorted = myArray.slice().filter(onlyUnique).sort((a, b) => a - b);

console.log('Unique Values sorted: ' + uniqueSorted);

console.log('Highest unique value in the array is: ' + uniqueSorted[uniqueSorted.length -1]);



const obj = {
  name : 'Paul Gilfedder',
  email: 'paul@gilfedder.org',
  codes :[ 'one','two','three'],
  data:{
    person :'case',
    areas: [2,3,4]
  }
};

var newObj = JSON.parse(JSON.stringify(obj));

newObj.name = 'James Newtown';

console.log('Object Name: ' + obj.name);

console.log('New Object Name: ' + newObj.name);



const isMomHappy = true;




const myRandomArray = Array.from({length: 270}, () => Math.floor(Math.random() * 40));

console.log('The length of the Random array is: ' + myRandomArray.length);

console.log(myRandomArray[0],myRandomArray[10],myRandomArray[400]);
//const uniqueSorted = myArray.slice().filter(onlyUnique).sort((a, b) => a - b);

const myUniqueSortedRandomArray = myRandomArray.slice().filter(onlyUnique);

console.log('We have an array with: ' + myUniqueSortedRandomArray.length + ' unique random elements');

console.log(myUniqueSortedRandomArray);

const getrandom = new Promise(
    (resolve, reject) => { 
        if (isMomHappy) {
        const myUniqueSortedRandomArray = myRandomArray.slice().filter(onlyUnique);
            resolve(myUniqueSortedRandomArray);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

const showUnique = function (OurArray) {
  console.log('We have an array with: ' + myUniqueSortedRandomArray.length + ' unique random elements');
}
const getUniqueRandom = function () {
  getRandom
  .then(showUnique)
  .then(fulfilled =>console.log(fulfilled))
  .catch(error => console.log(error.message))
};

getUniqueRandom();