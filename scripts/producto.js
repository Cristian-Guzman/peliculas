const infoMovies = [
    {capitana: 'Jackson.​ Situada en el año 1995, la historia sigue a Carol Danvers, una piloto de la Fuerza Aérea de Estados Unidos, que se convierte en la Capitana Marvel después de que la Tierra haya quedado atrapada en el centro de un conflicto intergaláctico entre dos razas alienígenas.'},
    {daylight: 'Años después de que una misteriosa plaga haya devastado el planeta y convertido a la mayoría de la humanidad en seres sedientos de sangre, un superviviente encuentra a más como él en una vieja comisaría de policía. Su propósito es llegar al santuario para ponerse a salvo de estos horribles seres que les acechan.'},
    {doctor: 'Doctor Strange sigue la historia del talentoso neurocirujano Doctor Stephen Strange quien, tras un trágico accidente automovilístico, debe poner a un lado su ego y aprender los secretos del mundo del misticismo y las dimensiones paralelas.'},
    {logan: 'En el año 2029 los mutantes dejaron de nacer desde hace 25 años quedando al borde de la extinción. Los X-Men han muerto y Wolverine, ahora conocido simplemente como "James Howlett" ha envejecido debido a que su factor de curación se ha debilitado, esto también provoca que sus heridas no sanen del todo.'},
    {mision: 'El hijo adolescente de un capo del narcotráfico en la India fue secuestrado por el cartel de Bangladesh. En lugar de pagar el rescate, el líder criminal ha decidido contratar a un mercenario para que se encargue de rescatar a su pequeño. El elegido es Tyler Rake, un ex-soldado de las Fuerzas Especiales de Australia.'},
    {shang: 'En chino, Shang-Chi quiere decir "aumento del espíritu", pero también es conocido en las historietas escritas como el Maestro de Kungfú y el Hermano de la Mano. No se trata de un superhéroe con habilidades especiales, sino de un especialista en el arte milenario del kungfú, así como en el wushu, más acrobático.'},
    {war: 'Dan Forester (Chris Pratt) vive tranquilo con su familia. En medio de una celebración se recibe en la Tierra un mensaje del año 2051 indicando que la humanidad puede desaparecer si no se combate a unos alienígenas en la guerra que se está librando en el futuro.'}
];

const movies = ['capitana', 'daylight', 'doctor', 'logan', 'mision', 'shang', 'war'];
const titulo = document.querySelector('.contenedor-producto h1');
const parrafo = document.querySelector('.contenedor-producto p');

const mostrarInfo = (val) => {
    let valor = val;
        if (valor == 'capitana') {
            titulo.innerHTML = "Capitana Marvel";
            parrafo.innerHTML = infoMovies[0].capitana;
        } else if(valor == 'daylight') {
            titulo.innerHTML = "Daylight's End";
            parrafo.innerHTML = infoMovies[1].daylight;
        } else if(valor == 'doctor') {
            titulo.innerHTML = "Doctor Strange";
            parrafo.innerHTML = infoMovies[2].doctor;
        } else if(valor == 'logan') {
            titulo.innerHTML = "Logan";
            parrafo.innerHTML = infoMovies[3].logan;
        } else if(valor == 'mision') {
            titulo.innerHTML = "Mision de Rescate";
            parrafo.innerHTML = infoMovies[4].mision;
        } else if(valor == 'shang') {
            titulo.innerHTML = "Shang-Chi";
            parrafo.innerHTML = infoMovies[5].shang;
        } else if(valor == 'war') {
            titulo.innerHTML = "The Tomorrow War";
            parrafo.innerHTML = infoMovies[6].war;
        }
}

for (const i of movies) {
    let val = localStorage.getItem(i);
    if (val == null) {
        val;
    } else {
        let valor = val;
        mostrarInfo(valor);
    }
}
