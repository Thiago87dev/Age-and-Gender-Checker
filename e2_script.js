var botao = document.querySelector('#btn')
botao.addEventListener('click', verificar)

function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    var img = document.createElement('img') // criando o elemento img
    img.setAttribute('id', 'foto') // setando o atributo id = "foto"

    if(anoNasc.value.length == 0 || anoNasc.value > anoAtual){
        alert('Ano de nascimento incorreto')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - anoNasc.value
        var genero = ''
        if(sexo[0].checked){
            genero = 'homem'
            if(idade <= 12){
                img.setAttribute('src', 'assets/menino.png') //setando outro atributo no elemento img src = "assets/menino.png"
            }else if(idade <= 20){
                img.setAttribute('src', 'assets/jovem_h.png')//                             ''
            }else if(idade <=59){
                img.setAttribute('src', 'assets/adulto.png') //                             ''
            }else{
                img.setAttribute('src', 'assets/velho.png')  //                             ''
            }
        }else if(sexo[1].checked){
            genero = 'mulher'
            if(idade <= 12){
                img.setAttribute('src', 'assets/menina.png') //                             ''
            }else if(idade <= 20){
                img.setAttribute('src', 'assets/jovem_m.png')//                             ''
            }else if(idade <=59){
                img.setAttribute('src', 'assets/adulta.png') //                             ''
            }else{
                img.setAttribute('src', 'assets/velha.png')  //                             ''          
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `vc é ${genero} e tem ${idade} anos`
        res.appendChild(img)//inserindo o elemento img (com os devidos atributos) na div de resultado
    }
}