let region = 'europe'

function updateRegion() {
    fetch('https://restcountries.com/v3.1/region/' + region)
    .then(response => response.json())
    .then(data => { 
        document.getElementById('staty').innerHTML = ''
        data.forEach(country => {
            console.log(country.capital)
            let stat = `
            <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div class="card">
                    <a href="${country.maps.googleMaps}" target="_blank"><img class="card-img-top" src="${country.flags.svg}" alt="${country.flags.alt}"/></a>
                    <div class="card-body">
                        <h4 class="card-title">${country.translations.ces.common}</h4>
                        <p class="card-text">Počet obyvatel: ${country.population}
                            <br>Rozloha: ${country.area} km²
                            <br>Hlavní město: ${country.capital}
                        </p>
                    </div>
                </div>
            </div>`
            document.getElementById('staty').innerHTML += stat
        })
    })
}

$('.dropdown-menu li a').on('click', function () {
    region = $(this).text().toLowerCase()
    updateRegion()
});