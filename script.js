let order = "ASC";

function clickPress(event) {
  if (event.keyCode == 13) {
    convertGrade();
  }
}

function clickPressTemp(event) {
  if (event.keyCode == 13) {
    convertTemperature();
  }
}

function convertGrade() {
  let inputValue = document.getElementById("mark-input-box");
  let message = document.getElementById("message");
  let letter = document.getElementById("letter");
  let text = "The grade " + inputValue.value + " corresponds to grade ";

  try {
    if (inputValue.value > 100) {
      letter.innerHTML = "";
      throw new Error(
        "The maximum grade is 100.\nPlease insert a value less or equal than 100."
      );
    }
    if (
      inputValue.value == null ||
      inputValue.value == "" ||
      inputValue.value == undefined
    ) {
      letter.innerHTML = "";
      throw new Error("Insert a value.");
    }
    if (inputValue.value < 0) {
      letter.innerHTML = "";
      throw new Error(
        "The grade cannot be negative.\nPlease insert a positive value."
      );
    }
    if (inputValue.value >= 90) {
      message.innerHTML = text;
      letter.innerHTML = "<b>A</b>";
    } else if (inputValue.value >= 80) {
      message.innerHTML = text;
      letter.innerHTML = "<b>B</b>";
    } else if (inputValue.value >= 70) {
      message.innerHTML = text;
      letter.innerHTML = "<b>C</b>";
    } else if (inputValue.value >= 50) {
      message.innerHTML = text;
      letter.innerHTML = "<b>D</b>";
    } else if (inputValue.value < 50) {
      message.innerHTML = text;
      letter.innerHTML = "<b>F</b>";
    }
  } catch (e) {
    message.innerHTML = e.message;
  }
}

function convertTemperature() {
  let inputValue = document.getElementById("mark-input-box");
  let message = document.getElementById("message");
  let letter = document.getElementById("letter");
  let text = "The grade " + inputValue.value + " corresponds to grade ";

  message.innerHTML = (((inputValue.value - 32) * 5) / 9).toFixed(2)+ "°C";
  letter.innerHTML = (((inputValue.value - 32) * 5) / 9 + 273.15).toFixed(2) + "K";
}

function see_details() {
  let cifra = "$1200000";
  console.log(parseFloat(cifra.replace("$", "")));
  document.getElementById("table_e").innerHTML =
    "<tr><th>#</th>" +
    '<th onclick="sortData(0)">Name</th>' +
    '<th onclick="sortData(1)">Position</th>' +
    '<th onclick="sortData(2)">City</th>' +
    '<th onclick="sortData(3)">ID</th>' +
    '<th onclick="sortData(4)">Admission</th>' +
    '<th onclick="sortData(5)">Salary</th></tr>';
  let index = 1;
  dataSet.forEach((element) => {
    let odd;
    if (index % 2) odd = "odd";
    else odd = "even";
    let row = document.createElement("tr");
    row.id = "table-content";
    let r = "<td class='" + odd + "'>" + index + "</td>";
    r += "<td class='" + odd + "'>" + element[0] + "</td>";
    r += "<td class='" + odd + "'>" + element[1] + "</td>";
    r += "<td class='" + odd + "'>" + element[2] + "</td>";
    r += "<td class='" + odd + "'>" + element[3] + "</td>";
    r += "<td class='" + odd + "'>" + element[4] + "</td>";
    r += "<td id='salary' class='" + odd + "'>" + element[5] + "</td>";
    row.innerHTML = r;
    document.getElementById("table_e").appendChild(row);
    index++;
  });
}

var dataSet = [
  [
    "Brielle Williamson",
    "Integration Specialist",
    "New York",
    "4804",
    "2012/12/02",
    "$372,000",
  ],
  [
    "Herrod Chandler",
    "Sales Assistant",
    "San Francisco",
    "9608",
    "2012/08/06",
    "$137,500",
  ],
  [
    "Rhona Davidson",
    "Integration Specialist",
    "Tokyo",
    "6200",
    "2010/10/14",
    "$327,900",
  ],
  [
    "Colleen Hurst",
    "Javascript Developer",
    "San Francisco",
    "2360",
    "2009/09/15",
    "$205,500",
  ],
  [
    "Sonya Frost",
    "Software Engineer",
    "Edinburgh",
    "1667",
    "2008/12/13",
    "$103,600",
  ],
  ["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
  [
    "Quinn Flynn",
    "Support Lead",
    "Edinburgh",
    "9497",
    "2013/03/03",
    "$342,000",
  ],
  [
    "Tiger Nixon",
    "System Architect",
    "Edinburgh",
    "5421",
    "2011/04/25",
    "$320,800",
  ],
  ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
  [
    "Ashton Cox",
    "Junior Technical Author",
    "San Francisco",
    "1562",
    "2009/01/12",
    "$86,000",
  ],
  [
    "Cedric Kelly",
    "Senior Javascript Developer",
    "Edinburgh",
    "6224",
    "2012/03/29",
    "$433,060",
  ],
  ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
  [
    "Charde Marshall",
    "Regional Director",
    "San Francisco",
    "6741",
    "2008/10/16",
    "$470,600",
  ],
  [
    "Haley Kennedy",
    "Senior Marketing Designer",
    "London",
    "3597",
    "2012/12/18",
    "$313,500",
  ],
  [
    "Tatyana Fitzpatrick",
    "Regional Director",
    "London",
    "1965",
    "2010/03/17",
    "$385,750",
  ],
  [
    "Michael Silva",
    "Marketing Designer",
    "London",
    "1581",
    "2012/11/27",
    "$198,500",
  ],
  [
    "Paul Byrd",
    "Chief Financial Officer (CFO)",
    "New York",
    "3059",
    "2010/06/09",
    "$725,000",
  ],
  [
    "Gloria Little",
    "Systems Administrator",
    "New York",
    "1721",
    "2009/04/10",
    "$237,500",
  ],
  [
    "Bradley Greer",
    "Software Engineer",
    "London",
    "2558",
    "2012/10/13",
    "$132,000",
  ],
  ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500"],
  [
    "Jenette Caldwell",
    "Development Lead",
    "New York",
    "1937",
    "2011/09/03",
    "$345,000",
  ],
  [
    "Yuri Berry",
    "Chief Marketing Officer (CMO)",
    "New York",
    "6154",
    "2009/06/25",
    "$675,000",
  ],
  [
    "Caesar Vance",
    "Pre-Sales Support",
    "New York",
    "8330",
    "2011/12/12",
    "$106,450",
  ],
  [
    "Doris Wilder",
    "Sales Assistant",
    "Sidney",
    "3023",
    "2010/09/20",
    "$85,600",
  ],
  [
    "Angelica Ramos",
    "Chief Executive Officer (CEO)",
    "London",
    "5797",
    "2009/10/09",
    "$1,200,000",
  ],
  ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
  [
    "Jennifer Chang",
    "Regional Director",
    "Singapore",
    "9239",
    "2010/11/14",
    "$357,650",
  ],
  [
    "Brenden Wagner",
    "Software Engineer",
    "San Francisco",
    "1314",
    "2011/06/07",
    "$206,850",
  ],
  [
    "Fiona Green",
    "Chief Operating Officer (COO)",
    "San Francisco",
    "2947",
    "2010/03/11",
    "$850,000",
  ],
  [
    "Shou Itou",
    "Regional Marketing",
    "Tokyo",
    "8899",
    "2011/08/14",
    "$163,000",
  ],
  [
    "Michelle House",
    "Integration Specialist",
    "Sidney",
    "2769",
    "2011/06/02",
    "$95,400",
  ],
  ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
  [
    "Prescott Bartlett",
    "Technical Author",
    "London",
    "3606",
    "2011/05/07",
    "$145,000",
  ],
  [
    "Gavin Cortez",
    "Team Leader",
    "San Francisco",
    "2860",
    "2008/10/26",
    "$235,500",
  ],
  [
    "Martena Mccray",
    "Post-Sales support",
    "Edinburgh",
    "8240",
    "2011/03/09",
    "$324,050",
  ],
  [
    "Unity Butler",
    "Marketing Designer",
    "San Francisco",
    "5384",
    "2009/12/09",
    "$85,675",
  ],
];

function sortData(n) {
  if (n != 5) {
    console.log("trying sort");
    console.log(order);

    dataSet.sort(sortFunction);

    function sortFunction(a, b) {
      if (a[n] === b[n]) {
        return 0;
      } else if (order == "ASC") {
        return a[n] < b[n] ? -1 : 1;
      } else {
        return a[n] < b[n] ? 1 : -1;
      }
    }
    console.log(dataSet[0][0]);
    const table = document.getElementById("table_e");
    table.innerHTML = "";
    see_details();
  } else {
    console.log("trying sort 5");
    dataSet.sort(sortFunction);

    function sortFunction(a, b) {
      let valueA = a[n];
      let valueB = b[n];
      valueA = parseFloat(
        valueA.replace("$", "").replace(",", "").replace(",", "")
      );
      valueB = parseFloat(
        valueB.replace("$", "").replace(",", "").replace(",", "")
      );
      if (valueA === valueB) {
        return 0;
      } else if (order == "ASC") {
        return valueA < valueB ? -1 : 1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    }
    console.log(dataSet[0][0]);
    const table = document.getElementById("table_e");
    table.innerHTML = "";
    see_details();
  }
  if (order == "ASC") {
    order = "DESC";
  } else {
    order = "ASC";
  }
}
