var myObj = "";


function loadjson() {    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var txt = "";
            var txts = "";
            var x
            var y
            var z
            for (x in myObj.tech) {
                txt = "<h3>" + x + "</h3>";
                for (y in myObj.tech[x].skills) {
                    txt += "<p>" + myObj.tech[x].skills[y] + "</p>";
                    //document.getElementById("demo").innerHTML = txt;
                }                
                document.getElementById("demo").innerHTML += "<div class='col-lg-3'>" + txt + "</div>";
            }
            /*for (y in myObj.tech) {
                txts += myObj.tech[y] + "<br>";
                document.getElementById("demo").innerHTML = txt + txts;
            }*/
            //document.getElementById("demo").innerHTML = myObj.skills.HTML5;
            //document.getElementById("demo").innerHTML = JSON.parse(this.responseText);
        }
    };
    xmlhttp.open("GET", "skills2.json", true);
    xmlhttp.send();
}
