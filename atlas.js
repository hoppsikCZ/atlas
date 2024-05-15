updateRegion('africa')

function updateRegion(region) {
    fetch('https://restcountries.com/v3.1/region/' + region)
    .then(response => response.json())
    .then(data => { 
        document.getElementById('staty').innerHTML = ''
        data.forEach((country, index) => {
            console.log(country.capital)
            let stat = `<div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch mb-3">
            <div class="card" data-bs-toggle="modal" data-bs-target="#stat_${index}">
                <img class="card-img-top" src="${country.flags.svg}" alt="${country.flags.alt}"/>
                <div class="card-body">
                    <h4 class="card-title">${country.translations.ces.common}</h4>
                    <p class="card-text">
                        Hlavní město: ${country.capital}
                        <br>Počet obyvatel: ${country.population}
                        <br>Rozloha: ${country.area} km²
                        
                    </p>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="stat_${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modalTitle">${country.translations.ces.common}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="card">
                    <a href="${country.maps.googleMaps}" target="_blank" data-bs-toggle="tooltip" title="Klikni pro přesměrování na Google Maps"><img src="${country.flags.svg}" class="card-img-top" alt="${country.name.common}"></a>
                    <div class="card-body">
                        <h5 class="card-title">${country.translations.ces.common}</h5>
                        <p class="card-text"><strong>Hlavní Město:</strong> ${country.capital}</p>
                        <p class="card-text"><strong>Populace:</strong> ${country.population.toLocaleString()}</p>
                        <p class="card-text"><strong>Plocha:</strong> ${country.area.toLocaleString()} km²</p>
                        <p class="card-text"><strong>Jazyky:</strong> ${Object.values(country.languages).join(', ')}</p>
                        <p class="card-text"><strong>Region:</strong> ${country.region}</p>
                        <p class="card-text"><strong>Podregion:</strong> ${country.subregion}</p>
                        <p class="card-text"><strong>Měny:</strong> ${Object.values(country.currencies).map(currency => currency.name).join(', ')}</p>
                        <p class="card-text"><strong>Hranice:</strong> ${country.borders ? country.borders.join(', ') : "žádné"}</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>`
            
            document.getElementById('staty').innerHTML += stat
        })
    })
}

$('#regionDropdown button.dropdown-item').on("click", (e) => {
    $('#regionDropdown button.dropdown-toggle').text($(e.currentTarget).text())
    updateRegion($(e.currentTarget).data('region'))
});