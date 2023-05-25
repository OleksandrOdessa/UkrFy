"use strict"
//! ---------------Scroll popular songs----------------------------
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('popular__pop-song')[0];

pop_song_right.addEventListener('click', () => {
	pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
	pop_song.scrollLeft -= 330;
});

//! ---------------Scroll popular artists----------------------------

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let pop_art = document.getElementsByClassName('pop-art__item')[0];

pop_art_right.addEventListener('click', () => {
	pop_art.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
	pop_art.scrollLeft -= 330;
});

//? ---------------------Work with music------------------------------

const music = new Audio('audio/1.mp3');
music.volume = 0.5;

const songs = [ // Список названия песен и картинок к ним
	{
		id: 1,
		songName: 'Люди, Як Кораблі<br><div class="left__subtitle">Скрябін</div>',
		poster: "img/1.jpg"
	},
	{
		id: 2,
		songName: 'Павук<br><div class="left__subtitle">Dzidzio</div>',
		poster: "img/2.jpg"
	},
	{
		id: 3,
		songName: 'Евпаторiя<br><div class="left__subtitle">Ляпiс Трубецкой</div>',
		poster: "img/3.jpg"
	},
	{
		id: 4,
		songName: 'Додому (feat. Skofka)<br><div class="left__subtitle">Kalush</div>',
		poster: "img/4.jpg"
	},
	{
		id: 5,
		songName: 'Мушу йти<br><div class="left__subtitle">ТНМК</div>',
		poster: "img/5.jpg"
	},
	{
		id: 6,
		songName: 'Наодинці<br><div class="left__subtitle">Бумбокс</div>',
		poster: "img/6.jpg"
	},
	{
		id: 7,
		songName: 'Каділак<br><div class="left__subtitle">Dzidzio</div>',
		poster: "img/7.jpg"
	},
	{
		id: 8,
		songName: 'Чути Гімн<br><div class="left__subtitle">Skofka</div>',
		poster: "img/8.jpg"
	},
	{
		id: 9,
		songName: 'Соловей<br><div class="left__subtitle">Go_A</div>',
		poster: "img/9.jpg"
	},
	{
		id: 10,
		songName: 'Обійми<br><div class="left__subtitle">Океан Ельзи</div>',
		poster: "img/10.jpg"
	},
	{
		id: 11,
		songName: 'Ким Ми Були<br><div class="left__subtitle">Бумбокс</div>',
		poster: "img/11.jpg"
	},
	{
		id: 12,
		songName: 'Старі Фотографії<br><div class="left__subtitle">Скрябін</div>',
		poster: "img/12.jpg"
	},
	{
		id: 13,
		songName: 'Ти Неймовірна<br><div class="left__subtitle">Quest Pistols</div>',
		poster: "img/13.jpg"
	},
	{
		id: 14,
		songName: 'Я Люблю Тільки Тебе<br><div class="left__subtitle">Олександр Пономарьов</div>',
		poster: "img/14.jpg"
	},
	{
		id: 15,
		songName: 'Ванька-встанька<br><div class="left__subtitle">Маша Кондратенко</div>',
		poster: "img/15.jpg"
	},
	{
		id: 16,
		songName: 'Банда - Банда<br><div class="left__subtitle">Dzidzio</div>',
		poster: "img/16.jpg"
	},
	{
		id: 17,
		songName: 'Понад хмарами<br><div class="left__subtitle">Тартак</div>',
		poster: "img/17.jpg"
	},
	{
		id: 18,
		songName: 'Ти Е Я<br><div class="left__subtitle">Друга Ріка</div>',
		poster: "img/18.jpg"
	},
	{
		id: 19,
		songName: 'А Памятаєш<br><div class="left__subtitle">Скрябін</div>',
		poster: "img/19.jpg"
	},
	{
		id: 20,
		songName: 'Давай Начистоту (Feat. Skofka)<br><div class="left__subtitle">Kalush</div>',
		poster: "img/20.jpg"
	},
	{
		id: 21,
		songName: 'Люди, Як Кораблі<br><div class="left__subtitle">Скрябін</div>',
		poster: "img/21.jpg"
	},
	{
		id: 22,
		songName: 'Павук<br><div class="left__subtitle">Dzidzio</div>',
		poster: "img/22.jpg"
	},
	{
		id: 23,
		songName: 'Евпаторiя<br><div class="left__subtitle">Ляпiс Трубецкой</div>',
		poster: "img/23.jpg"
	},
	{
		id: 24,
		songName: 'Додому (feat. Skofka)<br><div class="left__subtitle">Kalush</div>',
		poster: "img/24.jpg"
	},
	{
		id: 25,
		songName: 'Обійми<br><div class="left__subtitle">Океан Ельзи</div>',
		poster: "img/25.jpg"
	},
	{
		id: 26,
		songName: 'Ванька-встанька<br><div class="left__subtitle">Маша Кондратенко</div>',
		poster: "img/26.jpg"
	},
	{
		id: 27,
		songName: 'Ая-Ая<br><div class="left__subtitle">Dzidzio</div>',
		poster: "img/27.jpg"
	},
	{
		id: 28,
		songName: 'Квінти<br><div class="left__subtitle">Скрябін</div>',
		poster: "img/28.jpg"
	},
	{
		id: 29,
		songName: 'Ая-Ая<br><div class="left__subtitle">Dzidzio</div>',
		poster: "img/29.jpg"
	},
	{
		id: 30,
		songName: 'Каділак<br><div class="left__subtitle">Dzidzio</div>',
		poster: "img/30.jpg"
	},
	{
		id: 31,
		songName: 'Чути Гімн<br><div class="left__subtitle">Skofka</div>',
		poster: "img/31.jpg"
	},
	{
		id: 32,
		songName: 'Соловей<br><div class="left__subtitle">Go_A</div>',
		poster: "img/32.jpg"
	},
	{
		id: 33,
		songName: 'Ким Ми Були<br><div class="left__subtitle">Бумбокс</div>',
		poster: "img/33.jpg"
	},
	{
		id: 34,
		songName: 'Старі Фотографії<br><div class="left__subtitle">Скрябін</div>',
		poster: "img/34.jpg"
	},
	{
		id: 35,
		songName: 'Ти Неймовірна<br><div class="left__subtitle">Quest Pistols</div>',
		poster: "img/35.jpg"
	},
	{
		id: 36,
		songName: 'Я Люблю Тільки Тебе<br><div class="left__subtitle">Олександр Пономарьов</div>',
		poster: "img/36.jpg"
	},
	{
		id: 37,
		songName: 'Мам<br><div class="left__subtitle">Скрябін</div>',
		poster: "img/37.jpg"
	},
	{
		id: 38,
		songName: 'Люди, Як Кораблі<br><div class="left__subtitle">Скрябін</div>',
		poster: "img/38.jpg"
	},
	{
		id: 39,
		songName: 'Старі Фотографії<br><div class="left__subtitle">Скрябін</div>',
		poster: "img/39.jpg"
	},
	{
		id: 40,
		songName: 'А Памятаєш<br><div class="left__subtitle">Скрябін</div>',
		poster: "img/40.jpg"
	},
	{
		id: 41,
		songName: 'Квінти<br><div class="left__subtitle">Скрябін</div>',
		poster: "img/41.jpg"
	},
	{
		id: 42,
		songName: 'Павук<br><div class="left__subtitle">Dzidzio</div>',
		poster: "img/42.jpg"
	},
	{
		id: 43,
		songName: 'Каділак<br><div class="left__subtitle">Dzidzio</div>',
		poster: "img/43.jpg"
	},
	{
		id: 44,
		songName: 'Банда - Банда<br><div class="left__subtitle">Dzidzio</div>',
		poster: "img/44.jpg"
	},
	{
		id: 45,
		songName: 'Серенада<br><div class="left__subtitle">Dzidzio</div>',
		poster: "img/45.jpg"
	},
	{
		id: 46,
		songName: 'Ая-Ая<br><div class="left__subtitle">Dzidzio</div>',
		poster: "img/46.jpg"
	},
	{
		id: 47,
		songName: 'Додому (feat. Skofka)<br><div class="left__subtitle">Kalush</div>',
		poster: "img/47.jpg"
	},
	{
		id: 48,
		songName: 'Давай Начистоту (Feat. Skofka)<br><div class="left__subtitle">Kalush</div>',
		poster: "img/48.jpg"
	},
	{
		id: 49,
		songName: 'Stefania<br><div class="left__subtitle">Kalush</div>',
		poster: "img/49.jpg"
	},
	{
		id: 50,
		songName: 'Стіни (feat. Jerry Heil)<br><div class="left__subtitle">Kalush</div>',
		poster: "img/50.jpg"
	},
	{
		id: 51,
		songName: 'Мушу йти<br><div class="left__subtitle">ТНМК</div>',
		poster: "img/51.jpg"
	},
	{
		id: 52,
		songName: 'Гранули<br><div class="left__subtitle">ТНМК</div>',
		poster: "img/52.jpg"
	},
	{
		id: 53,
		songName: 'Забув<br><div class="left__subtitle">ТНМК</div>',
		poster: "img/53.jpg"
	},
	{
		id: 54,
		songName: 'Файне мiсто Тернопiль<br><div class="left__subtitle">ТНМК</div>',
		poster: "img/54.jpg"
	},
	{
		id: 55,
		songName: 'Віва Україно<br><div class="left__subtitle">ТНМК</div>',
		poster: "img/55.jpg"
	},
	{
		id: 56,
		songName: 'Погані сусіди<br><div class="left__subtitle">Skofka</div>',
		poster: "img/56.jpg"
	},
	{
		id: 57,
		songName: 'Чути Гiмн<br><div class="left__subtitle">Skofka</div>',
		poster: "img/57.jpg"
	},
	{
		id: 58,
		songName: 'Геть за забор<br><div class="left__subtitle">Skofka</div>',
		poster: "img/58.jpg"
	},
	{
		id: 59,
		songName: 'Не Забудем І Не Пробачим<br><div class="left__subtitle">Skofka</div>',
		poster: "img/59.jpg"
	},
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => { // Поиск всех эллементов с классом .songItem и задает для каждого
	e.getElementsByTagName('img')[0].src = songs[i].poster; // Добавляет картинки согласно id
	e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName; // Добавляет названия песен согласно id
});

//! ---------------Search bar----------------------------

let search_results = document.getElementsByClassName('header__search-results')[0];
let input = document.getElementsByTagName('input')[0];

songs.forEach(element => {
	const { id, songName, poster } = element;
	let card = document.createElement('a'); // Создает элемент <a></a>
	card.href = "#" + id; // При нажатии на <a></a> перелистывает на положение песни
	card.classList.add('header__card');
	card.innerHTML = ` 
	<img src="${poster}" alt="">
	<div class="header__content">
	${songName}
	</div>`; // Присваивает созданному элементу <a></a> картинку и название песни
	search_results.appendChild(card); // Сортирует <a></a> под поиском 

	//? -------- При нажатии на песню в поиске - воспроизводится ----------
	card.addEventListener('click', () => {
		card.id = id;
		index = card.id;

		input.value = ""; // Убирает то, что было введено в поиске
		search_results.style.display = "none"; // Очищает место cards

		music.src = `audio/${index}.mp3`; // Открывает песню согласно её id
		poster_master_play.src = `img/${index}.jpg`;
		music.play(); // Дает вомзожность воспроизводить песни
		masterPlay.classList.remove('bi-play-fill'); //Убирает кнопку пуск
		masterPlay.classList.add('bi-pause-fill'); //Добавляет кнопку пауза

		let songTitles = songs.filter((els) => { // благодаря этому титул id= title копируется у песен, что воспроизводятся согласно songName в songs
			return els.id == index;
		});

		songTitles.forEach(elss => {
			let { songName } = elss;
			title.innerHTML = songName;
			// poster.src = poster; + //let { songName, poster } = elss; Отображение картинки
		});

		makeAllBackground(); //Добавляет задний фон для активной песни
		Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0.1";
		makeAllPlays();
		el.target.classList.remove('bi-play-circle-fill'); //Убирает кнопку пуск
		el.target.classList.add('bi-pause-circle-fill'); // Добавляет кнопку пауза
		wave.classList.add('activeOne');


	});
	//? ----------------------------------------------------------------------
});



input.addEventListener('keyup', () => { // Делает рабочим поиск
	let input_value = input.value.toUpperCase();
	let items = search_results.getElementsByTagName('a');
	for (let index = 0; index < items.length; index++) {
		let as = items[index].getElementsByClassName('header__content')[0];
		let text_value = as.textContent || as.innerHTML;

		if (text_value.toUpperCase().indexOf(input_value) > -1) {
			items[index].style.display = "flex";
		}
		else {
			items[index].style.display = "none";
		}

		if (input.value == 0) {
			search_results.style.display = "none";
		}
		else {
			search_results.style.display = "";
		}
	}
});



//! ---------------Play bar----------------------------

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => { // Добавляет кнопку пуск + волны
	if (music.paused || music.currentTime <= 0) {
		music.play();
		wave.classList.add('activeOne'); // Добавляет волны
		masterPlay.classList.remove('bi-play-fill'); //Убирает кнопку пуск
		masterPlay.classList.add('bi-pause-fill'); //Добавляет кнопку пауза
	}
	else {
		music.pause();
		wave.classList.remove('activeOne'); // Отключает волны
		masterPlay.classList.remove('bi-pause-fill'); //Убирает кнопку пауза
		masterPlay.classList.add('bi-play-fill'); //Добавляет кнопку пуск
	}
});

const makeAllPlays = () => {
	Array.from(document.getElementsByClassName('left__playlistPlay')).forEach((el) => { // Меняет пуск на паузу в выборе песен
		el.classList.add('bi-play-circle-fill'); //Добавляет пуск на неактивный трек
		el.classList.remove('bi-pause-fill'); //Удаляет паузу с неактивного трека
	})
};

const makeAllBackground = () => { //Удаляет задний фон для неактивной песни (работает с активной песней, ниже)
	Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
		el.style.background = 'rgb(105, 105, 105, 0.0';
	})
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('left__playlistPlay')).forEach((e) => { // Поиск всех эллементов с классом .left__playlistPlay и задает для каждого
	e.addEventListener('click', (el) => { // При нажатии на элемент ищет его id 
		index = el.target.id; // Задает index согласно id кнопки пуск рядом с песней.

		music.src = `audio/${index}.mp3`; // Открывает песню согласно её id
		poster_master_play.src = `img/${index}.jpg`;
		music.play(); // Дает вомзожность воспроизводить песни
		masterPlay.classList.remove('bi-play-fill'); //Убирает кнопку пуск
		masterPlay.classList.add('bi-pause-fill'); //Добавляет кнопку пауза
		download_music.href = `audio/${index}.mp3` // Это позволяет скачать музыку. HTML href="" download id="download_music"
		let songTitles = songs.filter((els) => { // благодаря этому титул id= title копируется у песен, что воспроизводятся согласно songName в songs
			return els.id == index;
		});

		songTitles.forEach(elss => {
			let { songName } = elss;
			title.innerHTML = songName;
			download_music.setAttribute('download', songName); // Добавляет название песни при скачивании
			// poster.src = poster; + //let { songName, poster } = elss; Отображение картинки
		});

		makeAllBackground(); //Добавляет задний фон для активной песни
		Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0.1";
		makeAllPlays();
		el.target.classList.remove('bi-play-circle-fill'); //Убирает кнопку пуск
		el.target.classList.add('bi-pause-circle-fill'); // Добавляет кнопку пауза
		wave.classList.add('activeOne');
	})
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');// Шкала времени песни
let barTwo = document.getElementById('barTwo'); // Ползунок временной шкалы
let bar__dot = document.getElementsByClassName('bar__dot')[0]; // Круг ползунка временной шкалы

music.addEventListener('timeupdate', () => { // Время сколько песня длилась и сколько осталось идти
	let music_curr = music.currentTime;
	let music_dur = music.duration;

	let min1 = Math.floor(music_dur / 60);
	let sec1 = Math.floor(music_dur % 60);

	if (sec1 < 10) { // Добавляет 0 перед секундами, если их меньше 10
		sec1 = `0${sec1}`;
	}

	currentEnd.innerText = `${min1}:${sec1}`; // Общее время песни

	let min2 = Math.floor(music_curr / 60);
	let sec2 = Math.floor(music_curr % 60);

	if (sec2 < 10) { // Добавляет 0 перед секундами, если их меньше 10
		sec2 = `0${sec2}`;
	}

	currentStart.innerText = `${min2}:${sec2} `; // Время сколько песня длилась

	let progressBar = parseInt((music_curr / music_dur) * 100); // Получение % значения пройденной песни
	seek.value = progressBar;
	let seekbar = seek.value;
	barTwo.style.width = `${seekbar}%`; // Заполнение ползунка временной шкалы в зависимости от пройденной песни
	bar__dot.style.left = `${seekbar}%`; // Чтоб кружок следовал за ползунком
});

seek.addEventListener('change', () => {
	music.currentTime = seek.value * music.duration / 100; // Чтоб можно было менять место ползунка (перемотка песни на нужный момент)
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
vol.value = 50;
let vol_bar = document.getElementsByClassName('vol__bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
	if (vol.value == 0) { // Если громкость = 0, то значек такой-то
		vol_icon.classList.remove('bi-volume-up-fill');
		vol_icon.classList.remove('bi-volume-down-fill');
		vol_icon.classList.add('bi-volume-off-fill');
	}
	if (vol.value > 0) { // Если громкость > 0, то значек такой-то
		vol_icon.classList.remove('bi-volume-up-fill');
		vol_icon.classList.add('bi-volume-down-fill');
		vol_icon.classList.remove('bi-volume-off-fill');
	}
	if (vol.value > 50) { // Если громкость > 50, то значек такой-то
		vol_icon.classList.add('bi-volume-up-fill');
		vol_icon.classList.remove('bi-volume-down-fill');
		vol_icon.classList.remove('bi-volume-off-fill');
	}

	let vol_a = vol.value;
	vol_bar.style.width = `${vol_a}%`; // Ползунок громкости двигается за input
	vol_dot.style.left = `${vol_a}%`; // Круг громкости двигается за input
	music.volume = vol_a / 100; // Чтоб громкость песни соответствовала input
});

let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', () => {
	index -= 1;
	if (index < 1) { // Если выбрать прердыдущую песню первой, то откроет последнюю песню
		index = Array.from(document.getElementsByClassName('songItem')).length;
	}

	music.src = `audio/${index}.mp3`; // Открывает песню согласно её id
	poster_master_play.src = `img/${index}.jpg`;
	music.play(); // Дает вомзожность воспроизводить песни
	masterPlay.classList.remove('bi-play-fill'); //Убирает кнопку пуск
	masterPlay.classList.add('bi-pause-fill'); //Добавляет кнопку пауза

	let songTitles = songs.filter((els) => { // благодаря этому титул id= title копируется у песен, что воспроизводятся согласно songName в songs
		return els.id == index;
	});

	songTitles.forEach(elss => {
		let { songName } = elss;
		title.innerHTML = songName;
		// poster.src = poster; + //let { songName, poster } = elss; Отображение картинки
	});

	makeAllBackground(); //Добавляет задний фон для активной песни
	Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0.1";
	makeAllPlays();
	el.target.classList.remove('bi-play-circle-fill'); //Убирает кнопку пуск
	el.target.classList.add('bi-pause-circle-fill'); // Добавляет кнопку пауза
	wave.classList.add('activeOne');
});

next.addEventListener('click', () => {
	index++;
	if (index > Array.from(document.getElementsByClassName('songItem')).length) { // Если выбрать прердыдущую песню первой, то откроет последнюю песню
		index = 1; // Если выбрать следующую песню после последней, то откроется первая песня
	}

	music.src = `audio/${index}.mp3`; // Открывает песню согласно её id
	poster_master_play.src = `img/${index}.jpg`;
	music.play(); // Дает вомзожность воспроизводить песни
	masterPlay.classList.remove('bi-play-fill'); //Убирает кнопку пуск
	masterPlay.classList.add('bi-pause-fill'); //Добавляет кнопку пауза

	let songTitles = songs.filter((els) => { // благодаря этому титул id= title копируется у песен, что воспроизводятся согласно songName в songs
		return els.id == index;
	});

	songTitles.forEach(elss => {
		let { songName } = elss;
		title.innerHTML = songName;
		// poster.src = poster; + //let { songName, poster } = elss; Отображение картинки
	});

	makeAllBackground(); //Добавляет задний фон для активной песни
	Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0.1";
	makeAllPlays();
	el.target.classList.remove('bi-play-circle-fill'); //Убирает кнопку пуск
	el.target.classList.add('bi-pause-circle-fill'); // Добавляет кнопку пауза
	wave.classList.add('activeOne');
});

let play__shuffle = document.getElementsByClassName('play__shuffle')[0];

play__shuffle.addEventListener('click', () => { // С помощью данного кода меняются иконки next, repeat, random в заданном порядке при клике
	let a = play__shuffle.innerHTML;

	switch (a) {
		case "next":
			play__shuffle.classList.add('bi-arrow-repeat');
			play__shuffle.classList.remove('bi-music-note-beamed');
			play__shuffle.classList.remove('bi-shuffle');
			play__shuffle.innerHTML = 'repeat';
			break;

		case "repeat":
			play__shuffle.classList.remove('bi-arrow-repeat');
			play__shuffle.classList.remove('bi-music-note-beamed');
			play__shuffle.classList.add('bi-shuffle');
			play__shuffle.innerHTML = 'random';
			break;

		case "random":
			play__shuffle.classList.remove('bi-arrow-repeat');
			play__shuffle.classList.add('bi-music-note-beamed');
			play__shuffle.classList.remove('bi-shuffle');
			play__shuffle.innerHTML = 'next';
			break;
	}
});

const next_music = () => { // Иконка: Следующая песня
	if (index == songs.length) {
		index = 1;
	} else {
		index++;
	}

	music.src = `audio/${index}.mp3`; // Открывает песню согласно её id
	poster_master_play.src = `img/${index}.jpg`;
	music.play(); // Дает вомзожность воспроизводить песни
	masterPlay.classList.remove('bi-play-fill'); //Убирает кнопку пуск
	masterPlay.classList.add('bi-pause-fill'); //Добавляет кнопку пауза
	download_music.href = `audio/${index}.mp3` // Это позволяет скачать музыку. HTML href="" download id="download_music"
	let songTitles = songs.filter((els) => { // благодаря этому титул id= title копируется у песен, что воспроизводятся согласно songName в songs
		return els.id == index;
	});

	songTitles.forEach(elss => {
		let { songName } = elss;
		title.innerHTML = songName;
		download_music.setAttribute('download', songName); // Добавляет название песни при скачивании
		// poster.src = poster; + //let { songName, poster } = elss; Отображение картинки
	});

	makeAllBackground(); //Добавляет задний фон для активной песни
	Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0.1";
	makeAllPlays();
	el.target.classList.remove('bi-play-circle-fill'); //Убирает кнопку пуск
	el.target.classList.add('bi-pause-circle-fill'); // Добавляет кнопку пауза
	wave.classList.add('activeOne');
};

const repeat_music = () => { // Иконка: Повтор песни
	index;

	music.src = `audio/${index}.mp3`; // Открывает песню согласно её id
	poster_master_play.src = `img/${index}.jpg`;
	music.play(); // Дает вомзожность воспроизводить песни
	masterPlay.classList.remove('bi-play-fill'); //Убирает кнопку пуск
	masterPlay.classList.add('bi-pause-fill'); //Добавляет кнопку пауза
	download_music.href = `audio/${index}.mp3` // Это позволяет скачать музыку. HTML href="" download id="download_music"
	let songTitles = songs.filter((els) => { // благодаря этому титул id= title копируется у песен, что воспроизводятся согласно songName в songs
		return els.id == index;
	});

	songTitles.forEach(elss => {
		let { songName } = elss;
		title.innerHTML = songName;
		download_music.setAttribute('download', songName); // Добавляет название песни при скачивании
		// poster.src = poster; + //let { songName, poster } = elss; Отображение картинки
	});

	makeAllBackground(); //Добавляет задний фон для активной песни
	Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0.1";
	makeAllPlays();
	el.target.classList.remove('bi-play-circle-fill'); //Убирает кнопку пуск
	el.target.classList.add('bi-pause-circle-fill'); // Добавляет кнопку пауза
	wave.classList.add('activeOne');
};

const random_music = () => { // Иконка: Случаная песня
	if (index == songs.length) { // Условие, при котором осуществляется рандомный выбор песни
		index = 1;
	} else {
		index = Math.floor((Math.random() * songs.length) + 1);
	};

	music.src = `audio/${index}.mp3`; // Открывает песню согласно её id
	poster_master_play.src = `img/${index}.jpg`;
	music.play(); // Дает вомзожность воспроизводить песни
	masterPlay.classList.remove('bi-play-fill'); //Убирает кнопку пуск
	masterPlay.classList.add('bi-pause-fill'); //Добавляет кнопку пауза
	download_music.href = `audio/${index}.mp3` // Это позволяет скачать музыку. HTML href="" download id="download_music"
	let songTitles = songs.filter((els) => { // благодаря этому титул id= title копируется у песен, что воспроизводятся согласно songName в songs
		return els.id == index;
	});

	songTitles.forEach(elss => {
		let { songName } = elss;
		title.innerHTML = songName;
		download_music.setAttribute('download', songName); // Добавляет название песни при скачивании
		// poster.src = poster; + //let { songName, poster } = elss; Отображение картинки
	});

	makeAllBackground(); //Добавляет задний фон для активной песни
	Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0.1";
	makeAllPlays();
	el.target.classList.remove('bi-play-circle-fill'); //Убирает кнопку пуск
	el.target.classList.add('bi-pause-circle-fill'); // Добавляет кнопку пауза
	wave.classList.add('activeOne');
};

music.addEventListener('ended', () => { // С помощью данного кода после окончания песни свключается следующая песня
	let b = play__shuffle.innerHTML;
	switch (b) {
		case 'repeat':
			repeat_music();
			break;
		case 'next':
			next_music();
			break;
		case 'random':
			random_music();
			break;
	}
});

//! -------------- Left side ------------------

//При загрузке страницы
window.addEventListener('load', () => {
	const screenWidth = getComputedStyle(document.querySelector('head')).width;
	doSmthIfEqual(screenWidth);
})

//При изменении ширины экрана
window.addEventListener('resize', () => {
	const screenWidth = getComputedStyle(document.querySelector('head')).width;
	doSmthIfEqual(screenWidth);
});

let main = document.getElementsByClassName('main')[0];
let menu_list_active_button = document.getElementById('menu_list_active_button');
let left_side = document.getElementsByClassName('left')[0];
let arr_left = document.getElementById('arr-left');

function doSmthIfEqual(size) {
	if (size === '930px') {
		main.addEventListener('click', () => {
			left_side.classList.add('slide');
			arr_left.classList.add('bi-arrow-bar-right');
			arr_left.classList.remove('bi-arrow-bar-left');
		});

	} else {
	}
};

menu_list_active_button.addEventListener('click', () => {
	left_side.classList.toggle('slide');
	arr_left.classList.toggle('bi-arrow-bar-right');
	arr_left.classList.toggle('bi-arrow-bar-left');

});

//! ------ TESTS ------------------

let playlist = document.getElementById('playlist');
let recent = document.getElementById('recent');
let recommend = document.getElementById('recommend');

let playlist_songs = document.getElementById('playlist_songs');
let recent_songs = document.getElementById('recent_songs');
let recommend_songs = document.getElementById('recommend_songs');

playlist.addEventListener('click', () => {
	playlist.classList.add('active');
	recent.classList.remove('active');
	recommend.classList.remove('active');

	playlist_songs.style.display = "block";
	recent_songs.style.display = "none";
	recommend_songs.style.display = "none";
});

recent.addEventListener('click', () => {
	recent.classList.add('active');
	playlist.classList.remove('active');
	recommend.classList.remove('active');

	recent_songs.style.display = "block";
	recommend_songs.style.display = "none";
	playlist_songs.style.display = "none";
});

recommend.addEventListener('click', () => {
	recommend.classList.add('active');
	playlist.classList.remove('active');
	recent.classList.remove('active');

	recommend_songs.style.display = "block";
	playlist_songs.style.display = "none";
	recent_songs.style.display = "none";
});

let all = document.getElementsByClassName('all')[0];
let all_songs = document.getElementsByClassName('all-songs')[0];

let skriabin = document.getElementsByClassName('skriabin')[0];
let skriabin_songs = document.getElementsByClassName('skriabin-songs')[0];
let skriabin_top = document.getElementsByClassName('skriabin-top')[0];

let dzidzio = document.getElementsByClassName('dzidzio')[0];
let dzidzio_songs = document.getElementsByClassName('dzidzio-songs')[0];
let dzidzio_top = document.getElementsByClassName('dzidzio-top')[0];

let kalush = document.getElementsByClassName('kalush')[0];
let kalush_songs = document.getElementsByClassName('kalush-songs')[0];
let kalush_top = document.getElementsByClassName('kalush-top')[0];

let tnmk = document.getElementsByClassName('tnmk')[0];
let tnmk_songs = document.getElementsByClassName('tnmk-songs')[0];
let tnmk_top = document.getElementsByClassName('tnmk-top')[0];

let skofka = document.getElementsByClassName('skofka')[0];
let skofka_songs = document.getElementsByClassName('skofka-songs')[0];
let skofka_top = document.getElementsByClassName('skofka-top')[0];

all.addEventListener('click', () => {
	skriabin_songs.style.display = "none";
	all_songs.style.display = "block";
	dzidzio_songs.style.display = "none";
	kalush_songs.style.display = "none";
	tnmk_songs.style.display = "none";
	skofka_songs.style.display = "none";
	skriabin_top.style.display = "block";
	dzidzio_top.style.display = "none";
	kalush_top.style.display = "none";
	tnmk_top.style.display = "none";
	skofka_top.style.display = "none";
});

skriabin.addEventListener('click', () => {
	skriabin_songs.style.display = "block";
	all_songs.style.display = "none";
	dzidzio_songs.style.display = "none";
	kalush_songs.style.display = "none";
	tnmk_songs.style.display = "none";
	skofka_songs.style.display = "none";
	skriabin_top.style.display = "block";
	dzidzio_top.style.display = "none";
	kalush_top.style.display = "none";
	tnmk_top.style.display = "none";
	skofka_top.style.display = "none";
});

dzidzio.addEventListener('click', () => {
	dzidzio_songs.style.display = "block";
	all_songs.style.display = "none";
	skriabin_songs.style.display = "none";
	kalush_songs.style.display = "none";
	tnmk_songs.style.display = "none";
	skofka_songs.style.display = "none";
	skriabin_top.style.display = "none";
	dzidzio_top.style.display = "block";
	kalush_top.style.display = "none";
	tnmk_top.style.display = "none";
	skofka_top.style.display = "none";
});

kalush.addEventListener('click', () => {
	kalush_songs.style.display = "block";
	all_songs.style.display = "none";
	skriabin_songs.style.display = "none";
	dzidzio_songs.style.display = "none";
	tnmk_songs.style.display = "none";
	skofka_songs.style.display = "none";
	skriabin_top.style.display = "none";
	dzidzio_top.style.display = "none";
	kalush_top.style.display = "block";
	tnmk_top.style.display = "none";
	skofka_top.style.display = "none";
});

tnmk.addEventListener('click', () => {
	tnmk_songs.style.display = "block";
	kalush_songs.style.display = "none";
	all_songs.style.display = "none";
	skriabin_songs.style.display = "none";
	dzidzio_songs.style.display = "none";
	skofka_songs.style.display = "none";
	skriabin_top.style.display = "none";
	dzidzio_top.style.display = "none";
	kalush_top.style.display = "none";
	tnmk_top.style.display = "block";
	skofka_top.style.display = "none";
});

skofka.addEventListener('click', () => {
	skofka_songs.style.display = "block";
	tnmk_songs.style.display = "none";
	kalush_songs.style.display = "none";
	all_songs.style.display = "none";
	skriabin_songs.style.display = "none";
	dzidzio_songs.style.display = "none";
	skriabin_top.style.display = "none";
	dzidzio_top.style.display = "none";
	kalush_top.style.display = "none";
	tnmk_top.style.display = "none";
	skofka_top.style.display = "block";
});

let content_bar = document.getElementsByClassName('content_bar')[0];
let radio_bar = document.getElementsByClassName('radio_bar')[0];
let content = document.getElementsByClassName('content')[0];
let radio = document.getElementsByClassName('radio')[0];
let header_search = document.getElementsByClassName('header__search')[0];
let pop_artist = document.getElementsByClassName('pop-art')[0];

content_bar.addEventListener('click', () => {
	content_bar.style.color = "#ffaa00";
	radio_bar.style.color = "#747988";
	content.style.display = "flex";
	radio.style.display = "none";
	header_search.style.display = "block";
	skriabin_top.style.display = "block";
	pop_artist.style.display = "";
	skriabin_songs.style.display = "none";
	all_songs.style.display = "block";
	dzidzio_songs.style.display = "none";
	kalush_songs.style.display = "none";
	tnmk_songs.style.display = "none";
	skofka_songs.style.display = "none";
});

radio_bar.addEventListener('click', () => {
	radio_bar.style.color = "#ffaa00";
	content_bar.style.color = "#747988";
	content.style.display = "none";
	radio.style.display = "block";
	header_search.style.display = "none"
	skriabin_top.style.display = "none";
	dzidzio_top.style.display = "none";
	kalush_top.style.display = "none";
	tnmk_top.style.display = "none";
	skofka_top.style.display = "none";
});

radio_bar.addEventListener('click', () => {
	if (skriabin.addEventListener('click', () => {
		skriabin_top.style.display = "none";
	}));
	if (all.addEventListener('click', () => {
		skriabin_top.style.display = "none";
	}));
	if (dzidzio.addEventListener('click', () => {
		dzidzio_top.style.display = "none";
	}));
	if (kalush.addEventListener('click', () => {
		kalush_top.style.display = "none";
	}));
	if (tnmk.addEventListener('click', () => {
		tnmk_top.style.display = "none";
	}));
	if (skofka.addEventListener('click', () => {
		skofka_top.style.display = "none";
	}));
});

content_bar.addEventListener('click', () => {
	if (skriabin.addEventListener('click', () => {
		skriabin_top.style.display = "block";
	}));
	if (all.addEventListener('click', () => {
		skriabin_top.style.display = "block";
	}));
	if (dzidzio.addEventListener('click', () => {
		dzidzio_top.style.display = "block";
	}));
	if (kalush.addEventListener('click', () => {
		kalush_top.style.display = "block";
	}));
	if (tnmk.addEventListener('click', () => {
		tnmk_top.style.display = "block";
	}));
	if (skofka.addEventListener('click', () => {
		skofka_top.style.display = "block";
	}));
});