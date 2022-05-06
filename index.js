// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Add element to Object</h1>`;

let finalResult = { Peter: 'Cero' };

let data = [
  { name: 'Peter', number: 99884 },
  { name: 'John', number: 78446 },
  { name: 'Victor', number: 47777 },
];

for (let x = 0; x < data.length; x++) {
  let key = data[x].name;
  let value = data[x].number;

  let final = { [key]: value };

  finalResult[key] = value;

  // this.finalResult = Object.assign(final);
}
console.log(finalResult);

// I want   {'Peter': 99884, 'John':78446, 'Victor': 47777 }
