let monsters = ["img/angrymonster.png",
"img/angrymonster1.png",
"img/scaredmonster.webp",
"img/smilemonster.png",
"img/sadmonster.webp",
"img/sickmonster.webp",
]
let points = 0

$("#points").text(points)




let timeOut = setInterval(() => {
    test()
}, 2000); 

function test(){
    let scored = false
    let sorted = Math.floor(Math.random() * 6 ) + 1;
    let sortedMonster = Math.floor(Math.random() * 5 );
    console.log(sorted)
    console.log(monsters[sortedMonster])
    
    $("#monster" + sorted).click(function(){
        if (scored){
        }else{
            $(this).html('<img src="img/hitedmonster1.png" alt="" srcset="">')
            points +=1
            scored = true
            $("#points").text(points)
        }

    });

    $("#monster" + sorted).html('<img src="'+ monsters[sortedMonster] + '" alt="" srcset="">')
    

    $("#monster" + sorted).animate({marginTop: "0px"});
    let wait = setTimeout(() => {
        $("#monster" + sorted).animate({marginTop: "100px"})
    }, 1000)
}
function test1(){
    $("#monster1").animate({marginTop: "100px"});
}
