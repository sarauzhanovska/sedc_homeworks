const button = document.getElementById('button');
const header = document.getElementById('header');
const table = document.getElementById('table');
const nextBtn = document.getElementById('nextBtn');
const previousBtn = document.getElementById('previousBtn');

nextBtn.style.display='none';
previousBtn.style.display='none';

function printPlanet(planet) {
    const name = planet.name;
    const population = planet.population;
    const climate = planet.climate;
    const gravity = planet.gravity;

    tableId.innerHTML += `
    <table>
    <span></span>
    <td style="border: 1px solid"><b>Name:</b> </td>
    <td style="border: 1px solid"><b>Population:</b></td>
    <td style="border: 1px solid"><b>Climate:</b></td>
    <td style="border: 1px solid"><b>Gravity:</b></td>
    </tr>
    <tr>
    <td style="border: 1px solid"> ${name}</td>
    <td style="border: 1px solid"> ${population}</td>
    <td style="border: 1px solid"> ${climate}</td>
    <td style="border: 1px solid"> ${gravity}</td>
    </tr>
    </table>
    `
}



button.addEventListener('click', function () {
    fetch('https://swapi.dev/api/planets/?page=1')
        .then((data) => {
            data.json()
                .then(res => {
                    console.log(res.results);
                    for (let i = 0; i < res.results.length; i++) {
                        const result = res.results[i];
                        console.log(result);

                        printPlanet(result);
                    }

                    nextBtn.style.display = 'block';
                    button.style.display = 'none';
                })
        })
})


nextBtn.addEventListener('click', function () {
    fetch('https://swapi.dev/api/planets/?page=2')
        .then((data) => {
            data.json()
                .then(res => {
                    console.log(res.results);
                    for (let i = 0; i < res.results.length; i++) {
                        const results = res.results[i];
                        console.log(results);

                        printPlanet(results);
                    }
                    nextBtn.style.display = 'none';
                    previousBtn.style.display = 'block';
                })
        })
});

previousBtn.addEventListener('click', function(){
    fetch('https://swapi.dev/api/planets/?page=1')
        .then((data) => {
            data.json()
                .then(res => {
                    console.log(res.results);
                    tableId.innerHTML = '';
                    for (let i = 0; i < res.results.length; i++) {
                        const result = res.results[i];
                        console.log(result);

                        printPlanet(result);
                    }
                    nextBtn.style.display = 'block';
                    previousBtn.style.display = 'none';
                })
        })
})