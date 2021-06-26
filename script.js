/*
Author: Marcelo Silveira Hayden
File target: index.html
*/
// Variables
var the_list = document.getElementById('the_list')
var user_media_items = []
// Arrays
var matriz_tmp = ['SSSS.Gridman', 'https://www.anitube.in/anime/ssss-gridman', ['Anime'], 'Após assistí-lo, assistir SSSS.Dynazenon']

// General actions
// To load the list
the_list.innerHTML += '<li class="media_card">'
for (var i = 0; i <= matriz_tmp.length; i++) {
    console.log('Passou no for ' + matriz_tmp[i])
    the_list.firstElementChild.innerHTML += matriz_tmp[i]
}

// This function is gonna ask the user the informations needed to creat an element for the list
// Esta função irá pedir ao usuário as informações necessárias para criar um elemento na lista
function toAdd() {
    // Pede o título. Se não houver, não adicionará nada.
    var tmp_title = prompt('Title:')
    if (tmp_title != '') {
        the_list.innerHTML += '<li class="media_card">'
        // Adiciona o título ao DOM
        the_list.lastElementChild.innerHTML += '<h2>' + tmp_title + '</h2>'
        // Pede o link
        var tmp_link = prompt('A link:')
        if (tmp_link != '' && tmp_link != null) {
            the_list.lastElementChild.innerHTML += '<a href=' + tmp_link + '>Assistir em www.site.com</a>'
        } else {
            the_list.lastElementChild.innerHTML += '<p>There is no link yet.</p>'
        }
        // Pede por tags
        var tmp_tags = prompt('Tags?')
        if (tmp_tags != '' && tmp_tags != null) {
            the_list.lastElementChild.innerHTML += '<div class="tags">' + tmp_tags + '</div>'
        }
        // Pede por notas
        var tmp_notes = prompt('Any notes?')
        if (tmp_notes != '' && tmp_notes != null) {
            the_list.lastElementChild.innerHTML += '<p class="note">' + tmp_notes + '</p>'
        }
        the_list.lastElementChild.innerHTML += '<div class="buttons"><button onclick="toExclude()">Exclude</button></div>'
    } else {
        console.log('Nothing added.')
    }
}

function undoMessageBox() {
    console.log('Undo?')
}
function toExclude() {
    console.log('Excluded')
    undoMessageBox()
}