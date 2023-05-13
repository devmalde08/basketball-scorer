let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeScore2 = 0
let guestScore2 = 0



function add1() {
    homeScore2 += 1
    homeScore.textContent = homeScore2
}

function add2() {
    homeScore2 += 2
    homeScore.textContent = homeScore2
}

function add3() {
    homeScore2 += 3
    homeScore.textContent = homeScore2
}

function add1g() {
    guestScore2 += 1
    guestScore.textContent = guestScore2
}

function add2g() {
    guestScore2 += 2
    guestScore.textContent = guestScore2
}

function add3g() {
    guestScore2 += 3
    guestScore.textContent = guestScore2
}