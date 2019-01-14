var eng = ' 1234567890-=!@#$%^&*()_+|qwertyuiop[]asdfghjkl;\'zxcvbnm,./QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>?"';
var ukr = ' 1234567890-=!"№;%:?*()_+/йцукенгшщзхїфівапролджєячсмитьбю.ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ,';
var test_message = '';
var result = '';
var local = document.getElementById('first')
var local2 = document.getElementById('second')
function fromEngToUkr() {
	test_message = local.value
	for(var i = 0; i < test_message.length; i++) {
		for(var l = 0; l < eng.length; l++) {
			if(test_message.charAt(i) === eng.charAt(l)) {
				result += ukr.charAt(l);
			}
			else {

			}
		}
	}
}

function fromUkrToEng() {
	test_message = local.value
	for(var i = 0; i < test_message.length; i++) {
		for(var l = 0; l < ukr.length; l++) {
			if(test_message.charAt(i) === ukr.charAt(l)) {
				result += eng.charAt(l);
			}
			else {

			}
		}
	}

}

document.getElementById('decode').addEventListener('click', function() {
	fromUkrToEng();
	local2.value = result;
	test_message = ''
	result = ''
});

document.getElementById('code').addEventListener('click', function() {
	fromEngToUkr();
	local2.value = result;
	test_message = ''
	result = ''
});