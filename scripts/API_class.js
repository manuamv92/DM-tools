const API_URL = "https://www.dnd5eapi.co";


const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState == 4 && this.status == 200) {
        
const data = JSON.parse(this.response)

const tpl = data.results.map((clase) => `<option ID='select_class' value='${clase.url}'>${clase.name}</option>`);

const HTMLresponse = document.querySelector("#class")

HTMLresponse.innerHTML = `<select class="form-select" aria-label="Default select example">
<option selected>select your class</option>
${tpl}
</select>`
    }
};

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/api/classes`);
xhr.send();