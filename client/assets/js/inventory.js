$(document).ready(function() {
    var cats = [
        {
            owner: "x0iuiytc3u2",
            newCatsoId: 6,
            mumId: 1,
            dadId: 2,
            genes: 245
        },
        {
            owner: "x0iuiy58hgchkc",
            newCatsoId: 7,
            mumId: 3,
            dadId: 4,
            genes: 112
        },
        {
            owner: "SURPRICE",
            newCatsoId: 8,
            mumId: 1,
            dadId: 6,
            genes: 257
        }
    ];

    renderInventory();
    renderCatBox();

    function renderCatBox() {
        
    
        };

    function renderInventory() {
        for(let i = 0; i < cats.length; i++) {
            var cat = cats[i];
            var ownerString = `<div id="cat`+ i + `"><b>Owner: </b> ` + cat.owner + `</div>`;
            var catsoIdString = `<div id="cat`+ i + `"><b>Catso Id: </b>` + cat.newCatsoId + `</div>`;
            var mumIdString = `<div id="cat`+ i + `"><b>Mum Id: </b>` + cat.mumId + `</div>`;
            var dadIdString = `<div id="cat`+ i + `"><b>Dad Id: </b>` + cat.dadId + `</div>`;
            var genesString = `<div id="cat`+ i + `"><b>Genes: </b>` + cat.genes + `</div>`;
        
            var htmlString = `  
            <div id="head" class="cat__head">
                <div id="midDot" class="cat__head-dots">
                    <div id="leftDot" class="cat__head-dots_first"></div>
                    <div id="rightDot" class="cat__head-dots_second"></div>
                </div>
        
                <!-- CAT eye Class -->
                <div class="cat__eye">
        
                <!-- CAT left-eye Class -->
                    <div class="cat__eye--left">
                        <span class="pupil-left"></span>
                    </div>
        
                    <!-- CAT right-eye Class -->
                    <div class="cat__eye--right">
                        <span class="pupil-right"></span>
                    </div>
        
                </div>
        
                <!-- CAT nose Class -->
                <div class="cat__nose"></div>
        
                <div class="cat__mouth-contour"></div>
                <div class="cat__mouth-left"></div>
                <div class="cat__mouth-right"></div>
        
                <!-- CAT whiskers Class -->
                <div class="cat__whiskers-left"></div>
                <div class="cat__whiskers-right"></div>
            </div>
        
            <!-- CAT Body Class -->
            <div class="cat__body">
        
                <!-- CAT chest Class -->
                <div class="cat__chest"></div>
        
                <div class="cat__chest_inner"></div>
        
                <!-- CAT left paw Class -->
                <div class="cat__paw-left"></div>
                <div class="cat__paw-left_inner"></div>
        
                <!-- CAT right paw Class -->
                <div class="cat__paw-right"></div>
                <div class="cat__paw-right_inner"></div>
        
                <!-- CAT tail Class -->
                <div id="tail" class="cat__tail"></div>
            </div>`;
            
            let _id = i + 1;

            $(`#renderCatBox`+ _id).append(htmlString);

           

        // $('#renderCatBox1').append(htmlString);
            $(`#catBox`+ _id +`_Info`).append(ownerString);
            $(`#catBox`+ _id +`_Info`).append(catsoIdString);
            $(`#catBox`+ _id +`_Info`).append(mumIdString);
            $(`#catBox`+ _id +`_Info`).append(dadIdString);
            $(`#catBox`+ _id +`_Info`).append(genesString);

            renderCatBox();

            console.log(ownerString);
            console.log(catsoIdString);
            console.log(mumIdString);
            console.log(dadIdString);
            console.log(genesString);

        /* if(cat.newCatsoId = i) {
            $(`"#cat${i}"`).addClass("DNA");
            }*/
        };
    };




});