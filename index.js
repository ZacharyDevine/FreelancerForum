/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

/**
 * Function to generate object with a random name, occupation, and rate
 * 
 * @returns {frelancer{}} frelancer objects with name, occupation and rate properties
 * 
 */
const newFreelancer = () =>{
  const frelancer = {};
  frelancer.name = NAMES[Math.floor(Math.random() * NAMES.length)];
  frelancer.occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  frelancer.rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;
  return frelancer;
}

const frelancers = [];
for(let i = 0; i < NUM_FREELANCERS; i++){
  frelancers.push(newFreelancer());
}

/**
 * Function that returns average rate of all frelancers
 * 
 * @param {frelancers[]} //List of freelancer objects
 * @returns {number} //Average of all rates
 */
const getAverageRate = (list) => {
  let total = 0;
  for(let i = 0; i < list.length; i++){
    total += list[i].rate;
  }
  return total/list.length;
}

const average = getAverageRate(frelancers);

/**
 * Function that makes one frelancer in the dom
 * 
 * @param {frelancer{}} //Frelancer object
 * @returns {Unordered List} //unordered list html element with list items of the frelancers name, occupation, and rate
 * 
 */
const frelancer = (frelancer) => {
  const ul = document.createElement(`ul`);
  ul.setAttribute(`class`, `frelancer`);

  const name = document.createElement('li');
  const occupation = document.createElement('li');
  const rate = document.createElement('li');

  name.textContent = frelancer.name;
  occupation.textContent = frelancer.occupation;
  rate.textContent = `$${frelancer.rate}`;

  ul.appendChild(name);
  ul.appendChild(occupation);
  ul.appendChild(rate);

  return ul;
}

/**
 * Function that makes list of frelancers in the dom
 * 
 * @param {frelancers[]} //List of frelancer objects
 * @returns {Unordered List} //unordered list html element that contains unordered list elements for each freelancer
 * 
 */
const freelancerList = (list) => {
  const ul = document.createElement(`ul`);
  ul.setAttribute(`id`, `frelancers`);

  for(let i = 0; i < list.length; i++){
    ul.appendChild(frelancer(list[i]));
  }

  return ul;
}

/**
 * Function that makes header of the average rate of all freelancers in the dom
 * 
 * @param {average} //The average of all freelancers
 * @return {Header 3} //Header 3 html element that contains a tidbit about the average rate of all freelancers
 * 
 */
const displayAverage = (average) => {
  const h3 = document.createElement(`h3`);
  h3.textContent = `The average rate is $${average}`;
  return h3;
}

/**
 * Function that renders everything into the dom
 */
const render = () => {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <average></average>
    <ul id="tableHeader">
      <li><h2>NAME</h2></li>
      <li><h2>OCCUPATION</h2></li>
      <li><h2>RATE</h2></li>
    </ul>
    <FreelancerTable></FreelancerTable>
  `;
  $app.querySelector(`average`).replaceWith(displayAverage(average));
  $app.querySelector(`FreelancerTable`).replaceWith(freelancerList(frelancers));
}
render();