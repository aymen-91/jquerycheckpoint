function BOLD() {
    $(paragraphe).css("fontWeight", "bold")

    /*var paragraphe = document.querySelector("#test");
paragraphe.style.fontWeight ="bold"*/
}
function ITALIC() {
    $(paragraphe).css("fontStyle", "italic")
    /*var paragraphe = document.querySelector("#test");
    paragraphe.style.fontStyle ="italic"*/
}
function UNDELINE() {
    $(paragraphe).css("textDecoration", "underline")
    /*
    var paragraphe = document.querySelector("#test");
    paragraphe.style.textDecoration ="underline"
    */
}

function font() {
 
  
    if ($('#fon').val() == "monospace") {
        $('#paragraphe').css("font-family", "monospace");


    }


  else if ($('#fon').val() == "sans-serif") {


        $('#paragraphe').css("font-family", "sans-serif");

    }

}

function fontsize() {
    
    if ($('#fon-size').val() == "30") {
        $('#paragraphe').css("fontSize", "30px");


    }


  else if ($('#fon-size').val() == "40") {


        $('#paragraphe').css("fontSize", "40px");

    }
    /*

    var paragraphe = document.querySelector("#test");
    var fs = document.querySelector("#fon-size");
    console.log(fs)
    if (fs.options[fs.selectedIndex].value == "1")
        paragraphe.style.fontSize = "30px"
    else {
        if (fs.options[fs.selectedIndex].value == "2")
            paragraphe.style.fontSize = "20px"
    }
*/
}  