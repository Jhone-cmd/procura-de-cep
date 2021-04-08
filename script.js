function acessarAPI(link, executarfuncao){
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            executarfuncao(this.responseText) 
        
        }
        else{
    
        if (this.readyState == 4 && this.status == 0){
            limparCampos()
            alert('CEP INVÁLIDO, POR FAVOR DIGITE CORRETAMENTE')
        }
    }
    }
    xhttp.open('GET', link, true)
    xhttp.send()

    }

function buscarEndereço(obj){
    
        console.log(obj.value)
        acessarAPI(`https://viacep.com.br/ws/${obj.value}/json/`, preencherForm)
    
    }

function preencherForm(obj){

        console.log(obj)
        obj = JSON.parse(obj)
        document.getElementById('logradouro').value = obj.logradouro
        document.getElementById('complemento').value = obj.complemento
        document.getElementById('bairro').value = obj.bairro
        document.getElementById('localidade').value = obj.localidade
        document.getElementById('ibge').value = obj.ibge

    }

function limparCampos(){
        
        document.getElementById('logradouro').value = ''
        document.getElementById('complemento').value = ''
        document.getElementById('bairro').value = ''
        document.getElementById('localidade').value = ''
        document.getElementById('ibge').value = ''

    }
    
