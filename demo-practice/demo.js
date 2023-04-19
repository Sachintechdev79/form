// let n = 200;

// for (let i = 1; i <= n; i++) {
//     let name = prompt("Enter Your Name");
//     console.log(`${i} Tanjiro`);
// }


// const people = [];

// document.getElementById('myForm').addEventListener('submit', function(event) {
//   event.preventDefault();
//   const name = document.getElementById('name').value;
//   const surname = document.getElementById('surname').value;
//   const email = document.getElementById('email').value;
//   people.push({ name, surname, email });
//   console.log(`${name} ${surname}, Email: ${email}`);
//   document.getElementById('myForm').reset();
// });


const people = [];

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const email = document.getElementById('email').value;
  people.push({ name, surname, email });
  displayPeople();
  document.getElementById('myForm').reset();
});

function displayPeople() {
  const peopleList = document.getElementById('peopleList');
  peopleList.innerHTML = '';
  for (let i = 0; i < people.length; i++) {
    const { name, surname, email } = people[i];
    const person = document.createElement('div');
    person.innerText = `${name} ${surname}, Email: ${email}`;
    peopleList.appendChild(person);
  }
}
