const map_url = process.env.GOOGLE_MAP_URL;
const map_documentElement = document.getElementById("mymap-iframe");

window.onload = () => {
    map_documentElement.src = `${map_url}`;
}


