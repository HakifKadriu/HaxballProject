// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

/* VARIABLES */

/* ROOM */

const roomName = "BOT ⚽ YU Futsal ® 3v3 ★";
const botName = "dsc.gg/yu-futsal";
const maxPlayers = 18;
const roomPublic = false;
const geo = [{ code: "rs", lat: 44.77, lon: 20.45 }];

const room = HBInit({
  roomName: roomName,
  maxPlayers: maxPlayers,
  public: roomPublic,
  playerName: botName,
  geo: geo[0],
});

const scoreLimitClassic = 3;
const scoreLimitBig = 2;
const timeLimitClassic = 3;
const timeLimitBig = 3;

// /colors red 60 000000 D60000 FF0000 D60000
let teamColors = [
  {
    // normal red team
    angle: 60,
    chatColor: 0xffffff,
    teamColors: [0xb00000],
  },
  {
    // Dres6
    angle: 180,
    chatColor: 0xff7096,
    teamColors: [0x4d0b44, 0x8f3683],
  },
  {
    // normal blue team /colors blue 60 000000 2454A6 3881FF 2454A6
    angle: 60,
    chatColor: 0xffffff,
    teamColors: [0x0000b0],
  },
  {
    // Dres6
    angle: 180,
    chatColor: 0x6b6bff,
    teamColors: [0x0b134d, 0x3a338f],
  },
  {
    // Dres2
    angle: 180,
    chatColor: 0xffffff,
    teamColors: [0xff0000, 0xd80000],
  },
  {
    // Dres2
    angle: 180,
    chatColor: 0xffffff,
    teamColors: [0x0000ff, 0x0e00d8],
  },
  {
    // Dres3
    angle: 178,
    chatColor: 0x9e6a3c,
    teamColors: [0xff0000, 0x8a0b0b],
  },
  {
    // Dres3
    angle: 178,
    chatColor: 0xcccccc,
    teamColors: [0xffffff, 0x1e1877, 0xffffff],
  },
  {
    // Dres4
    angle: 180,
    chatColor: 0xffffff,
    teamColors: [0xc20000, 0xff4d4d, 0xc20000],
  },
  {
    // Dres4
    angle: 180,
    chatColor: 0xffffff,
    teamColors: [0x2700c2, 0x4f7eff, 0x2700c2],
  },
  {
    // Dres5
    angle: 180,
    chatColor: 0x000000,
    teamColors: [0xc2005b, 0xff40f2, 0xc2005b],
  },
  {
    // Dres5
    angle: 180,
    chatColor: 0x000000,
    teamColors: [0x0eb6c2, 0x442bab, 0x0eb6c2],
  },
];

room.setTeamsLock(true);
room.setTeamColors(
  1,
  teamColors[0].angle,
  teamColors[0].chatColor,
  teamColors[0].teamColors
);
room.setTeamColors(
  2,
  teamColors[2].angle,
  teamColors[2].chatColor,
  teamColors[2].teamColors
);
room.setKickRateLimit(0, 0, 0);

var adminPassword = 100000 + getRandomInt(900000);
console.log("adminPassword : " + adminPassword);
/* STADIUM */

const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;
var aloneMap =
  '{"name":"Futsal BezGolova","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":65,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"_selected":"segment"},{"x":-368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"_selected":"segment"},{"x":-368,"y":-171,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"line"},{"bCoef":1,"trait":"ballArea","x":368,"y":171},{"bCoef":1,"trait":"ballArea","x":368,"y":-171},{"bCoef":0,"trait":"line","x":0,"y":171},{"bCoef":0,"trait":"line","x":0,"y":-171},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":199,"trait":"kickOffBarrier"},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":0,"y":-199,"trait":"kickOffBarrier"},{"x":-368.53340356886,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368.53340356886,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.09926357786,"y":63.94882446641,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":64,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":-61.927767991658,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.9681846993,"y":-62.144998272018,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":-90},{"x":-358.5379338963,"y":-171,"bCoef":0.1,"trait":"line","curve":-90},{"x":-368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":90},{"x":-358.5379338963,"y":171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":-90},{"x":358.36266315432,"y":171,"bCoef":0.1,"trait":"line","curve":-90},{"x":368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":90},{"x":358.36266315432,"y":-171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-250.86909422732,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"trait":"line"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":8,"v1":9,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":10,"y":171},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":11,"y":-171},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":12,"v1":13},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":9,"v1":8},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":15,"v1":14},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":1,"_selected":true},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":16,"v1":17,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":18,"v1":19,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":20,"v1":21,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":22,"v1":23,"cMask":["ball"],"x":330},{"v0":24,"v1":25,"trait":"kickOffBarrier"},{"v0":26,"v1":27,"trait":"kickOffBarrier"},{"v0":28,"v1":29,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":29,"v1":30,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":30,"v1":31,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":32,"v1":33,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":33,"v1":34,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":34,"v1":35,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":36,"v1":37,"curve":94.0263701017,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":39,"v1":38,"curve":86.632306418889,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":40,"v1":41,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":37,"v1":41,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":43,"v1":42,"curve":-86.632306418888,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":45,"v1":44,"curve":86.632306418884,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":47,"v1":46,"curve":-86.632306418899,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":48,"v1":49,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":50,"v1":51,"curve":94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":52,"v1":53,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":55,"v1":54,"curve":-180.00692920292,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":54,"v1":55,"curve":-180.00218240614,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":57,"v1":56,"curve":-179.64823645332,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":56,"v1":57,"curve":-180.35758668147,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":59,"v1":58,"curve":-180.02357323962,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":58,"v1":59,"curve":-180.00924102399,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":61,"v1":60,"curve":-180.06885755885,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":60,"v1":61,"curve":-180.02948353257,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":63,"v1":62,"curve":-179.99869069543,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":62,"v1":63,"curve":-179.99939258776,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":65,"v1":64,"curve":-180.08826047163,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":64,"v1":65,"curve":-179.91186753664,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":67,"v1":66,"curve":-179.99528711105,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":66,"v1":67,"curve":-179.99743836358,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":69,"v1":68,"curve":-179.98626041101,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":68,"v1":69,"curve":-179.99175181595,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":71,"v1":70,"curve":-180.04715562398,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":70,"v1":71,"curve":-179.95294709391,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":73,"v1":72,"curve":-179.95715750564,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":72,"v1":73,"curve":-179.89943871875,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":75,"v1":74,"curve":-179.94773754738,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":74,"v1":75,"curve":-179.98221351296,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":77,"v1":76,"curve":-180.4151727218,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":76,"v1":77,"curve":-179.58764458796,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":79,"v1":78,"curve":-180.00086646359,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":78,"v1":79,"curve":-180.01965986376,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":81,"v1":80,"curve":-180.03532601389,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":80,"v1":81,"curve":-179.99380079,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":83,"v1":82,"curve":-180.0044468452,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":82,"v1":83,"curve":-180.01386779847,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":85,"v1":84,"curve":-180.05158287563,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":84,"v1":85,"curve":-180.01212223878,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":90,"v1":91,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":100,"v1":101,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":104,"v1":105,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":108,"v1":109,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381}],"goals":[{"p0":[-374.25,-62.053454903872],"p1":[-374.25,64.043361696331],"team":"red"},{"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}],"discs":[{"radius":3.9405255187564,"pos":[-368.53340356886,64.043361696331],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[-368.53340356886,-62.053454903872],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3.9405255187564,"pos":[368.9681846993,-62.144998272018],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[368.09926357786,63.94882446641],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3,"invMass":0,"pos":[-368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5,"bCoef":0},"ballPhysics":{"radius":6.25,"color":"FFCC00","bCoef":0.4,"invMass":1.5,"damping":0.99}}';
var classicMap =
  '{"name":"Futsal x1 I Maestro from HaxMaps","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":50,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":-50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":-50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":176,"trait":"kickOffBarrier"},{"x":0,"y":50,"trait":"kickOffBarrier"},{"x":0,"y":-50,"trait":"line"},{"x":0,"y":-176,"trait":"kickOffBarrier"},{"x":-384,"y":-50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":384,"y":-50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":-384,"y":50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":384,"y":50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":-368,"y":-127,"trait":"line"},{"x":368,"y":-127,"trait":"line"},{"x":-368,"y":127,"trait":"line"},{"x":368,"y":127,"trait":"line"},{"x":-350,"y":-171,"bCoef":0,"trait":"line"},{"x":-368,"y":-163,"bCoef":0,"trait":"line"},{"x":350,"y":-171,"bCoef":0,"trait":"line"},{"x":368,"y":-163,"bCoef":0,"trait":"line"},{"x":-350,"y":171,"bCoef":0,"trait":"line"},{"x":-368,"y":163,"bCoef":0,"trait":"line"},{"x":350,"y":171,"bCoef":0,"trait":"line"},{"x":368,"y":163,"bCoef":0,"trait":"line"},{"x":368,"y":171,"bCoef":1,"trait":"ballArea"},{"x":368,"y":-171,"bCoef":1,"trait":"ballArea"},{"x":0,"y":171,"bCoef":0,"trait":"line"},{"x":0,"y":-171,"bCoef":0,"trait":"line"},{"x":0,"y":50,"trait":"kickOffBarrier"},{"x":0,"y":-50,"trait":"kickOffBarrier"},{"x":377,"y":-50,"bCoef":1,"cMask":["red"],"trait":"line"},{"x":377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":-50,"bCoef":1,"cMask":["blue"],"trait":"line"},{"x":-377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":50,"bCoef":1,"cMask":["blue"],"trait":"line"},{"x":-377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":377,"y":50,"bCoef":1,"cMask":["red"],"trait":"line"},{"x":377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":12,"v1":14,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet","x":-585},{"v0":13,"v1":15,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet","x":585},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":0,"v1":28,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":171},{"v0":3,"v1":29,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-171},{"v0":30,"v1":31,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":33,"v1":32,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":38,"v1":39,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":40,"v1":41,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":34,"v1":40,"curve":60,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["red"],"trait":"line"},{"v0":38,"v1":36,"curve":60,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["blue"],"trait":"line"}],"goals":[{"p0":[-372,-52],"p1":[-372,48],"team":"red"},{"p0":[372,50],"p1":[372,-50],"team":"blue"}],"discs":[{"radius":5,"pos":[-368,50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-368,-50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[368,50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[368,-50],"color":"FFFFFF","trait":"goalPost"},{"radius":3,"invMass":0,"pos":[383,51],"color":"FFFFFF","bCoef":0,"trait":"line"},{"radius":3,"invMass":0,"pos":[-383,51],"color":"FFFFFF","bCoef":0,"trait":"line"},{"radius":3,"invMass":0,"pos":[383,-51],"color":"FFFFFF","bCoef":0,"trait":"line"},{"radius":3,"invMass":0,"pos":[-383,-51],"color":"FFFFFF","bCoef":0,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":6.5},"ballPhysics":{"radius":6.4,"color":"EAFF00"}}';
var bigMap =
  '{"name":"Futsal 3x3 4x4","width":755,"height":339,"bg":{"type":"hockey","width":665,"height":290,"kickOffRadius":80},"vertexes":[{"x":-665,"y":290,"cMask":["ball"]},{"x":-665,"y":80,"cMask":["ball"]},{"x":-665,"y":-80,"cMask":["ball"]},{"x":-665,"y":-290,"cMask":["ball"]},{"x":665,"y":290,"cMask":["ball"]},{"x":665,"y":80,"cMask":["ball"]},{"x":665,"y":-80,"cMask":["ball"]},{"x":665,"y":-290,"cMask":["ball"]},{"x":0,"y":306,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0,"cMask":[]},{"x":0,"y":-306,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-693,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":693,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":-693,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":693,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":-665,"y":-215,"bCoef":0,"cMask":[]},{"x":-500,"y":-50,"bCoef":0,"cMask":[]},{"x":665,"y":-215,"bCoef":0,"cMask":[]},{"x":500,"y":-50,"bCoef":0,"cMask":[]},{"x":-665,"y":215,"bCoef":0,"cMask":[]},{"x":-500,"y":50,"bCoef":0,"cMask":[]},{"x":665,"y":215,"bCoef":0,"cMask":[]},{"x":500,"y":50,"bCoef":0,"cMask":[]},{"x":665,"y":290,"cMask":["ball"]},{"x":665,"y":-290,"cMask":["ball"]},{"x":0,"y":290,"bCoef":0,"cMask":[]},{"x":0,"y":-290,"bCoef":0,"cMask":[]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":674,"y":-80,"cMask":["ball"]},{"x":674,"y":-290,"cMask":["ball"]},{"x":-674,"y":-80,"cMask":["ball"]},{"x":-674,"y":-290,"cMask":["ball"]},{"x":-674,"y":80,"cMask":["ball"]},{"x":-674,"y":290,"cMask":["ball"]},{"x":674,"y":80,"cMask":["ball"]},{"x":674,"y":290,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":12,"v1":2,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"cMask":["ball"],"color":"FFFFFF"},{"v0":6,"v1":13,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"cMask":["ball"],"color":"FFFFFF"},{"v0":1,"v1":14,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"cMask":["ball"],"color":"FFFFFF"},{"v0":15,"v1":5,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"cMask":["ball"],"color":"FFFFFF"},{"v0":14,"v1":12,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"cMask":["ball"],"color":"FFFFFF"},{"v0":13,"v1":15,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"cMask":["ball"],"color":"FFFFFF"},{"v0":16,"v1":17,"bCoef":0,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"FFFFFF"},{"v0":19,"v1":18,"bCoef":0,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"FFFFFF"},{"v0":21,"v1":20,"bCoef":0,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"FFFFFF"},{"v0":22,"v1":23,"bCoef":0,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"FFFFFF"},{"v0":17,"v1":21,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":19,"v1":23,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":1,"v1":0,"cMask":["ball"],"color":"FFFFFF"},{"v0":5,"v1":4,"cMask":["ball"],"color":"FFFFFF"},{"v0":2,"v1":3,"cMask":["ball"],"color":"FFFFFF"},{"v0":6,"v1":7,"cMask":["ball"],"color":"FFFFFF"},{"v0":0,"v1":24,"cMask":["ball"],"color":"FFFFFF"},{"v0":3,"v1":25,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":9,"v1":10,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":29,"v1":28,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":2,"v1":1,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":6,"v1":5,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":30,"v1":31,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":32,"v1":33,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":34,"v1":35,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":36,"v1":37,"vis":false,"cMask":["ball"],"color":"FFFFFF"}],"planes":[{"normal":[0,1],"dist":-290,"cMask":["ball"]},{"normal":[0,-1],"dist":-290,"cMask":["ball"]},{"normal":[0,1],"dist":-339,"bCoef":0.2},{"normal":[0,-1],"dist":-339,"bCoef":0.2},{"normal":[1,0],"dist":-755,"bCoef":0.2},{"normal":[-1,0],"dist":-755,"bCoef":0.2}],"goals":[{"p0":[-674,-80],"p1":[-674,80],"team":"red"},{"p0":[674,80],"p1":[674,-80],"team":"blue"}],"discs":[{"radius":6.4,"color":"EAFF00","cGroup":["ball","kick","score"]},{"pos":[-665,80],"radius":5,"bCoef":1,"invMass":0},{"pos":[-665,-80],"radius":5,"bCoef":1,"invMass":0},{"pos":[665,80],"radius":5,"bCoef":1,"invMass":0},{"pos":[665,-80],"radius":5,"bCoef":1,"invMass":0}],"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":"disc0","spawnDistance":310}';

/* OPTIONS */

var afkLimit = 12;
var drawTimeLimit = Infinity;
var maxTeamSize = 3; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
var slowMode = 0;
let playerCooldown = {};

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = {
  GA: 0,
  WI: 1,
  DR: 2,
  LS: 3,
  WR: 4,
  GL: 5,
  AS: 6,
  GK: 7,
  CS: 8,
  CP: 9,
  RL: 10,
  GP: 11,
  AP: 12,
  PT: 13,
  OC: 14,
  NK: 15,
  AV: 16,
};
var players;
var avatarCommand = "!avatar";
var commands = ["!dno", "!kupiVremeplov"];
var command = ["!kupiPivo"];
var commandz = ["!kupiDres6"];
var dres2 = ["!dres 2"];
var dres3 = ["!dres 3"];
var dres4 = ["!dres 4"];
var dres5 = ["!dres 5"];
var gamePaused = false;
var redCaptain;
var blueCaptain;
var teamR;
var teamB;
var teamS;
var oddsRed, oddsBlue;
var playerDataMap = new Map();

var mutedAuths = [];
var timeObject = { Seconds: 1000, Minutes: 60000, Hours: 3600000 };

/* GAME */

var lastTeamTouched;
var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
var countAFK = false; // Created to get better track of activity
var activePlay = false; // Created to get better track of the possession
var goldenGoal = false;
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
var banList = []; // Getting track of the bans, so we can unban ppl if we want

/* STATS */
var winstreakrecord = 0;
var winstreakrecordplayers = [];

var game;
var GKList = ["", ""];
var Rposs = 0;
var Bposs = 0;
var point = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
]; // created to get ball speed
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
var allReds = []; // ... those who came in a very unequal game.

/* BALANCE & CHOOSE */

var inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
var redCaptainChoice = "";
var blueCaptainChoice = "";
var chooseTime = 20;
var timeOutCap;

/* AUXILIARY */

var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;

loadMap(aloneMap, 0, 0);

/* OBJECTS */

function Goal(time, team, striker, assist) {
  this.time = time;
  this.team = team;
  this.striker = striker;
  this.assist = assist;
}

function Game(date, scores, goals) {
  this.date = date;
  this.scores = scores;
  this.goals = goals;
}

/* FUNCTIONS */

function findPlayerById(playerId) {
  return room.getPlayerList().find((p) => p.id === playerId);
}

let bettingOpen = false;

// Function to close betting after 15 seconds
function closeBetting() {
  bettingOpen = false;
  room.sendAnnouncement("Kladjenje je zatvoreno.", null, 0x015fb0, "bold", 0);
}

// Function to open betting
function openBetting() {
  bettingOpen = true;
  setTimeout(closeBetting, 20000);
}

let winningTeam = null; // Global variable to store the winning team

function setWinningTeam(team) {
  winningTeam = team;
}

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) {
  // returns a random number from 0 to max-1
  return Math.floor(Math.random() * Math.floor(max));
}

function getTime(scores) {
  // returns the current time of the game
  return (
    "[" +
    Math.floor(Math.floor(scores.time / 60) / 10).toString() +
    Math.floor(Math.floor(scores.time / 60) % 10).toString() +
    ":" +
    Math.floor(
      Math.floor(scores.time - Math.floor(scores.time / 60) * 60) / 10
    ).toString() +
    Math.floor(
      Math.floor(scores.time - Math.floor(scores.time / 60) * 60) % 10
    ).toString() +
    "]"
  );
}

function pointDistance(p1, p2) {
  var d1 = p1.x - p2.x;
  var d2 = p1.y - p2.y;
  return Math.sqrt(d1 * d1 + d2 * d2);
}

/* BUTTONS */

function topBtn() {
  if (teamS.length == 0) {
    return;
  } else {
    if (teamR.length == teamB.length) {
      if (teamS.length > 1) {
        room.setPlayerTeam(teamS[0].id, Team.RED);
        room.setPlayerTeam(teamS[1].id, Team.BLUE);
      }
      return;
    } else if (teamR.length < teamB.length) {
      room.setPlayerTeam(teamS[0].id, Team.RED);
    } else {
      room.setPlayerTeam(teamS[0].id, Team.BLUE);
    }
  }
}

function randomBtn() {
  if (teamS.length == 0) {
    return;
  } else {
    if (teamR.length == teamB.length) {
      if (teamS.length > 1) {
        var r = getRandomInt(teamS.length);
        room.setPlayerTeam(teamS[r].id, Team.RED);
        teamS = teamS.filter((spec) => spec.id != teamS[r].id);
        room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
      }
      return;
    } else if (teamR.length < teamB.length) {
      room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
    } else {
      room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
    }
  }
}

function blueToSpecBtn() {
  resettingTeams = true;
  setTimeout(() => {
    resettingTeams = false;
  }, 100);
  for (var i = 0; i < teamB.length; i++) {
    room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
  }
}

function redToSpecBtn() {
  resettingTeams = true;
  setTimeout(() => {
    resettingTeams = false;
  }, 100);
  for (var i = 0; i < teamR.length; i++) {
    room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
  }
}

function resetBtn() {
  resettingTeams = true;
  setTimeout(() => {
    resettingTeams = false;
  }, 100);
  if (teamR.length <= teamB.length) {
    for (var i = 0; i < teamR.length; i++) {
      room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
      room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
    for (var i = teamR.length; i < teamB.length; i++) {
      room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
    }
  } else {
    for (var i = 0; i < teamB.length; i++) {
      room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
      room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
    for (var i = teamB.length; i < teamR.length; i++) {
      room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
  }
}

function blueToRedBtn() {
  resettingTeams = true;
  setTimeout(() => {
    resettingTeams = false;
  }, 100);
  for (var i = 0; i < teamB.length; i++) {
    room.setPlayerTeam(teamB[i].id, Team.RED);
  }
}

/* GAME FUNCTIONS */

function checkTime() {
  const scores = room.getScores();
  game.scores = scores;
  if (
    Math.abs(scores.time - scores.timeLimit) <= 0.01 &&
    scores.timeLimit != 0
  ) {
    if (scores.red != scores.blue) {
      if (checkTimeVariable == false) {
        checkTimeVariable = true;
        setTimeout(() => {
          checkTimeVariable = false;
        }, 3000);
        scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
        setTimeout(() => {
          room.stopGame();
        }, 2000);
      }
      return;
    }
    goldenGoal = true;
    room.sendAnnouncement("⚽ Golden goal !");
  }
  if (
    Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 &&
    players.length > 2
  ) {
    if (checkTimeVariable == false) {
      checkTimeVariable = true;
      setTimeout(() => {
        checkTimeVariable = false;
      }, 10);
      room.sendChat("⌛ Još 60 sekundi do prekida partije !");
    }
  }
  if (
    Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 &&
    players.length > 2
  ) {
    if (checkTimeVariable == false) {
      checkTimeVariable = true;
      setTimeout(() => {
        checkTimeVariable = false;
      }, 10);
      endGame(Team.SPECTATORS);
      room.stopGame();
      goldenGoal = false;
    }
  }
}

function endGame(winner) {
  // handles the end of a game : no stopGame function inside
  players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
  const scores = room.getScores();
  game.scores = scores;
  Rposs = Rposs / (Rposs + Bposs);
  Bposs = 1 - Rposs;
  lastWinner = winner;
  endGameVariable = true;

  // Existing streak handling code
  if (winner == Team.RED) {
    streak++;
    if (streak > winstreakrecord) {
      room.sendAnnouncement(
        "🔴 Crveni su oborili rekord u vezanim pobedama.",
        null,
        0xed56ef,
        "bold",
        0
      );
    }
    setTimeout(function () {
      room.sendAnnouncement(
        "🔴 Crveni sada imaju " + streak + " uzastopnih pobeda!",
        null,
        0xffffff,
        "italic",
        0
      );
    }, 2500);
  } else if (winner == Team.BLUE) {
    var previousStreak = streak; // Capture the current streak before resetting it
    setTimeout(function () {
      room.sendAnnouncement(
        "🔵 Plavi su uspeli da prekinu niz od " +
          previousStreak +
          " uzastopnih pobeda Crvenih šampiona!",
        null,
        0xffffff,
        "italic",
        0
      );
    }, 3000);
    streak = 1; // Reset the streak since the blue team won
  } else {
    streak = 0;
    room.sendChat("💤 Vreme prošlo, završavam! 💤");
  }

  if (streak > 9) {
    // Handle long streak if needed
  }

  if (streak < 3) {
    let players = room.getPlayerList();
    for (let i = 0; i < players.length; i++) {
      if (players[i].team == Team.RED) {
        // Reset avatar or other actions for RED team
      }
    }
    for (let i = 0; i < players.length; i++) {
      if (players[i].team == Team.BLUE) {
        // Reset avatar or other actions for BLUE team
      }
    }
  }

  scores.red == 0
    ? scores.blue == 0
      ? room.sendAnnouncement(
          "🧤 " +
            GKList[0].name +
            " i " +
            GKList[1].name +
            " nije primio gol !",
          null,
          0xffffff,
          "bold",
          0
        )
      : room.sendAnnouncement(
          "🧤 " + GKList[1].name + " nije primio gol !",
          null,
          0xffffff,
          "bold",
          0
        )
    : scores.blue == 0
    ? room.sendAnnouncement(
        "🧤 " + GKList[0].name + " nije primio gol !",
        null,
        0xffffff,
        "bold",
        0
      )
    : null;
  updateStats();

  if (winstreakrecord < streak && teamR.length == maxTeamSize) {
    winstreakrecord = streak;
    if (winner == Team.RED) {
      for (i = 0; i < maxTeamSize; i++) {
        winstreakrecordplayers[i] = teamR[i].name;
      }
    }
    if (winner == Team.BLUE) {
      for (i = 0; i < maxTeamSize; i++) {
        winstreakrecordplayers[i] = teamB[i].name;
      }
    }
  }

  // New betting functionality
  let storedOdds = localStorage.getItem("odds");
  let oddsRed = 1.85; // Default fallback
  let oddsBlue = 1.85; // Default fallback

  if (storedOdds) {
    try {
      let oddsData = JSON.parse(storedOdds);
      oddsRed = parseFloat(oddsData.red) || oddsRed;
      oddsBlue = parseFloat(oddsData.blue) || oddsBlue;
    } catch (e) {
      //console.error("Error parsing odds from localStorage:", e);
    }
  }

  //console.log(`Odds Red: ${oddsRed}, Odds Blue: ${oddsBlue}`);

  if (Array.isArray(game.bets) && game.bets.length > 0) {
    game.bets.forEach((bet) => {
      let auth = getAuth({ id: bet.playerId });
      let playerStats;

      if (localStorage.getItem(auth)) {
        playerStats = JSON.parse(localStorage.getItem(auth));
      } else {
        playerStats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
          "Unknown Player",
        ];
      }

      let winnings = bet.amount * bet.odds;
      //console.log(`Bet details: Player ID: ${bet.playerId}, Team: ${bet.team}, Amount: ${bet.amount}, Odds: ${bet.odds}`);
      //console.log(`Winner: ${winner}, Bet Team: ${bet.team}`);
      //console.log(`Winnings: ${winnings.toFixed(2)}`);
      //console.log(`Current Points: ${playerStats[Ss.PT]}`);

      if (
        (winner === Team.RED && bet.team === "c") ||
        (winner === Team.BLUE && bet.team === "p")
      ) {
        playerStats[Ss.PT] += winnings; // Add winnings
        localStorage.setItem(auth, JSON.stringify(playerStats));
        room.sendAnnouncement(
          `Čestitamo ${playerStats[15]}! Dobio si ${Math.floor(
            winnings
          )} 💰HaxCoins na kladionici na ${
            winner === Team.RED ? "crvene" : "plave"
          }.`,
          null,
          0x00ff00,
          "bold",
          0
        );
      } else {
        room.sendAnnouncement(
          `${playerStats[15]}, izgubio si uložene 💰HaxCoins na kladjenju.`,
          null,
          0xff0000,
          "bold",
          0
        );
      }
    });

    game.bets = [];
  } else {
    // room.sendAnnouncement("No bets were placed.", null, 0xff0000, "bold", 2);
  }
}

function normalkits() {
  room.setTeamColors(
    1,
    teamColors[0].angle,
    teamColors[0].chatColor,
    teamColors[0].teamColors
  );
  room.setTeamColors(
    2,
    teamColors[2].angle,
    teamColors[2].chatColor,
    teamColors[2].teamColors
  );
}

function quickRestart() {
  room.stopGame();
  setTimeout(() => {
    room.startGame();
  }, 2000);
}

function resumeGame() {
  setTimeout(() => {
    room.startGame();
  }, 2000);
  setTimeout(() => {
    room.pauseGame(false);
  }, 1000);
}

function activateChooseMode() {
  inChooseMode = true;
  slowMode = 2;
  room.sendAnnouncement(`👆 Kapiteni biraju Igrače!`, null, 0xf0ff33);
}

function deactivateChooseMode() {
  inChooseMode = false;
  clearTimeout(timeOutCap);
  if (slowMode != 0) {
    slowMode = 0;
    room.sendAnnouncement(`Nastavljamo.`, null, 0xffffff, "bold", 0);
  }
  redCaptainChoice = "";
  blueCaptainChoice = "";
}

function loadMap(map, scoreLim, timeLim) {
  if (map == aloneMap) {
    room.setCustomStadium(aloneMap);
  } else if (map == classicMap) {
    classicMap != ""
      ? room.setCustomStadium(classicMap)
      : room.setDefaultStadium("Classic");
  } else if (map == bigMap) {
    bigMap != "."
      ? room.setCustomStadium(bigMap)
      : room.setDefaultStadium("Big");
  } else {
    room.setCustomStadium(map);
  }
  room.setScoreLimit(scoreLim);
  room.setTimeLimit(timeLim);
}

/* PLAYER FUNCTIONS */

function updateTeams() {
  // update the players' list and all the teams' list
  players = room
    .getPlayerList()
    .filter((player) => player.id != 0 && !getAFK(player));
  teamR = players.filter((p) => p.team === Team.RED);
  teamB = players.filter((p) => p.team === Team.BLUE);
  teamS = players.filter((p) => p.team === Team.SPECTATORS);
}

function handleInactivity() {
  // handles inactivity : players will be kicked after afkLimit
  if (countAFK && teamR.length + teamB.length > 1) {
    for (var i = 0; i < teamR.length; i++) {
      setActivity(teamR[i], getActivity(teamR[i]) + 1);
    }
    for (var i = 0; i < teamB.length; i++) {
      setActivity(teamB[i], getActivity(teamB[i]) + 1);
    }
  }
  for (var i = 0; i < extendedP.length; i++) {
    if (extendedP[i][eP.ACT] == 60 * ((2 / 3) * afkLimit)) {
      room.sendAnnouncement(
        "⛔ @" +
          room.getPlayer(extendedP[i][eP.ID]).name +
          ", Ukoliko se ne mrdneš u naredne " +
          Math.floor(afkLimit / 3) +
          " sekunde sledi kick !",
        extendedP[i][eP.ID],
        0xff0000,
        "bold",
        2
      );
    }
    if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
      extendedP[i][eP.ACT] = 0;
      if (room.getScores().time <= afkLimit - 0.5) {
        setTimeout(() => {
          !inChooseMode ? quickRestart() : room.stopGame();
        }, 10);
      }
      room.kickPlayer(extendedP[i][eP.ID], "AFK 👻", false);
    }
  }
}

function getAuth(player) {
  return extendedP.filter((a) => a[0] == player.id) != null
    ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH]
    : null;
}

function getAFK(player) {
  return extendedP.filter((a) => a[0] == player.id) != null
    ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK]
    : null;
}

function setAFK(player, value) {
  extendedP
    .filter((a) => a[0] == player.id)
    .forEach((player) => (player[eP.AFK] = value));
}

function getActivity(player) {
  return extendedP.filter((a) => a[0] == player.id) != null
    ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT]
    : null;
}

function setActivity(player, value) {
  extendedP
    .filter((a) => a[0] == player.id)
    .forEach((player) => (player[eP.ACT] = value));
}

function getGK(player) {
  return extendedP.filter((a) => a[0] == player.id) != null
    ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK]
    : null;
}

function setGK(player, value) {
  extendedP
    .filter((a) => a[0] == player.id)
    .forEach((player) => (player[eP.GK] = value));
}

function getMute(player) {
  return extendedP.filter((a) => a[0] == player.id) != null
    ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE]
    : null;
}

function setMute(player, value) {
  extendedP
    .filter((a) => a[0] == player.id)
    .forEach((player) => (player[eP.MUTE] = value));
}

/* BALANCE & CHOOSE FUNCTIONS */

function updateRoleOnPlayerIn() {
  updateTeams();
  if (inChooseMode) {
    if (players.length == 6) {
      loadMap(bigMap, scoreLimitBig, timeLimitBig);
    }
    let playerToSpecList = teamR.length <= teamB.length ? teamR[0] : teamB[0];
    if (playerToSpecList) {
      getSpecList(playerToSpecList);
    }
  }
  balanceTeams();
}

function updateRoleOnPlayerOut() {
  updateTeams();
  if (room.getScores() != null) {
    var scores = room.getScores();
    if (
      players.length >= 2 * maxTeamSize &&
      scores.time >= (5 / 6) * game.scores.timeLimit &&
      teamR.length != teamB.length
    ) {
      if (teamR.length < teamB.length) {
        if (scores.blue - scores.red == 2) {
          endGame(Team.BLUE);
          room.sendChat("🤖 Protivnik je Ragequit-ovao! Nova partija... 🤖");
          setTimeout(() => {
            room.stopGame();
          }, 100);
          return;
        }
      } else {
        if (scores.red - scores.blue == 2) {
          endGame(Team.RED);
          room.sendChat("🤖 Protivnik je Ragequit-ovao! Nova partija... 🤖");
          setTimeout(() => {
            room.stopGame();
          }, 100);
          return;
        }
      }
    }
  }
  if (inChooseMode) {
    if (players.length == 5) {
      loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
    }
    if (teamR.length == 0 || teamB.length == 0) {
      teamR.length == 0
        ? room.setPlayerTeam(teamS[0].id, Team.RED)
        : room.setPlayerTeam(teamS[0].id, Team.BLUE);
      return;
    }
    if (Math.abs(teamR.length - teamB.length) == teamS.length) {
      room.sendChat("🤖 Sredjujem... 🤖");
      deactivateChooseMode();
      resumeGame();
      var b = teamS.length;
      if (teamR.length > teamB.length) {
        for (var i = 0; i < b; i++) {
          setTimeout(() => {
            room.setPlayerTeam(teamS[0].id, Team.BLUE);
          }, 5 * i);
        }
      } else {
        for (var i = 0; i < b; i++) {
          setTimeout(() => {
            room.setPlayerTeam(teamS[0].id, Team.RED);
          }, 5 * i);
        }
      }
      return;
    }
    if (streak == 0 && room.getScores() == null) {
      if (Math.abs(teamR.length - teamB.length) == 2) {
        // if someone left a team has 2 more players than the other one, put the last chosen guy back in his place so it's fair
        room.sendChat("🤖 Balansiram timove... 🤖");
        teamR.length > teamB.length
          ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS)
          : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS);
      }
    }
    if (teamR.length == teamB.length && teamS.length < 2) {
      deactivateChooseMode();
      resumeGame();
      return;
    }
    capLeft
      ? choosePlayer()
      : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
  }
  balanceTeams();
}

function balanceTeams() {
  if (!inChooseMode) {
    if (players.length == 1 && teamR.length == 0) {
      quickRestart();
      loadMap(aloneMap, 0, 0);
      room.setPlayerTeam(players[0].id, Team.RED);
    } else if (
      Math.abs(teamR.length - teamB.length) == teamS.length &&
      teamS.length > 0
    ) {
      const n = Math.abs(teamR.length - teamB.length);
      if (players.length == 2) {
        quickRestart();
        loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
      }
      if (teamR.length > teamB.length) {
        for (var i = 0; i < n; i++) {
          room.setPlayerTeam(teamS[i].id, Team.BLUE);
        }
      } else {
        for (var i = 0; i < n; i++) {
          room.setPlayerTeam(teamS[i].id, Team.RED);
        }
      }
    } else if (Math.abs(teamR.length - teamB.length) > teamS.length) {
      const n = Math.abs(teamR.length - teamB.length);
      if (players.length == 1) {
        quickRestart();
        loadMap(aloneMap, 0, 0);
        room.setPlayerTeam(players[0].id, Team.RED);
        return;
      } else if (players.length == 5) {
        quickRestart();
        loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
      }
      if (players.length == maxTeamSize * 2 - 1) {
        allReds = [];
        allBlues = [];
      }
      if (teamR.length > teamB.length) {
        for (var i = 0; i < n; i++) {
          room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
      } else {
        for (var i = 0; i < n; i++) {
          room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
        }
      }
    } else if (
      Math.abs(teamR.length - teamB.length) < teamS.length &&
      teamR.length != teamB.length
    ) {
      room.pauseGame(true);
      activateChooseMode();
      choosePlayer();
    } else if (
      teamS.length >= 2 &&
      teamR.length == teamB.length &&
      teamR.length < maxTeamSize
    ) {
      if (teamR.length == 2) {
        quickRestart();
        loadMap(bigMap, scoreLimitBig, timeLimitBig);
      }
      topBtn();
    }
  }
}

function choosePlayer() {
  clearTimeout(timeOutCap);
  if (teamR.length <= teamB.length && teamR.length != 0) {
    room.sendAnnouncement(
      "Da izabereš igrača, napiši broj sa spec liste ili napiši 'top', 'random' or 'bottom'.",
      teamR[0].id,
      0xf0ff33,
      "normal",
      1
    );
    timeOutCap = setTimeout(
      function (player) {
        room.sendAnnouncement(
          "Požuri @" +
            player.name +
            ", samo " +
            Number.parseInt(chooseTime / 2) +
            " sekundi je ostalo da odabereš !",
          player.id
        );
        timeOutCap = setTimeout(
          function (player) {
            room.kickPlayer(player.id, "Nisi izabrao na vreme!", false);
          },
          chooseTime * 500,
          teamR[0]
        );
      },
      chooseTime * 1000,
      teamR[0]
    );
  } else if (teamB.length < teamR.length && teamB.length != 0) {
    room.sendAnnouncement(
      "Da izabereš igrača, napiši broj sa spec liste ili napiši 'top', 'random' or 'bottom'.",
      teamB[0].id,
      0xf0ff33,
      "normal",
      1
    );
    timeOutCap = setTimeout(
      function (player) {
        room.sendAnnouncement(
          "Požuri @" +
            player.name +
            ", samo " +
            Number.parseInt(chooseTime / 2) +
            " sekundi je ostalo da odabereš !",
          player.id
        );
        timeOutCap = setTimeout(
          function (player) {
            room.kickPlayer(player.id, "Nisi izabrao na vreme!", false);
          },
          chooseTime * 500,
          teamB[0]
        );
      },
      chooseTime * 1000,
      teamB[0]
    );
  }
  if (teamR.length != 0 && teamB.length != 0)
    getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
}

function getSpecList(player) {
  if (!player || !player.id) {
    console.error("Invalid player passed to getSpecList");
    return;
  }
  var cstm = "Player list: ";
  for (var i = 0; i < teamS.length; i++) {
    if (140 - cstm.length < (teamS[i].name + "[" + (i + 1) + "], ").length) {
      room.sendAnnouncement(cstm, player.id, null, "bold", 1);
      cstm = "... ";
    }
    cstm += teamS[i].name + "[" + (i + 1) + "], ";
  }
  cstm = cstm.substring(0, cstm.length - 2);
  cstm += ".";
  room.sendAnnouncement(cstm, player.id, null, "bold", 1);
}

function announcePlayers() {
  var players = room.getPlayerList();
  var playerData = [];

  players.forEach((player) => {
    if (player.id >= 1) {
      var stats;

      var auth = getAuth(player); // Function to get auth for the player
      var rawData = localStorage.getItem(auth);

      if (rawData) {
        try {
          stats = JSON.parse(rawData);
        } catch (e) {
          console.error(`Error parsing data for ${player.name}:`, e);
          stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "0.00",
            "0.00",
            "0.00",
            0,
            "0.00",
          ]; // Default stats
        }
      } else {
        stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]; // Default stats
      }

      let playerOC =
        stats[Ss.OC] !== undefined ? parseFloat(stats[Ss.OC]) : NaN;
      playerData.push({ name: player.name, oc: playerOC });
    }
  });

  // Sort players by OC in descending order
  playerData.sort((a, b) => b.oc - a.oc);

  var message = `┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n┃🌠 Ocene Igrača: `;

  playerData.forEach((player, index) => {
    message += `${player.name} [${
      isNaN(player.oc) ? "NaN" : player.oc.toFixed(2)
    }]`;

    // Add a comma and space if it's not the last player
    if (index < playerData.length - 1) {
      message += ", ";
    }
  });

  message += `\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛\n`;
  room.sendAnnouncement(message, null, 0xd402ff, "bold", 0);
}

setInterval(announcePlayers, 910000);

function announceTeams() {
  var players = room.getPlayerList();
  var redTeamOC = [];
  var blueTeamOC = [];

  players.forEach((player) => {
    if (player.id >= 1) {
      var stats;
      var auth = getAuth(player);
      var rawData = localStorage.getItem(auth);

      if (rawData) {
        try {
          stats = JSON.parse(rawData);
        } catch (e) {
          console.error(`Error parsing data for ${player.name}:`, e);
          stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "0.00",
            "0.00",
            "0.00",
            0,
            "0.00",
          ];
        }
      } else {
        stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ];
      }

      let playerOC =
        stats[Ss.OC] !== undefined ? parseFloat(stats[Ss.OC]) : NaN;

      if (player.team === 1) {
        // Red team
        redTeamOC.push(playerOC);
      } else if (player.team === 2) {
        // Blue team
        blueTeamOC.push(playerOC);
      }
    }
  });

  if (redTeamOC.length >= 3 && blueTeamOC.length >= 3) {
    let avgRedOC = (
      redTeamOC.reduce((acc, val) => acc + val, 0) / redTeamOC.length
    ).toFixed(2);
    let avgBlueOC = (
      blueTeamOC.reduce((acc, val) => acc + val, 0) / blueTeamOC.length
    ).toFixed(2);

    // Convert averages to probabilities
    let impliedProbRed = 1 / (1 + Math.exp(avgBlueOC - avgRedOC));
    let impliedProbBlue = 1 - impliedProbRed;

    // Margin and odds adjustment
    let margin = 0.1; // House margin
    let adjustedProbRed = impliedProbRed / (1 + margin);
    let adjustedProbBlue = impliedProbBlue / (1 + margin);

    let sumAdjustedProbs = adjustedProbRed + adjustedProbBlue;
    adjustedProbRed /= sumAdjustedProbs;
    adjustedProbBlue /= sumAdjustedProbs;

    oddsRed = (1 / adjustedProbRed).toFixed(2);
    oddsBlue = (1 / adjustedProbBlue).toFixed(2);

    // Ensure odds are not lower than 1.01
    oddsRed = Math.max(oddsRed, 1.01);
    oddsBlue = Math.max(oddsBlue, 1.01);

    // Store odds in localStorage
    localStorage.setItem(
      "odds",
      JSON.stringify({ red: oddsRed, blue: oddsBlue })
    );

    console.log(`Odds Red: ${oddsRed}, Odds Blue: ${oddsBlue}`); // Debugging line

    var message = `LIVE Klađenje ( !bet ) kvote: Crveni [${oddsRed}] Plavi [${oddsBlue}]\n`;
  } else {
    var message = `Nedovoljno igrača za kladjenje.`;
  }

  setTimeout(function () {
    room.sendAnnouncement(message, null, 0x015fb0, "bold", 0);
  }, 2000);
}

/* STATS FUNCTIONS */

function getLastTouchOfTheBall() {
  const ballPosition = room.getBallPosition();
  updateTeams();
  for (var i = 0; i < players.length; i++) {
    if (players[i].position != null) {
      var distanceToBall = pointDistance(players[i].position, ballPosition);
      if (distanceToBall < triggerDistance) {
        !activePlay ? (activePlay = true) : null;
        if (
          lastTeamTouched == players[i].team &&
          lastPlayersTouched[0] != null &&
          lastPlayersTouched[0].id != players[i].id
        ) {
          lastPlayersTouched[1] = lastPlayersTouched[0];
          lastPlayersTouched[0] = players[i];
        }
        lastTeamTouched = players[i].team;
      }
    }
  }
}

function getStats() {
  // gives possession, ball speed and GK of each team
  if (activePlay) {
    updateTeams();
    lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
    var ballPosition = room.getBallPosition();
    point[1] = point[0];
    point[0] = ballPosition;
    ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
    var k = [-1, Infinity];
    for (var i = 0; i < teamR.length; i++) {
      if (teamR[i].position.x < k[1]) {
        k[0] = teamR[i];
        k[1] = teamR[i].position.x;
      }
    }
    k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
    k = [-1, -Infinity];
    for (var i = 0; i < teamB.length; i++) {
      if (teamB[i].position.x > k[1]) {
        k[0] = teamB[i];
        k[1] = teamB[i].position.x;
      }
    }
    k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
    findGK();
  }
}

function updateStats() {
  if (
    players.length >= 2 * maxTeamSize &&
    (game.scores.time >= (5 / 6) * game.scores.timeLimit ||
      game.scores.red == game.scores.scoreLimit ||
      game.scores.blue == game.scores.scoreLimit) &&
    allReds.length >= maxTeamSize &&
    allBlues.length >= maxTeamSize
  ) {
    var stats;
    for (var i = 0; i < allReds.length; i++) {
      localStorage.getItem(getAuth(allReds[i]))
        ? (stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))))
        : (stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "player",
            "0.00",
            "0.00",
            0,
            "0.00",
            allReds[i].name,
          ]);
      stats[Ss.GA]++;
      lastWinner == Team.RED
        ? stats[Ss.WI]++
        : lastWinner == Team.BLUE
        ? stats[Ss.LS]++
        : stats[Ss.DR]++;
      stats[Ss.WR] = ((100 * stats[Ss.WI]) / stats[Ss.GA]).toPrecision(3);
      stats[Ss.OC] = (
        (stats[Ss.WI] -
          stats[Ss.LS] +
          stats[Ss.GL] +
          stats[Ss.AS] +
          stats[Ss.CS]) /
        stats[Ss.GA]
      ).toPrecision(3);
      stats[Ss.GP] = (stats[Ss.GL] / stats[Ss.GA]).toPrecision(2);
      stats[Ss.AP] = (stats[Ss.AS] / stats[Ss.GA]).toPrecision(2);
      localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
    }
    for (var i = 0; i < allBlues.length; i++) {
      localStorage.getItem(getAuth(allBlues[i]))
        ? (stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))))
        : (stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "player",
            "0.00",
            "0.00",
            0,
            "0.00",
            allBlues[i].name,
          ]);
      stats[Ss.GA]++;
      lastWinner == Team.BLUE
        ? stats[Ss.WI]++
        : lastWinner == Team.RED
        ? stats[Ss.LS]++
        : stats[Ss.DR]++;
      stats[Ss.WR] = ((100 * stats[Ss.WI]) / stats[Ss.GA]).toPrecision(3);
      stats[Ss.OC] = (
        (stats[Ss.WI] -
          stats[Ss.LS] +
          stats[Ss.GL] +
          stats[Ss.AS] +
          stats[Ss.CS]) /
        stats[Ss.GA]
      ).toPrecision(3);
      stats[Ss.GP] = (stats[Ss.GL] / stats[Ss.GA]).toPrecision(2);
      stats[Ss.AP] = (stats[Ss.AS] / stats[Ss.GA]).toPrecision(2);
      localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
    }
    for (var i = 0; i < game.goals.length; i++) {
      if (game.goals[i].striker != null) {
        if (
          allBlues
            .concat(allReds)
            .findIndex((player) => player.id == game.goals[i].striker.id) != -1
        ) {
          stats = JSON.parse(
            localStorage.getItem(getAuth(game.goals[i].striker))
          );
          stats[Ss.GL]++;
          stats[Ss.PT]++;
          stats[Ss.GP] = (stats[Ss.GL] / stats[Ss.GA]).toPrecision(2);
          localStorage.setItem(
            getAuth(game.goals[i].striker),
            JSON.stringify(stats)
          );
        }
      }
      if (game.goals[i].assist != null) {
        if (
          allBlues
            .concat(allReds)
            .findIndex((player) => player.name == game.goals[i].assist.name) !=
          -1
        ) {
          stats = JSON.parse(
            localStorage.getItem(getAuth(game.goals[i].assist))
          );
          stats[Ss.AS]++;
          stats[Ss.PT]++;
          stats[Ss.AP] = (stats[Ss.AS] / stats[Ss.GA]).toPrecision(2);
          localStorage.setItem(
            getAuth(game.goals[i].assist),
            JSON.stringify(stats)
          );
        }
      }
    }
    if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
      stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
      stats[Ss.GK]++;
      game.scores.blue == 0 ? (stats[Ss.CS]++, (stats[Ss.PT] += 2)) : null;
      stats[Ss.CP] = ((100 * stats[Ss.CS]) / stats[Ss.GK]).toPrecision(3);
      localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
    }
    if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
      stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
      stats[Ss.GK]++;
      game.scores.red == 0 ? (stats[Ss.CS]++, (stats[Ss.PT] += 2)) : null;
      stats[Ss.CP] = ((100 * stats[Ss.CS]) / stats[Ss.GK]).toPrecision(3);
      localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
    }
  }
}

function findGK() {
  var tab = [
    [-1, ""],
    [-1, ""],
  ];
  for (var i = 0; i < extendedP.length; i++) {
    if (
      room.getPlayer(extendedP[i][eP.ID]) != null &&
      room.getPlayer(extendedP[i][eP.ID]).team == Team.RED
    ) {
      if (tab[0][0] < extendedP[i][eP.GK]) {
        tab[0][0] = extendedP[i][eP.GK];
        tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
      }
    } else if (
      room.getPlayer(extendedP[i][eP.ID]) != null &&
      room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE
    ) {
      if (tab[1][0] < extendedP[i][eP.GK]) {
        tab[1][0] = extendedP[i][eP.GK];
        tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
      }
    }
  }
  GKList = [tab[0][1], tab[1][1]];
}

/* EVENTS */
function isBlacklisted(player) {
  return (
    blacklist.filter((b) => b.Auth == player.auth || b.Conn == player.conn)
      .length > 0
  );
}

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
  // Ghost kick logic
  let existingPlayer = Array.from(playerDataMap.values()).find(
    (p) =>
      (p.auth === player.auth || p.conn === player.conn) && p.id !== player.id
  );
  if (existingPlayer) {
    // room.kickPlayer(player.id, "Ghost kick", false); // Use `false` for kicking instead of banning
    console.log(`Kicked player ${player.name} with ID: ${player.id}`);
  }
  // Store the player data
  playerDataMap.set(player.id, {
    name: player.name,
    auth: player.auth,
    conn: player.conn,
  });
  discord_message_auth(
    `🟢 ${player.name} has joined! \n**A**: ${player.auth}\n**C**: ${player.conn}`
  );
  if (isBlacklisted(player))
    room.kickPlayer(player.id, "You are banned forever!", true);
  room.setPlayerAvatar(player.id, " ⠀");
  if (room.getPlayerList().length >= 17) {
    room.setPassword("rabarinoma");
    room.sendAnnouncement(
      "Soba je sada zatvorena. Ući mogu samo master admini sa lozinkom."
    );
  }
  extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
  updateRoleOnPlayerIn();
  room.sendAnnouncement(
    `┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ 
👋 Zdravo ${player.name} ! Kucaj !pomoc za listu komandi.
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`,
    player.id,
    0x5ee7ff
  );
  if (localStorage.getItem(player.auth) != null) {
    let playerData = JSON.parse(localStorage.getItem(player.auth));
    if (playerData[Ss.RL] != "player") {
      room.setPlayerAdmin(player.id, true);
      room.sendAnnouncement(
        (playerData[Ss.RL] == "master" ? "Master " : "Admin ") +
          player.name +
          " se upravo pridružio !"
      );
    }
  }
  var auth = getAuth(player);
  if (localStorage.getItem(auth)) {
    var stats = JSON.parse(localStorage.getItem(auth));
    var avatarId = stats[Ss.AV]; // Assume Ss.AV is the index for avatar ID in stats
    if (avatarId) {
      room.setPlayerAvatar(player.id, avatarId);
    }
  }
};

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
  if (changedPlayer.id == 0) {
    room.setPlayerTeam(0, Team.SPECTATORS);
    return;
  }
  if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
    room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
    room.sendAnnouncement(changedPlayer.name + " je AFK ! ☕");
    return;
  }
  updateTeams();
  if (room.getScores() != null) {
    var scores = room.getScores();
    if (
      changedPlayer.team != Team.SPECTATORS &&
      scores.time <= (3 / 4) * scores.timeLimit &&
      Math.abs(scores.blue - scores.red) < 2
    ) {
      changedPlayer.team == Team.RED
        ? allReds.push(changedPlayer)
        : allBlues.push(changedPlayer);
    }
  }
  if (changedPlayer.team == Team.SPECTATORS) {
    setActivity(changedPlayer, 0);
  }
  if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
    if (Math.abs(teamR.length - teamB.length) == teamS.length) {
      deactivateChooseMode();
      resumeGame();
      var b = teamS.length;
      if (teamR.length > teamB.length) {
        for (var i = 0; i < b; i++) {
          setTimeout(() => {
            room.setPlayerTeam(teamS[0].id, Team.BLUE);
          }, 200 * i);
        }
      } else {
        for (var i = 0; i < b; i++) {
          setTimeout(() => {
            room.setPlayerTeam(teamS[0].id, Team.RED);
          }, 200 * i);
        }
      }
      return;
    } else if (
      (teamR.length == maxTeamSize && teamB.length == maxTeamSize) ||
      (teamR.length == teamB.length && teamS.length < 2)
    ) {
      deactivateChooseMode();
      resumeGame();
    } else if (teamR.length <= teamB.length && redCaptainChoice != "") {
      // choice remembered
      redCaptainChoice == "top"
        ? room.setPlayerTeam(teamS[0].id, Team.RED)
        : redCaptainChoice == "random"
        ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED)
        : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
      return;
    } else if (teamB.length < teamR.length && blueCaptainChoice != "") {
      blueCaptainChoice == "top"
        ? room.setPlayerTeam(teamS[0].id, Team.BLUE)
        : blueCaptainChoice == "random"
        ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE)
        : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
      return;
    } else {
      choosePlayer();
    }
  }
};

room.onPlayerLeave = function (player) {
  discord_message_auth(`🔴 ${player.name} has left!`);
  if (
    teamR.findIndex((red) => red.id == player.id) == 0 &&
    inChooseMode &&
    teamR.length <= teamB.length
  ) {
    choosePlayer();
    capLeft = true;
    setTimeout(() => {
      capLeft = false;
    }, 10);
  }
  if (
    teamB.findIndex((blue) => blue.id == player.id) == 0 &&
    inChooseMode &&
    teamB.length < teamR.length
  ) {
    choosePlayer();
    capLeft = true;
    setTimeout(() => {
      capLeft = false;
    }, 10);
  }

  // Check if the player is in teamR
  const isInTeamR = teamR.some((red) => red.id === player.id);
  const isInTeamB = teamB.some((blue) => blue.id === player.id);

  console.log(`Is player in teamR? ${isInTeamR}`);
  console.log(`Is player in teamB? ${isInTeamB}`);

  if (isInTeamR || isInTeamB) {
    if (bettingOpen) {
      // Process refund logic
      if (Array.isArray(game.bets) && game.bets.length > 0) {
        console.log(
          `Player ${player.name} was part of a playing team and has left. Refunding bets...`
        );

        // Refund bets
        game.bets.forEach((bet) => {
          let auth = getAuth({ id: bet.playerId });
          let playerStats = JSON.parse(localStorage.getItem(auth)) || [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "0.00",
            "0.00",
            0,
            "0.00",
            "Unknown Player",
          ];

          // Refund the bet amount
          playerStats[Ss.PT] += bet.amount;
          localStorage.setItem(auth, JSON.stringify(playerStats));

          // Get the player who placed the bet
          let betPlayer = findPlayerById(bet.playerId);
          if (betPlayer) {
            // Announce the refund
            room.sendAnnouncement(
              `${betPlayer.name}, vaš ulog od ${bet.amount} 💰 je vraćen, jer je igrač napustio igru.`,
              betPlayer.id,
              0x015fb0,
              "normal",
              2
            );
          }
        });

        // Clear bets
        game.bets = [];
      }
    } else {
      console.log("Betting is closed. No refunds are processed.");
    }
  }

  // Other existing logic
  setActivity(player, 0);
  updateTeams();
  updateRoleOnPlayerOut();

  if (playerDataMap.has(player.id)) {
    playerDataMap.delete(player.id);
  }

  if (room.getPlayerList().length === 16) {
    room.setPassword();
  }
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
  const webhookURL =
    "https://discord.com/api/webhooks/1273069352756711517/NriMiiMANdT_q3NhJxeX_LcUkH7PkcPLtj6UQUHy6qgVFK5zosPCEFu470jCSQZpVWVY";
  ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
};

/* PLAYER ACTIVITY */

function Essage(playerName, message) {
  playerName = playerName.replace(/@/g, "@ ");
  message = message.replace(/@/g, "@ ").replace(/#/g, "ㅤ#");
  message = message.replace(/\*|\*\*|__|~/g, "");
  message = message.replace(/`/g, "");
  return `📝**${playerName}**: ${message}`;
}

room.onPlayerChat = function (player, message) {
  var lowerCaseMessage = message.toLowerCase();

  // Define an array of words to check
  var blockedWords = [
    "havana",
    "hawana",
    "Havana",
    "HAVANA",
    "HaVaNa",
    "hAvAnA",
    "hAvAna",
    "Hawana",
    "HAWANA",
    "HaWaNa",
    "hAwAnA",
    "hAwAna",
    "ha vana",
    "ha v ana",
    "hav ana",
    "h avana",
    "ha vana",
    "h awana",
    "ha wana",
    "ha w ana",
    "haw ana",
    "h awana",
    "h a v a n a",
    "h a va na",
    "ha va na",
    "hav an a",
    "h a w a n a",
    "h a wa na",
    "ha wa na",
    "haw an a",
    "havana.",
    ".havana",
    "h.avana",
    "ha.vana",
    "hav.ana",
    "hava.na",
    "hawana.",
    ".hawana",
    "h.awana",
    "ha.wana",
    "haw.ana",
    "hawa.na",
    "h-a-v-a-n-a",
    "ha-vana",
    "h-avana",
    "hav-ana",
    "hava-na",
    "havan-a",
    "h-a-w-a-n-a",
    "ha-wana",
    "h-awana",
    "haw-ana",
    "hawa-na",
    "hawan-a",
    "h_a_v_a_n_a",
    "ha_vana",
    "h_avana",
    "hav_ana",
    "hava_na",
    "havan_a",
    "h_a_w_a_n_a",
    "ha_wana",
    "h_awana",
    "haw_ana",
    "hawa_na",
    "hawan_a",
    "h@vana",
    "hav@na",
    "hava@na",
    "havan@a",
    "h@wana",
    "haw@na",
    "hawa@na",
    "hawan@a",
    "h4vana",
    "ha4ana",
    "ha4vana",
    "havan4",
    "h4wana",
    "ha4ana",
    "ha4wana",
    "hawan4",
    "havanah",
    "havannah",
    "havna",
    "havan",
    "hawanah",
    "hawannah",
    "hawna",
    "hawan",
    "havaa",
    "havna",
    "havanaaa",
    "haavna",
    "hawaa",
    "hawna",
    "hawanaaa",
    "haawna",
    "havan0",
    "h@van@",
    "h a van@",
    "ha va na",
    "hawan0",
    "h@wan@",
    "h a wan@",
    "ha wa na",
    "🅷avana",
    "ha🆅ana",
    "hav🅰na",
    "havan🅰",
    "🅷awana",
    "ha🆆ana",
    "haw🅰na",
    "hawan🅰",
    "🅷🅰🆅🅰🅽🅰",
    "🅗🅐🅥🅐🅝🅐",
    "ⓗⓐⓥⓐⓝⓐ",
    "🅷🅰🆆🅰🅽🅰",
    "🅗🅐🅦🅐🅝🅐",
    "ⓗⓐⓦⓐⓝⓐ",
    "h_a_v_a_n_a_",
    "_havana_",
    "havana_",
    "_havana",
    "h_a_w_a_n_a_",
    "_hawana_",
    "hawana_",
    "_hawana",
    " havana ",
    "havana!",
    "havana?",
    "havana,",
    "havana;",
    " hawana ",
    "hawana!",
    "hawana?",
    "hawana,",
    "hawana;",
    "hávana",
    "hávána",
    "havána",
    "hávaná",
    "háwana",
    "hávána",
    "hawána",
    "háwaná",
    "hаvana",
    "hаvаnа",
    "hаvаna",
    "havаna",
    "hаwana",
    "hаwаnа",
    "hаwаna",
    "hawаna",
    "ha'vana",
    'ha"vana',
    "ha(vana)",
    "ha[vana]",
    "ha'wana",
    'ha"wana',
    "ha(wana)",
    "ha[wana]",
    "【havana】",
    "『havana』",
    "「havana」",
    "【hawana】",
    "『hawana』",
    "「hawana」",
    "h a v a n a",
    "h⠀a⠀v⠀a⠀n⠀a",
    "h a w a n a",
    "h⠀a⠀w⠀a⠀n⠀a",
    "h̆ăv̆ăn̆ă",
    "h̆ăw̆ăn̆ă",
    "ⓗⓐⓥⓐⓝⓐ",
    "🅗🅐🅥🅐🅝🅐",
    "ⒽⒶⓋⒶⓃⒶ",
    "ⓗⓐⓦⓐⓝⓐ",
    "🅗🅐🅦🅐🅝🅐",
    "ⒽⒶⓌⒶⓃⒶ",
    "ɥɐʌɐuɐ",
    "ɥɐʍɐuɐ",
    "H A V A N A",
    "H A-V A N A",
    "H A W A N A",
    "H A-W A N A",
    "H@V@N@",
    "H_A-V_A-N-A_",
    "_Havana_",
    "H@W@N@",
    "H_A-W_A-N-A_",
    "_Hawana_",
    "h a v ana",
    "ha v an a",
    "ha v ana",
    "h a van a",
    "ha van a",
    "h a w ana",
    "ha w an a",
    "ha w ana",
    "h a wan a",
    "ha wan a",
    "h.a.v.a.n.a.",
    "-ha-va-na-",
    "--h-a-v-a-n-a--",
    "h.a.w.a.n.a.",
    "-ha-wa-na-",
    "--h-a-w-a-n-a--",
    "hav/an\\a",
    "h.av-a.na/",
    "h/a\\v.a/n\\a",
    "haw/an\\a",
    "h.aw-a.na/",
    "h/a\\w.a/n\\a",
    "ha va'na",
    "hav'ana",
    "havan'a",
    "ha'van'a",
    "ha wa'na",
    "haw'ana",
    "hawan'a",
    "ha'wan'a",
    "☠️havana☠️",
    "💀havana💀",
    "⚠️havana⚠️",
    "☠️hawana☠️",
    "💀hawana💀",
    "⚠️hawana⚠️",
    "https://www.haxball.com/play",
    "https://haxball.com/play",
    "http://www.haxball.com/play",
    "haxball.com/play",
    "captains",
    "🟡",
    "🔵",
    "hav",
    "haw",
    "хавана",
    "хав",
    "ха вана",
  ];
  // Check if the message contains any of the blocked words
  for (var i = 0; i < blockedWords.length; i++) {
    if (
      lowerCaseMessage.includes(blockedWords[i]) ||
      !lowerCaseMessage == "have"
    ) {
      // Do not display the message
      return false;
    }
  }

  if (message.startsWith(avatarCommand)) {
    var avatarId = message
      .substring(avatarCommand.length)
      .trim()
      .replace(/^"|"$/g, "");

    if (avatarId) {
      var auth = getAuth(player);
      var stats;
      if (localStorage.getItem(auth)) {
        stats = JSON.parse(localStorage.getItem(auth));
      } else {
        stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
          "",
        ]; // Added extra element for avatar ID
      }

      if (stats[Ss.GA] > 19) {
        room.setPlayerAvatar(player.id, avatarId);

        // Save the avatar ID in stats
        stats[Ss.AV] = avatarId; // Assume Ss.AV is the index for avatar ID in stats

        // Update localStorage
        localStorage.setItem(auth, JSON.stringify(stats));

        if (!SMSet.has(player.id)) {
          SMSet.add(player.id);
          var id = [player.id, auth, player.conn];
        }

        return false;
      } else {
        room.sendAnnouncement(
          "Potrebno ti je 20 mečeva da bi promenio avatar.",
          player.id,
          0xff0000,
          "bold",
          2
        );

        return false;
      }
    } else {
      //console.log("Avatar ID not specified in message:", message);
    }
  }

  discord_message(Essage(player.name, message));
  if (message == "!p") pauseFunction(player);
  let prefixTeamChatString = "t ";

  if (message.substr(0, prefixTeamChatString.length) == prefixTeamChatString) {
    room
      .getPlayerList()
      .filter((callback) => callback.team == player.team)
      .forEach((callback) => {
        room.sendAnnouncement(
          ` ${player.name}: ${message.substr(prefixTeamChatString.length)}`,
          callback.id,
          player.team == 1 ? 0xff0000 : player.team == 0 ? 0xb2b2b2 : 0x1b89f7
        );
      });
    return false;
  }
  if (message.startsWith("#")) {
    message = message.substr(1).trim(); // Remove the '#' character
    if (message.indexOf(" ") !== -1) {
      let args = message.match(/^(\S+)\s(.*)/).slice(1);

      if (args.length > 1) {
        var pmMsg = args[1];
        var players = room.getPlayerList();
        var pmSent = false;

        //console.log("PM command detected. Target ID:", args[0], "Message:", pmMsg); // Debug

        players.forEach(function (pmPlayer) {
          // console.log("Checking player:", pmPlayer.id); // Debug
          if (pmPlayer.id == args[0]) {
            // Ensure comparison is correct
            whisper(
              "[PM > " + pmPlayer.name + "] " + player.name + ": " + pmMsg,
              player.id,
              0xff20ff,
              "normal",
              1
            );
            whisper(
              "[PM] " + player.name + ": " + pmMsg,
              pmPlayer.id,
              0xff20ff,
              "normal",
              1
            );
            pmSent = true;
            // console.log("PM sent to player:", pmPlayer.name); // Debug
          }
        });
        if (pmSent == false) {
          whisper(
            "Cannot find user with ID '" + args[0] + "'",
            player.id,
            0xff20ff,
            "normal",
            1
          );
          // console.log("User with ID not found:", args[0]); // Debug
        }
        return false;
      }
    }
  }
  var index = commands.indexOf(message);
  if (index !== -1) {
    var id = [];
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);
    if (stats[Ss.PT] > 79) {
      if (!SMSet.has(player.auth)) {
        SMSet.add(player.auth);
        setTimeout(
          (auth) => {
            SMSet.delete(auth);
          },
          120000,
          player.auth
        );

        id.push(player.id, player.auth, player.conn);
        room.reorderPlayers(id, Boolean(index));
        room.sendChat(
          `${player.name} je iskoristio vremeplov. Za 2min će novi vremeplov biti pušten u prodaju!`,
          null,
          0x5ee7ff,
          "normal",
          2
        );

        if (typeof stats[Ss.PT] === "number") {
          stats[Ss.PT] -= 80;
          localStorage.setItem(getAuth(player), JSON.stringify(stats));
        }
      }
    } else if (stats[Ss.PT] < 80) {
      room.sendAnnouncement(
        "Nemaš dovoljno 💰 Potrebno 80.",
        player.id,
        0xff0000,
        "bold"
      );
    } else {
      room.sendAnnouncement(
        "Ponovo možeš koristiti vremeplov za 2min",
        player.id,
        0xff0000,
        "italic"
      );
      return false;
    }
  }
  var index = command.indexOf(message);
  if (index !== -1) {
    var id = [];
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);

    if (stats[Ss.PT] > 0) {
      if (!SMSet.has(player.id)) {
        SMSet.add(player.id);
        setTimeout(
          (number) => {
            SMSet.delete(number);
          },
          180000,
          player.id
        );
        id.push(player.id, player.auth, player.conn);
        room.sendChat(
          `${player.name} je kupio pivo i počinje se nalivati k'o stoka. Sledeće pivo može kupiti za 3min`,
          null,
          0x5ee7ff,
          "normal",
          2
        );
        if (typeof stats[Ss.PT] === "number") {
          stats[Ss.PT] -= 1;
          localStorage.setItem(getAuth(player), JSON.stringify(stats));
        }
      }
    } else if (stats[Ss.PT] < 1) {
      room.sendAnnouncement(
        "Nemaš dovoljno 💰 Potrebno 1.",
        player.id,
        0xff0000,
        "bold"
      );
    }
  }
  var index = commandz.indexOf(message);
  if (index !== -1) {
    var id = [];
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);
    if (stats[Ss.PT] > 989) {
      room.setTeamColors(
        1,
        teamColors[1].angle,
        teamColors[1].chatColor,
        teamColors[1].teamColors
      );
      room.setTeamColors(
        2,
        teamColors[3].angle,
        teamColors[3].chatColor,
        teamColors[3].teamColors
      );
      if (!SMSet.has(player.id)) {
        SMSet.add(player.id);
        id.push(player.id, player.auth, player.conn);
        room.sendAnnouncement(
          `${player.name} je kupio dresove!`,
          null,
          0x5ee7ff,
          "normal",
          2
        );
        if (typeof stats[Ss.PT] === "number") {
          stats[Ss.PT] -= 990;
          localStorage.setItem(getAuth(player), JSON.stringify(stats));
        }
      }
    } else if (stats[Ss.PT] < 990) {
      room.sendAnnouncement(
        "Nemaš dovoljno 💰 Potrebno 990.",
        player.id,
        0xff0000,
        "bold"
      );
    }
  }
  var index = dres2.indexOf(message);
  if (index !== -1) {
    var id = [];
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);
    if (stats[Ss.GA] > 9 && stats[Ss.PT] > 20) {
      room.setTeamColors(
        1,
        teamColors[4].angle,
        teamColors[4].chatColor,
        teamColors[4].teamColors
      );
      room.setTeamColors(
        2,
        teamColors[5].angle,
        teamColors[5].chatColor,
        teamColors[5].teamColors
      );
      if (!SMSet.has(player.id)) {
        SMSet.add(player.id);
        setTimeout(
          (number) => {
            SMSet.delete(number);
          },
          600000,
          player.id
        );
        id.push(player.id, player.auth, player.conn);
        room.sendChat(
          `${player.name} potrošio si 20 kredita i kupio dres!`,
          player.id,
          0x5ee7ff,
          "normal",
          2
        );
        stats[Ss.PT] -= 20;
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
      }
    } else if (stats[Ss.PT] < 20 && stats[Ss.GA] < 10) {
      room.sendAnnouncement(
        "Potrebno ti je 20💰 i 10 mečeva da bi koristio ovaj dres.",
        player.id,
        0xff0000,
        "bold"
      );
    }
  }
  var index = dres3.indexOf(message);
  if (index !== -1) {
    var id = [];
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);
    if (stats[Ss.GL] > 9 && stats[Ss.PT] > 29) {
      room.setTeamColors(
        1,
        teamColors[6].angle,
        teamColors[6].chatColor,
        teamColors[6].teamColors
      );
      room.setTeamColors(
        2,
        teamColors[7].angle,
        teamColors[7].chatColor,
        teamColors[7].teamColors
      );
      if (!SMSet.has(player.id)) {
        SMSet.add(player.id);
        setTimeout(
          (number) => {
            SMSet.delete(number);
          },
          600000,
          player.id
        );
        id.push(player.id, player.auth, player.conn);
        room.sendChat(
          `${player.name} potrošio si 30 kredita i kupio dres!`,
          player.id,
          0x5ee7ff,
          "normal",
          2
        );
        stats[Ss.PT] -= 30;
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
      }
    } else if (stats[Ss.GL] < 10 && stats[Ss.PT] < 30) {
      room.sendAnnouncement(
        "Potrebno ti je 30💰 i 10 golova da bi koristio ovaj dres.",
        player.id,
        0xff0000,
        "bold"
      );
    }
  }
  var index = dres4.indexOf(message);
  if (index !== -1) {
    var id = [];
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);
    if (stats[Ss.AS] > 24 && stats[Ss.PT] > 39) {
      room.setTeamColors(
        1,
        teamColors[8].angle,
        teamColors[8].chatColor,
        teamColors[8].teamColors
      );
      room.setTeamColors(
        2,
        teamColors[9].angle,
        teamColors[9].chatColor,
        teamColors[9].teamColors
      );
      if (!SMSet.has(player.id)) {
        SMSet.add(player.id);
        setTimeout(
          (number) => {
            SMSet.delete(number);
          },
          600000,
          player.id
        );
        id.push(player.id, player.auth, player.conn);
        room.sendChat(
          `${player.name} potrošio si 40 kredita i kupio dres!`,
          player.id,
          0x5ee7ff,
          "normal",
          2
        );
        stats[Ss.PT] -= 40;
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
      }
    } else if (stats[Ss.AS] < 25 && stats[Ss.PT] < 40) {
      room.sendAnnouncement(
        "Potrebno ti je 40💰 i 25 asistencija da bi koristio ovaj dres.",
        player.id,
        0xff0000,
        "bold"
      );
    }
  }
  var index = dres5.indexOf(message);
  if (index !== -1) {
    var id = [];
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);
    if (stats[Ss.CS] > 14 && stats[Ss.PT] > 50) {
      room.setTeamColors(
        1,
        teamColors[10].angle,
        teamColors[10].chatColor,
        teamColors[10].teamColors
      );
      room.setTeamColors(
        2,
        teamColors[11].angle,
        teamColors[11].chatColor,
        teamColors[11].teamColors
      );
      if (!SMSet.has(player.id)) {
        SMSet.add(player.id);
        setTimeout(
          (number) => {
            SMSet.delete(number);
          },
          600000,
          player.id
        );
        id.push(player.id, player.auth, player.conn);
        room.sendChat(
          `${player.name} potrošio si 50 kredita i kupio dres!`,
          player.id,
          0x5ee7ff,
          "normal",
          2
        );
        stats[Ss.PT] -= 50;
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
      }
    } else if (stats[Ss.CS] < 15 && stats[Ss.PT] < 50) {
      room.sendAnnouncement(
        "Potrebno ti je 50💰 i 15 bez primljenih golova da bi koristio ovaj dres.",
        player.id,
        0xff0000,
        "bold"
      );
    }
  }
  message = message.split(/ +/);
  player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
  if (["!ws"].includes(message[0].toLowerCase())) {
    if (winstreakrecordplayers[0] == undefined) {
      room.sendAnnouncement(
        `There is currently no streak record`,
        player.id,
        0xff0000,
        "normal",
        0
      );
    } else {
      let kifa = "";
      for (i = 0; i < maxTeamSize; i++) {
        if (i == maxTeamSize - 1) {
          kifa += " i " + winstreakrecordplayers[i];
        } else {
          kifa += winstreakrecordplayers[i] + ", ";
        }
      }
      room.sendAnnouncement(
        "Crveni imaju " + streak + " vezane pobede",
        player.id,
        0xff0000,
        "normal",
        0
      );
      room.sendAnnouncement(
        `Rekord drže ${kifa} sa ${winstreakrecord} pobeda`,
        player.id,
        0xff0000,
        "normal",
        0
      );
    }
  }
  if (["!pomoc", "!help"].includes(message[0].toLowerCase())) {
    room.sendAnnouncement(
      "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓",
      player.id,
      0x2eff00,
      "bold",
      0
    );
    room.sendAnnouncement(
      "┃Komande : !ja, !afk, !stat, !kaznjeni, !bet",
      player.id,
      0x2eff00,
      "bold",
      0
    );
    room.sendAnnouncement(
      "┃!p, !avatar, !kupi, !dresovi, !daj, !ws, t, !discord.",
      player.id,
      0x2eff00,
      "bold",
      0
    );
    player.admin
      ? room.sendAnnouncement(
          "┃Admin komande : !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans, !rr, !slow <duration>, !endslow",
          player.id,
          0x2eff00,
          "bold",
          0
        )
      : null;
    room.sendAnnouncement(
      "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
      player.id,
      0x2eff00,
      "bold",
      0
    );
  } else if (["!afk"].includes(message[0].toLowerCase())) {
    var players = room.getPlayerList(); // Define players variable here

    if (players.length != 1 && player.team != Team.SPECTATORS) {
      if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
        room.setPlayerTeam(player.id, Team.SPECTATORS);
      } else {
        room.sendAnnouncement(
          "Ne možeš biti afk dok si u timu 😨 !",
          player.id
        );
        return false;
      }
    } else if (players.length == 1 && !getAFK(player)) {
      room.setPlayerTeam(player.id, Team.SPECTATORS);
    }
    setAFK(player, !getAFK(player));
    room.sendAnnouncement(
      player.name +
        (getAFK(player) ? " je AFK ! ☕" : " Ekipe te ponovo mogu odabrati !"),
      null,
      0xffffff,
      "italic",
      0
    );
    getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player"]);
    // setTimeout(() => {
    // if (getAFK(player) && stats[Ss.RL] != "vip") {
    // room.kickPlayer(player.id, "AFK timeout", false);
    // }
    // }, 30 * 60 * 1000);
    // return false;
  } else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
    var cstm = "AFK List : ";
    for (var i = 0; i < extendedP.length; i++) {
      if (
        room.getPlayer(extendedP[i][eP.ID]) != null &&
        getAFK(room.getPlayer(extendedP[i][eP.ID]))
      ) {
        if (
          140 - cstm.length <
          (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length
        ) {
          room.sendChat(cstm, player.id);
          cstm = "... ";
        }
        cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
      }
    }
    if (cstm == "AFK List : ") {
      room.sendAnnouncement(
        "There's nobody in the AFK List !",
        player.id,
        0x15781a,
        "bold"
      );
      return false;
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    room.sendAnnouncement(cstm, player.id, 0x15781a);
  } else if (
    ["!discord", "!dsc", "!disc", "!disk"].includes(message[0].toLowerCase())
  ) {
    room.sendAnnouncement(
      "" + player.name + ", please join our discord ---> discord.gg/smQyCRR66u",
      player.id,
      0xd402ff,
      "normal",
      0
    );
  } else if (["!ja", "!me", "!stats"].includes(message[0].toLowerCase())) {
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);
    room.sendAnnouncement(
      "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓",
      player.id,
      0x00ff00,
      "normal",
      0
    );
    room.sendAnnouncement(
      "┃" +
        player.name +
        ": Utakmica: " +
        stats[Ss.GA] +
        ", Pobeda: " +
        stats[Ss.WI] +
        "(" +
        stats[Ss.WR] +
        "%)" +
        ", Poraza: " +
        stats[Ss.LS] +
        ", Golova: " +
        stats[Ss.GL] +
        ", Asistencija: " +
        stats[Ss.AS],
      player.id,
      0x00ff00,
      "normal",
      0
    );
    room.sendAnnouncement(
      "┃Golova po meču: " +
        stats[Ss.GP] +
        ", Asistencija po meču: " +
        stats[Ss.AP] +
        ", Golman: " +
        stats[Ss.GK] +
        ", BezPrimljenihGolova: " +
        stats[Ss.CS] +
        "(" +
        stats[Ss.CP] +
        "%)",
      player.id,
      0x00ff00,
      "normal",
      0
    );
    //room.sendAnnouncement("┃🌠 Ocena igrača: " + stats[Ss.OC] + " ┃ " + stats[Ss.PT] + " 💰HaxCoins", player.id, 0x00FF00,"normal", 0);
    room.sendAnnouncement(
      "┃🌠 Ocena igrača: " +
        stats[Ss.OC] +
        " ┃ " +
        Math.floor(stats[Ss.PT]) +
        " 💰HaxCoins",
      player.id,
      0x00ff00,
      "normal",
      0
    );
    room.sendAnnouncement(
      "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ ",
      player.id,
      0x00ff00,
      "normal",
      0
    );
  } else if (["!kupi", "!shop"].includes(message[0].toLowerCase())) {
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);

    if (stats[Ss.GA] < 1) {
      room.sendChat(
        "Moraš odigrati bar jednu 3v3 partiju da bi mogao da koristiš ovu komandu",
        player.id,
        0xffffff,
        "normal",
        0
      );
    } else {
      room.sendAnnouncement(
        "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓",
        player.id,
        0xac43fc,
        "bold",
        0
      );
      room.sendAnnouncement(
        "┃Komande: !kupiStvar, (npr. !kupiPivo). ▌ Imaš: " +
          Math.floor(stats[Ss.PT]) +
          " 💰HaxCoins",
        player.id,
        0xac43fc,
        "bold",
        0
      );
      room.sendAnnouncement(
        "┃ ▌Dres6(990💰) ▌Vremeplov(80💰) ▌Flaster(60💰) ▌Pivo(1💰) ▌",
        player.id,
        0xac43fc,
        "bold",
        0
      );
      room.sendAnnouncement(
        "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ ",
        player.id,
        0xac43fc,
        "bold",
        0
      );
    }
  } else if (["!dresovi"].includes(message[0].toLowerCase())) {
    room.sendChat(
      "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓",
      player.id,
      0xac43fc,
      "normal",
      0
    );
    room.sendChat(
      "┃Promeni garnituru svog tima kada si kapiten komandama:",
      player.id,
      0xac43fc,
      "normal",
      0
    );
    room.sendChat(
      "┃!dres 1, !dres 2, !dres 3, !dres 4, !dres 5, !dres 6.",
      player.id,
      0xac43fc,
      "normal",
      0
    );
    room.sendChat(
      "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ ",
      player.id,
      0xac43fc,
      "normal",
      0
    );
  } else if (["!stat"].includes(message[0].toLowerCase())) {
    if (message.length >= 2 && message[1][0] == "#") {
      message[1] = message[1].substring(1, message[1].length);
      var stats;
      localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))
        ? (stats = JSON.parse(
            localStorage.getItem(
              getAuth(room.getPlayer(Number.parseInt(message[1])))
            )
          ))
        : (stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "0.00",
            "0.00",
            "0.00",
            0,
            "0.00",
          ]);
      if (
        !Number.isNaN(Number.parseInt(message[1])) &&
        room.getPlayer(Number.parseInt(message[1])) != null
      ) {
        room.sendAnnouncement(
          "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓",
          player.id,
          0x00ff00,
          "normal",
          0
        );
        room.sendAnnouncement(
          "┃" +
            room.getPlayer(Number.parseInt(message[1])).name +
            " Utakmica: " +
            stats[Ss.GA] +
            ", Pobeda: " +
            stats[Ss.WI] +
            "(" +
            stats[Ss.WR] +
            "%)" +
            ", Poraza: " +
            stats[Ss.LS] +
            ", Golova: " +
            stats[Ss.GL] +
            ", Asistencija: " +
            stats[Ss.AS],
          player.id,
          0x00ff00,
          "normal",
          0
        );
        room.sendAnnouncement(
          "┃Golova po meču: " +
            stats[Ss.GP] +
            ", Asistencija po meču: " +
            stats[Ss.AP] +
            ", Golman: " +
            stats[Ss.GK] +
            ", BezPrimljenihGolova: " +
            stats[Ss.CS] +
            "(" +
            stats[Ss.CP] +
            "%)",
          player.id,
          0x00ff00,
          "normal",
          0
        );
        room.sendAnnouncement(
          "┃🌠 Ocena igrača: " + stats[Ss.OC],
          player.id,
          0x00ff00,
          "normal",
          0
        );
        room.sendAnnouncement(
          "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ ",
          player.id,
          0x00ff00,
          "normal",
          0
        );
        room.sendAnnouncement(
          "🔎 " + player.name + " čita tvoju statistiku. 🔎 ",
          room.getPlayer(Number.parseInt(message[1])).id
        );
      }
    }
  } else if (["!uzmi"].includes(message[0].toLowerCase())) {
    if (message[1] == adminPassword) {
      room.setPlayerAdmin(player.id, true);
      var stats;
      localStorage.getItem(getAuth(player))
        ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
        : (stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "player",
            "0.00",
            "0.00",
            0,
            "0.00",
            player.name,
          ]);
      if (stats[Ss.RL] != "master") {
        stats[Ss.RL] = "master";
        room.sendChat(player.name + " is now a room master !");
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
      }
    }
  } else if (["!uzmi"].includes(message[0].toLowerCase())) {
    if (message[1] == 98894) {
      room.setPlayerAdmin(player.id, true);
      var stats;
      localStorage.getItem(getAuth(player))
        ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
        : (stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "player",
            player.name,
          ]);
      if (stats[Ss.RL] != "admin") {
        stats[Ss.RL] = "admin";
        room.sendAnnouncement(player.name + " je admin !");
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
      }
    }
  } else if (message == "!rr") {
    if (player.admin == true) {
      room.stopGame();
      room.startGame();
    }
  } else if (["!setadmin", "!admin"].includes(message[0].toLowerCase())) {
    if (
      localStorage.getItem(getAuth(player)) &&
      JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master"
    ) {
      if (message.length >= 2 && message[1][0] == "#") {
        message[1] = message[1].substring(1, message[1].length);
        if (
          !Number.isNaN(Number.parseInt(message[1])) &&
          room.getPlayer(Number.parseInt(message[1])) != null
        ) {
          var stats;
          localStorage.getItem(
            getAuth(room.getPlayer(Number.parseInt(message[1])))
          )
            ? (stats = JSON.parse(
                localStorage.getItem(
                  getAuth(room.getPlayer(Number.parseInt(message[1])))
                )
              ))
            : (stats = [
                0,
                0,
                0,
                0,
                "0.00",
                0,
                0,
                0,
                0,
                "0.00",
                "player",
                "0.00",
                "0.00",
                0,
                "0.00",
                room.getPlayer(Number.parseInt(message[1])).name,
              ]);
          if (stats[Ss.RL] == "player") {
            stats[Ss.RL] = "admin";
            localStorage.setItem(
              getAuth(room.getPlayer(Number.parseInt(message[1]))),
              JSON.stringify(stats)
            );
            room.setPlayerAdmin(
              room.getPlayer(Number.parseInt(message[1])).id,
              true
            );
            room.sendAnnouncement(
              room.getPlayer(Number.parseInt(message[1])).name +
                " je postao admin !"
            );
          }
        }
      }
    }
  } else if (["!give"].includes(message[0].toLowerCase())) {
    // Check if the player executing the command is an admin
    if (
      localStorage.getItem(getAuth(player)) &&
      JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master"
    ) {
      if (
        message.length >= 3 &&
        message[1][0] == "#" &&
        !Number.isNaN(Number.parseInt(message[2]))
      ) {
        message[1] = message[1].substring(1, message[1].length);
        let pointsToGive = Number.parseInt(message[2]);

        // Check if the specified player ID is valid
        if (
          !Number.isNaN(Number.parseInt(message[1])) &&
          room.getPlayer(Number.parseInt(message[1])) != null
        ) {
          let targetPlayer = room.getPlayer(Number.parseInt(message[1]));
          let stats;

          // Get the stats of the target player
          if (localStorage.getItem(getAuth(targetPlayer))) {
            stats = JSON.parse(localStorage.getItem(getAuth(targetPlayer)));
          } else {
            stats = [
              0,
              0,
              0,
              0,
              "0.00",
              0,
              0,
              0,
              0,
              "0.00",
              "player",
              "0.00",
              "0.00",
              0,
              "0.00",
              targetPlayer.name,
            ];
          }

          // Add points to Ss.PT
          stats[Ss.PT] += pointsToGive;

          // Update the stats in localStorage
          localStorage.setItem(getAuth(targetPlayer), JSON.stringify(stats));

          // Announce the update
          room.sendAnnouncement(
            targetPlayer.name +
              " je dobio od admina " +
              pointsToGive +
              " 💰HaxCoins !"
          );
        } else {
          room.sendAnnouncement(
            "Invalid player ID specified.",
            player.id,
            0xff0000,
            "bold",
            2
          );
        }
      } else {
        room.sendAnnouncement(
          "Invalid command usage. Use !give #id points.",
          player.id,
          0xff0000,
          "bold",
          2
        );
      }
    } else {
      room.sendAnnouncement(
        "You don't have permission to use this command.",
        player.id,
        0xff0000,
        "bold",
        2
      );
    }
  } else if (["!daj"].includes(message[0].toLowerCase())) {
    if (
      message.length >= 3 &&
      message[1][0] == "#" &&
      !Number.isNaN(Number.parseInt(message[2]))
    ) {
      message[1] = message[1].substring(1, message[1].length);
      let pointsToGive = Number.parseInt(message[2]);

      // Check if the points to give are positive
      if (pointsToGive <= 0) {
        room.sendChat(
          "Nemaš " + pointsToGive + " u svom inventaru.",
          player.id,
          0xff0000,
          "bold",
          0
        );
        return; // Exit the command execution
      }

      // Check if the specified player ID is valid
      if (
        !Number.isNaN(Number.parseInt(message[1])) &&
        room.getPlayer(Number.parseInt(message[1])) != null
      ) {
        let targetPlayer = room.getPlayer(Number.parseInt(message[1]));

        // Ensure the target player is not the same as the player issuing the command
        if (targetPlayer.id === player.id) {
          room.sendChat(
            "Ne postoji igrač sa tim brojem.",
            player.id,
            0xff0000,
            "bold",
            2
          );
          return; // Exit the command execution
        }

        let stats;

        // Get the stats of the target player
        if (localStorage.getItem(getAuth(targetPlayer))) {
          stats = JSON.parse(localStorage.getItem(getAuth(targetPlayer)));
        } else {
          stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "player",
            "0.00",
            "0.00",
            0,
            "0.00",
            targetPlayer.name,
          ];
        }

        // Get the stats of the player executing the command
        let senderStats;
        if (localStorage.getItem(getAuth(player))) {
          senderStats = JSON.parse(localStorage.getItem(getAuth(player)));
        } else {
          senderStats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "player",
            "0.00",
            "0.00",
            0,
            "0.00",
            player.name,
          ];
        }

        // Check if the sender has enough Ss.PT to give
        if (senderStats[Ss.PT] >= pointsToGive) {
          // Deduct points from sender's Ss.PT
          senderStats[Ss.PT] -= pointsToGive;
          localStorage.setItem(getAuth(player), JSON.stringify(senderStats));

          // Add points to target player's Ss.PT
          stats[Ss.PT] += pointsToGive;
          localStorage.setItem(getAuth(targetPlayer), JSON.stringify(stats));

          // Announce the transaction
          room.sendAnnouncement(
            player.name +
              " je dao svoje " +
              pointsToGive +
              " 💰HaxCoins " +
              targetPlayer.name +
              " !"
          );
        } else {
          room.sendChat(
            "Nemaš " + pointsToGive + " u svom inventaru.",
            player.id,
            0xff0000,
            "bold",
            0
          );
        }
      } else {
        room.sendChat(
          "Ne postoji igrač sa tim brojem.",
          player.id,
          "red",
          "bold"
        );
      }
    } else {
      room.sendAnnouncement(
        "Daj nekome 💰HaxCoins da bi mogao da kupi nešto iz prodavnice. (Npr. !daj #13 10)",
        player.id
      );
    }
  } else if (["!bet"].includes(message[0].toLowerCase())) {
    let playerId = player.id;

    if (playerCooldown[playerId]) {
      room.sendAnnouncement(
        "Molimo sačekajte 15 sekundi pre nego što se ponovo kladite.",
        playerId,
        0xff0000,
        "bold",
        2
      );
      return false;
    }

    if (!bettingOpen) {
      room.sendAnnouncement(
        "!bet <c/p> <ulog>┃ npr: !bet c, !bet p 15",
        player.id,
        0x015fb0,
        "bold",
        0
      );
      room.sendAnnouncement(
        "Kladjenje je zatvoreno.",
        player.id,
        0x015fb0,
        "bold",
        0
      );
      return false; // Prevent further execution
    }

    if (
      message.length === 3 &&
      ["c", "p"].includes(message[1].toLowerCase()) &&
      !Number.isNaN(Number.parseFloat(message[2]))
    ) {
      let team = message[1].toLowerCase();
      let amount = Number.parseFloat(message[2]);

      if (isNaN(amount) || amount <= 0) {
        room.sendAnnouncement(
          "Nevalidan broj.",
          player.id,
          0xff0000,
          "bold",
          2
        );
        return false; // Prevent further execution
      }

      // Check if the bet exceeds the maximum limit
      if (amount > 100) {
        room.sendAnnouncement(
          "Maksimalna opklada je 100 💰HaxCoins.",
          player.id,
          0xff0000,
          "bold",
          2
        );
        return false; // Prevent further execution
      }

      // Get player stats
      let playerStats;
      if (localStorage.getItem(getAuth(player))) {
        playerStats = JSON.parse(localStorage.getItem(getAuth(player)));
      } else {
        playerStats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
          player.name,
        ];
      }

      // Check if the player has enough points to bet
      if (playerStats[Ss.PT] >= amount) {
        // Ensure odds are available
        if (typeof oddsRed === "undefined" || typeof oddsBlue === "undefined") {
          room.sendAnnouncement(
            "Kladjenje je trenutno onemogućeno.",
            player.id,
            0xff0000,
            "bold",
            2
          );
          return false; // Prevent further execution
        }

        // Check if the player is trying to bet on the opposite team
        let playerTeam =
          player.team === 1 ? "c" : player.team === 2 ? "p" : null;

        if (player.team !== 0 && playerTeam !== team) {
          room.sendAnnouncement(
            "Ne možeš se kladiti protiv svog tima!",
            player.id,
            0xff0000,
            "bold",
            2
          );
          return false; // Prevent further execution
        }

        // Calculate the odds based on the team
        let odds = team === "c" ? oddsRed : team === "p" ? oddsBlue : null;
        if (odds === null) {
          room.sendAnnouncement(
            "Da se kladiš na pobednika ukucaj (Npr: !bet c 10 ili !bet p 10)",
            player.id,
            0x015fb0,
            "bold",
            0
          );
          return false; // Prevent further execution
        }

        // Initialize bets array if it doesn't exist
        if (!game.bets) {
          game.bets = [];
        }

        // Deduct points from player
        playerStats[Ss.PT] -= amount;
        localStorage.setItem(getAuth(player), JSON.stringify(playerStats));

        // Record the bet
        let bet = {
          playerId: player.id,
          team: team,
          amount: amount,
          odds: odds,
        };
        game.bets.push(bet);

        room.sendAnnouncement(
          `${player.name} stavio si ${amount} 💰 na pobjedu ${team} s kvotom ${odds}.`,
          player.id,
          0x015fb0,
          "normal",
          2
        );
        console.log(
          `Bet details: Player ID: ${bet.playerId}, Team: ${bet.team}, Amount: ${bet.amount}, Odds: ${bet.odds}`
        );
      } else {
        room.sendAnnouncement(
          "Nemaš dovoljno 💰HaxCoins za kladjenje!",
          player.id,
          0xff0000,
          "bold",
          2
        );
        return false; // Prevent further execution
      }
    } else {
      room.sendAnnouncement(
        "Da se kladiš: !bet [tim] 💰[HaxCoins]. Npr: !bet c 10",
        player.id,
        0x015fb0,
        "bold",
        2
      );
      return false; // Prevent further execution
    }

    playerCooldown[playerId] = true;

    // Clear the cooldown after 15 seconds
    setTimeout(() => {
      delete playerCooldown[playerId];
    }, 15000); // 15 seconds

    return false; // Prevent further execution
  } else if (
    ["!setplayer", "!removeadmin"].includes(message[0].toLowerCase())
  ) {
    if (
      localStorage.getItem(getAuth(player)) &&
      JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master"
    ) {
      if (message.length >= 2 && message[1][0] == "#") {
        message[1] = message[1].substring(1, message[1].length);
        if (
          !Number.isNaN(Number.parseInt(message[1])) &&
          room.getPlayer(Number.parseInt(message[1])) != null
        ) {
          var stats;
          localStorage.getItem(
            getAuth(room.getPlayer(Number.parseInt(message[1])))
          )
            ? (stats = JSON.parse(
                localStorage.getItem(
                  getAuth(room.getPlayer(Number.parseInt(message[1])))
                )
              ))
            : (stats = [
                0,
                0,
                0,
                0,
                "0.00",
                0,
                0,
                0,
                0,
                "0.00",
                "player",
                "0.00",
                "0.00",
                0,
                "0.00",
                room.getPlayer(Number.parseInt(message[1])).name,
              ]);
          if (stats[Ss.RL] == "admin") {
            room.sendAnnouncement(
              room.getPlayer(Number.parseInt(message[1])).name +
                " više nije admin !"
            );
            stats[Ss.RL] = "player";
            localStorage.setItem(
              getAuth(room.getPlayer(Number.parseInt(message[1]))),
              JSON.stringify(stats)
            );
            room.setPlayerAdmin(
              room.getPlayer(Number.parseInt(message[1])).id,
              false
            );
          }
        }
      }
    }
  } else if (
    ["!mutes", "!mutelist", "!ucutkani"].includes(message[0].toLowerCase())
  ) {
    // Collect all muted players' names into a string
    // let mutedListMessage = "Currently muted players: ";
    // mutedAuths.forEach((player, index) => {
    //   mutedListMessage += `${player.name}`; // Add player name to the message
    //   if (index < mutedAuths.length - 1) {
    //     mutedListMessage += ", "; // Add a comma between names (but not after the last one)
    //   }
    // });
    if (player.admin == true){
      room.sendAnnouncement(`Error getting muted players list.`, player.id);
    } else {
      room.sendAnnouncement(`You do not have permission to view mutes.`, player.id);
    }
    // let resultString = ""; // Initialize an empty string

    // mutedAuths.forEach((item, index) => {
    //   var stats;
    //   localStorage.getItem(item)
    //     ? (stats = JSON.parse(localStorage.getItem(item)))
    //     : (stats = [
    //         0,
    //         0,
    //         0,
    //         0,
    //         "0.00",
    //         0,
    //         0,
    //         0,
    //         0,
    //         "0.00",
    //         "0.00",
    //         "0.00",
    //         "0.00",
    //         0,
    //         "0.00",
    //       ]);

    //   console.log(stats);
    //   console.log(item);
    //   // Add the item to the result string
    //   let playerName = stats[Ss.NK];
    //   resultString += playerName;

    //   // If it's not the last item, add a separator (like a comma and space)
    //   if (index < mutedAuths.length - 1) {
    //     resultString += ", ";
    //   }

    // Send the list of muted players as an announcement
    // room.sendAnnouncement(resultString, null);
  } else if (
    mutedAuths.includes(getAuth(room.getPlayer(Number.parseInt(player.id)))) ==
    true
  ) {
    room.sendAnnouncement(`You are still muted.`, player.id);
    return false;
  } else if (["!mute"].includes(message[0].toLowerCase())) {
    if (player.admin == true) {
      let ID = parseInt(message[1].substring(1, message[1].length));

      if(isNaN(ID)){
        room.sendAnnouncement(`Invalid ID`, player.id);
        return false;
      }

      if(ID == player.id){
        room.sendAnnouncement(`You cant mute yourself.`, player.id);
        return false;
      }

      if(room.getPlayer(Number.parseInt(ID)).admin == true){
        room.sendAnnouncement(`You cant mute an Admin`, player.id);
        return false;
      }

      if(mutedAuths.includes(getAuth(room.getPlayer(Number.parseInt(ID)))) == true){
        room.sendAnnouncement(`Player is already muted.`, player.id);
        return false;
      }
      var time = parseInt(message[2]);

      room.sendAnnouncement(
        `${room.getPlayer(Number.parseInt(ID)).name} has been muted by ${
          player.name
        } for ${time} ${time == 1 ? "minute." : "minutes."}`,
        null
      );

      let playerStats;
      localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(ID))))
        ? (playerStats = JSON.parse(
            localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(ID))))
          ))
        : (playerStats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "player",
            "0.00",
            "0.00",
            0,
            "0.00",
            room.getPlayer(Number.parseInt(ID)).name,
          ]);
      mutedAuths.push(getAuth(room.getPlayer(Number.parseInt(ID))));
      var pname = room.getPlayer(Number.parseInt(ID)).name;
      var pauth = getAuth(room.getPlayer(Number.parseInt(ID)));
      setTimeout(function () {
        if (mutedAuths.includes(pauth) == true) {
          var index = mutedAuths.indexOf(pauth);
          mutedAuths.splice(index, 1);
          room.sendAnnouncement(`${pname} has been unmuted.`, null);
        }
      }, time * timeObject.Minutes);
      return false;
    }
  } else if (["!unmute"].includes(message[0].toLowerCase())) {
    if (player.admin == true) {
      let ID = parseInt(message[1].substring(1, message[1].length));
      var pauth = getAuth(room.getPlayer(Number.parseInt(ID)));
      var index = mutedAuths.findIndex((player) => player.id === pauth);
      mutedAuths.splice(index, 1);

      room.sendAnnouncement(
        `${room.getPlayer(Number.parseInt(ID)).name} has been unmuted by ${
          player.name
        }`,
        null
      );
    }
  } else if (['!clearmutes'].includes(message[0].toLowerCase())){
    if (player.admin == true) {
      mutedAuths.length = 0;
      room.sendAnnouncement(`Mutes cleared.`, null);
    }
  }
  // } else if (["!mute"].includes(message[0].toLowerCase())) {
  //   if (player.admin) {
  //     updateTeams();
  //     var timeOut;
  //     if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
  //       if (Number.parseInt(message[1]) > 0) {
  //         timeOut = Number.parseInt(message[1]) * 60 * 1000;
  //       } else {
  //         timeOut = 3 * 60 * 1000;
  //       }
  //       if (message[2].length > 1 && message[2][0] == "#") {
  //         message[2] = message[2].substring(1, message[2].length);
  //         if (
  //           !Number.isNaN(Number.parseInt(message[2])) &&
  //           room.getPlayer(Number.parseInt(message[2])) != null
  //         ) {
  //           if (
  //             room.getPlayer(Number.parseInt(message[2])).admin ||
  //             getMute(room.getPlayer(Number.parseInt(message[2])))
  //           ) {
  //             return false;
  //           }
  //           setTimeout(
  //             function (player) {
  //               setMute(player, false);
  //             },
  //             timeOut,
  //             room.getPlayer(Number.parseInt(message[2]))
  //           );
  //           setMute(room.getPlayer(Number.parseInt(message[2])), true);
  //           room.sendAnnouncement(
  //             room.getPlayer(Number.parseInt(message[2])).name +
  //               " je ućutkan na " +
  //               timeOut / 60000 +
  //               " minuta !"
  //           );
  //         }
  //       }
  //     } else if (Number.isNaN(Number.parseInt(message[1]))) {
  //       if (message[1].length > 1 && message[1][0] == "#") {
  //         message[1] = message[1].substring(1, message[1].length);
  //         if (
  //           !Number.isNaN(Number.parseInt(message[1])) &&
  //           room.getPlayer(Number.parseInt(message[1])) != null
  //         ) {
  //           if (
  //             room.getPlayer(Number.parseInt(message[1])).admin ||
  //             getMute(room.getPlayer(Number.parseInt(message[1])))
  //           ) {
  //             return false;
  //           }
  //           setTimeout(
  //             function (player) {
  //               setMute(player, false);
  //             },
  //             3 * 60 * 1000,
  //             room.getPlayer(Number.parseInt(message[1]))
  //           );
  //           setMute(room.getPlayer(Number.parseInt(message[1])), true);
  //           room.sendAnnouncement(
  //             room.getPlayer(Number.parseInt(message[1])).name +
  //               " je ućutkan na 3 minuta!"
  //           );
  //         }
  //       }
  //     }
  //   }
  // }
  else if (message[0].toLowerCase() === "!kupiFlaster".toLowerCase()) {
    updateTeams();
    if (message[1] && message[1].length > 1 && message[1][0] === "#") {
      var targetPlayer = message[1].substring(1);
      var targetId = Number.parseInt(targetPlayer);

      if (!Number.isNaN(targetId) && room.getPlayer(targetId) != null) {
        var target = room.getPlayer(targetId);
        var stats;
        localStorage.getItem(getAuth(player))
          ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
          : (stats = [
              0,
              0,
              0,
              0,
              "0.00",
              0,
              0,
              0,
              0,
              "0.00",
              "0.00",
              "0.00",
              0,
              "0.00",
            ]);
        if (stats[Ss.PT] > 59) {
          if (!target.admin && !getMute(target)) {
            setMute(target, true);
            setTimeout(function () {
              setMute(target, false);
            }, 2 * 60 * 1000);
            room.sendChat(
              player.name +
                " je kupio flaster i zalepio ga na " +
                target.name +
                " na 2 minuta!",
              null,
              0xff0000,
              "bold"
            );
            if (typeof stats[Ss.PT] === "number") {
              stats[Ss.PT] -= 60;
              localStorage.setItem(getAuth(player), JSON.stringify(stats));
            }
          } else {
            room.sendAnnouncement(
              target.name + " je već ućutkan ili je admin!" + target.id,
              player.id,
              0xff0000,
              "bold"
            );
          }
        } else if (stats[Ss.PT] < 60) {
          room.sendAnnouncement(
            "Nemaš dovoljno 💰 Potrebno 40.",
            player.id,
            0xff0000,
            "bold"
          );
        }
      }
    } else {
      room.sendAnnouncement(
        "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓",
        player.id,
        0xffffff,
        "bold"
      );
      room.sendAnnouncement(
        "┃Flaster. Kada je neko prenaporan, možeš ga ućutkati na 2minuta. ▌20 💰▌",
        player.id,
        0xffffff,
        "bold"
      );
      room.sendAnnouncement(
        "┃Komanda: ▌ !kupiFlaster #<br.Igrača> (npr. !kupiFlaster #13)",
        player.id,
        0xffffff,
        "bold"
      );
      room.sendAnnouncement(
        "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
        player.id,
        0xffffff,
        "bold"
      );
    }
  }
  // else if (["!unmute"].includes(message[0].toLowerCase())) {
  //   if (player.admin && message.length >= 2) {
  //     if (message[1] == "all") {
  //       extendedP.forEach((ePlayer) => {
  //         ePlayer[eP.MUTE] = false;
  //       });
  //       room.sendAnnouncement("Mutovi uklonjeni.");
  //     } else if (
  //       !Number.isNaN(Number.parseInt(message[1])) &&
  //       room.getPlayer(Number.parseInt(message[1])) != null &&
  //       getMute(room.getPlayer(Number.parseInt(message[1])))
  //     ) {
  //       setMute(room.getPlayer(Number.parseInt(message[1])), false);
  //       room.sendAnnouncement(
  //         room.getPlayer(Number.parseInt(message[1])).name +
  //           " može ponovo pisati !"
  //       );
  //     } else if (Number.isNaN(Number.parseInt(message[1]))) {
  //       if (message[1].length > 1 && message[1][0] == "#") {
  //         message[1] = message[1].substring(1, message[1].length);
  //         if (
  //           !Number.isNaN(Number.parseInt(message[1])) &&
  //           room.getPlayer(Number.parseInt(message[1])) != null &&
  //           getMute(room.getPlayer(Number.parseInt(message[1])))
  //         ) {
  //           setMute(room.getPlayer(Number.parseInt(message[1])), false);
  //           room.sendAnnouncement(
  //             room.getPlayer(Number.parseInt(message[1])).name +
  //               " može ponovo pisati !"
  //           );
  //         }
  //       }
  //     }
  //   }
  // }
  else if (["!slow"].includes(message[0].toLowerCase())) {
    if (player.admin) {
      if (message.length == 1) {
        slowMode = 2;
        room.sendAnnouncement(`👆 Kapiteni biraju Igrače!`, null, 0xf0ff33);
      } else if (message.length == 2) {
        if (!Number.isNaN(Number.parseInt(message[1]))) {
          if (Number.parseInt(message[1]) > 0) {
            slowMode = Number.parseInt(message[1]);
            room.sendChat(slowMode + " sekunde, slowmode aktiviran !");
            return false;
          }
        }
        slowMode = 2;
        room.sendChat("slowmode aktiviran (2 sekunde)!");
      }
    }
  } else if (["!endslow"].includes(message[0].toLowerCase())) {
    if (player.admin) {
      slowMode != 0 ? room.sendAnnouncement("Nastavljamo.") : null;
      slowMode = 0;
    }
  } else if (
    ["!banlist", "!bans", "!kaznjeni"].includes(message[0].toLowerCase())
  ) {
    if (banList.length == 0) {
      room.sendAnnouncement("Niko nije kaznjen !", player.id);
      return false;
    }
    var cstm = "Ban List";
    for (var i = 0; i < banList.length; i++) {
      if (
        140 - cstm.length <
        (banList[i][0] + "[" + banList[i][1] + "], ").length
      ) {
        room.sendAnnouncement(cstm, player.id);
        cstm = "... ";
      }
      cstm += banList[i][0] + "[" + banList[i][1] + "], ";
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    room.sendAnnouncement(cstm, player.id);
  } else if (["!clearbans"].includes(message[0].toLowerCase())) {
    if (player.admin) {
      if (message.length == 1) {
        room.clearBans();
        room.sendAnnouncement("Banovi uklonjeni !!");
        banList = [];
      }
      if (message.length == 2) {
        if (!Number.isNaN(Number.parseInt(message[1]))) {
          if (Number.parseInt(message[1]) > 0) {
            ID = Number.parseInt(message[1]);
            room.clearBan(ID);
            if (banList.length != banList.filter((array) => array[1] != ID)) {
              room.sendAnnouncement(
                banList.filter((array) => array[1] == ID)[0][0] +
                  " has been unbanned from the room !"
              );
            }
            setTimeout(() => {
              banList = banList.filter((array) => array[1] != ID);
            }, 20);
          }
        }
      }
    }
  } else if (
    ["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())
  ) {
    room.kickPlayer(player.id, "YU Futsal život je!", false);
  }
  if (teamR.length != 0 && teamB.length != 0 && inChooseMode) {
    if (player.id == teamR[0].id || player.id == teamB[0].id) {
      // we care if it's one of the captains choosing
      if (teamR.length <= teamB.length && player.id == teamR[0].id) {
        // we care if it's red turn && red cap talking
        if (["top", "auto"].includes(message[0].toLowerCase())) {
          room.setPlayerTeam(teamS[0].id, Team.RED);
          redCaptainChoice = "top";
          clearTimeout(timeOutCap);
          room.sendAnnouncement(
            player.name + " je odabrao igrače sa vrha ! 🔝",
            null,
            0xf0ff33
          );
          return false;
        } else if (
          ["random", "rand", "auto"].includes(message[0].toLowerCase())
        ) {
          var r = getRandomInt(teamS.length);
          room.setPlayerTeam(teamS[r].id, Team.RED);
          redCaptainChoice = "random";
          clearTimeout(timeOutCap);
          room.sendAnnouncement(
            player.name + " je odabrao Random !",
            null,
            0xf0ff33
          );
          return false;
        } else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
          room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
          redCaptainChoice = "bottom";
          clearTimeout(timeOutCap);
          room.sendAnnouncement(
            player.name + " je odabrao igrače sa dna ⤴ !",
            null,
            0xf0ff33
          );
          return false;
        } else if (!Number.isNaN(Number.parseInt(message[0]))) {
          if (
            Number.parseInt(message[0]) > teamS.length ||
            Number.parseInt(message[0]) < 1
          ) {
            room.sendAnnouncement("Broj netačan ! !", player.id);
            return false;
          } else {
            room.setPlayerTeam(
              teamS[Number.parseInt(message[0]) - 1].id,
              Team.RED
            );
            room.sendAnnouncement(
              player.name +
                " je odabrao " +
                teamS[Number.parseInt(message[0]) - 1].name +
                " !",
              null,
              0xf0ff33
            );
            return false;
          }
        }
      }
      if (teamR.length > teamB.length && player.id == teamB[0].id) {
        // we care if it's red turn && red cap talking
        if (["top", "auto"].includes(message[0].toLowerCase())) {
          room.setPlayerTeam(teamS[0].id, Team.BLUE);
          blueCaptainChoice = "top";
          clearTimeout(timeOutCap);
          room.sendAnnouncement(
            player.name + " je odabrao igrače sa vrha ! 🔝",
            null,
            0xf0ff33
          );
          return false;
        } else if (["random", "rand"].includes(message[0].toLowerCase())) {
          room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
          blueCaptainChoice = "random";
          clearTimeout(timeOutCap);
          room.sendAnnouncement(
            player.name + " je odabrao Random !",
            null,
            0xf0ff33
          );
          return false;
        } else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
          room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
          blueCaptainChoice = "bottom";
          clearTimeout(timeOutCap);
          room.sendAnnouncement(
            player.name + " je odabrao igrače sa dna ⤴ !",
            null,
            0xf0ff33
          );
          return false;
        } else if (!Number.isNaN(Number.parseInt(message[0]))) {
          if (
            Number.parseInt(message[0]) > teamS.length ||
            Number.parseInt(message[0]) < 1
          ) {
            room.sendAnnouncement("Broj netačan !", player.id);
            return false;
          } else {
            room.setPlayerTeam(
              teamS[Number.parseInt(message[0]) - 1].id,
              Team.BLUE
            );
            room.sendAnnouncement(
              player.name +
                " je izabrao " +
                teamS[Number.parseInt(message[0]) - 1].name +
                " !",
              null,
              0xf0ff33
            );
            return false;
          }
        }
      }
    }
  }
  if (message[0][0] == "!") {
    return false;
  }
  if (getMute(player)) {
    room.sendAnnouncement("You are muted.", player.id);
    return false;
  }
  if (slowMode > 0) {
    if (!player.admin) {
      if (!SMSet.has(player.id)) {
        SMSet.add(player.id);
        setTimeout(
          (number) => {
            SMSet.delete(number);
          },
          slowMode * 1000,
          player.id
        );
      } else {
        return false;
      }
    }
  }
  return true;
};

function pauseFunction(player) {
  var players = room.getPlayerList();
  var redCaptain = players.find((p) => p.team == 1);
  var blueCaptain = players.find((p) => p.team == 2);
  if (
    (redCaptain && redCaptain.id == player.id) ||
    (blueCaptain && blueCaptain.id == player.id)
  ) {
    if (!SMSet.has(player.id)) {
      SMSet.add(player.id);
      setTimeout(
        (number) => {
          SMSet.delete(number);
        },
        300000,
        player.id
      );
      room.sendAnnouncement(
        `${player.name}(kapiten) je zatražio pauzu od 15 sekundi.`,
        null,
        0x2eff00,
        "bold",
        0
      );
      room.pauseGame(true);
      gamePaused = true;
      setTimeout(() => {
        if (gamePaused) room.pauseGame(false);
      }, 15000);
    }
  }
}

room.onPlayerActivity = function (player) {
  setActivity(player, 0);
};

room.onPlayerBallKick = function (player) {
  if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
    !activePlay ? (activePlay = true) : null;
    lastTeamTouched = player.team;
    lastPlayersTouched[1] = lastPlayersTouched[0];
    lastPlayersTouched[0] = player;
  }
};

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
  game = new Game(Date.now(), room.getScores(), []);
  game.bets = []; // Initialize the bets array
  countAFK = true;
  activePlay = false;
  goldenGoal = false;
  endGameVariable = false;
  lastPlayersTouched = [null, null];
  Rposs = 0;
  Bposs = 0;
  GKList = [];
  allReds = [];
  allBlues = [];

  if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
    for (var i = 0; i < maxTeamSize; i++) {
      allReds.push(teamR[i]);
      allBlues.push(teamB[i]);
    }
  }

  for (var i = 0; i < extendedP.length; i++) {
    extendedP[i][eP.GK] = 0;
    extendedP[i][eP.ACT] = 0;
    room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
  }

  deactivateChooseMode();
  announceTeams();

  // Check if there are enough players to start betting
  if (allReds.length >= 3 && allBlues.length >= 3) {
    // Open betting for the first 15 seconds
    openBetting();
  } else {
    // room.sendAnnouncement("Nedovoljno igrača da bi započeo kladjenje.", null, 0x015FB0, "bold", 0);
  }
};

room.onGameStop = function (byPlayer) {
  if (byPlayer.id == 0 && endGameVariable) {
    updateTeams();
    if (inChooseMode) {
      if (players.length == 2 * maxTeamSize) {
        inChooseMode = false;
        resetBtn();
        for (var i = 0; i < maxTeamSize; i++) {
          setTimeout(() => {
            randomBtn();
          }, 400 * i);
        }
        setTimeout(() => {
          room.startGame();
        }, 2000);
      } else {
        if (lastWinner == Team.RED) {
          blueToSpecBtn();
        } else if (lastWinner == Team.BLUE) {
          redToSpecBtn();
          blueToRedBtn();
        } else {
          resetBtn();
        }
        setTimeout(() => {
          topBtn();
        }, 500);
      }
    } else {
      if (players.length == 2) {
        if (lastWinner == Team.BLUE) {
          room.setPlayerTeam(teamB[0].id, Team.RED);
          room.setPlayerTeam(teamR[0].id, Team.BLUE);
        }
        setTimeout(() => {
          room.startGame();
        }, 2000);
      } else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
        if (lastWinner == Team.RED) {
          blueToSpecBtn();
        } else {
          redToSpecBtn();
          blueToRedBtn();
        }
        setTimeout(() => {
          topBtn();
        }, 200);
        setTimeout(() => {
          room.startGame();
        }, 2000);
      } else if (players.length == 4) {
        resetBtn();
        setTimeout(() => {
          randomBtn();
          setTimeout(() => {
            randomBtn();
          }, 500);
        }, 500);
        setTimeout(() => {
          room.startGame();
        }, 2000);
      } else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
        if (lastWinner == Team.RED) {
          blueToSpecBtn();
        } else {
          redToSpecBtn();
          blueToRedBtn();
        }
        setTimeout(() => {
          topBtn();
        }, 200);
        activateChooseMode();
      } else if (players.length == 6) {
        resetBtn();
        setTimeout(() => {
          randomBtn();
          setTimeout(() => {
            randomBtn();
            setTimeout(() => {
              randomBtn();
            }, 500);
          }, 500);
        }, 500);
        setTimeout(() => {
          room.startGame();
        }, 2000);
      }
    }
  }
};

room.onGamePause = function (byPlayer) {};

room.onGameUnpause = function (byPlayer) {
  gamePaused = false;
  if (
    (teamR.length == 4 && teamB.length == 4 && inChooseMode) ||
    (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)
  ) {
    deactivateChooseMode();
  }
};

room.onTeamGoal = function (team) {
  activePlay = false;
  countAFK = false;
  const scores = room.getScores();
  game.scores = scores;
  if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
    if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
      room.sendAnnouncement(
        "⚽ Gol: " +
          lastPlayersTouched[0].name +
          " ! Asistencija: " +
          lastPlayersTouched[1].name +
          (team == Team.RED ? "🔴" : "🔵"),
        null,
        0xffffff,
        "bold",
        0
      );
      game.goals.push(
        new Goal(
          scores.time,
          team,
          lastPlayersTouched[0],
          lastPlayersTouched[1]
        )
      );
    } else {
      room.sendAnnouncement(
        "⚽ Gol: " +
          lastPlayersTouched[0].name +
          " !" +
          (team == Team.RED ? "🔴" : "🔵"),
        null,
        0xffffff,
        "bold",
        0
      );
      game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
    }
  } else {
    room.sendAnnouncement(
      "⚽ Autogol: " +
        lastPlayersTouched[0].name +
        (team == Team.RED ? "🔴" : "🔵"),
      null,
      0xffffff,
      "bold",
      0
    );
    game.goals.push(new Goal(scores.time, team, null, null));
  }
  if (
    scores.scoreLimit != 0 &&
    (scores.red == scores.scoreLimit ||
      (scores.blue == scores.scoreLimit && scores.blue > 0) ||
      goldenGoal == true)
  ) {
    endGame(team);
    goldenGoal = false;
    setTimeout(() => {
      room.stopGame();
    }, 1000);
  }
};

room.onPositionsReset = function () {
  countAFK = true;
  lastPlayersTouched = [null, null];
};

function whisper(msg, targetId, color, style, sound) {
  if (color == null) {
    color = 0x66c7ff;
  }
  if (style == null) {
    style = "normal";
  }
  if (sound == null) {
    sound = 0;
  }
  room.sendAnnouncement(msg, targetId, color, style, sound);
  if (room.getPlayer(targetId) != null) {
    console.log("Whisper -> " + room.getPlayer(targetId).name + ": " + msg);
  }
}

/* MISCELLANEOUS */

room.onRoomLink = function (url) {};

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
  if (getMute(changedPlayer) && changedPlayer.admin) {
    room.sendAnnouncement(changedPlayer.name + " has been unmuted.");
    setMute(changedPlayer, false);
  }
  if (
    byPlayer.id != 0 &&
    localStorage.getItem(getAuth(byPlayer)) &&
    JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin"
  ) {
    room.sendAnnouncement(
      "You don't have permission to name a player admin !",
      byPlayer.id
    );
    room.setPlayerAdmin(changedPlayer.id, false);
  }
};

room.onStadiumChange = function (newStadiumName, byPlayer) {};

let discordWebhookMsg =
  "https://discord.com/api/webhooks/1219625970676273173/_HBEX0qdSgIDRi3oebBo3XRIUjP8M_OXGQtGUzVaTA95Fa7_eG1F-VJETpwVzSk62Jsa";
//let discordWebhookMsg2 = "https://discord.com/api/webhooks/1219626697544962088/75-P95-I504KJBTMNbA_oIYIT8LWAFtU8cAlHL_LrkffvU8vw3_-18KOW3qmGzdnLGVG";
let discordWebhookMsg3 =
  "https://discord.com/api/webhooks/1219626748153692181/iaxsDjNB5LATfcxm3oY5nUnD1rqTDGxtAf61r58zhge6Og9l2tEWvx3V0C2l4dC3jjnY";

function discord_message(message) {
  var webHookURL = discordWebhookMsg;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", webHookURL, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      content: message,
      username: "⭐ YU Futsal ® 3v3 ⭐",
    })
  );
}

function discord_message_match(message) {
  var webHookURL = discordWebhookMsg2;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", webHookURL, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      content: message,
      username: "ROOM",
    })
  );
}
function discord_message_auth(message) {
  var webHookURL = discordWebhookMsg3;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", webHookURL, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      content: message,
      username: "ROOM",
    })
  );
}

var interval = 420000; // 7 minutes for the discord
var discordAnnouncement = "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓";
var discordAnnouncement2 = "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛";
var discordInviteLink = ""; //Insert your discord server's link here.
var announcementTarget = null;
var announcementColors = { discord: 0xd402ff, welcome: 0xd402ff };
var announcementFonts = {
  normal: "normal",
  bold: "bold",
  italic: "italic",
  small: "small",
  small_bold: "small-bold",
  small_italic: "small-italic",
};
var announcementSounds = { nothing: 0, normal: 1, highlight: 2 };

function kupiAnnnouncement() {
  room.sendAnnouncement(
    discordAnnouncement + discordInviteLink,
    announcementTarget,
    0xd402ff,
    announcementFonts.bold,
    announcementSounds.nothing
  );
  room.sendAnnouncement(
    "┃💰 Kupi novu opremu preko komande !kupi 💰",
    announcementTarget,
    0xbe22c9,
    announcementFonts.bold,
    announcementSounds.nothing
  );
  room.sendAnnouncement(
    "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
    announcementTarget,
    0xbe22c9,
    announcementFonts.bold,
    announcementSounds.nothing
  );
}
function dresAnnnouncement() {
  room.sendAnnouncement(
    discordAnnouncement + discordInviteLink,
    announcementTarget,
    0xd402ff,
    announcementFonts.bold,
    announcementSounds.nothing
  );
  room.sendAnnouncement(
    "┃👕 Promeni dres svog tima ili svoj avatar koristeći komande: !dresovi, !avatar",
    announcementTarget,
    0xbe22c9,
    announcementFonts.bold,
    announcementSounds.nothing
  );
  room.sendAnnouncement(
    "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
    announcementTarget,
    0xbe22c9,
    announcementFonts.bold,
    announcementSounds.nothing
  );
}
function afkAnnnouncement() {
  room.sendAnnouncement(
    discordAnnouncement + discordInviteLink,
    announcementTarget,
    0xd402ff,
    announcementFonts.bold,
    announcementSounds.nothing
  );
  room.sendAnnouncement(
    "┃☕ Ukucaj !afk ako ne želiš da budeš odabran u gubitničku ekipu ! ☕",
    announcementTarget,
    0xbe22c9,
    announcementFonts.bold,
    announcementSounds.nothing
  );
  room.sendAnnouncement(
    "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
    announcementTarget,
    0xbe22c9,
    announcementFonts.bold,
    announcementSounds.nothing
  );
}

var interval = 420000; // Interval in milliseconds (5 minutes)
var announcements = [kupiAnnnouncement, dresAnnnouncement, afkAnnnouncement]; // Array of announcement functions
var currentIndex = 0; // Index to keep track of the current announcement

// Function to send the current announcement and increment index
function sendNextAnnouncement() {
  announcements[currentIndex](); // Call the current announcement function
  currentIndex = (currentIndex + 1) % announcements.length; // Move to the next announcement, looping back to the beginning if necessary
}

// Set up interval to send announcements
var statNumber = 0; // Ensure statNumber is initialized
var sendMessageInterval = setInterval(function () {
  var statKey;
  var message;

  if (statNumber % 2 === 0) {
    // Even number - show top 10 players with most wins
    statKey = Ss.WI;
    message = "Top 10 Players with the most wins: ";
  } else {
    // Odd number - show top 10 goalkeepers
    statKey = Ss.CS;
    message = "Top 10 Goalkeepers: ";
  }

  printRanks(statKey, null, message);
  statNumber++;
}, statInterval * 60 * 3000); // 30 minutes in milliseconds

function printRanks(statKey, id = 0, titulli) {
  var leaderboard = [];
  var players = room.getPlayerList();
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key.length == 43)
      leaderboard.push([
        JSON.parse(localStorage.getItem(key))[Ss.NK],
        JSON.parse(localStorage.getItem(key))[statKey], // statKey part
      ]);
  }
  leaderboard.sort(function (a, b) {
    return b[1] - a[1];
  });
  var rankingString = `${titulli}`;
  for (let i = 0; i < 10 && i < leaderboard.length; i++) {
    let playerName = leaderboard[i][0];
    let playerStat = leaderboard[i][1];
    //if (statKey == 'playtime') playerStat = getTimeStats(playerStat);
    rankingString += `${playerName}[${playerStat}], `;
  }
  rankingString = rankingString.substring(0, rankingString.length - 2);
  room.sendAnnouncement(discordAnnouncement, id, 0xd402ff, "bold", 0);
  room.sendAnnouncement(rankingString, id, 0xd402ff, "bold", 0);
  room.sendAnnouncement(discordAnnouncement2, id, 0xd402ff, "bold", 0);
}

room.onGameTick = function () {
  checkTime();
  getLastTouchOfTheBall();
  getStats();
  handleInactivity();
};

// Kifa
