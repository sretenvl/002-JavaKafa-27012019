var niz = [
	{
		slika: "images/EspressoShort.jpg",
		ime: "Espreso(Kratki)",
		sadrzaj: "Espreso je crna kafa i osnova je svemu.",
		cena: 150
	},
	{
		slika: "images/double-espresso.jpg",
		ime: "Espreso(Dugi)",
		sadrzaj: "Dugi espreso",
		cena: 200
	},
	{
		slika: "images/short-macchiato.jpg",
		ime: "Kratki Makijato",
		sadrzaj: "Kratki makiato je sličan espresu, ali on ima vrelo mleko sa mekanim slojem pene na vrhu.",
		cena: 200
	},
	{
		slika: "images/long-macchiato.jpg",
		ime: "Dugi Makijato",
		sadrzaj: "...naravno, dva makijata u jednoj šolji.",
		cena: 200
	},
	{
		slika: "images/cafe-latte.jpg",
		ime: "Kafa Late",
		sadrzaj: "Kafa sa mlekom",
		cena: 200
	},
	{
		slika: "images/Cappuccino.jpg",
		ime: "Kapućino",
		sadrzaj: "Kafa sa mlekom koja ima veliki sloj pene na površini",
		cena: 200
	}
];
var prikazArtikli = "";
for(var i = 0; i < niz.length; i++){
	prikazArtikli += '<div class = "parent">';
	prikazArtikli += '<img class = "meniSlika" src = "' + niz[i].slika +'"/>';
	prikazArtikli += '<div class = "textArtikla">';
	prikazArtikli += '<div class = "naslovArtikla">' + niz[i].ime +'</div>';
	prikazArtikli += '<div class = "opisArtikal">' + niz[i].sadrzaj + '<br/>Cena je: ' + niz[i].cena + '</div>';
	prikazArtikli += '</div></div></div>';
}

document.getElementById('artikli').innerHTML += prikazArtikli;