let darkTheme
let availibility = true
var rotation = 0
var currSign = 0
var themeStr = 'blue.svg'
var signArray = [
	["aries_","Aries"],
	["taurus_","Taurus"],
	["gemini_","Gemini"],
	["cancer_","Cancer"],
	["leo_","Leo"],
	["virgo_","Virgo"],
	["libra_","Libra"],
	["scorpio_","Scorpio"],
	["saggitarius_","Saggitarius"],
	["capricorn_","Capricorn"],
	["aquarius_","Aquarius"],
	["pisces_","Pisces"]
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
	$('.column__text:nth-child('+ (currSign + 1) +')').fadeIn()
}

//update info
function updateInfo(){
	$('.wheel__sign img').fadeOut(1000)
	$('.wheel__title').fadeOut(1000)
	$('.column__text').fadeOut(1000)
	setTimeout(function(){
		$('.wheel__sign img').attr('src','assets\\img\\' + signArray[currSign][0] + themeStr)
		$('.wheel__title').text(signArray[currSign][1])
	}, 1000)
	setTimeout(function(){
		$('.wheel__sign img').fadeIn(500)
		$('.wheel__title').fadeIn(500)
		$('.column__text:nth-child('+ (currSign + 1) +')').fadeIn(500)
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