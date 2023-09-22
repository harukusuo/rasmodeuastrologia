async function obterhoroscopo() {
	const signoSelecionado = document.getElementById('sign').value;

	const url = `https://horoscope-api.p.rapidapi.com/pt/${signoSelecionado}`;
	console.log(url);
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '3915b87cbcmsh8e5bd92da0049bcp1553b0jsn1f4d958c637c',
			'X-RapidAPI-Host': 'horoscope-api.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.text();
		const result_json =JSON.parse(result);
		document.getElementById('resultadohoroscopo').innerText = `${result_json["date"]}: ${result_json["text"]}`;
	} catch (error) {
		console.error(error);
	}
}
