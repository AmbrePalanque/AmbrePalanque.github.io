var app = new PIXI.Application({backgroundColor : 0xffffff});
document.body.appendChild(app.view);

var traits = [];

var totalTraits = 30;

for (var i = 0; i < totalTraits; i++) {

    var trait =  PIXI.Sprite.fromImage('img/trait.png');

    trait.anchor.set(0.5);

    trait.scale.set(0.2);

    trait.x = Math.random() * app.screen.width;
    trait.y = Math.random() * app.screen.height;

    trait.direction = Math.random() * Math.PI * 2;

    trait.turningSpeed = Math.random() - 0.8;

    trait.speed = 0.1 + Math.random() * 0.1;

    traits.push(trait);

    app.stage.addChild(trait);
}

var traitBoundsPadding = 100;
var traitBounds = new PIXI.Rectangle(-traitBoundsPadding,
                                    -traitBoundsPadding,
                                    app.screen.width + traitBoundsPadding * 2,
                                    app.screen.height + traitBoundsPadding * 2);

app.ticker.add(function() {

    for (var i = 0; i < traits.length; i++) {

        var trait = traits[i];
        trait.direction += trait.turningSpeed * 0.01;
        trait.x += Math.sin(trait.direction) * trait.speed;
        trait.y += Math.cos(trait.direction) * trait.speed;
        trait.rotation = -trait.direction - Math.PI / 2;

        if (trait.x < traitBounds.x) {
            trait.x += traitBounds.width;
        }
        else if (trait.x > traitBounds.x + traitBounds.width) {
            trait.x -= traitBounds.width;
        }

        if (trait.y < traitBounds.y) {
            trait.y += traitBounds.height;
        }
        else if (trait.y > traitBounds.y + traitBounds.height) {
            trait.y -= traitBounds.height;
        }
    }
});


$(function(){
        //prepare Your data array with img urls
        var firstArray=new Array();
        firstArray[0]="../img/mmibordeaux.jpg";
        firstArray[1]="../img/larochelle.jpg";
        firstArray[2]="../img/nantes.jpg";

        var secondArray=new Array();
        secondArray[0]="../img/gala.jpg";
        secondArray[1]="../img/larochelle.jpg";
        secondArray[2]="../img/nantes.jpg";

        var thirdArray=new Array();
        thirdArray[0]="../img/mmibordeaux.jpg";
        thirdArray[1]="../img/larochelle.jpg";
        thirdArray[2]="../img/nantes.jpg";

        //start with id=0 after 5 seconds
        var thisId=0;

        window.setInterval(function(){
            $('#formImg').attr('src',firstArray[thisId]);
            console.log(thisId);
            $('#expImg').attr('src',secondArray[thisId]);
            $('#compImg').attr('src',thirdArray[thisId]);
            thisId++; //increment data array id
            if (thisId==3) thisId=0; //repeat from start
        },5000);
    });
