function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.getElementById('res');

    if(fAno.value.length == 0 || fAno.value > ano){
       alert('ERRO! Verifique os dados e tente novamente.');
    }
    else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id' , 'foto'); 
        
        if(fsex[0].checked){
            genero = 'homem';

            //verificação idade homem
            if(idade >= 0 && idade < 14){
                //criança
                img.setAttribute('src', 'img/crianca-m.png');
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-m.png');
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulto-m.png');
            }
            else{
                //idoso
                img.setAttribute('src', 'img/idoso-m.png');
            }
        }
        else{
            genero = 'mulher';

            //verificação idade mulher
            if(idade >= 0 && idade < 14){
                //criança
                img.setAttribute('src', 'img/crianca-f.png');
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-f.png');
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulto-f.png');
            }
            else{
                //idoso
                img.setAttribute('src', 'img/idoso-f.png');
            }
        }
        
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}