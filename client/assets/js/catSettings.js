
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
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);

  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
//   $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA);
});

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

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor);
    $('#bodycolor').val(dna.headcolor);

    mtbColor(colors[dna.mouthColor],dna.mouthColor);
    $('#mtbcolor').val(dna.mouthColor);

    eyeColor(colors[dna.eyesColor],dna.eyesColor);
    $('#eyecolor').val(dna.eyesColor);

    earColor(colors[dna.earsColor],dna.earsColor);
    $('#earcolor').val(dna.earsColor);
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
