$('document').ready(() => {
    commenter()
    $("#send").on('click',()=>{
        selectionGenre()
    })
    
})

const commenter = () => {
    $('#click_msg').click(() => {
        $('#champ').slideDown('slow')
    })
}

const selectionGenre = () => {
    let femme_check = $('#Femme').val()
    let homme_check = $('#Homme').val()

    alert(femme_check)
    alert(homme_check)
}

