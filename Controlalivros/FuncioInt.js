document.addEventListener("DOMContentLoaded", () => {
    const btnConfirma = document.getElementById("btnConfirma");
    const feedback = document.getElementById("Feedback");

    btnConfirma.addEventListener("click", () => {
        // Captura dos valores (no HTML do login o ID do email está como "useuario")
        const emailInput = document.getElementById("useuario").value.trim();
        const senhaInput = document.getElementById("senha").value;

        if (!emailInput || !senhaInput) {
            exibirFeedback("Por favor, preencha o email e a senha.", "erro");
            return;
        }

        // Obter utilizador guardado no localStorage
        const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioCadastrado"));

        if (!usuarioGuardado) {
            exibirFeedback("Nenhum utilizador registado encontrado. Crie uma conta primeiro.", "erro");
            return;
        }

        // Validação de credenciais
        if (emailInput === usuarioGuardado.email && senhaInput === usuarioGuardado.senha) {
            exibirFeedback(`Bem-vindo(a), ${usuarioGuardado.nome}! Login efetuado com sucesso.`, "sucesso");
            
            // Aqui pode redirecionar para o painel principal do sistema após o login
            // setTimeout(() => { window.location.href = "dashboard.html"; }, 1500);
        } else {
            exibirFeedback("Email ou senha incorretos. Tente novamente.", "erro");
        }
    });

    function exibirFeedback(texto, tipo) {
        feedback.textContent = texto;
        feedback.style.color = tipo === "sucesso" ? "green" : "red";
    }
});