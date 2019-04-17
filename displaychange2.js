var myObj = "";
var txt = "";
var txts = "";
var x = 0;
var y = 0;
var z = 0;
var cnt = 0;
var cnts = 0;

function loadjson() {    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            if (cnt >= 1) {
                document.getElementById("tech").innerHTML = "";
                cnt = 0;
            } else if (cnt == 0) {
                for (x in myObj.tech) {
                    txt = "<div class='card text-white bg-dark mb-3 equalHeight'><div class='card-body'><h4 class='card-title'>" + x + "</h4>";
                    for (y in myObj.tech[x].skills) {
                        txt += "<p class='card-text'>" + myObj.tech[x].skills[y] + "</p>";
                    }                
                    document.getElementById("tech").innerHTML += "<div class='col-sm-4'>" + txt + "</div></div></div>";
                }
                cnt = 1;
            }
        }
    };
    xmlhttp.open("GET", "skills3.json", true);
    xmlhttp.send();
}

function workjson() {    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);            
            if (cnts >= 1) {
                document.getElementById("work").innerHTML = "";
                cnts = 0;
            } else if (cnts == 0) {
                for (x in myObj.employer) {
                    txt = "<div class='card text-white bg-dark mb-3 equalHeight'><div class='card-body'><h4 class='card-title'>" + x + "</h4>";
                    for (y in myObj.employer[x].duties) {
                        txt += "<p class='card-text'>" + myObj.employer[x].duties[y] + "</p>";
                        //document.getElementById("demo").innerHTML = txt;
                    }                
                    document.getElementById("work").innerHTML += "<div class='col-sm-6'>" + txt + "</div></div></div>";
                }
                cnts = 1;
            }
        }
    };
    xmlhttp.open("GET", "work.json", true);
    xmlhttp.send();
}
