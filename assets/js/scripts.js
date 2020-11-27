let darkTheme
let availibility = true
var rotation = 0
var currSign = 0
var themeStr = 'blue.svg'
var date = new Date()
var dateStr = date.toLocaleString('en-us', { month: 'long' }) + ' ' + date.getDay() +'. '
var signArray = [
	["aries_","Aries", "Aries. At but the more you start a good time to be so long and everything you do not allow them out. the only danger is that you have been trying to yourself to yourself. you will be expected to be and stick to it and get to your reputation. the planets warn if you feel wish they may not be at the first worry you can have to be good behind when you make but it will be a bit a bit any good ideas of a work of the situation and see your situation it will be what you get to yourself. a sensitive area of your chart this weekend you are not being too much about a big."],
	["taurus_","Taurus", "Taurus. At but the more you start a good time to be so long and everything you do not allow them out. the only danger is that you have been trying to yourself to yourself. you will be expected to be and stick to it and get to your reputation. the planets warn if you feel wish they may not be at the first worry you can have to be good behind when you make but it will be a bit a bit any good ideas of a work of the situation and see your situation it will be what you get to yourself. a sensitive area of your chart this weekend you are not being too much about a big."],
	["gemini_","Gemini", "Gemini. At but the more you start a good time to be so long and everything you do not allow them out. the only danger is that you have been trying to yourself to yourself. you will be expected to be and stick to it and get to your reputation. the planets warn if you feel wish they may not be at the first worry you can have to be good behind when you make but it will be a bit a bit any good ideas of a work of the situation and see your situation it will be what you get to yourself. a sensitive area of your chart this weekend you are not being too much about a big."],
	["cancer_","Cancer", "Cancer. At but the more you start a good time to be so long and everything you do not allow them out. the only danger is that you have been trying to yourself to yourself. you will be expected to be and stick to it and get to your reputation. the planets warn if you feel wish they may not be at the first worry you can have to be good behind when you make but it will be a bit a bit any good ideas of a work of the situation and see your situation it will be what you get to yourself. a sensitive area of your chart this weekend you are not being too much about a big."],
	["leo_","Leo", "Leo. At but the more you start a good time to be so long and everything you do not allow them out. the only danger is that you have been trying to yourself to yourself. you will be expected to be and stick to it and get to your reputation. the planets warn if you feel wish they may not be at the first worry you can have to be good behind when you make but it will be a bit a bit any good ideas of a work of the situation and see your situation it will be what you get to yourself. a sensitive area of your chart this weekend you are not being too much about a big."],
	["virgo_","Virgo", "Virgo. At but the more you start a good time to be so long and everything you do not allow them out. the only danger is that you have been trying to yourself to yourself. you will be expected to be and stick to it and get to your reputation. the planets warn if you feel wish they may not be at the first worry you can have to be good behind when you make but it will be a bit a bit any good ideas of a work of the situation and see your situation it will be what you get to yourself. a sensitive area of your chart this weekend you are not being too much about a big."],
	["libra_","Libra", "Libra. At but the more you start a good time to be so long and everything you do not allow them out. the only danger is that you have been trying to yourself to yourself. you will be expected to be and stick to it and get to your reputation. the planets warn if you feel wish they may not be at the first worry you can have to be good behind when you make but it will be a bit a bit any good ideas of a work of the situation and see your situation it will be what you get to yourself. a sensitive area of your chart this weekend you are not being too much about a big."],
	["scorpio_","Scorpio", "Scorpio. At but the more you start a good time to be so long and everything you do not allow them out. the only danger is that you have been trying to yourself to yourself. you will be expected to be and stick to it and get to your reputation. the planets warn if you feel wish they may not be at the first worry you can have to be good behind when you make but it will be a bit a bit any good ideas of a work of the situation and see your situation it will be what you get to yourself. a sensitive area of your chart this weekend you are not being too much about a big."],
	["saggitarius_","Saggitarius", "Saggitarius. At but the more you start a good time to be so long and everything you do not allow them out. the only danger is that you have been trying to yourself to yourself. you will be expected to be and stick to it and get to your reputation. the planets warn if you feel wish they may not be at the first worry you can have to be good behind when you make but it will be a bit a bit any good ideas of a work of the situation and see your situation it will be what you get to yourself. a sensitive area of your chart this weekend you are not being too much about a big."],
	["capricorn_","Capricorn", "Capricorn. At but the more you start a good time to be so long and everything you do not allow them out. the only danger is that you have been trying to yourself to yourself. you will be expected to be and stick to it and get to your reputation. the planets warn if you feel wish they may not be at the first worry you can have to be good behind when you make but it will be a bit a bit any good ideas of a work of the situation and see your situation it will be what you get to yourself. a sensitive area of your chart this weekend you are not being too much about a big."],
	["aquarius_","Aquarius", "Aquarius. At but the more you start a good time to be so long and everything you do not allow them out. the only danger is that you have been trying to yourself to yourself. you will be expected to be and stick to it and get to your reputation. the planets warn if you feel wish they may not be at the first worry you can have to be good behind when you make but it will be a bit a bit any good ideas of a work of the situation and see your situation it will be what you get to yourself. a sensitive area of your chart this weekend you are not being too much about a big."],
	["pisces_","Pisces", "Pisces. At but the more you start a good time to be so long and everything you do not allow them out. the only danger is that you have been trying to yourself to yourself. you will be expected to be and stick to it and get to your reputation. the planets warn if you feel wish they may not be at the first worry you can have to be good behind when you make but it will be a bit a bit any good ideas of a work of the situation and see your situation it will be what you get to yourself. a sensitive area of your chart this weekend you are not being too much about a big."]
]

// ratate function
jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform':'rotate('+ degrees +'deg)',
                 '-moz-transform':'rotate('+ degrees +'deg)',
                 '-ms-transform':'rotate('+ degrees +'deg)',
                 'transform':'rotate('+ degrees +'deg)',
                 'transition':'all 1.5s'})
    return $(this)
}

// load info 
function loadInfo(){
	$('.wheel__sign img').attr('src','assets\\img\\' + signArray[currSign][0] + themeStr)
	$('.wheel__title').text(signArray[currSign][1])
	$('.column__text').text(dateStr + ' ' + signArray[currSign][2])
}

//update info
function updateInfo(){
	$('.wheel__sign img').fadeOut(1000)
	$('.wheel__title').fadeOut(1000)
	$('.column__text').fadeOut(1000)
	setTimeout(function(){
		$('.wheel__sign img').attr('src','assets\\img\\' + signArray[currSign][0] + themeStr)
		$('.wheel__title').text(signArray[currSign][1])
		$('.column__text').text(dateStr + ' ' + signArray[currSign][2])
	}, 1000)
	setTimeout(function(){
		$('.wheel__sign img').fadeIn(500)
		$('.wheel__title').fadeIn(500)
		$('.column__text').fadeIn(500)
	}, 1500)
}

// rotate left
function rotateLeft(){
	rotation += 30
	currSign--
	if(currSign < 0) currSign = 11
	$('.rotate-element').rotate(rotation)
	updateInfo()
}

// rotate right
function rotateRight(){
	rotation -= 30
	currSign++
	if(currSign > 11) currSign = 0
	$('.rotate-element').rotate(rotation)
	updateInfo()
}

function availibilityChanger(duration){
	availibility = false
	setTimeout(function(){
		availibility = true
	}, duration)
}

// arrow click handler
$('.rotate-element_left').click(function(){
	if (availibility) {
		availibilityChanger(2000)
		rotateLeft()
	}
})
$('.rotate-element_right').click(function(){
	if (availibility) {
		availibilityChanger(2000)
		rotateRight()
	}
})

// keydown handler
$(document).keydown(function(event) {
	if (availibility){
		availibilityChanger(2000)
		var key = event.keyCode
		if (key == '37') rotateLeft()
		else if (key == '39') rotateRight()
	} 
}) 

// light theme by default
$(window).on('load', function () {
	$('.page_dark-theme').hide()
	$('body').css({'background':'#B2A796', 'color':'#2f343e'})
	darkTheme = false
	loadInfo()
})

// theme change
$(".theme-button, .item__theme-button").click(function () {
	if(availibility){
		availibilityChanger(500)
		if(!darkTheme){
			themeStr = 'beige.svg'
			$('.page_light-theme').fadeOut(250)
			$('body').css({'background':'#2f343e','transition':'all 0.25s'})
			setTimeout(function(){
				$('body').css({'color':'#B2A796','transition':'all 0.25s'})
				$('.page_dark-theme').fadeIn(250)
				$('.wheel__sign img').attr('src','assets\\img\\' + signArray[currSign][0] + themeStr)
			}, 250)
			darkTheme = true
		}
		else {
			themeStr = 'blue.svg'
			$('.page_dark-theme').fadeOut(250)
			$('body').css({'background':'#B2A796','transition':'all 0.25s'})
			setTimeout(function(){
				$('body').css({'color':'#2f343e','transition':'all 0.25s'})
				$('.page_light-theme').fadeIn(250)
				$('.wheel__sign img').attr('src','assets\\img\\' + signArray[currSign][0] + themeStr)
			}, 250)
			darkTheme = false
		}
	}
})