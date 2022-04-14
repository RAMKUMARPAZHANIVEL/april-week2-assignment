const image = document.querySelector('img')

image.addEventListener('mouseover', larger)


function larger(){
    image.classList='normalsize'

}

image.addEventListener('mouseout', smaller)
function smaller(){
    image.classList='largesize'
}

