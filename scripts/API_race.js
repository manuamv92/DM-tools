const API_URL = "https://www.dnd5eapi.co";


const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState == 4 && this.status == 200) {
        
const data = JSON.parse(this.response)

const tpl = data.results.map((race) => `<option ID='select_race' value='${race.url}'>${race.name}</option>`);

const HTMLresponse = document.querySelector("#race")

HTMLresponse.innerHTML = `<select class="form-select" aria-label="Default select example">
<option selected>select your race</option>
${tpl}
</select>`
    }
};

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/api/races`);
xhr.send();


