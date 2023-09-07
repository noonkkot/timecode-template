$(document).ready(function(){

	// 실제 스크립트 코드를 입력할 공간입니다.
	// 변수에다 시간 데이터 저장
	let timer = setInterval(function(){
		let now = new Date();
		let hr = now.getHours();
		let min = now.getMinutes();
		let sec = now.getSeconds();

		// 시간이 한 자리 숫자일 때 앞에 0 붙이기
		if(hr>=10) {
			hNum = hr;
		} else {
			hNum = "0"+hr;
		}
		if(min>=10) {
			mNum = min;
		} else {
			mNum = "0"+min;
		}
		if(sec>=10) {
			sNum = sec;
		} else {
			sNum = "0"+sec;
		}
		// p 태그 안에 시간 출력
		$('p span').eq(0).text(hNum);
		$('p span').eq(1).text(mNum);
		$('p span').eq(2).text(sNum);
	},
	1000)

	let now = new Date();
	let hr = now.getHours();

	// 시간에 따라 화면 테마 변경
	if(hr>=5 && hr<11){ // morning : 현재시간이 5시보다 크거나 같고, 11시보다 작을 때
		$("#wrap").removeClass();
		$("#wrap").addClass("morning");
		$("nav li").removeClass();
		$("nav li").eq(0).addClass("on");
	} else if(hr>=11 && hr<16){ // afternoon : 현재시간이 11시보다 크거나 같고, 16시보다 작을 때
		$("#wrap").removeClass();
		$("#wrap").addClass("afternoon");
		$("nav li").removeClass();
		$("nav li").eq(1).addClass("on");
	} else if(hr>=16 && hr<20){ // evening : 현재시간이 16시보다 크거나 같고, 20시보다 작을 때
		$("#wrap").removeClass();
		$("#wrap").addClass("evening");
		$("nav li").removeClass();
		$("nav li").eq(2).addClass("on");
	} else if(hr>=20 || hr<5){ // night : 현재시간이 20시보다 크거나 같고, 또는 5시보다 작을 때
		$("#wrap").removeClass();
		$("#wrap").addClass("night");
		$("nav li").removeClass();
		$("nav li").eq(3).addClass("on");
	};

	// nav 버튼 클릭시 화면 테마 변경
	$("nav li").click(function(){
		let className = $(this).children("a").text();
		$("nav li").removeClass();
		$(this).addClass("on");
		$("#wrap").removeClass();
		$('#wrap').addClass(className);
	});
});