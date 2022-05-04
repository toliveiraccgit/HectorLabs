
function checarEmail(){
    if( document.querySelector('#mce-EMAIL').value=="" 
       || document.querySelector('#mce-EMAIL').value.indexOf('@')==-1 
         || document.querySelector('#mce-EMAIL').value.indexOf('.')==-1){
            document.querySelector('#mce-EMAIL').style.color = ` #FF1919 `
            document.querySelector('#mce-EMAIL').style.border = ` 1px solid #F50041 `
            document.querySelector('.span__erro-email').style.visibility = ` visible `
         }else{
            document.querySelector('#mce-EMAIL').style.color = ` #4A4A4A`
            document.querySelector('#mce-EMAIL').style.border = ` 1px solid transparent `
            document.querySelector('.span__erro-email').style.visibility = ` hidden `
        }
}