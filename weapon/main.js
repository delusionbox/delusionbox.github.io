const Item =
	[{
		id: 1,
		name: "칼🗡",
		atk: ["★", "★★", "★★★"],
		def: ["★", "★★", "★★★"],
		stm: ["★", "★★", "★★★"],
	},
	{
		id: 2,
		name: "활🏹",
		atk: ["★", "★★", "★★★"],
		def: ["★", "★★", "★★★"],
		stm: ["★", "★★", "★★★"],
	},
	{
		id: 3,
		name: "방패🛡",
		atk: ["★", "★★", "★★★"],
		def: ["★", "★★", "★★★"],
		stm: ["★", "★★", "★★★"],
	},
	{
		id: 4,
		name: "스태프🦯",
		atk: ["★", "★★", "★★★"],
		def: ["★", "★★", "★★★"],
		stm: ["★", "★★", "★★★"],
	}
	]
	;

const itemJson = JSON.stringify(Item);
localStorage.setItem("ItemJson", itemJson);

let text = localStorage.getItem("ItemJson");
let obj = JSON.parse(text);


var coin = 5;
var redstar = 0;

document.getElementById("demo").innerHTML = "남은 코인" + "&nbsp &nbsp" + coin;
document.getElementById("star").innerHTML = "최고 옵션" + "&nbsp &nbsp" + redstar;

function makeItem() {
	let i = Math.floor(Math.random() * 4);
	let j = Math.floor(Math.random() * 3);
	let k = Math.floor(Math.random() * 3);
	let l = Math.floor(Math.random() * 3);

	if (obj[i].atk[j] == "★★★" && obj[i].def[k] == "★★★" && obj[i].stm[l] == "★★★") {
		alert("최고 옵션 등장!");
		coin = coin + 10;
		redstar = redstar + 1;
		document.getElementById("demo1").style.color = "red";
		document.getElementById("demo2").style.color = "red";
		document.getElementById("demo3").style.color = "red";
		document.getElementById("demo4").style.color = "red";
	} else {
		document.getElementById("demo1").style.color = "black"
		document.getElementById("demo2").style.color = "black"
		document.getElementById("demo3").style.color = "black"
		document.getElementById("demo4").style.color = "black"
	}
	if (coin > 0) {
		coin = coin - 1;

		document.getElementById("demo").innerHTML = "남은 코인" + "&nbsp &nbsp" + coin;
		document.getElementById("star").innerHTML = "최고 옵션" + "&nbsp &nbsp" + redstar;
		document.getElementById("demo1").innerHTML = "이름" + "&nbsp &nbsp" + obj[i].name;
		document.getElementById("demo2").innerHTML = "공격" + "&nbsp &nbsp" + obj[i].atk[j];
		document.getElementById("demo3").innerHTML = "방어" + "&nbsp &nbsp" + obj[i].def[k];
		document.getElementById("demo4").innerHTML = "기력" + "&nbsp &nbsp" + obj[i].stm[l];
	}
	else {
		alert("코인이 없습니다. 새로고침을 해주세요");
	}

}

function reload() {
	location.reload();
}