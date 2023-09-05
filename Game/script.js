let monsters = ["img/angrymonster.png",
"img/angrymonster1.png",
"img/scaredmonster.webp",
"img/smilemonster.png",
"img/sadmonster.png",
"img/sickmonster.webp",
]
let points = 0

$("#points").text("Points: " +points)

let positions =[
{pos:1, left: "8vw", topShow: "18vh", topHidden: "30vh", z:10},
{pos:2, left:"42vw", topShow: "18vh", topHidden: "30vh", z:10},
{pos:3, left:"75.5vw", topShow: "18vh", topHidden: "30vh", z:10},
{pos:4, left:"8vw", topShow: "33.5vh", topHidden: "45vh", z:30},
{pos:5, left:"42vw", topShow: "33.5vh", topHidden: "45vh", z:30},
{pos:6, left:"75.5vw", topShow: "33.5vh", topHidden: "45vh", z:30},
{pos:7, left:"8vw", topShow: "48.2vh", topHidden: "60vh", z:50},
{pos:8, left:"42vw", topShow: "48.2vh", topHidden: "60vh", z:50},
{pos:9, left:"75.5vw", topShow: "48.2vh", topHidden: "60vh", z:50}
]

// for (let i = 0; i<20; i++){
    
    //     let timeOut = setTimeout(() => {
        //         test()
        //     }, 3000*(i+1)); 
        // }
        
        
        
        
        setInterval(() => {
    test()
}, 3000);
function test(){
    let scored = false
    
    let aleat =  Math.floor(Math.random()*9)
    let aleatM = Math.floor(Math.random()*6)
    console.log(aleat +1)
    // document.getElementById("monster1").style.left = 
    $("#monster1").click(function(){
        
        if(!scored){
            $("#monster1").attr("src", "img/hitedmonster1.png")
            console.log("CLICKED")
            points+=1
            $("#points").text("Points: " +points)
            scored = true
        }
    })
    $("#monster1").attr("src", monsters[aleatM]);
    $("#monster1").css({"left":positions[aleat].left});
    $("#monster1").css({"top":positions[aleat].topHidden});
    $("#monster1").css({"z-index":positions[aleat].z});
    $("#monster1").animate({"top":positions[aleat].topShow});
    setTimeout(() => {
        $("#monster1").animate({"top":positions[aleat].topHidden});
        setTimeout(() => {
            $("#monster1").off("click")
            
        }, 500);
        
    }, 1500);
    
}
function test1(){
    console.log("test1")
    $("#monster1").animate({"top":positions[1].topHidden});
    // $("#monster1").animate({"top":"0"});
}
