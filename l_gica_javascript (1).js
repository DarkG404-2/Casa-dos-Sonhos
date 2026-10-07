// Base de Dados Inicial Padrão para Apartamento de 2 Pessoas
const defaultApartmentData = [
    {
        id: 'sala',
        title: 'Sala de Estar / TV',
        icon: '🛋️',
        owner: 'Ambos',
        status: 'Em Planejamento 📐',
        photoMarcella: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
        photoGabriel: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
        notes: 'Sofá retrátil cinza neutro, iluminação quente (3000k) e painel minimalista.',
        items: [
            { id: 101, text: 'Sofá retrátil confortável', done: true, by: 'Marcella' },
            { id: 102, text: 'Painel de TV minimalista', done: false, by: 'Gabriel' },
            { id: 103, text: 'Soundbar + Subwoofer', done: false, by: 'Gabriel' }
        ]
    },
    {
        id: 'cozinha',
        title: 'Cozinha & Copa',
        icon: '🍳',
        owner: 'Marcella',
        status: 'Ideia / Inspiração 💡',
        photoMarcella: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
        photoGabriel: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
        notes: 'Bancada em quartzo escuro e torneria preta fosca.',
        items: [
            { id: 201, text: 'Air Fryer estilosa', done: true, by: 'Marcella' },
            { id: 202, text: 'Geladeira Inox Frost Free', done: false, by: 'Gabriel' }
        ]
    },
    {
        id: 'varanda',
        title: 'Varanda Gourmet',
        icon: '🪴',
        owner: 'Ambos',
        status: 'Em Planejamento 📐',
        photoMarcella: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        photoGabriel: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        notes: 'Mesa bistrô de madeira, churrasqueira elétrica e cantinho do café.',
        items: [
            { id: 301, text: 'Mesa bistrô com banquetas', done: false, by: 'Marcella' },
            { id: 302, text: 'Churrasqueira elétrica', done: false, by: 'Gabriel' }
        ]
    },
    {
        id: 'quarto-principal',
        title: 'Suíte Principal',
        icon: '🛏️',
        owner: 'Ambos',
        status: 'Comprando Móveis 🛒',
        photoMarcella: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
        photoGabriel: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
        notes: 'Cabeceira estofada até o teto e iluminação indireta acochegante.',
        items: [
            { id: 401, text: 'Cama Queen Size', done: false, by: 'Ambos' },
            { id: 402, text: 'Mesinhas de cabeceira suspensas', done: true, by: 'Marcella' }
        ]
    },
    {
        id: 'banheiro-suite',
        title: 'Banheiro Suíte',
        icon: '🚿',
        owner: 'Marcella',
        status: 'Ideia / Inspiração 💡',
        photoMarcella: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
        photoGabriel: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80',
        notes: 'Nicho iluminado para xampus e chuveiro de alta pressão.',
        items: [
            { id: 501, text: 'Chuveiro de teto', done: false, by: 'Gabriel' },
            { id: 502, text: 'Espelho redondo com LED', done: true, by: 'Marcella' }
        ]
    },
    {
        id: 'banheiro-social',
        title: 'Banheiro Social / Lavabo',
        icon: '🧼',
        owner: 'Ambos',
        status: 'Concluído ✨',
        photoMarcella: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
        photoGabriel: 'https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?auto=format&fit=crop&w=800&q=80',
        notes: 'Tom mais escuro e elegante para visitas com difusor de aromas.',
        items: [
            { id: 601, text: 'Kits de lavabo e aroma', done: true, by: 'Marcella' }
        ]
    },
    {
        id: 'escritorio',
        title: 'Home Office',
        icon: '💻',
        owner: 'Gabriel',
        status: 'Comprando Móveis 🛒',
        photoMarcella: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
        photoGabriel: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=800&q=80',
        notes: 'Duas estações de trabalho e espaço confortável para estudos.',
        items: [
            { id: 701, text: 'Cadeira ergonômica Mesh', done: true, by: 'Gabriel' },
            { id: 702, text: 'Suporte articulado para monitores', done: true, by: 'Gabriel' }
        ]
    },
    {
        id: 'lavanderia',
        title: 'Área de Serviço / Lavanderia',
        icon: '🧺',
        owner: 'Ambos',
        status: 'Em Planejamento 📐',
        photoMarcella: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80',
        photoGabriel: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80',
        notes: 'Máquina Lava e Seca e varal retrátil oculto.',
        items: [
            { id: 801, text: 'Lava e Seca Inverter', done: false, by: 'Ambos' },
            { id: 802, text: 'Varal retrátil', done: true, by: 'Marcella' }
        ]
    }
];

let rooms = [];
let currentFilter = 'todos';

// Inicializar Aplicativo
function initApp() {
    const stored = localStorage.getItem('ape_marcella_gabriel_data');
    if (stored) {
        try {
            rooms = JSON.parse(stored);
        } catch (err) {
            rooms = defaultApartmentData;
        }
    } else {
        rooms = defaultApartmentData;
    }

    const storedCover = localStorage.getItem('ape_marcella_gabriel_cover');
    if (storedCover) {
        document.getElementById('cover-img').src = storedCover;
    }

    render();
}

// Salvar em LocalStorage
function saveData() {
    localStorage.setItem('ape_marcella_gabriel_data', JSON.stringify(rooms));
    render();
}

// Renderização Geral
function render() {
    renderMetrics();
    renderGrid();
}

// Renderizar Estatísticas
function renderMetrics() {
    const totalRooms = rooms.length;
    const completedRooms = rooms.filter(r => r.status.includes('Concluído')).length;

    let totalItems = 0;
    let doneItems = 0;

    rooms.forEach(r => {
        if (r.items) {
            totalItems += r.items.length;
            doneItems += r.items.filter(i => i.done).length;
        }
    });

    const overallPercent = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;

    document.getElementById('stat-total-rooms').innerText = totalRooms;
    document.getElementById('stat-completed-rooms').innerText = completedRooms;
    document.getElementById('stat-items-progress').innerText = `${overallPercent}%`;

    document.getElementById('overall-progress-bar').style.width = `${overallPercent}%`;
    document.getElementById('overall-progress-text').innerText = `${overallPercent}%`;
}

// Renderizar Cards de Cômodos
function renderGrid() {
    const grid = document.getElementById('rooms-grid');
    grid.innerHTML = '';

    const filtered = rooms.filter(r => currentFilter === 'todos' || r.owner === currentFilter);

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; padding: 40px; text-align: center; background: var(--card-notion); border-radius: 16px; border: 1px solid var(--border-notion);">
                <p style="color: var(--text-muted); font-size: 13px;">Nenhum cômodo para este filtro.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(room => {
        const totalItems = room.items ? room.items.length : 0;
        const doneItems = room.items ? room.items.filter(i => i.done).length : 0;
        const roomPercent = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;

        const ownerBadgeClass = room.owner === 'Marcella' ? 'badge-marcella' : (room.owner === 'Gabriel' ? 'badge-gabriel' : 'badge-ambos');

        const cardHtml = `
            <div class="room-card">
                <div>
                    <!-- Header do Card -->
                    <div class="room-card-header">
                        <div class="room-card-title-row">
                            <div class="room-icon-title">
                                <span class="room-icon">${room.icon || '🏠'}</span>
                                <div>
                                    <div class="room-title-text">${room.title}</div>
                                    <span class="badge ${ownerBadgeClass}">${room.owner}</span>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span class="status-badge">${room.status}</span>
                                <button onclick="openEditModal('${room.id}')" class="btn btn-secondary btn-icon-only" style="padding: 4px 8px;">
                                    <i class="fa-solid fa-pen" style="font-size: 11px;"></i>
                                </button>
                            </div>
                        </div>

                        <div class="room-progress-bar">
                            <div class="room-progress-fill" style="width: ${roomPercent}%;"></div>
                        </div>
                    </div>

                    <!-- Fotos Lado a Lado -->
                    <div class="photos-comparison">
                        <div class="photos-label">Fotos de Inspiração:</div>
                        <div class="photos-grid">
                            <div class="photo-box" onclick="openLightbox('${room.photoMarcella || 'https://placehold.co/600x400/222222/e5a4b4?text=Marcella'}', 'Inspiração da Marcella • ${room.title}')">
                                <img src="${room.photoMarcella || 'https://placehold.co/600x400/222222/e5a4b4?text=Marcella'}" onerror="this.src='https://placehold.co/600x400/222222/e5a4b4?text=Marcella'">
                                <span class="photo-owner-tag" style="color: var(--marcella-color);">🌸 Marcella</span>
                            </div>
                            <div class="photo-box" onclick="openLightbox('${room.photoGabriel || 'https://placehold.co/600x400/222222/7ca1c7?text=Gabriel'}', 'Inspiração do Gabriel • ${room.title}')">
                                <img src="${room.photoGabriel || 'https://placehold.co/600x400/222222/7ca1c7?text=Gabriel'}" onerror="this.src='https://placehold.co/600x400/222222/7ca1c7?text=Gabriel'">
                                <span class="photo-owner-tag" style="color: var(--gabriel-color);">⚡ Gabriel</span>
                            </div>
                        </div>
                    </div>

                    <!-- Anotações -->
                    ${room.notes ? `
                    <div class="room-notes">
                        <div class="notes-box">
                            <i class="fa-regular fa-lightbulb"></i>
                            <span>${room.notes}</span>
                        </div>
                    </div>
                    ` : ''}
                </div>

                <!-- Checklist de Itens -->
                <div class="checklist-section">
                    <div class="photos-label">Móveis &amp; Detalhes:</div>
                    <div class="items-list">
                        ${(room.items || []).map(item => `
                            <div class="item-row">
                                <div class="item-left">
                                    <input type="checkbox" ${item.done ? 'checked' : ''} onchange="toggleItem('${room.id}', ${item.id})" style="accent-color: var(--ambos-color); cursor: pointer;">
                                    <span class="item-text ${item.done ? 'completed' : ''}">${item.text}</span>
                                </div>
                                <div class="item-actions">
                                    <span class="badge ${item.by === 'Marcella' ? 'badge-marcella' : (item.by === 'Gabriel' ? 'badge-gabriel' : 'badge-ambos')}">${item.by}</span>
                                    <button onclick="removeItem('${room.id}', ${item.id})" class="delete-item-btn"><i class="fa-solid fa-xmark"></i></button>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Adicionar Item Rápido -->
                    <form onsubmit="addItem(event, '${room.id}')" class="add-item-form">
                        <input type="text" id="input-item-${room.id}" placeholder="Novo item..." required class="form-input add-item-input">
                        <select id="select-by-${room.id}" class="form-select">
                            <option value="Ambos">Ambos</option>
                            <option value="Marcella">Marcella</option>
                            <option value="Gabriel">Gabriel</option>
                        </select>
                        <button type="submit" class="btn btn-secondary btn-icon-only"><i class="fa-solid fa-plus"></i></button>
                    </form>
                </div>
            </div>
        `;
        grid.innerHTML += cardHtml;
    });
}

// Filtrar Cômodos
function setFilter(filter) {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`filter-${filter.toLowerCase()}`).classList.add('active');
    renderGrid();
}

// Alternar Status do Item
function toggleItem(roomId, itemId) {
    const room = rooms.find(r => r.id === roomId);
    if (room) {
        const item = room.items.find(i => i.id === itemId);
        if (item) {
            item.done = !item.done;
            saveData();
        }
    }
}

// Adicionar Novo Item à Lista
function addItem(e, roomId) {
    e.preventDefault();
    const input = document.getElementById(`input-item-${roomId}`);
    const select = document.getElementById(`select-by-${roomId}`);
    const text = input.value.trim();

    if (!text) return;

    const room = rooms.find(r => r.id === roomId);
    if (room) {
        if (!room.items) room.items = [];
        room.items.push({
            id: Date.now(),
            text: text,
            done: false,
            by: select.value
        });
        input.value = '';
        saveData();
    }
}

// Remover Item
function removeItem(roomId, itemId) {
    const room = rooms.find(r => r.id === roomId);
    if (room) {
        room.items = room.items.filter(i => i.id !== itemId);
        saveData();
    }
}

// Abrir Modal de Edição
function openEditModal(roomId) {
    const room = rooms.find(r => r.id === roomId);
    if (!room) return;

    document.getElementById('edit-room-id').value = room.id;
    document.getElementById('edit-room-title').value = room.title;
    document.getElementById('edit-room-owner').value = room.owner;
    document.getElementById('edit-room-status').value = room.status;
    document.getElementById('edit-photo-marcella').value = room.photoMarcella || '';
    document.getElementById('edit-photo-gabriel').value = room.photoGabriel || '';
    document.getElementById('edit-room-notes').value = room.notes || '';

    document.getElementById('edit-modal').classList.add('active');
}

// Salvar Alterações do Cômodo
function saveRoomChanges(e) {
    e.preventDefault();
    const id = document.getElementById('edit-room-id').value;
    const room = rooms.find(r => r.id === id);

    if (room) {
        room.title = document.getElementById('edit-room-title').value;
        room.owner = document.getElementById('edit-room-owner').value;
        room.status = document.getElementById('edit-room-status').value;
        room.photoMarcella = document.getElementById('edit-photo-marcella').value;
        room.photoGabriel = document.getElementById('edit-photo-gabriel').value;
        room.notes = document.getElementById('edit-room-notes').value;

        saveData();
        closeModal('edit-modal');
    }
}

// Excluir Cômodo
function deleteCurrentRoom() {
    const id = document.getElementById('edit-room-id').value;
    rooms = rooms.filter(r => r.id !== id);
    saveData();
    closeModal('edit-modal');
}

// Modal de Novo Cômodo
function openAddRoomModal() {
    document.getElementById('add-modal').classList.add('active');
}

function createNewRoom(e) {
    e.preventDefault();
    const title = document.getElementById('add-room-title').value;
    const icon = document.getElementById('add-room-icon').value || '🏠';
    const owner = document.getElementById('add-room-owner').value;

    rooms.push({
        id: 'room-' + Date.now(),
        title: title,
        icon: icon,
        owner: owner,
        status: 'Ideia / Inspiração 💡',
        photoMarcella: '',
        photoGabriel: '',
        notes: '',
        items: []
    });

    saveData();
    closeModal('add-modal');
    document.getElementById('add-room-title').value = '';
}

// Fechar Modais
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Abrir Foto no Lightbox
function openLightbox(url, caption) {
    if (!url) return;
    document.getElementById('lightbox-img').src = url;
    document.getElementById('lightbox-caption').innerText = caption;
    document.getElementById('lightbox-modal').classList.add('active');
}

// Alterar Capa
function changeCoverImage() {
    const current = document.getElementById('cover-img').src;
    const newUrl = prompt('Insira a URL da nova imagem de capa:', current);
    if (newUrl && newUrl.trim() !== '') {
        document.getElementById('cover-img').src = newUrl;
        localStorage.setItem('ape_marcella_gabriel_cover', newUrl);
    }
}

// Exportar Dados JSON
function exportData() {
    const jsonStr = JSON.stringify(rooms, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'casa_dos_sonhos_marcella_gabriel.json';
    a.click();
    URL.revokeObjectURL(url);
}

// Importar JSON
function importDataPrompt() {
    const jsonInput = prompt('Cole o conteúdo do backup em formato JSON aqui:');
    if (jsonInput) {
        try {
            const parsed = JSON.parse(jsonInput);
            if (Array.isArray(parsed)) {
                rooms = parsed;
                saveData();
            } else {
                alert('Formato de JSON inválido.');
            }
        } catch (e) {
            alert('Erro ao processar JSON inserido.');
        }
    }
}

// Resetar Padrão
function resetToDefaults() {
    rooms = defaultApartmentData;
    saveData();
}

// Inicializar aplicação ao carregar
window.onload = initApp;