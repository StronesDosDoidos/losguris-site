
function curtir(postId) {
  const el = document.querySelector(`#curtidas-${postId}`);
  let count = parseInt(el.innerText) || 0;
  el.innerText = count + 1;
}

function publicarPost() {
  const textarea = document.getElementById('novaPostagem');
  const texto = textarea.value;
  if (!texto) return;

  const postContainer = document.getElementById('posts');
  const novoPost = document.createElement('article');
  novoPost.innerHTML = `<h3>Você</h3><p>${texto}</p>`;
  postContainer.prepend(novoPost);
  textarea.value = '';
}

function enviarMensagem() {
  const input = document.getElementById('novaMensagem');
  const mensagens = document.getElementById('mensagensChat');
  const texto = input.value;
  if (!texto) return;

  const msg = document.createElement('p');
  msg.innerHTML = `<strong>Você:</strong> ${texto}`;
  mensagens.appendChild(msg);
  input.value = '';
}
