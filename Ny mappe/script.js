//henter html-elementer
const categoryMenu = document.getElementById('category-menu') //meny kategori
const resourceContent = document.getElementById('resource-content') //ressurser kategori
const pageTitle = document.getElementById('page-title') //overskrifter fra kategori

const categories = [...new Set(resources.map(r => r.category))] //Henter kategorier fra ressurser.js https://www.w3schools.com/js/js_sets.asp https://www.w3schools.com/howto/howto_js_spread_operator.asp 

categoryMenu.innerHTML = categories
    .map(category => `<li onclick="displayResources('${category}', this)">${category}</li>`)
    .join('') //genererer menyen med .map

function displayResources(category, clickedElement) { //Viser ressurser 
    pageTitle.textContent = category //oppdaterer overskriften på de ulike sidene

    document.querySelectorAll('#category-menu li').forEach(li => li.classList.remove('active')) //fjerner "active" fra alle knappene så de ikke holder seg hvit https://www.w3schools.com/jsref/met_document_queryselector.asp
    clickedElement.classList.add('active')

    const selectedResources = resources.filter(resource => resource.category === category) //Filtrer og vis ressurser med .map

    resourceContent.innerHTML = selectedResources
        .map(resource => `
            <article class="resource-item">
                <p>${resource.text}</p>
                <ul>
                    ${resource.sources.map(source => 
                        `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`
                    ).join('')}
                </ul>
            </article>
        `).join('') //genererer HTML for filtrerte ressurser med .map og fjerner komma med .join
}

const firstCategoryElement = document.querySelector("#category-menu li") //henter informasjon fra første knapp
firstCategoryElement.classList.add("active") //markerer når knappen er aktiv med hvit bakgrunn
displayResources('HTML', firstCategoryElement) //Viser HTML-kategori når siden refresher
