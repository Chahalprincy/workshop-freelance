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

function randomgen() {
    const namesRand = NAMES[Math.floor(Math.random()*NAMES.length)];
    const occRand = OCCUPATIONS[Math.floor(Math.random()*OCCUPATIONS.length)];
    const price = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    return {name: namesRand, occupation: occRand, rate: price}
}

const rows = []
for (let i = 0; i < NUM_FREELANCERS;i++) {
    rows.push(randomgen())
}

function averageRate(rows,count){
    const total = rows.reduce((sum,row) => sum + row.rate,0);
    return (total/count).toFixed(2)
}

const avgRate = averageRate(rows,NUM_FREELANCERS);

function freelance(singleRow) {
    const {name,occupation,rate} = singleRow;
    const $row = document.createElement("tr");

    $row.innerHTML = `
    <td>${name}</td>
    <td>${occupation}</td>
    <td>${rate}</td>`
    return $row;
}

function freelancers() {
    const $container = document.createElement("tbody")

    const $multiRows = rows.map(freelance)
    $container.replaceChildren(...$multiRows)
    return $container
}

function createTable() {
    const $table = document.createElement("table")
    const $thead = document.createElement("thead")
    $thead.innerHTML = `
    <td>NAME</td>
    <td>OCCUPATION</td>
    <td>RATE</td>
    `
    $table.appendChild($thead)
    const $tbody = document.createElement("tbody")
    $tbody.id = "FreelancerRows"
    $table.append($tbody)
    return $table
}

function render() {
    const $app = document.querySelector("#app");
    $app.innerHTML = `
    <h1> freelancer forum </h1>
    <p>The average rate is $${avgRate}</p>`
    $app.appendChild(createTable());
    $app.querySelector("#FreelancerRows").replaceWith(freelancers());
}

render();

