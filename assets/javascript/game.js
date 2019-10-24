$(document).ready(function () {
    let cpuTotal = Math.floor(Math.random() * 40) + 30;
    $("#cpu-total").text(cpuTotal);

    let wins = 0;
    let losses = 0;
    let userTotal = 0;

    let blueCrystal = Math.floor(Math.random() * 12) + 1;
    let clearCrystal = Math.floor(Math.random() * 12) + 1;
    let purpleCrystal = Math.floor(Math.random() * 12) + 1;
    let yellowCrystal = Math.floor(Math.random() * 12) + 1;


    $(".crystal").on("click", function () {
        if ($(this).hasClass("btn1")) {
            userTotal += blueCrystal;
        }
        if ($(this).hasClass("btn2")) {
            userTotal += clearCrystal;
        }
        if ($(this).hasClass("btn3")) {
            userTotal += purpleCrystal;
        }
        if ($(this).hasClass("btn4")) {
            userTotal += yellowCrystal;
        }
        if (userTotal >= cpuTotal) {
            if (userTotal == cpuTotal) {
                wins++;
                $("#wins").text(wins);
            } else {
                losses++;
                $("#losses").text(losses);
            }
            userTotal = 0;
            cpuTotal = Math.floor(Math.random() * 40) + 30;
            blueCrystal = Math.floor(Math.random() * 12) + 1;
            clearCrystal = Math.floor(Math.random() * 12) + 1;
            purpleCrystal = Math.floor(Math.random() * 12) + 1;
            yellowCrystal = Math.floor(Math.random() * 12) + 1;
            
        }
        $("#cpu-total").text(cpuTotal);
        $("#user-total").text(userTotal);

    });






})
