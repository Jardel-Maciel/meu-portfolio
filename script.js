async function carregarProjetos() {
    const res = await fetch('./projetos.json');
    const projetos = await res.json();
    const grid = document.getElementById('projeto-grid');
    
    
    grid.innerHTML = projetos.map(p => `
        <div class="card ${p.destaque ? 'destaque' : ''}">
        <h2>${p.titulo}</h2>
        <p>${p.descricao}</p>
        <div class="tech-tags">
            ${p.tech.map(t => `span class="tag">${t}</span>`).join('')}
        </div>
        <a href="${p.link}" target="_blank> Verprojeto -> </a>
    </div>
        `).join('');
}

carregarProjetos();