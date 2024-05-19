var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
		kitaplarıListele(this.responseText);
	}
});

xhr.open("GET", "https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=sakarya");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "apikey 4fDi4P5WVo4MQ2cjwz8F8r:040WrSYKVesTt7fhP6W2yl");

xhr.send(data);

function kitaplarıListele(data) {
	var container = document.getElementById("hava-container-row");
	var havaHTML = "";
	var JSONData = JSON.parse(data);
	var hava = JSONData.result;
	hava.forEach(gün => {
		havaHTML +=
			`
		<div class="weather-list">
    <ul>
        <li>
            <img src="${gün.icon}" id="hava-icon">
            <div class="weather-info">
                <div class="baslik">${gün.date}</div>
                <div class="aciklama">
                    <p>${gün.description}</p>
                    <p>${gün.degree}</p>
                </div>
            </div>
        </li>
        <!-- Diğer günlerin hava durumu bilgilerini burada ekleyebilirsiniz -->
    </ul>
</div>
		`;
	});
	container.innerHTML += havaHTML;
}
