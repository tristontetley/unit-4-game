$(document).ready(function () {
    let cpuTotal = Math.floor(Math.random() * 40) + 30;
    let wins = 0;
    let losses = 0;
    let userTotal = 0;

    let blueCrystal = Math.floor(Math.random() * 12) + 1;
    let clearCrystal = Math.floor(Math.random() * 12) + 1;
    let purpleCrystal = Math.floor(Math.random() * 12) + 1;
    let yellowCrystal = Math.floor(Math.random() * 12) + 1;

    $(".btn1").on("click", function () {
        userTotal = userTotal + blueCrystal;
        $("#user-total").text(userTotal);
    });


    $(".btn2").on("click", function () {
        userTotal += "clearCrystal";
    })
    $(".btn3").on("click", function () {
        userTotal += "purpleCrystal";
    })
    $(".btn4").on("click", function () {
        userTotal += "yellowCrystal";
    });

    if (userTotal === cpuTotal) {
        wins++;
        $("#wins").text(wins);
    }
    else if (userTotal > cpuTotal) {
        losses++;
        $("#losses").text(losses);
    };





});