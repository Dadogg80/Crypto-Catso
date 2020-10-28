
var colors = Object.values(allColors());

var defaultDNA = {
    "headcolor" : 10,
    "mouthColor" : 13,
    "eyesColor" : 96,
    "earsColor" : 10,

    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headcolor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);

  $('#dnashape').html(defaultDNA.eyesShape);
  $('#dnadecoration').html(defaultDNA.decorationPattern);
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor);
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor); 
  $('#dnaanimation').html(defaultDNA.animation);
  $('#dnaspecial').html(defaultDNA.lastNum);

  defaultCat(defaultDNA);
});

function defaultCat() {
  renderCat(defaultDNA); 
}

function getDna(){
    var dna = '';
    dna += $('#dnabody').html();
    dna += $('#dnamouth').html();
    dna += $('#dnaeyes').html();
    dna += $('#dnaears').html();
    dna += $('#dnashape').html();
    dna += $('#dnadecoration').html();
    dna += $('#dnadecorationMid').html();
    dna += $('#dnadecorationSides').html();
    dna += $('#dnaanimation').html();
    dna += $('#dnaspecial').html();

    return parseInt(dna);
}

function randomCat() {
  let randomDNA = {
    "headcolor" : Math.floor(Math.random() * 89) + 10,
    "mouthColor" : Math.floor(Math.random() * 89) + 10,
    "eyesColor" : Math.floor(Math.random() * 89) + 10,
    "earsColor" : Math.floor(Math.random() * 89) + 10,

    //Cattributes
    "eyesShape" : Math.floor(Math.random() * 4) +1,
    "decorationPattern" : Math.floor(Math.random() * 5) +1,
    "decorationMidcolor" : Math.floor(Math.random() * 89) + 10,
    "decorationSidescolor" : Math.floor(Math.random() * 89) + 10,
    "animation" :  Math.floor(Math.random() * 6) +1,
    "lastNum" :  1
    }
    console.log(`Random cat values are: \nheadcolor: ${randomDNA.headcolor}\ndecorationPattern: ${randomDNA.decorationPattern}\neyesColor: ${randomDNA.eyesColor}\neyesShape: ${randomDNA.eyesShape}\nanimation: ${randomDNA.animation}`);
    //defaultCat(defaultDNA);
    renderCat(randomDNA);
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor);
    $('#bodycolor').val(dna.headcolor);

    mtbColor(colors[dna.mouthColor],dna.mouthColor);
    $('#mtbcolor').val(dna.mouthColor);

    eyeColor(colors[dna.eyesColor],dna.eyesColor);
    $('#eyecolor').val(dna.eyesColor);

    earColor(colors[dna.earsColor],dna.earsColor);
    $('#earcolor').val(dna.earsColor);

    eyeVariation(dna.eyesShape);
    $('#eyeshape').val(dna.eyesShape);

    decorationVariation(dna.decorationPattern);
    $('#decorationpattern').val(dna.decorationPattern);

    decorationSideColor(colors[dna.decorationSidescolor],dna.decorationSidescolor);
    $('#decorationsidecolor').val(dna.decorationSidescolor);

    decorationMidColor(colors[dna.decorationMidcolor],dna.decorationMidcolor);
    $('#decorationmidcolor').val(dna.decorationMidcolor);

    animationVariation(dna.animation);
    $('#animation').val(dna.animation);
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val();
    headColor(colors[colorVal],colorVal);
})

// Changing the mouth, belly and tail colors
$('#mtbcolor').change(()=>{
    var colorVal = $('#mtbcolor').val();
    mtbColor(colors[colorVal],colorVal);
})

// Changing the Eye colors
$('#eyecolor').change(()=>{
  var colorVal = $('#eyecolor').val();
  eyeColor(colors[colorVal],colorVal);
})

// Changing the Ears and paw colors
$('#earcolor').change(()=>{
  var colorVal = $('#earcolor').val();
  earColor(colors[colorVal],colorVal);
})

// Changing the shape of the eyes
$('#eyeshape').change(()=>{
  // binds the number of the slider to the variable shape
  var shape = parseInt($('#eyeshape').val());
  eyeVariation(shape);
})

// Changing the shape of the dots on Catso's head
$('#decorationpattern').change(()=>{
  // binds the number of the slider to the variable shape
  var num = parseInt( $('#decorationpattern').val() );
  decorationVariation(num);
})

// Changing the color of the dots on Catso's head
$('#decorationsidecolor').change(()=>{
  var colorVal = $('#decorationsidecolor').val();
  decorationSideColor(colors[colorVal],colorVal);
})

// Changing the color of the dots on Catso's head
$('#decorationmidcolor').change(()=>{
  var colorVal = $('#decorationmidcolor').val();
  decorationMidColor(colors[colorVal],colorVal);
})

$('#animation').change(()=>{
  var animationVal = parseInt( $('#animation').val() );
  animationVariation(animationVal);
})