const button = document.querySelector(".btn-calcular");
button.addEventListener("click", calcularMargem);

function calcularMargem() {
    let renda1 = Number(document.getElementById("renda1").value);
    let renda2 = Number(document.getElementById("renda2").value);
    let renda3 = Number(document.getElementById("renda3").value);
    let desconto1 = Number(document.getElementById("desconto1").value);
    let desconto2 = Number(document.getElementById("desconto2").value);

    let rendaTotal = renda1 + renda2 + renda3;
    let rendaDesconto = rendaTotal - desconto1 - desconto2;
    let margem = rendaDesconto * 0.3;
    
    window.alert(`A margem é de R$${margem}`);
}



