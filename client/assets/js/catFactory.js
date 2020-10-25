
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}


function headColor(color,code) {
    $('.cat__head, .cat__chest').css('background', '#' + color);  //This changes the color of the cat
    $('#headcode').html('code: '+ code); //This updates text of the badge next to the slider
    $('#dnabody').html(code); //This updates the body color part of the DNA that is displayed below the cat
}

function mtbColor(color,code) {
    $('.cat__mouth-contour, .cat__chest_inner, .cat__tail').css('background', '#' + color);
    $('#mtbcode').html('code: '+ code);
    $('#dnamouth').html(code);
}

function eyeColor(color,code) {
    $('.pupil-left, .pupil-right').css('background', '#' + color);
    $('#eyescode').html('code: '+ code);
    $('#dnaeyes').html(code);
}

function earColor(color,code) {
    $('.cat__ear--left, .cat__ear--right, .cat__paw-right, .cat__paw-left, .cat__paw-left_inner, .cat__paw-right_inner').css('background', '#' + color);
    $('#earscode').html('code: '+ code);
    $('#dnaears').html(code);
}

function decorationMidColor(color,code) {
  $('.cat__head-dots').css('background', '#' + color);
  $('#pc1code').html('code: '+ code);
  $('#dnadecorationMid').html(code);
}

function decorationSideColor(color,code) {
  $('.cat__head-dots_first, .cat__head-dots_second').css('background', '#' + color);
  $('#pc2code').html('code: '+ code);
  $('#dnadecorationSides').html(code);
}



function eyeVariation(num) {
    $('#dnashape').html(num);

    switch (num) {
        case 1:
            normalEyes();
            $('#eyeName').html('Basic'); //sets the badge to Basic.
            break;
        case 2:
            normalEyes(); // resets not deafult
            $('#eyeName').html('Stoned'); // sets the badge to Stoned.
            eyesType1();
            break;
        case 3:
            normalEyes(); // resets not deafult
            $('#eyeName').html('Chill'); // sets the badge to Chill.
            eyesType2();
            break;
        case 4:
            normalEyes(); // resets not deafult
            $('#eyeName').html('Tired'); // sets the badge to Tired.
            eyesType3();
            break;
    }
}


function decorationVariation(num) {
    $('#dnadecoration').html(num);

    switch (num) {
        case 1:
            normaldecoration();
            $('#decorationName').html('Basic');
            break;
        case 2:
            normaldecoration();
            $('#decorationName').html('Nice');
            decorationType1();
            break;
        case 3:
            normaldecoration();
            $('#decorationName').html('Strange');
            decorationType2();
            break;
        case 4:
            normaldecoration();
            $('#decorationName').html('Confused');
            decorationType3();
            break;
        case 5:
            normaldecoration();
            $('#decorationName').html('Bald');
            decorationType4();
            break;
    }
}

function animationVariation(num) {
    $('#dnaanimation').html(num);
    switch (num) {
        case 1:
            
    }
}

function normalEyes() {
    // finds all the span elements within .cat_eye and applies the .css(setting)
    $('.cat__eye').find('span').css('border', 'none');
}

function eyesType1() {
    $('.cat__eye').find('span').css('border-top', '10px solid');
}

function eyesType2() {
    $('.cat__eye').find('span').css({'border-top': '15px solid'});
}

function eyesType3() {
    $('.cat__eye').find('span').css({'border-bottom': '10px solid',});
}


function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" });
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" });
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" });
}
    // Badge name Nice
function decorationType1() {
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" });
    $('.cat__head-dots_first').css({ "transform": "rotate(45deg)", "height": "35px", "width": "14px", "top": "-3.5px", "border-radius": "50% 0 50% 50%" });
    $('.cat__head-dots_second').css({ "transform": "rotate(-45deg)", "height": "35px", "width": "14px", "top": "-3.5px", "border-radius": "0 50% 50% 50%" });
  }
    // Badge name Strange
function decorationType2() {
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" });
    $('.cat__head-dots_first').css({ "transform": "rotate(90deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "25% 0 25% 25%" });
    $('.cat__head-dots_second').css({ "transform": "rotate(-90deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 25% 25% 25%" });
  }
    // Badge name Confused
function decorationType3() {
    $('.cat__head-dots').css({ "transform": "rotate(180deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 25% 25%" });
    $('.cat__head-dots_first').css({ "transform": "rotate(45deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" });
    $('.cat__head-dots_second').css({ "transform": "rotate(-45deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" });
}
    // Badge name Bald
function decorationType4() {
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "0px", "width": "0px", "top": "0px", "border-radius": "0 0 0 0" });
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "0px", "width": "0px", "top": "0px", "border-radius": "0 0 0 0" });
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "0px", "width": "0px", "top": "0px", "border-radius": "0 0 0 0" });
  }
