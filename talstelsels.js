$(document).ready(function() {
	$('#binair').keydown(function(e) {
		if (!((e.which < 40) || ( e.which >= 96 && e.which <= 97)))
		{
			e.preventDefault();
			return false;
		}
	});
	
	$('#octaal').keydown(function(e) {
		if (!((e.which < 40) || ( e.which >= 96 && e.which <= 104)))
		{
			e.preventDefault();
			return false;
		}
	});

	$('#decimaal').keydown(function(e) {
		if (!((e.which < 40) || ( e.which >= 96 && e.which <= 105)))
		{
			e.preventDefault();
			return false;
		}
	});

	$('#hexadecimaal').keydown(function(e) {
		if (!((e.which < 40) || (e.which >= 65 && e.which <= 70) || ( e.which >= 96 && e.which <= 105)))
		{
			e.preventDefault();
			return false;
		}
	});

	$('#binair').keyup(function(){
		var helper = toDecimal($('#binair').val(),2);
		$('#decimaal').val(helper);
		$('#octaal').val(fromDecimal(helper,8));
		$('#hexadecimaal').val(fromDecimal(helper,16));
	});
	
	$('#octaal').keyup(function() {
		var helper = toDecimal($('#octaal').val(),8);
		$('#binair').val(fromDecimal(helper,2));
		$('#decimaal').val(helper);
		$('#hexadecimaal').val(fromDecimal(helper,16));
	});
	
	$('#decimaal').keyup(function() {
		$('#binair').val(fromDecimal($('#decimaal').val(),2));
		$('#octaal').val(fromDecimal($('#decimaal').val(),8));
		$('#hexadecimaal').val(fromDecimal($('#decimaal').val(),16));
	});
	
	$('#hexadecimaal').keyup(function (){
		var helper = toDecimal($('#hexadecimaal').val(),16);
		$('#binair').val(fromDecimal(helper,2));
		$('#decimaal').val(helper);
		$('#octaal').val(fromDecimal(helper,8));
	
	});
	
	function toDecimal(input, base)
	{
		input = input.toString().replace(/ /g,'');
		output = "";
		if (input.length > 0)
		{
			var helper = 1;
			var output = 0;
			for (var i = input.length - 1 ; i >= 0 ; i--)
			{
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
		for (var i = output.toString().length - 1; i >= 0 ; i--)
		{
			if (stringoutput.replace(/ /g,'').length % 4 == 0 && stringoutput.length > 0)
				  stringoutput = " " + stringoutput;
			stringoutput = output.toString().charAt(i) + stringoutput;
		}
		return stringoutput;
	}
	
	function fromDecimal(input, base)
	{
		input = input.toString().replace(/ /g,'');
		output = "";
		if (input.length > 0)
		{
			while (input > 0)
			{
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
				if (output.replace(/ /g,'').length % 4 == 0 && output.length > 0)
				  output = " " + output;
				output = rest.toString() + output.toString();
				input = Math.floor(input / base)
			}
		}
		return output;
	}
});



