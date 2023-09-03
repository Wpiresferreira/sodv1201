let monsters = ["img/angrymonster.png",
"img/angrymonster1.png",
"img/scaredmonster.webp",
"img/smilemonster.png",
"img/sadmonster.webp",
"img/sickmonster.webp",
]
let points = 0



for (let index=0; index<10; index++){
} 

let timeOut = setInterval(() => {
    test()
}, 1000); 

function test(){
    
    let sorted = Math.floor(Math.random() * 6 ) + 1;
    let sortedMonster = Math.floor(Math.random() * 5 );
    console.log(sorted)
    $("#monster" + sorted).click(function(){
        $(this).html('<img src="img/hitedmonster1.png" alt="" srcset="">')
    });
    $("#monster" + sorted).html('<img src="'+ monsters[sortedMonster] + '" alt="" srcset="">')
    
    console.log(monsters[sortedMonster])

    $("#monster" + sorted).animate({marginTop: "0px"});
    let wait = setTimeout(() => {
        $("#monster" + sorted).animate({marginTop: "100px"})
    }, 1000)
}
function test1(){
    $("#monster1").animate({marginTop: "100px"});
}
