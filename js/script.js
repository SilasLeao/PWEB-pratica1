const usuarios = [
  { nome: "Rafael", idade: 25, cpf: 12345678900 },
  { nome: "Teresa", idade: 30, cpf: 98765432100 },
];

const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const cpf = document.querySelector("#cpf");

const listaUserElement = document.createElement("ul");
document.body.appendChild(listaUserElement);

for (let user of usuarios) {
  inserirUserNaLista(user);
}

function verificarInputs() {
  if (nome.value === "" || idade.value === "" || cpf.value === "") {
    alert("Todos os campos devem ser preenchidos.");
    return false;
  }
  return true;
}

function inserirUsuario() {
  if (verificarInputs()) {
    const usuario = {
      nome: nome.value,
      idade: idade.value,
      cpf: cpf.value,
    };

    inserirUserNaLista(usuario);

    nome.value = "";
    idade.value = "";
    cpf.value = "";
  }
}

function inserirUserNaLista(usuario) {
  const liElement = document.createElement("li");
  const botaoRemoverElement = document.createElement("button");
  botaoRemoverElement.textContent = "X";
  botaoRemoverElement.addEventListener("click", () => {
    liElement.remove();
  });

  const spanNome = document.createElement("span");
  spanNome.textContent = "Nome: " + usuario.nome;
  spanNome.addEventListener("click", () => editSpan(spanNome, "nome", usuario));

  const spanIdade = document.createElement("span");
  spanIdade.textContent = "Idade: " + usuario.idade;
  spanIdade.addEventListener("click", () =>
    editSpan(spanIdade, "idade", usuario)
  );

  const spanCpf = document.createElement("span");
  spanCpf.textContent = "CPF: " + usuario.cpf;
  spanCpf.addEventListener("click", () => editSpan(spanCpf, "cpf", usuario));

  liElement.appendChild(spanNome);
  liElement.appendChild(document.createTextNode(" | "));
  liElement.appendChild(spanIdade);
  liElement.appendChild(document.createTextNode(" | "));
  liElement.appendChild(spanCpf);
  liElement.appendChild(botaoRemoverElement);

  listaUserElement.appendChild(liElement);
}

function editSpan(span, atributo, usuario) {
  const inputElement = document.createElement("input");
  inputElement.value = usuario[atributo];
  span.replaceWith(inputElement);

  inputElement.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      usuario[atributo] = inputElement.value;
      span.textContent =
        atributo.charAt(0).toUpperCase() +
        atributo.slice(1) +
        ": " +
        usuario[atributo];
      inputElement.replaceWith(span);
    }
  });

  inputElement.focus();
}
