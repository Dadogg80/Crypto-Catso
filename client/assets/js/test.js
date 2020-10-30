
const CatsoHTML = (`
<div>
        <div class="row">
        <div>
            <div class="col-12 light-b-shadow" >
                <div class="cat">
                    <div class="cat__ear">
                        <div id="leftEar" class="cat__ear--left">
                            <div class="cat__ear--left-inside"></div>
                        </div>
                        <div id="rightEar" class="cat__ear--right">
                            <div class="cat__ear--right-inside"></div>
                        </div>
                    </div>
                    <div id="head" class="cat__head">
                        <div id="midDot" class="cat__head-dots">
                            <div id="leftDot" class="cat__head-dots_first"></div>
                            <div id="rightDot" class="cat__head-dots_second"></div>
                        </div>
                        <div class="cat__eye">
                            <div class="cat__eye--left">
                            <span class="pupil-left"></span>
                            </div>
                            <div class="cat__eye--right">
                                <span class="pupil-right"></span>
                            </div>
                        </div>
                        <div class="cat__nose"></div>
                        <div class="cat__mouth-contour"></div>
                        <div class="cat__mouth-left"></div>
                        <div class="cat__mouth-right"></div>
                        <div class="cat__whiskers-left"></div>
                        <div class="cat__whiskers-right"></div>
                    </div>
                    <div class="cat__body">
                        <div class="cat__chest"></div>
                        <div class="cat__chest_inner"></div>
                        <div class="cat__paw-left"></div>
                        <div class="cat__paw-left_inner"></div>
                        <div class="cat__paw-right"></div>
                        <div class="cat__paw-right_inner"></div>
                        <div id="tail" class="cat__tail"></div>
                    <div>
                </div>
            </div>
        </div>
        </div>
        </div>`);

const renderDNA = (`
<small class="text-muted dnaDiv" id="catDNA">
    <b>
        DNA:
        <!-- Colors -->
        <span id="dnabody"></span>
        <span id="dnamouth"></span>
        <span id="dnaeyes"></span>
        <span id="dnaears"></span>

        <!-- Cattributes -->
        <span id="dnashape"></span>
        <span id="dnadecoration"></span>
        <span id="dnadecorationMid"></span>
        <span id="dnadecorationSides"></span>
        <span id="dnaanimation"></span>
        <span id="dnaspecial"></span>
    </b>
</small>`);