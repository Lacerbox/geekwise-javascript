// FOR 'flintstone-characters.html'

var mainCharacters = [
  "Fred Flintstone", "Barney Rubble",
  "Wilma Flintstone", "Betty Rubble",
  "Pebbles Flintstone", "Bamm-Bamm Rubble",
  "Dino The Dinosaur", "Hoppy The Kangaroo", ""
];
var celebrities = [
  "Gina Loadabricks", "Gary Granite",
  "Stony Curtis", "Ed Sulleystone",
  "Rock Hudstone", "Wednesday Tuesday",
  "Ann Margrock", "Jimmy Darrock",
  "Alvin Brickrock", "Daisy Kilgranite",
  "Perry Masonite", "Mick Jadestone",
  "Eppy Brianstone", "Jackie Kennerock"
];
var sports = [
  "Red Granite", "Bronto Crushrock",
  "Arnold Palmrock", "Floyd Patterstone",
  "Sonny Listone", "Sandy Stoneaxe",
  "Lindy McShale", "Roger Marble",
  "Mickey Mantlepiece", "Daisy Kilgranite"
];
var monsters = [
  "Count Rockula", "Frankenstone",
  "Rockzilla", "Weirdly Gruesome",
  "Creepella Gruesome", "Dr. Sinister",
  "Mr. J. Evil Scientist", "Mrs. J. Evil Scientist",
  "Gobby Gruesome", "Uncle Ghastly"
];
var others = [
  "Herman Munster", "George Jetson",
  "Mr. Slate", "Tex Hardrock",
  "Pearl Slaghoople", "Joe Rockhead",
  "The Great Gazoo", "Arnold Paper Boy",
  "Samantha Stephens", "Darrin Stephens",
  "88 Fingers Louie", "Little-Joe Cartrock",
  "Hoss Cartrock", "Ben Cartrock"
];

// FUNCTIONS TO GET ELEMENTS FROM EACH ARRAY AND SORT THEM BY LAST NAME
// AND THEN TO DISPLAY THEM IN A TABLE FORMAT ON THE HTML PAGE
mainCharacters.sort(function (obj1, obj2) {
    var s1 = obj1.split(' ')[1],
        s2 = obj2.split(' ')[1];
    return (s1 || obj1).localeCompare(s2 || obj2)
});
for (var i = 0; i < mainCharacters.length; i++) {
    var tr = "<tr>";
    var td = "<td>" + mainCharacters[i] + "</td></tr>"
    $('#flintstoneTable1').append(tr + td);
}

celebrities.sort(function (obj1, obj2) {
    var s1 = obj1.split(' ')[1],
        s2 = obj2.split(' ')[1];
    return (s1 || obj1).localeCompare(s2 || obj2)
});
for (var i = 0; i < celebrities.length; i++) {
    var tr = "<tr>";
    var td = "<td>" + celebrities[i] + "</td></tr>"
    $('#flintstoneTable2').append(tr + td);
}

sports.sort(function (obj1, obj2) {
    var s1 = obj1.split(' ')[1],
        s2 = obj2.split(' ')[1];
    return (s1 || obj1).localeCompare(s2 || obj2)
});
for (var i = 0; i < sports.length; i++) {
    var tr = "<tr>";
    var td = "<td>" + sports[i] + "</td></tr>"
    $('#flintstoneTable3').append(tr + td);
}

monsters.sort(function (obj1, obj2) {
    var s1 = obj1.split(' ')[1],
        s2 = obj2.split(' ')[1];
    return (s1 || obj1).localeCompare(s2 || obj2)
});
for (var i = 0; i < monsters.length; i++) {
    var tr = "<tr>";
    var td = "<td>" + monsters[i] + "</td></tr>"
    $('#flintstoneTable4').append(tr + td);
}

others.sort(function (obj1, obj2) {
    var s1 = obj1.split(' ')[1],
        s2 = obj2.split(' ')[1];
    return (s1 || obj1).localeCompare(s2 || obj2)
});
for (var i = 0; i < others.length; i++) {
    var tr = "<tr>";
    var td = "<td>" + others[i] + "</td></tr>"
    $('#flintstoneTable5').append(tr + td);
}

// FOR 'flintstones-gang.html'
// FUNCTION TO CHANGE THE 'Flintstones Gang At Luigi's' IMAGE
var btn = document.querySelector('button');
function change() {

// FOR CHANGING 'Flintstones Gang At Luigi's' IMAGE
document.getElementById("image").src = "img/luigis-flintstone-gang-2.jpg";

// CHANGES TEXT AND COLOR ON BUTTON
document.getElementById("demo").innerHTML = "Great, they're all here ready & waiting for their \"Italian Steak 'Fred' Sandwich\". Hope you stay & enjoy the party.";
var bttn = document.querySelector('button');
bttn.setAttribute('class', 'for-button');
}
btn.addEventListener('click', change);
