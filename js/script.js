
function checkValueRed(){
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    get_hex_col(red, green, blue);
    if(red > 255){
        document.getElementById("red").value = 255;
    }else if(red < 0){
        document.getElementById("red").value = 0;
    }
    document.getElementById("rgb").innerHTML = "rgb("+red+", "+green+", "+blue+")";
    document.getElementById("col").style.background = "rgb("+red+", "+green+", "+blue+")";
}

function checkValueGreen(){
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    get_hex_col(red, green, blue);
    if(green > 255){
        document.getElementById("green").value = 255;
    }else if(green < 0){
        document.getElementById("green").value = 0;
    }
    document.getElementById("rgb").innerHTML = "rgb("+red+", "+green+", "+blue+")";
    document.getElementById("col").style.background = "rgb("+red+", "+green+", "+blue+")";
}

function checkValueBlue(){
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    get_hex_col(red, green, blue);
    if(blue > 255){
        document.getElementById("blue").value = 255;
    }else if(blue < 0){
        document.getElementById("blue").value = 0;
    }
    document.getElementById("rgb").innerText = "rgb("+red+", "+green+", "+blue+")";
    document.getElementById("col").style.background = "rgb("+red+", "+green+", "+blue+")";
}

function get_hex_col(red, green, blue){
    var first = red % 16;
    var firstchar = (red - first)/16;
    var first_hex = get_code(first);
    var firstcharac = get_code(firstchar);

    var second = green % 16;
    var secondchar = (green - second)/16;
    var second_hex = get_code(second);
    var secondcharac = get_code(secondchar);
    
    var third = blue % 16;
    var thirdchar = (blue - third)/16;
    var third_hex = get_code(third);
    var thirdcharac = get_code(thirdchar);

    document.getElementById("colhex").style.background = "#"+firstcharac+first_hex+secondcharac+second_hex+thirdcharac+third_hex;
    document.getElementById("hex").innerText = "#"+firstcharac+first_hex+secondcharac+second_hex+thirdcharac+third_hex;
}

function get_code(value){
    if(value == 10){
        return "A";
    }else if(value == 11){
        return "B";
    }else if(value == 12){
        return "C";
    }else if(value == 13){
        return "D";
    }else if(value == 14){
        return "E";
    }else if(value == 15){
        return "F";
    }else{
        return value;
    }
}