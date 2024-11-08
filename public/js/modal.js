const closeModal = () => {
	const modal = document.getElementById('modal')
	modal.style.display = 'none'
}

const openModal = () => {
	const modal = document.getElementById('modal')
	modal.style.display = 'flex'
}

const find = async () => {
	const inTitle = document.getElementById('in-title')
	const inYear = document.getElementById('in-year')
	const inSeries = document.getElementById('in-series')
	const response = await fetch('/api/find', {
		method: 'POST',
		body: JSON.stringify({
			name: inTitle.value,
			year: inYear.value,
			type: inSeries.checked ? 'series' : 'movie',
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
	const data = await response.json()
	console.log(data)

	const addMovie = document.getElementById('add-movie')
	addMovie.style.display = 'flex'

	const addImage = document.getElementById('add-image')
	addImage.src = data.poster

	const addYear = document.getElementById('add-year')
	addYear.innerText = data.year
}

const add = async () => {
	const inTitle = document.getElementById('in-title')
	const inYear = document.getElementById('in-year')
	const inSeries = document.getElementById('in-series')
	await fetch('/api/create', {
		method: 'POST',
		body: JSON.stringify({
			name: inTitle.value,
			year: inYear.value,
			type: inSeries.checked ? 'series' : 'movie',
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
	closeModal()
	location.reload()
}
