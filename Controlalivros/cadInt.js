document.addEventListener("DOMContentLoaded", () => {
    const btnSave = document.getElementById("btnSave");
    const messgCadastro = document.getElementById("messgCadastro");

    btnSave.addEventListener("click", () => {
        // Captura dos elementos e valores do formulário
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senhaCad").value;
        const nome = document.getElementById("nome").value.trim();
        const dataNasci = document.getElementById("dataNasci").value;
        const cpf = document.getElementById("cpd").value.trim(); // No HTML está id="cpd"
        const workplace = document.getElementById("workplace").value;

        // Validação de campos vazios
        if (!email || !senha || !nome || !dataNasci || !cpf || !workplace) {
            exibirMensagem("Por favor, preencha todos os campos obrigatórios.", "erro");
            return;
        }

        // Validação da senha (entre 8 e 32 caracteres e sem espaços)
        if (senha.length < 8 || senha.length > 32) {
            exibirMensagem("A senha deve conter entre 8 e 32 caracteres.", "erro");
            return;
        }

        if (/\s/.test(senha)) {
            exibirMensagem("A senha não pode conter espaços em branco.", "erro");
            return;
        }

        // Criar objeto com dados do utilizador
        const usuario = {
            email: email,
            senha: senha,
            nome: nome,
            dataNasci: dataNasci,
            cpf: cpf,
            workplace: workplace
        };

        // Guardar no localStorage
        localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));

        exibirMensagem("Cadastro realizado com sucesso! A redirecionar para o login...", "sucesso");

        // Redireciona para a página de login após 2 segundos
        setTimeout(() => {
            window.location.href = "sistemaInt.html";
        }, 2000);
    });

    function exibirMensagem(texto, tipo) {
        messgCadastro.textContent = texto;
        messgCadastro.style.color = tipo === "sucesso" ? "green" : "red";
    }
});