function mudaFoto(foto){
    document.getElementById("icone").src = foto;
}

function validarFormulario(){
    // alert('na function');
    if(!validarCpf()){
        // alert('no if');
        alert("O CPF é Inválido");
        return false;
    }
}

function validarCpf(){
    var txCpf = document.getElementById("cCpf").value;
    // alert(txCpf);
    var cpf = [];
    // - 01234567891
    // - 11144477700
    // Banana,Laranja,Limão

    if(txCpf.length != 11){
        console.log(txCpf.lenght+"Cpf Inválido");
        return false;
    }

    cpf = txCpf.split('');

    var tsDigitos = false;

    for (c in cpf){
        if(cpf[0] != cpf[c]){
            console.log("Quantidade incorreta de digitos");
            tsDigitos = true;
        }
    }
    if(!tsDigitos){
        console.log("Todos os digitos são iguais");
        return false;
    }

    var cont = 0;
    var somaResultado = 0;
    for(var i = 10; i >=2;i--){
        console.log(i+" "+cont+" digito:"+cpf[cont]+" mult:"+cpf[cont]*i);
        somaResultado += cpf[cont]*i;
        cont++;
    }
    console.log("A soma é "+somaResultado);
    var vlDig = somaResultado % 11;
    console.log("resto:"+vlDig);
    var dig01 = 0;
    if(vlDig >= 2){
        dig01 = 11 - vlDig;
    } 
    console.log("Valor do primeiro digito verificador "+dig01);
    // cpf[9] = dig01;
    if(cpf[9] != dig01){
        console.log("Primeiro Digito Divergente");
        return false;
    }

    // Cal o segundo Dig Verificador
    cont = 0;
    somaResultado = 0;
    for(var i = 10 + 1; i >=2;i--){
        console.log(i+" "+cont+" digito:"+cpf[cont]+" mult:"+cpf[cont]*i);
        somaResultado += cpf[cont]*i;
        cont++;
    }
    console.log("A soma é "+somaResultado);
    var vlDig = somaResultado % 11;
    console.log("resto:"+vlDig);

    var dig02 = 0;
    if(vlDig >= 2){
        dig02 = 11 - vlDig;
    } 

    console.log("Valor do segundo digito verificador "+dig02);
    if(cpf[10] != dig02){
        console.log("Segundo Digito Divergente");
        return false;
    }
    console.log("CPF válido");
    return true;
}