    document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();

    const equipamentos = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(e => e.name).join(", ");

    const formData = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        nomePersonagem: document.getElementById("nomePersonagem").value,
        datanascimento: document.querySelector('input[name="datanascimento"]').value,
        classe: document.querySelector('input[name="classe"]:checked')?.value || "Não selecionado",
        reino: document.querySelector('select[name="reino"]').value,
        equipamentos: equipamentos,
        mensagem: document.querySelector('textarea[name="mensagem"]').value
    };

    // ⚠️ Substitua pelos seus IDs do EmailJS
    const serviceID = "service_f22n73b";
    const templateID = "template_r4jfcac";

    emailjs.send(serviceID, templateID, formData).then(() => {
    const msg = document.getElementById("mensagemStatus");
    msg.innerText = "✅ E-mail enviado com sucesso!";
    msg.className = "sucesso"; // aplica classe
    document.getElementById("formContato").reset();
    })
    .catch((err) => {
    const msg = document.getElementById("mensagemStatus");
    msg.innerText = "❌ Erro ao enviar: " + JSON.stringify(err);
    msg.className = "erro"; // aplica classe
    });

});
