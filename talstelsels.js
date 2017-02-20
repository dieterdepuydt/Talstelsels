var binairKeydown = function(e) {
    if (!(e.which == 49 || e.which == 48 || e.which == 96 || e.which == 97 || e.which == 8)) {
        e.preventDefault();
        return false;
    }
};

var octaalKeydown = function(e) {
    if (!((e.which >= 48 && e.which <= 55) || (e.which >= 96 && e.which <= 103) || e.which == 8)) {
        e.preventDefault();
        return false;
    }
};

var decimaalKeydown = function(e) {
    if (!((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105) || e.which == 8)) {
        e.preventDefault();
        return false;
    }
};

var hexadecimaalKeydown = function(e) {
    // console.log(e.which);

    if (!((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105) ||
        (e.which >= 65 && e.which <= 70) || e.which == 8)) {
        e.preventDefault();
        return false;
    }
};

var binairKeyUp = function() {
    var helper = toDecimal($('#binair').val(), 2);
    $('#decimaal').val(helper);
    $('#octaal').val(fromDecimal(helper, 8));
    $('#hexadecimaal').val(fromDecimal(helper, 16));
};

var octaalKeyUp = function() {
    var helper = toDecimal($('#octaal').val(), 8);
    $('#binair').val(fromDecimal(helper, 2));
    $('#decimaal').val(helper);
    $('#hexadecimaal').val(fromDecimal(helper, 16));
};

var decimaalKeyUp = function() {
    var decimaal = $('#decimaal');

    $('#binair').val(fromDecimal(decimaal.val(), 2));
    $('#octaal').val(fromDecimal(decimaal.val(), 8));
    $('#hexadecimaal').val(fromDecimal(decimaal.val(), 16));
};

var hexadecimaalKeyUp = function() {
    var helper = toDecimal($('#hexadecimaal').val(), 16);
    $('#binair').val(fromDecimal(helper, 2));
    $('#decimaal').val(helper);
    $('#octaal').val(fromDecimal(helper, 8));
};

var fromDecimal = function (input, base) {
    input = input.toString().replace(/ /g, '');
    output = "";
    if (input.length > 0) {
        while (input > 0) {
            rest = input % base;
            switch (rest) {
                case 10:
                    rest = "A";
                    break;
                case 11:
                    rest = "B";
                    break;
                case 12:
                    rest = "C";
                    break;
                case 13:
                    rest = "D";
                    break;
                case 14:
                    rest = "E";
                    break;
                case 15:
                    rest = "F";
                    break;
                default:
                    break;
            }
            if (output.replace(/ /g, '').length % 4 == 0 && output.length > 0) {
                output = " " + output;
            }

            output = rest.toString() + output.toString();
            input = Math.floor(input / base)
        }
    }
    return output;
};

var toDecimal = function(input, base) {
    input = input.toString().replace(/ /g, '');
    output = "";
    if (input.length > 0) {
        var helper = 1;
        var output = 0;
        for (var i = input.length - 1; i >= 0; i--) {
            var karakter = input.charAt(i);
            switch (karakter.toUpperCase()) {
                case 'A':
                    karakter = 10;
                    break;
                case 'B':
                    karakter = 11;
                    break;
                case 'C':
                    karakter = 12;
                    break;
                case 'D':
                    karakter = 13;
                    break;
                case 'E':
                    karakter = 14;
                    break;
                case 'F':
                    karakter = 15;
                    break;
            }
            output += karakter * helper;
            helper *= base;
        }
    }
    var stringoutput = "";
    for (var i = output.toString().length - 1; i >= 0; i--) {
        if (stringoutput.replace(/ /g, '').length % 4 == 0 && stringoutput.length > 0)
            stringoutput = " " + stringoutput;
        stringoutput = output.toString().charAt(i) + stringoutput;
    }
    return stringoutput;
};

$(document).ready(function () {
    var binair = $('#binair');
    var octaal = $('#octaal');
    var decimaal = $('#decimaal');
    var hexadecimaal = $('#hexadecimaal');

    binair.on("keydown", binairKeydown);
    octaal.on("keydown", octaalKeydown);
    decimaal.on("keydown", decimaalKeydown);
    hexadecimaal.on("keydown", hexadecimaalKeydown);

    binair.on("keyup", binairKeyUp);
    octaal.on("keyup", octaalKeyUp);
    decimaal.on("keyup", decimaalKeyUp);
    hexadecimaal.on("keyup", hexadecimaalKeyUp);
});