let colorSchema = 0
let state = "not-authenticated" // To storage the authentication status
// let userHasProperty = false
let userLogged // To store the obj of the user logged
$(".newProperty").hide()
$(".editProperty").hide()

updateAuthentication()

let users = [
    {
        name: "Administrator",
        email: "admin",
        phone: "14036011100",
        password: "admin",
        type: "admin"
    },
    {
        name: "Owner",
        email: "owner",
        phone: "14036011101",
        password: "owner",
        idOwner: "3",
        type: "owner"
    },
    {
        name: "Renter",
        email: "renter",
        phone: "14036011102",
        password: "renter",
        type: "renter"
    },
    {
        name: 'Liam Smith',
        phone: '(403) 947-9469',
        email: 'liam.smith@domain.com',
        password: 'xxx',
        type: 'owner'
    },
    {
        name: 'Jackson Brown',
        phone: '(403) 050-0505',
        email: 'jackson.brown@domain.com',
        password: 'xxx',
        type: 'owner'
    },
    {
        name: 'Noah Tremblay',
        phone: '(403) 653-6533',
        email: 'noah.tremblay@domain.com',
        password: 'xxx',
        type: 'owner'
    },
    {
        name: 'Lucas Martin',
        phone: '(403) 878-8780',
        email: 'lucas.martin@domain.com',
        password: 'xxx',
        type: 'owner'
    },
    {
        name: 'Oliver Roy',
        phone: '(403) 002-0016',
        email: 'oliver.roy@domain.com',
        password: 'xxx',
        type: 'owner'
    },
    { name: "Grayson Gagnon", phone: "(403) 660-6601", email: "grayson.gagnon@domain.com", password: "xxx", type: "renter" },
    { name: "Leo Lee", phone: "(403) 868-8684", email: "leo.lee@domain.com", password: "xxx", type: "renter" },
    { name: "Jack Wilson", phone: "(403) 343-3429", email: "jack.wilson@domain.com", password: "xxx", type: "renter" },
    { name: "Benjamim Jonhson", phone: "(403) 843-8428", email: "benjamim.jonhson@domain.com", password: "xxx", type: "renter" },
    { name: "Willian MacDonald", phone: "(403) 517-5167", email: "willian.macdonald@domain.com", password: "xxx", type: "renter" },
    { name: "Olivia Taylor", phone: "(403) 762-7622", email: "olivia.taylor@domain.com", password: "xxx", type: "renter" },
    { name: "Emma Campbell", phone: "(403) 162-1622", email: "emma.campbell@domain.com", password: "xxx", type: "renter" },
    { name: "Mia Anderson", phone: "(403) 510-5102", email: "mia.anderson@domain.com", password: "xxx", type: "renter" },
    { name: "Sophia Jones", phone: "(403) 428-4275", email: "sophia.jones@domain.com", password: "xxx", type: "renter" },
    { name: "Zoey Leblanc", phone: "(403) 679-6788", email: "zoey.leblanc@domain.com", password: "xxx", type: "renter" },
    { name: "Charlotte Miller", phone: "(403) 128-1278", email: "charlotte.miller@domain.com", password: "xxx", type: "renter" },
    { name: "Amelia White", phone: "(403) 192-1925", email: "amelia.white@domain.com", password: "xxx", type: "renter" },
    { name: "Aria Morin", phone: "(403) 598-5976", email: "aria.morin@domain.com", password: "xxx", type: "renter" },
    { name: "Mila Scott", phone: "(403) 982-9817", email: "mila.scott@domain.com", password: "xxx", type: "renter" },
    { name: "Hannah Ross", phone: "(403) 742-7418", email: "hannah.ross@domain.com", password: "xxx", type: "renter" },
    { name: "Matheus Alves", phone: "(403) 234-7890", email: "matheus.alves@domain.com", password: "xxx", type: "renter" }
]

let properties = [
    { idProperty: "1", idOwner: "3", name: "Business Tower", address: "7 St SW", neighborhood: "Downtown", squaredFeet: "1000.00", hasParkingGarage: "0", hasAccessiblePublicTransportation: "1" },
    { idProperty: "2", idOwner: "1", name: "Central Business", address: "8 Ave NE", neighborhood: "Bridgeland", squaredFeet: "849.50", hasParkingGarage: "1", hasAccessiblePublicTransportation: "1" },
    { idProperty: "3", idOwner: "2", name: "Southland Place", address: "7878 McLeod Dr", neighborhood: "Southland", squaredFeet: "3000.00", hasParkingGarage: "1", hasAccessiblePublicTransportation: "0" }
]

let workspaces = [
    { idWorkspace: "1", nameWorkspace: "Room 101", idProperty: "3", type: "Meeting Room", capacity: "12", isSmokeAllowed: "0", availableDate: "2023-07-01", leaseTermType: "Day", price: "100.00" },
    { idWorkspace: "2", nameWorkspace: "Room 102", idProperty: "3", type: "Private Office Room", capacity: "4", isSmokeAllowed: "0", availableDate: "2023-07-01", leaseTermType: "Week", price: "500.00" },
    { idWorkspace: "3", nameWorkspace: "Room 103", idProperty: "3", type: "Private Office Room", capacity: "4", isSmokeAllowed: "0", availableDate: "2023-11-01", leaseTermType: "Week", price: "485.00" },
    { idWorkspace: "4", nameWorkspace: "Room 104", idProperty: "3", type: "Private Office Room", capacity: "4", isSmokeAllowed: "0", availableDate: "2023-06-01", leaseTermType: "Week", price: "490.00" },
    { idWorkspace: "5", nameWorkspace: "Room 201", idProperty: "3", type: "Meeting Room", capacity: "12", isSmokeAllowed: "1", availableDate: "2023-06-01", leaseTermType: "Day", price: "100.00" },
    { idWorkspace: "6", nameWorkspace: "Room 202", idProperty: "3", type: "Private Office Room", capacity: "4", isSmokeAllowed: "1", availableDate: "2023-06-01", leaseTermType: "Week", price: "650.00" },
    { idWorkspace: "7", nameWorkspace: "Room 203", idProperty: "3", type: "Private Office Room", capacity: "4", isSmokeAllowed: "1", availableDate: "2023-06-01", leaseTermType: "Week", price: "480.00" },
    { idWorkspace: "8", nameWorkspace: "Room 204", idProperty: "3", type: "Private Office Room", capacity: "4", isSmokeAllowed: "1", availableDate: "2023-06-01", leaseTermType: "Week", price: "560.00" },
    { idWorkspace: "9", nameWorkspace: "Workstation 21", idProperty: "1", type: "Desktop", capacity: "1", isSmokeAllowed: "0", availableDate: "2023-07-15", leaseTermType: "Month", price: "125.00" },
    { idWorkspace: "10", nameWorkspace: "Workstation 22", idProperty: "1", type: "Desktop", capacity: "1", isSmokeAllowed: "0", availableDate: "2023-07-15", leaseTermType: "Month", price: "125.00" },
    { idWorkspace: "11", nameWorkspace: "Workstation 23", idProperty: "1", type: "Desktop", capacity: "1", isSmokeAllowed: "0", availableDate: "2023-07-15", leaseTermType: "Week", price: "125.00" },
    { idWorkspace: "12", nameWorkspace: "Workstation 24", idProperty: "1", type: "Desktop", capacity: "1", isSmokeAllowed: "0", availableDate: "2024-01-01", leaseTermType: "Month", price: "125.00" },
    { idWorkspace: "13", nameWorkspace: "Workstation 25", idProperty: "1", type: "Desktop", capacity: "1", isSmokeAllowed: "0", availableDate: "2024-01-01", leaseTermType: "Month", price: "125.00" },
    { idWorkspace: "14", nameWorkspace: "Workstation 26", idProperty: "1", type: "Desktop", capacity: "1", isSmokeAllowed: "0", availableDate: "2023-06-01", leaseTermType: "Month", price: "125.00" },
    { idWorkspace: "15", nameWorkspace: "Workstation 27", idProperty: "1", type: "Desktop", capacity: "1", isSmokeAllowed: "0", availableDate: "2024-01-01", leaseTermType: "Month", price: "125.00" },
    { idWorkspace: "16", nameWorkspace: "Office Room 4", idProperty: "2", type: "Private Office Room", capacity: "4", isSmokeAllowed: "1", availableDate: "2023-07-15", leaseTermType: "Month", price: "200.00" },
    { idWorkspace: "17", nameWorkspace: "Office Room 5", idProperty: "2", type: "Private Office Room", capacity: "4", isSmokeAllowed: "1", availableDate: "2023-10-09", leaseTermType: "Month", price: "200.00" },
    { idWorkspace: "18", nameWorkspace: "Office Room 16", idProperty: "2", type: "Private Office Room", capacity: "4", isSmokeAllowed: "1", availableDate: "2023-07-15", leaseTermType: "Week", price: "200.00" },
    { idWorkspace: "19", nameWorkspace: "Office Room 20", idProperty: "2", type: "Private Office Room", capacity: "4", isSmokeAllowed: "1", availableDate: "2023-10-01", leaseTermType: "Week", price: "200.00" },
    { idWorkspace: "20", nameWorkspace: "Office Room 22", idProperty: "2", type: "Private Office Room", capacity: "4", isSmokeAllowed: "1", availableDate: "2023-10-01", leaseTermType: "Week", price: "200.00" }
]

function changeUser() {
    if (state == "not-authenticated") {
        state = "renter-authenticated"
        $("#changeUser").text("renter-authenticated")
    } else if (state == "renter-authenticated") {
        state = "owner-authenticated"
        $("#changeUser").text("owner-authenticated")
    } else if (state == "owner-authenticated") {
        state = "admin-authenticated"
        $("#changeUser").text("admin-authenticated")
    } else if (state == "admin-authenticated") {
        state = "not-authenticated"
        $("#changeUser").text("not-authenticated")
    }

    updateAuthentication()
}

function logout() {
    location.reload()
}

function goLogin() {
    $(".login").fadeIn("slow")
    $(".signup").hide()
}

function goSignup() {
    $(".login").hide()
    $(".signup").fadeIn("slow")
}

function clearsignup() {
    $("#newname").val("")
    $("#newemail").val("")
    $("#newpassword").val("")
    $("#newpasswordrepeated").val("")

}

function showWorkspaces() {
    console.log("XXXXXXXXXXXXXXX");
}


function showListProperties() {
    console.log("shw");
    console.log("User Logged = ")
    console.log(userLogged);
    $("#filterProperties").html("")
    
    properties.forEach(element => {

        if (element.idOwner == userLogged.idOwner) {
            
            let card = document.createElement("div")
            card.className = "cardProperty"
            card.id = "id" + element.idProperty
            card.addEventListener("click", showWorkspaces)
            let leftSide = document.createElement("div")
            // leftSide.addEventListener("click", showWorkspaces(element.idProperty))
            leftSide.className = "left-side-card"
            leftSide.innerText = element.name
            card.appendChild(leftSide)
            let rightSide = document.createElement("div")
            // rightSide.addEventListener("click", showWorkspaces(element.idProperty))
            rightSide.className = "right-side-card"
            rightSide.innerHTML = 'Address: ' + element.address + '<br>'
            rightSide.innerHTML += 'Neighborhood: ' + element.neighborhood + '<br>'
            rightSide.innerHTML += 'Squared Feet: ' + element.squaredFeet + '<br>'
            rightSide.innerHTML += 'Parking Garage: ' + element.hasParkingGarage + '<br>'
            rightSide.innerHTML += 'Public Transportation: ' + element.hasAccessiblePublicTransportation + '<br>'
            card.appendChild(rightSide)
            document.getElementById("filterProperties").appendChild(card)
            let editProperty = document.createElement("div")
            editProperty.id = "editProperty" + element.idProperty
            editProperty.addEventListener("click", editProp)
            editProperty.innerText = "Edit Property"
            document.getElementById("filterProperties").appendChild(editProperty)
        }
    });
    let addNewProperty = document.createElement("div")
    addNewProperty.id = "addNewProperty"
    addNewProperty.addEventListener("click", newProperty)
    addNewProperty.innerText = "+ Add New Property"
    document.getElementById("filterProperties").appendChild(addNewProperty)
    
    // let count = 0
    // let listHtmlElement = '<select name="cars" id="cars">'
    // properties.forEach(element => {
        //     listHtmlElement += '<option value="'
        //     listHtmlElement += element.idOwner
    //     listHtmlElement += '">'
    //     listHtmlElement += element.idOwner
    //     listHtmlElement += '</option>'
    // });
    // listHtmlElement += '</select>'
    // workspaces.forEach(element => {
    //     if (element.idProperty ==  ) {

    //     }
    
    // $("#filterProperties").html(listHtmlElement)
    // });

}

function showWorkspaces() {
    console.log("shw workspaces");
    console.log("User Logged = ")
    console.log(userLogged);
    console.log(this);
    idCaptured = this.id.substring(2)
    $("#filterProperties").html("")

    workspaces.forEach(element => {
        
        if (element.idProperty == idCaptured) {

            let card = document.createElement("div")
            card.className = "cardProperty"
            //         card.addEventListener("click", showWorkspaces)
            let leftSide = document.createElement("div")
            // leftSide.addEventListener("click", showWorkspaces(element.idProperty))
            leftSide.className = "left-side-card"
            leftSide.innerText = element.nameWorkspace
            card.appendChild(leftSide)
            let rightSide = document.createElement("div")
            // rightSide.addEventListener("click", showWorkspaces(element.idProperty))
            rightSide.className = "right-side-card"
            rightSide.innerHTML = 'Type: ' + element.type + '<br>'
            rightSide.innerHTML += 'Lease Term: ' + element.leaseTermType + '<br>'
            rightSide.innerHTML += 'Capacity: ' + element.capacity + '<br>'
            rightSide.innerHTML += 'Available Date: ' + element.availableDate + '<br>'
            rightSide.innerHTML += 'Smoke Allowed: ' + element.isSmokeAllowed + '<br>'
            card.appendChild(rightSide)
            document.getElementById("filterProperties").appendChild(card)
        
    
             let editWorkspace = document.createElement("div")
             editWorkspace.id = "editProperty" + element.idProperty
             editWorkspace.addEventListener("click", editWorksp)
             editWorkspace.innerText = "Edit Workspace"
             document.getElementById("filterProperties").appendChild(editWorkspace)
         }
     });
    //     let addNewProperty = document.createElement("div")
    //     addNewProperty.id = "addNewProperty"
    //     addNewProperty.addEventListener("click", newProperty)
    //     addNewProperty.innerText = "+ Add New Property"
    //     document.getElementById("filterProperties").appendChild(addNewProperty)

    //     // let count = 0
    // // let listHtmlElement = '<select name="cars" id="cars">'
    // // properties.forEach(element => {
    // //     listHtmlElement += '<option value="'
    // //     listHtmlElement += element.idOwner
    // //     listHtmlElement += '">'
    // //     listHtmlElement += element.idOwner
    // //     listHtmlElement += '</option>'
    // // });
    // // listHtmlElement += '</select>'
    // // workspaces.forEach(element => {
    //     //     if (element.idProperty ==  ) {

    //         //     }

    //         // $("#filterProperties").html(listHtmlElement)
    //         // });

}

function editWorksp(){
    console.log("EditWs")
}

function editProp() {
    $(".listProperties").fadeOut("slow")
    $(".editProperty").fadeIn("slow")
    idCaptured = this.id.substring(12)
    console.log(idCaptured)

    properties.forEach(element => {
        if (element.idProperty == idCaptured) {
            $("#idPropertyEdit").val(element.idProperty)
            $("#idOwnerEdit").val(element.idOwner)
            $("#propertyNameEdit").val(element.name)
            $("#propertyAddressEdit").val(element.address)
            $("#propertyNeighborhoodEdit").val(element.neighborhood)
            $("#propertySqFtEdit").val(element.squaredFeet),
                $("#hasParkingGarageEdit").val(element.hasParkingGarage),
                $("#hasAccessiblePublicTransportationEdit").val(element.hasAccessiblePublicTransportation)
        }
    });

    // })
    console.log(this)
}

function EditPropertyButton() {

    properties.forEach(element => {
        if (element.idProperty == idCaptured) {
            element.idProperty = $("#idPropertyEdit").val()
            element.idOwner = $("#idOwnerEdit").val()
            element.name = $("#propertyNameEdit").val()
            element.address = $("#propertyAddressEdit").val()
            element.neighborhood = $("#propertyNeighborhoodEdit").val()
            element.squaredFeet = $("#propertySqFtEdit").val()
            element.hasParkingGarage = $("#hasParkingGarageEdit").val()
            element.hasAccessiblePublicTransportation = $("#hasAccessiblePublicTransportationEdit").val()
        }
    });
    console.log(properties)


    $(".editProperty").hide()
    showListProperties()
    $(".listProperties").fadeIn("slow")
}

function newProperty() {
    console.log("addNewProperty");
    $(".listProperties").fadeOut("slow")
    $(".newProperty").fadeIn("slow")


}

function addNewProperty() {
    properties.push({
        idProperty: $("#idProperty").val(),
        idOwner: $("#idOwner").val(),
        name: $("#propertyName").val(),
        address: $("#propertyAddress").val(),
        neighborhood: $("#propertyNeighborhood").val(),
        squaredFeet: $("#propertySqFt").val(),
        hasParkingGarage: $("#hasParkingGarage").val(),
        hasAccessiblePublicTransportation: $("#hasAccessiblePublicTransportation").val()
    })
    console.log(properties);

    $(".newProperty").hide()
    showListProperties()
    $(".listProperties").fadeIn("slow")
}

function signup() {
    let invalidemail = false
    users.forEach(element => {
        if (element.email == $("#newemail").val()) {
            invalidemail = true
        }
    })
    if (invalidemail || $("#newemail").val() == "" || $("#newemail").val().length < 3) {
        showMessage("Invalid email")
        clearsignup()
        return
    }

    if (invalidemail == false && $("#newpassword").val() == $("#newpasswordrepeated").val()) {
        users.push({
            name: $("#newname").val(),
            email: $("#newemail").val(),
            password: $("#newpassword").val(),
            type: $("#type-user").val()
        })
        showMessage("User successfully created")
        clearsignup()
        goLogin()
        console.log(users);
        return
    }
}

function login() {
    users.forEach(element => {
        // console.log("Name : "+ element.name);
        // console.log("Password : "+ element.password);
        // console.log($("#loginemail").val());
        // console.log($("#loginPassword").val());

        if (element.email == $("#loginemail").val() &&
            element.password == $("#loginPassword").val()) {
            userLogged = element
            console.log("Login successful");
            $("#loginemail").val("")
            $("#loginPassword").val("")
            $(".login").fadeOut("slow")
            if (userLogged.type == "owner") {
                state = "owner-authenticated"
            } else if (userLogged.type == "renter") {
                state = "renter-authenticated"
            } else if (userLogged.type == "admin") {
                state = "admin-authenticated"
            }
            showMessage("Login Successful")
            $("#msgLogin").css("color", "green")
            $("#msgLogin").text("Login Successful!")
            showMessage("Login Successful")
            updateAuthentication()

        }
        if (state == "not-authenticated") {
            showMessage("Login Failed. Try again.")
            $("#msgLogin").text("Login Failed!")
        }


    });
}

function showMessage(msg) {
    $("#alert-message").text(msg)
    $("#alert-message").fadeIn("slow")
    setTimeout(() => {
        $("#alert-message").fadeOut("slow")

    }, 3000);


}

function updateAuthentication() {
    $("#alert-message").hide()
    if (state == "not-authenticated") {
        $(".welcome").hide()
        $(".login").hide()
        $(".signup").hide()
        $(".not-authenticated").show()
        $(".owner-authenticated").hide()
        $(".renter-authenticated").hide()
        $(".admin-authenticated").hide()
    } else if (state == "renter-authenticated") {
        $("#welcome-message").html("Welcome, " + userLogged.name + " !")
        $(".welcome").fadeIn("slow")
        $(".not-authenticated").hide()
        $(".owner-authenticated").hide()
        $(".renter-authenticated").show()
        $(".admin-authenticated").hide()
    } else if (state == "owner-authenticated") {
        $("#welcome-message").html("Welcome, " + userLogged.name + " !")
        $(".welcome").fadeIn("slow")
        $(".not-authenticated").hide()
        $(".owner-authenticated").show()
        $(".renter-authenticated").hide()
        $(".admin-authenticated").hide()
    } else if (state == "admin-authenticated") {
        $("#welcome-message").html("Welcome, " + userLogged.name + " !")
        $(".welcome").fadeIn("slow")
        $(".not-authenticated").hide()
        $(".owner-authenticated").show()
        $(".user-authenticated").show()
        $(".admin-authenticated").show()
    }
    console.log("User Logged = ")
    console.log(userLogged);
}

function authenticatingSignUp() {

}

//console.log(users)

function changeColor() {
    console.log("Changing colors");
    if (colorSchema == 0) {
        $(".not-authenticated").hide()
        colorSchema = 1
        $(":root").css("--color1", "#478559")
        $(":root").css("--color2", "#161748")
        $(":root").css("--color3", "#f95d9b")
        $(":root").css("--color4", "#39a0ca")
    } else {
        $(".not-authenticated").show()
        colorSchema = 0
        $(":root").css("--color1", "#AFD5EB")
        $(":root").css("--color2", "#F04520")
        $(":root").css("--color3", "#EF869C")
        $(":root").css("--color4", "#1073E5")
    }

}


// async function getExample(){
//     const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6fa6d44963mshcf6eb887528eb62p1186f7jsn2b7638536b64',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// 	console.log(JSON.parse(result).current.temp_c);
// 	// console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }

// let test = {
//     "location":{
//         "name":"Boston",
//         "region":"Lincolnshire",
//         "country":"United Kingdom",
//         "lat":53.1,
//         "lon":-0.13,
//         "tz_id":"Europe/London",
//         "localtime_epoch":1690480466,
//         "localtime":"2023-07-27 18:54"
//     },
//     "current":{
//         "last_updated_epoch":1690479900,
//         "last_updated":"2023-07-27 18:45",
//         "temp_c":23.0,
//         "temp_f":73.4,
//         "is_day":1,
//         "condition":{
//             "text":"Partly cloudy",
//             "icon":"//cdn.weatherapi.com/weather/64x64/day/116.png",
//             "code":1003
//         },
//             "wind_mph":12.5,
//             "wind_kph":20.2,
//             "wind_degree":290,
//             "wind_dir":"WNW",
//             "pressure_mb":1000.0,
//             "pressure_in":29.53,
//             "precip_mm":2.1,
//             "precip_in":0.08,
//             "humidity":65,
//             "cloud":75,
//             "feelslike_c":25.0,
//             "feelslike_f":77.0,
//             "vis_km":10.0,
//             "vis_miles":6.0,
//             "uv":5.0,
//             "gust_mph":14.5,
//             "gust_kph":23.4
//         }
//     }

// getExample()

// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13',
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6fa6d44963mshcf6eb887528eb62p1186f7jsn2b7638536b64',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });




































    //     let player1 = { name: "Player1", token: "X" };
//     let player2 = { name: "Player2", token: "O" };
//     let board;
//     let turn = player1 //P1 = X / P2 = O
//     let hasWinner = ""
//     let mode = "2player"
//     //player2.name = "Computer"
//     $("#1PlayerMode").hide()
//     $("#2PlayerMode").show()
//     start()


//     $("#start").click(function () {
//         location.reload()
//         start()
//     });

//     function start() {
//         $("#winner-line").fadeOut();
//         $("#player1Name").text(player1.name)
//         $("#player1Token").text(player1.token)
//         $("#player2Name").text(player2.name)
//         $("#player2Token").text(player2.token)
//       //  if (Math.floor(Math.random() * 2) == 0) {
// //    turn = player1
// // }
// // else
//         // turn = player2 }
//         // showMessage("Choosing 1st Player")
//      // hideMessage()
//         //setTimeout(showMessage(turn.name + " will start."), 100000)
//        // hideMessage()

//         hasWinner = ""

//         //        $("#winner").text("")

//         initializeBoard()
//         updateBoard()
//         turnMessage()
//         if (turn.token == "O" && mode == "1player") {
//             setTimeout(computerMark, 5000)
//         }
//     }

//      function showMessage(msg){
//             $("#alertMessage").text(msg)
//             $("#alertMessage").fadeIn()
//     }

//     function hideMessage(){
//         setTimeout(function () {
//             $("#alertMessage").fadeOut()
//         }, 5000)
//     }
//         // setTimeout(showAlertMessage(turn.name + " turn"), 3000)
//         // setTimeout(hideAlertMessage(), 3000)

//     //     $("#alertMessage").css("z-index", "10")
//     //     $("#alertMessage").text("z-index 10")
//     //     }

//     // function hideAlertMessage(){
//     //     $("#alertMessage").css("z-index", "-10")
//     //     }


//  //   $("#1PlayerMode").click(function () {
//        // mode = "1player"
//         //player2.name = "Computer"
//         //$("#1PlayerMode").hide()
//         //$("#2PlayerMode").show()
//         //start()
//     //})

//     //$("#2PlayerMode").click(function () {
//         //mode = "2player"
//         //player2.name = "Player 2"
//         //$("#2PlayerMode").hide()
//         //$("#1PlayerMode").show()
//         //start()
//     //})

//     $(".cell").click(function () {
//         mark(this.id)
//     })

//     function mark(n) {


//         //setTimeout(showAlertMessage(turn.name + " turn"), 3000)
//         //setTimeout(hideAlertMessage, 3000)

//         let row = parseInt(n.substring(4, 5));
//         let col = parseInt(n.substring(5, 6));

//         if (hasWinner != "") {
//             return
//         }

//         if (board[row][col] == "") {
//             board[row][col] = turn.token;
//             updateBoard()
//             checkWinner()
//             if (hasWinner == "") changeTurn()
//         }

//         if (turn.token == "O" && mode == "1player") {
//             setTimeout(computerMark, 3000)
//         }
//     }

//     function computerMark() {
//         let possibles = []
//         let index = 0
//         for (let row = 0; row <= 2; row++) {
//             for (let col = 0; col <= 2; col++) {
//                 if (board[row][col] == "") {
//                     possibles[index] = row * 10 + col
//                     index++
//                 }
//             }
//         }

//         let rnd = Math.floor(Math.random() * possibles.length)
//         let row = Math.floor(possibles[rnd] / 10)
//         let col = possibles[rnd] % 10
//         board[row][col] = turn.token
//         updateBoard()
//         checkWinner()
//         if (hasWinner == "") changeTurn()
//     }

//     function turnMessage() {
//         if (turn.token == "X") $("#turnMessage").text("Player 1 Turn")
//         else $("#turnMessage").text(player2.name + " Turn")
//     }

//     function changeTurn() {
//         if (turn.token == "X") turn = player2
//         else turn = player1
//         turnMessage()
//     }

//     function initializeBoard() {
//         board = [
//             ["", "", ""],
//             ["", "", ""],
//             ["", "", ""]
//         ]
//     }

//     function winner(p) {
//         if (p == "X") {
//             $("#turnMessage").text(player1.name + " Win")
//         } else if (p == "O") {
//             $("#turnMessage").text(player2.name + " Win")
//         } else if (p == "-") {
//             $("#turnMessage").text("There was a Tie")
//         }
//         hasWinner = p
//     }

//     function checkWinner() {
//         if (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O"){
//         winner("O")
//         $("#winner-line").fadeIn();
//         return
//         }
//         if (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O"){
//             winner("O")
//             $("#winner-line").css("margin-top", "38vw");
//             $("#winner-line").fadeIn();
//             return
//         }
//         if (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O"){
//             winner("O")
//             $("#winner-line").css("margin-top", "66vw");
//             $("#winner-line").fadeIn();
//             return
//         }
//         if (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O"){
//            winner("O")
//             $("#winner-line").css("margin-top", "0");
//             $("#winner-line").css("margin-left", "12vw");
//             $("#winner-line").css("width", "6px");
//             $("#winner-line").css("height", "79vw");
//             $("#winner-line").fadeIn();
//             return
//         }
//         if (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O"){
//         winner("O")
//             $("#winner-line").css("margin-top", "0");
//             $("#winner-line").css("margin-left", "38vw");
//             $("#winner-line").css("width", "6px");
//             $("#winner-line").css("height", "79vw");
//             $("#winner-line").fadeIn();
//             return
//         }
//         if (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O"){
//            winner("O")
//             $("#winner-line").css("margin-top", "0");
//             $("#winner-line").css("margin-left", "63vw");
//             $("#winner-line").css("width", "6px");
//             $("#winner-line").css("height", "79vw");
//             $("#winner-line").fadeIn();
//             return

//         }
//         if (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O"){
//             winner("O")
//             $("#winner-line").css("margin-top", "20px");
//             $("#winner-line").css("margin-left", "37vw");
//             $("#winner-line").css("width", "6px");
//             $("#winner-line").css("height", "67vw");
//             $("#winner-line").css("-webkit-transform", "skew(45deg)");
//             $("#winner-line").fadeIn();
//             return
//         }
//         if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
//            winner("O")
//             $("#winner-line").css("margin-top", "20px");
//             $("#winner-line").css("margin-left", "37vw");
//             $("#winner-line").css("width", "6px");
//             $("#winner-line").css("height", "67vw");
//             $("#winner-line").css("-webkit-transform", "skew(-45deg)");
//             $("#winner-line").fadeIn();
//             return
//         }
//         if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X"){
//         winner("X")
//         $("#winner-line").fadeIn();
//         return
//         }
//         if (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X"){
//             winner("X")
//             $("#winner-line").css("margin-top", "38vw");
//             $("#winner-line").fadeIn();
//             return
//         }
//         if (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X"){
//             winner("X")
//             $("#winner-line").css("margin-top", "66vw");
//             $("#winner-line").fadeIn();
//             return
//         }
//         if (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X"){
//             winner("X")
//             $("#winner-line").css("margin-top", "0");
//             $("#winner-line").css("margin-left", "12vw");
//             $("#winner-line").css("width", "6px");
//             $("#winner-line").css("height", "79vw");
//             $("#winner-line").fadeIn();
//             return
//         }
//         if (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X"){
//            winner("X")
//             $("#winner-line").css("margin-top", "0");
//             $("#winner-line").css("margin-left", "38vw");
//             $("#winner-line").css("width", "6px");
//             $("#winner-line").css("height", "79vw");
//             $("#winner-line").fadeIn();
//             return
//         }
//         if (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X"){
//            winner("X")
//             $("#winner-line").css("margin-top", "0");
//             $("#winner-line").css("margin-left", "63vw");
//             $("#winner-line").css("width", "6px");
//             $("#winner-line").css("height", "79vw");
//             $("#winner-line").fadeIn();
//             return

//         }
//         if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X"){
//             winner("X")
//             $("#winner-line").css("margin-top", "20px");
//             $("#winner-line").css("margin-left", "37vw");
//             $("#winner-line").css("width", "6px");
//             $("#winner-line").css("height", "67vw");
//             $("#winner-line").css("-webkit-transform", "skew(45deg)");
//             $("#winner-line").fadeIn();
//             return
//         }
//         if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
//            winner("X")
//             $("#winner-line").css("margin-top", "20px");
//             $("#winner-line").css("margin-left", "37vw");
//             $("#winner-line").css("width", "6px");
//             $("#winner-line").css("height", "67vw");
//             $("#winner-line").css("-webkit-transform", "skew(-45deg)");
//             $("#winner-line").fadeIn();
//             return
//         }


//         // if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X"
//         //     || board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X"
//         //     || board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X"
//         //     || board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X"
//         //     || board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X"
//         //     || board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X"
//         //     || board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X"
//         //     || board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
//         //     winner("X")
//         //     return
//         // }
//         let countSpaces = 0;
//         board.forEach(row => {
//             row.forEach(cell => {
//                 if (cell == "") {
//                     countSpaces++
//                 }
//             })
//         })
//         if (countSpaces == 0) {
//             winner("-")
//             hasWinner = "-"
//         }

//     }


//     function updateBoard() {
//         $("#cell00").text(board[0][0]);
//         $("#cell01").text(board[0][1]);
//         $("#cell02").text(board[0][2]);
//         $("#cell10").text(board[1][0]);
//         $("#cell11").text(board[1][1]);
//         $("#cell12").text(board[1][2]);
//         $("#cell20").text(board[2][0]);
//         $("#cell21").text(board[2][1]);
//         $("#cell22").text(board[2][2]);
//     }



//     // $("#hide-button").click(function(){
//     //     $("#test").hide();
//     // });

//     // $("#show-button").click(function(){
//     //     $("p").show();
//     // });

//     // $("#toggle-button").click(function(){
//     //     $("p").toggle();
//     // });

//     // $("p").click(function(){
//     //     $(this).hide();
//     // });

//     // $("p").hover(function(){
//     //     $(this).hide();
//     // }, function(){
//     //     $(this).show();
//     // });

//     // $("input").focus(function(){
//     //     $(this).css("background-color", "yellow")
//     // });

//     // $("input").blur(function(){
//     //     $(this).css("background-color", "green")
//     // });

//     // $("#move").click(function(){
//     //     $("#animated").animate({left:'250px'})
//     // });

//     // $("h1").hover(function(){
//     //     $("h1").hide("slow")
//     // });

//     // $("#show-text").click(function(){
//     //     $("#output").text("Text: " + $("#view").text())
//     // });

//     // $("#show-HTML").click(function(){
//     //     $("#output").html("<p>Plus1</p><p>Plus2</p>")
//     // });

