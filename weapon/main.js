const Item =
	[{
		id: 1,
		name: "μΉΌπ‘",
		atk: ["β", "ββ", "βββ"],
		def: ["β", "ββ", "βββ"],
		stm: ["β", "ββ", "βββ"],
	},
	{
		id: 2,
		name: "νπΉ",
		atk: ["β", "ββ", "βββ"],
		def: ["β", "ββ", "βββ"],
		stm: ["β", "ββ", "βββ"],
	},
	{
		id: 3,
		name: "λ°©ν¨π‘",
		atk: ["β", "ββ", "βββ"],
		def: ["β", "ββ", "βββ"],
		stm: ["β", "ββ", "βββ"],
	},
	{
		id: 4,
		name: "μ€ννπ¦―",
		atk: ["β", "ββ", "βββ"],
		def: ["β", "ββ", "βββ"],
		stm: ["β", "ββ", "βββ"],
	}
	]
	;

const itemJson = JSON.stringify(Item);
localStorage.setItem("ItemJson", itemJson);

let text = localStorage.getItem("ItemJson");
let obj = JSON.parse(text);


var coin = 5;
var redstar = 0;

document.getElementById("demo").innerHTML = "λ¨μ μ½μΈ" + "&nbsp &nbsp" + coin;
document.getElementById("star").innerHTML = "μ΅κ³  μ΅μ" + "&nbsp &nbsp" + redstar;

function makeItem() {
	let i = Math.floor(Math.random() * 4);
	let j = Math.floor(Math.random() * 3);
	let k = Math.floor(Math.random() * 3);
	let l = Math.floor(Math.random() * 3);

	if (obj[i].atk[j] == "βββ" && obj[i].def[k] == "βββ" && obj[i].stm[l] == "βββ") {
		alert("μ΅κ³  μ΅μ λ±μ₯!");
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

		document.getElementById("demo").innerHTML = "λ¨μ μ½μΈ" + "&nbsp &nbsp" + coin;
		document.getElementById("star").innerHTML = "μ΅κ³  μ΅μ" + "&nbsp &nbsp" + redstar;
		document.getElementById("demo1").innerHTML = "μ΄λ¦" + "&nbsp &nbsp" + obj[i].name;
		document.getElementById("demo2").innerHTML = "κ³΅κ²©" + "&nbsp &nbsp" + obj[i].atk[j];
		document.getElementById("demo3").innerHTML = "λ°©μ΄" + "&nbsp &nbsp" + obj[i].def[k];
		document.getElementById("demo4").innerHTML = "κΈ°λ ₯" + "&nbsp &nbsp" + obj[i].stm[l];
	}
	else {
		alert("μ½μΈμ΄ μμ΅λλ€. μλ‘κ³ μΉ¨μ ν΄μ£ΌμΈμ");
	}

}

function reload() {
	location.reload();
}