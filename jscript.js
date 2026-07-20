function enviarMensagem(event) {
    if(mensagem.value == '' || nome.value == '') {
        alert('Por favor, preencha todos os campos antes de enviar a mensagem. Burro!')
    } else {
        
        event.preventDefault()

        let nome = document.getElementById('nome').value
        let mensagem = document.getElementById('mensagem').value
        let celular = '5512981797919'

        let texto = `Olá, meu nome é ${nome} e minha mensagem é: ${mensagem}`
        let msgformatada = encodeURIComponent(texto)

        let url = `https://wa.me/${celular}?text=${msgformatada}`

        console.log(url)

        window.open(url, '_blank')
    }
}