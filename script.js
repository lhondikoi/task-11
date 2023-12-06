fetch('https://restcountries.com/v3.1/all')
.then(r=>r.json())
.then(d=> {
    let app = document.createElement('div')
    app.classList.add('container')
    
    for (let country of d) {
        console.log(country)
        let countryCard = document.createElement('div')
        countryCard.classList.add('card')
        
        let countryFlag = document.createElement('img')
        countryFlag.classList.add('card-imp-top')
        countryFlag.setAttribute('src', `${country.flags.svg}`)
        countryFlag.setAttribute('alt', `Flag of ${country.name.common}`)
        countryCard.appendChild(countryFlag)
        
        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        
        let cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = `${country.name.common}`
        
        let weatherButton = document.createElement('button')
        weatherButton.classList.add('btn')
        weatherButton.classList.add('btn-primary')
        weatherButton.innerText = "Get weather"
        weatherButton.addEventListener('click', () => {
            alert('Weather functionality not yet done.')
        })
        
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(weatherButton)
        countryCard.appendChild(cardBody)

        let cardDetails = document.createElement('ul')
        cardDetails.classList.add('list-group')
        cardDetails.classList.add('list-group-flush')

        let capital = document.createElement('li')
        capital.classList.add('list-group-item')
        capital.innerText = `Capital: ${country.capital}`
        cardDetails.appendChild(capital)

        let region = document.createElement('li')
        region.classList.add('list-group-item')
        region.innerText = `Region: ${country.region}`
        cardDetails.appendChild(region)

        let latlng = document.createElement('li')
        latlng.classList.add('list-group-item')
        latlng.innerText = `Latitude & Longitude: ${country.latlng}`
        cardDetails.appendChild(latlng)

        let countryCode = document.createElement('li')
        countryCode.classList.add('list-group-item')
        countryCode.innerText = `Country Code: ${country.cioc || "-"}`
        
        
        cardDetails.appendChild(countryCode)
        countryCard.appendChild(cardDetails)
        app.appendChild(countryCard)
    }
    document.body.appendChild(app)
})