let monsters = ["img\\angrymonster.png",
"img\\angrymonster1.png",
"img\\sadmonster.png"
]
let points = 0

$("#points")

setTimeout(test(),1000)
setTimeout(test(),2000)
setTimeout(test(),3000)
setTimeout(test(),4000)
setTimeout(test(),5000)


function test(){
    
    let sorted = Math.floor(Math.random() * 6 ) + 1;
    console.log(sorted)
    $("#monster" + sorted).click(function(){
        $(this).html('<img src="img/hitedmonster.png" alt="" srcset="">')
    });
    $("#monster" + sorted).animate({marginTop: "0px"});
    $("#monster" + sorted).animate({marginTop: "100px"});
}
function test1(){
    $("#monster1").animate({marginTop: "100px"});
}
