
// add the event listener for the onload event
window.onload = function() {
    let teams = [{code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
                 {code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
                 {code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
                 {code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" }
                ];
// declare the html elements that we need
let selectMenu = document.getElementById('teams');
console.log(`the select menu is ${selectMenu}`);

}