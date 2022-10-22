const myTimeout2 = setTimeout(myGreeting2, 1000);
$('.wrap').hide(0);

function myGreeting2() {

$('.todo__loading').hide(0);
 $('.wrap').show(0);

}


var objToday = new Date(),
	weekday = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

console.log(objToday);

day.innerText = dayOfWeek;
day__number.innerText = dayOfMonth;
month.innerText = curMonth;

function bgShow(){
	$('.main__content').removeClass('main__content__bg');
	$('.main__content').removeClass('bg__box2__hover');
	$('.main__content').removeClass('bg__box3__hover');
	$('.main__content').removeClass('bg__box4__hover');
	$('.main__content').removeClass('bg__box5__hover');
	$('.main__content').removeClass('bg__box6__hover');
	$('.main__content').removeClass('bg__box7__hover');
	$('.bg__box1').removeClass('bg__box__outline');
	$('.bg__box2').removeClass('bg__box__outline');
	$('.bg__box3').removeClass('bg__box__outline');
	$('.bg__box4').removeClass('bg__box__outline');
	$('.bg__box5').removeClass('bg__box__outline');
	$('.bg__box6').removeClass('bg__box__outline');
	$('.bg__box7').removeClass('bg__box__outline');

}


 $('.bg__box2').click(function () {
	bgShow();
	$('.bg__box2').addClass('bg__box__outline');
	$('.main__content').addClass('bg__box2__hover');

 });

 $('.bg__box3').click(function () {
	bgShow();
	$('.bg__box3').addClass('bg__box__outline');
	$('.main__content').addClass('bg__box3__hover');

 });

 $('.bg__box4').click(function () {
	bgShow();
	$('.bg__box4').addClass('bg__box__outline');
	$('.main__content').addClass('bg__box4__hover');

 });

 $('.bg__box5').click(function () {
	bgShow();
	$('.bg__box5').addClass('bg__box__outline');
	$('.main__content').addClass('bg__box5__hover');

 });

 $('.bg__box6').click(function () {
	bgShow();
	$('.bg__box6').addClass('bg__box__outline');
	$('.main__content').addClass('bg__box6__hover');

 });

 $('.bg__box7').click(function () {
	bgShow();
	$('.bg__box7').addClass('bg__box__outline');
	$('.main__content').addClass('bg__box7__hover');

 });

 $('.bg__box1').click(function () {
	bgShow();
	$('.bg__box1').addClass('bg__box__outline');
	$('.main__content').addClass('main__content__bg');


 });






$('.important__box-main').hide();


$('.task__right').click(function () {
	$('.important__box-main').show();
	$('.important__box-main').addClass('important__box-main__hover');
});
$('.main__task-contant').click(function () {
	$('.important__box-main').hide();
	$('.walpeper__open').hide();

});
$('.main__navbar').click(function () {
	$('.important__box-main').hide();
	$('.walpeper__open').hide();

});

$('.main__top').click(function () {
	$('.walpeper__open').hide();

});


 $('.navbar__box').mouseenter(function () {
	$(this).addClass('navbar__box__hover');

});

$('.navbar__box').mouseleave(function () {
	$(this).removeClass('navbar__box__hover');

});


function navbar__hide(){
	$('.hover__left3').removeClass('hover__left3__color');
	$('.hover__left2').removeClass('hover__left2__color');
	$('.hover__left').removeClass('hover__left__color');
	$('.hover__left4').removeClass('hover__left4__color');
}

function navbarBox__hide(){
	$('.navbar__box1').removeClass('navbar__box1__color');
	$('.navbar__box2').removeClass('navbar__box2__color');
	$('.navbar__box3').removeClass('navbar__box3__color');
	$('.navbar__box4').removeClass('navbar__box4__color');
}


$('.navbar__box1').click(function () {
	navbar__hide();
	navbarBox__hide();
	$('.navbar__box1').addClass('navbar__box1__color');
	$('.hover__left').addClass('hover__left__color');
	$('.main__wall-main').show();
	$('.h3__main').show();
	bgShow();
	$('.bg__box1').addClass('bg__box__outline');
	$('.main__content').addClass('main__content__bg');
	$('.h1__main').text('My day');
	$('.main__top').show();
	$('.main__task__contant__important').show();
	$('.main__task__contant__middle').show();
	$('.main__task__contant__common').show();
});


$('.navbar__box2').click(function () {
	navbar__hide();
	navbarBox__hide();
	$('.hover__left2').addClass('hover__left2__color');
	$('.navbar__box2').addClass('navbar__box2__color');
	$('.main__wall-main').hide();
	$('.h3__main').hide();
	bgShow();
	$('.bg__box7').addClass('bg__box__outline');
	$('.main__content').addClass('bg__box7__hover');
	$('.h1__main').text('Important');
	$('.main__top').hide();
	$('.main__task__contant__middle').hide();
	$('.main__task__contant__common').hide();
	$('.main__task__contant__important').show();


});


$('.navbar__box3').click(function () {
	navbar__hide();
	navbarBox__hide();
	$('.hover__left3').addClass('hover__left3__color');
	$('.navbar__box3').addClass('navbar__box3__color');
	bgShow();
	$('.bg__box3').addClass('bg__box__outline');
	$('.main__content').addClass('bg__box3__hover');
	$('.h1__main').text('Middle');
	$('.main__top').hide();
	$('.main__task__contant__middle').show();
	$('.main__task__contant__important').hide();
	$('.main__task__contant__common').hide();
});


$('.navbar__box4').click(function () {
	navbar__hide();
	navbarBox__hide();
	$('.hover__left4').addClass('hover__left4__color');
	$('.navbar__box4').addClass('navbar__box4__color');
	bgShow();
	$('.bg__box4').addClass('bg__box__outline');
	$('.main__content').addClass('bg__box4__hover');
	$('.h1__main').text('Common');
	$('.main__top').hide();
	$('.main__task__contant__middle').hide();
	$('.main__task__contant__important').hide();
	$('.main__task__contant__common').show();

});


$('.task__right').hide();
$('.main__task__contant').hide();


let input__task = document.querySelectorAll('.input__task');


	$('.input__task').click(function () {
		
		const myshow2 = setTimeout(showtaskBar, 600);
		function showtaskBar() {
		$('.task__right').show(200);
		}

	});


let open = true;

$('.important__chosee1').click(function () {
 $('.important__box-main').hide();
	open = false;
	$('.input__task').removeClass('input__task-green');
	$('.input__task').removeClass('input__task-white');
	$('.input__task').addClass('input__task-red');

  
});

$('.important__chosee3').click(function () {
	$('.important__box-main').hide();
	 open = true;
	 $('.input__task').removeClass('input__task-red');
	 $('.input__task').removeClass('input__task-green');


 });

 $('.important__chosee2').click(function () {
	$('.important__box-main').hide();
	 open = 'tru';
	$('.input__task').removeClass('input__task-white');
	$('.input__task').removeClass('input__task-red');
	$('.input__task').addClass('input__task-green');
 });



$('.tisk-ok').click(function () {
	if($('.input__task').val() && open == true) {

		$('.main__img-img').hide();
		$('.main__task__contant').show();
		$('.main__task__contant__common').prepend(`<div class='task__user'>
		<div class="task__left-box">
		<div class="task__tisk-user"></div>
		<div class='task__list-user'>${$('.input__task').val()}</div>
		</div>
		<div class="task_right-box">
			<img class="star__white" src="./img/bold__star-white.png" alt="img">
		</div>
		</div>`);
		
$('.input__task').val('');
open = true;

$('.task__user').on('click', function() {
	$(this).hide(); 

}); 
	}


	if($('.input__task').val() && open == 'tru') {

		$('.main__img-img').hide();
		$('.main__task__contant').show();
		$('.main__task__contant__middle').prepend(`<div class='task__user'>
		<div class="task__left-box">
		<div class="task__tisk-user"></div>
		<div class='task__list-user'>${$('.input__task').val()}</div>
		</div>
		<div class="task_right-box">
			<img class="star__white" src="./img/bold__star-green.png" alt="img">
		</div>
		</div>`);
		
$('.input__task').val('');
open = 'tru';

$('.task__user').on('click', function() {
	$(this).hide(); 
	

}); 
	}


	if($('.input__task').val() && open == false) {

		$('.main__img-img').hide();
		$('.main__task__contant').show();
		$('.main__task__contant__important').prepend(`<div class='task__user'>
		<div class="task__left-box">
		<div class="task__tisk-user"></div>
		<div class='task__list-user'>${$('.input__task').val()}</div>
		</div>
		<div class="task_right-box">
			<img class="star__white" src="./img/bold__star-red.png" alt="img">
		</div>
		</div>`);
		
$('.input__task').val('');
open = false;

$('.task__user').on('dblclick', function() {
	$(this).hide(); 

}); 



	}


});

$('body').keydown(function (e){
	if(e.keyCode == 13){
		

		if($('.input__task').val() && open == true) {

			$('.main__img-img').hide();
			$('.main__task__contant').show();
			$('.main__task__contant__common').prepend(`<div class='task__user'>
			<div class="task__left-box">
			<div class="task__tisk-user"></div>
			<div class='task__list-user'>${$('.input__task').val()}</div>
			</div>
			<div class="task_right-box">
				<img class="star__white" src="./img/bold__star-white.png" alt="img">
			</div>
			</div>`);
			
	$('.input__task').val('');
	open = true;
	
	$('.task__user').on('click', function() {
		$(this).hide(); 
	
	}); 
		}
	
	
		if($('.input__task').val() && open == 'tru') {
	
			$('.main__img-img').hide();
			$('.main__task__contant').show();
			$('.main__task__contant__middle').prepend(`<div class='task__user'>
			<div class="task__left-box">
			<div class="task__tisk-user"></div>
			<div class='task__list-user'>${$('.input__task').val()}</div>
			</div>
			<div class="task_right-box">
				<img class="star__white" src="./img/bold__star-green.png" alt="img">
			</div>
			</div>`);
			
	$('.input__task').val('');
	open = 'tru';
	
	$('.task__user').on('click', function() {
		$(this).hide(); 
	
	}); 
		}
	
	
		if($('.input__task').val() && open == false) {
	
			$('.main__img-img').hide();
			$('.main__task__contant').show();
			$('.main__task__contant__important').prepend(`<div class='task__user'>
			<div class="task__left-box">
			<div class="task__tisk-user"></div>
			<div class='task__list-user'>${$('.input__task').val()}</div>
			</div>
			<div class="task_right-box">
				<img class="star__white" src="./img/bold__star-red.png" alt="img">
			</div>
			</div>`);
			
	$('.input__task').val('');
	open = false;
	
	$('.task__user').on('dblclick', function() {
		$(this).hide(); 
	
	}); 
	

		}
	
	}
	
});
	

$('.walpeper__open').hide(); 

$('.wallpeper__techka__hover').click(function () {
	$('.walpeper__open').addClass('walpeper__open__hover');

	$('.walpeper__open').show();




 });


