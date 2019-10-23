let cpuTotal = Math.floor(Math.random() * 30);
let wins = 0;
let losses = 0;
let userTotal = 0;


blueCrystal = Math.floor(Math.random()*12)+1;
clearCrystal= Math.floor(Math.random()*12)+1;
purpleCrystal= Math.floor(Math.random()*12)+1;
yellowCrystal= Math.floor(Math.random()*12)+1;

$(".btn1").click(function () {
    userTotal += "blueCrystal";
});
$(".btn2").click(function () {
    userTotal += "clearCrystal";
});
$(".btn3").click(function () {
    userTotal += "purpleCrystal";
});
$(".btn4").click(function () {
    userTotal += "yellowCrystal";
});

if (userTotal === cpuTotal){
    wins ++;
    $("#wins").text(wins);
};
else if (userTotal > cpuTotal){
    losses ++;
    $("#losses").text(losses);
};




