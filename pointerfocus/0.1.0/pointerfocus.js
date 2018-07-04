function getRGB(str){
    var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    return match ? {
        red: match[1],
        green: match[2],
        blue: match[3]
    } : {};
}
function redder(object){
    var color = getRGB(object.css("background-color"));
        var red = Number(color.red);
        var green = Number(color.green);
        var blue = Number(color.blue);
        if(green > 0 && blue > 0){
            green = green - 10;
            blue = blue - 10;
            object.css("background-color",`rgb(${red},${green},${blue})`);
        }
}
function gridder(object,width,height){
    for(var i=0;i<width/25;i++){
        for(var j=0; j<height/25; j++){
            object.append(`<div id="${i}b${j}" class="heat" style="left:${i*25};top:${j*25}"></div>`);
        }
    }
}
function tracker(object){
    object.mouseenter(function(){
        ids.push(this.id);
    });
    object.mouseleave(function(){
        ids.pop();
    });
}
