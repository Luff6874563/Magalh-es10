<script>
    function destacarItens(termo) {
        const itens = document.querySelectorAll('.item h2');
        itens.forEach(item => {
            const textoOriginal = item.textContent;
            const regex = new RegExp(termo, 'gi');
            const novoTexto = textoOriginal.replace(regex, match => `<span class="highlight">${match}</span>`);
            item.innerHTML = novoTexto;
        });
    }

    function pesquisar() {
        const termo = document.getElementById('search-bar').value;
        destacarItens(termo);
    }
</script>
<script>
    // Função para adicionar itens ao carrinho
    function adicionarAoCarrinho(item, preco) {
        const carrinho = document.getElementById('carrinho-items');
        const totalElement = document.getElementById('total');
        
        // Criar novo item do carrinho
        const li = document.createElement('li');
        li.textContent = `${item} - R$ ${preco.toFixed(2)}`;
        carrinho.appendChild(li);
        
        // Atualizar total
        let total = parseFloat(totalElement.textContent.replace('Total: R$ ', '').replace(',', '.'));
        total += preco;
        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    }

    // Função para salvar o carrinho no localStorage
    function salvarCarrinho() {
        const carrinhoItems = document.getElementById('carrinho-items').children;
        const totalElement = document.getElementById('total').textContent;
        
        const items = [];
        for (let item of carrinhoItems) {
            items.push(item.textContent);
        }
        
        localStorage.setItem('carrinhoItems', JSON.stringify(items));
        localStorage.setItem('total', totalElement);
        alert('Carrinho salvo com sucesso!');
    }

    // Função para carregar o carrinho do localStorage
    function carregarCarrinho() {
        const items = JSON.parse(localStorage.getItem('carrinhoItems'));
        const total = localStorage.getItem('total');
        
        if (items) {
            const carrinho = document.getElementById('carrinho-items');
            for (let item of items) {
                const li = document.createElement('li');
                li.textContent = item;
                carrinho.appendChild(li);
            }
        }
        
        if (total) {
            document.getElementById('total').textContent = total;
        }
    }

    // Carregar o carrinho quando a página for carregada
    window.onload = carregarCarrinho;
</script>
// Função para salvar o carrinho no localStorage
function salvarCarrinho() {
    const carrinhoItems = document.getElementById('carrinho-items').innerHTML;
    const total = document.getElementById('total').textContent;

    localStorage.setItem('carrinhoItems', carrinhoItems);
    localStorage.setItem('total', total);
    alert('Carrinho salvo com sucesso!');
}

// Função para carregar o carrinho do localStorage
function carregarCarrinho() {
    const items = localStorage.getItem('carrinhoItems');
    const total = localStorage.getItem('total');

    if (items) {
        document.getElementById('carrinho-items').innerHTML = items;
    }

    if (total) {
        document.getElementById('total').textContent = total;
    }
}

// Carregar o carrinho quando a página for carregada
window.onload = carregarCarrinho;
