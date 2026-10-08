// ==========================================================================
// DADOS INICIAIS E GERENCIAMENTO DE ESTADO
// ==========================================================================

// Dados iniciais de exemplo (caso o usuário não tenha nada salvo)
const INITIAL_ROOMS = [
  {
    id: "1",
    name: "Sala de Estar Aconchegante",
    owner: "Ambos",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
    style: "Minimalista Quente & Iluminação Indireta",
    notes: "Queremos um sofá retrátil em tom cinza ou fendi, fita LED no painel da TV e muitas plantas para trazer vida."
  },
  {
    id: "2",
    name: "Cozinha Integrada",
    owner: "Marcella",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    style: "Contemporânea Dark & Madeira",
    notes: "Armários pretos foscos combinados com madeira clara. Torneira gourmet preta e bancada em quartzo."
  },
  {
    id: "3",
    name: "Cantinho do Café & Bar",
    owner: "Gabriel",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    style: "Industrial Elegante",
    notes: "Prateleiras suspensas de metal, máquina de espresso manual e luzes quentes vintage."
  }
];

const DEFAULT_COVER = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80";

// Estado da Aplicação
let rooms = JSON.parse(localStorage.getItem("dream_house_rooms")) || INITIAL_ROOMS;
let coverUrl = localStorage.getItem("dream_house_cover") || DEFAULT_COVER;
let currentFilter = "Todos";

// ==========================================================================
// ELEMENTOS DO DOM
// ==========================================================================
const heroCover = document.getElementById("heroCover");
const btnChangeCover = document.getElementById("btnChangeCover");
const coverModal = document.getElementById("coverModal");
const coverForm = document.getElementById("coverForm");
const coverImageUrlInput = document.getElementById("coverImageUrl");
const btnCloseCoverModal = document.getElementById("btnCloseCoverModal");
const btnCancelCoverModal = document.getElementById("btnCancelCoverModal");

const roomsGrid = document.getElementById("roomsGrid");
const statTotalRooms = document.getElementById("statTotalRooms");
const statIdeasCount = document.getElementById("statIdeasCount");

const btnAddRoom = document.getElementById("btnAddRoom");
const roomModal = document.getElementById("roomModal");
const roomForm = document.getElementById("roomForm");
const modalTitle = document.getElementById("modalTitle");
const btnCloseModal = document.getElementById("btnCloseModal");
const btnCancelModal = document.getElementById("btnCancelModal");

const editRoomId = document.getElementById("editRoomId");
const roomNameInput = document.getElementById("roomName");
const roomOwnerSelect = document.getElementById("roomOwner");
const roomImageInput = document.getElementById("roomImage");
const roomStyleInput = document.getElementById("roomStyle");
const roomNotesInput = document.getElementById("roomNotes");

const filterButtons = document.querySelectorAll(".filter-btn");

// ==========================================================================
// INICIALIZAÇÃO E EVENTOS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  applyCoverImage(coverUrl);
  renderRooms();
  setupEventListeners();
});

function setupEventListeners() {
  // Troca de Capa
  btnChangeCover.addEventListener("click", () => {
    coverImageUrlInput.value = coverUrl;
    openModal(coverModal);
  });
  
  btnCloseCoverModal.addEventListener("click", () => closeModal(coverModal));
  btnCancelCoverModal.addEventListener("click", () => closeModal(coverModal));

  coverForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newUrl = coverImageUrlInput.value.trim();
    if (newUrl) {
      coverUrl = newUrl;
      localStorage.setItem("dream_house_cover", coverUrl);
      applyCoverImage(coverUrl);
      closeModal(coverModal);
    }
  });

  // Modal de Cômodo
  btnAddRoom.addEventListener("click", () => {
    modalTitle.textContent = "Planejar Novo Cômodo";
    roomForm.reset();
    editRoomId.value = "";
    openModal(roomModal);
  });

  btnCloseModal.addEventListener("click", () => closeModal(roomModal));
  btnCancelModal.addEventListener("click", () => closeModal(roomModal));

  roomForm.addEventListener("submit", handleSaveRoom);

  // Filtros
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderRooms();
    });
  });
}

// ==========================================================================
// FUNÇÕES RENDERIZAÇÃO E REGRA DE NEGÓCIO
// ==========================================================================
function applyCoverImage(url) {
  heroCover.style.backgroundImage = `url('${url}')`;
}

function renderRooms() {
  // Filtragem
  const filtered = currentFilter === "Todos" 
    ? rooms 
    : rooms.filter(r => r.owner === currentFilter);

  // Atualiza Métricas Inspiracionais
  statTotalRooms.textContent = rooms.length;
  const totalNotes = rooms.reduce((acc, curr) => acc + (curr.notes ? 1 : 0) + (curr.image ? 1 : 0), 0);
  statIdeasCount.textContent = totalNotes;

  // Render Grid
  roomsGrid.innerHTML = "";

  if (filtered.length === 0) {
    roomsGrid.innerHTML = `
      <div class="empty-state">
        <h3>Nenhum cômodo encontrado para "${currentFilter}"</h3>
        <p>Clique em "Adicionar Novo Cômodo" para registrar novas ideias!</p>
      </div>
    `;
    return;
  }

  filtered.forEach(room => {
    const card = document.createElement("div");
    card.className = "room-card";
    
    // Imagem com fallback elegante
    const imgUrl = room.image || 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80';

    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${imgUrl}" alt="${room.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'">
        <span class="owner-badge ${room.owner}">${room.owner}</span>
        
        <div class="card-actions-overlay">
          <button class="icon-btn" onclick="editRoom('${room.id}')" title="Editar">✏️</button>
          <button class="icon-btn delete" onclick="deleteRoom('${room.id}')" title="Excluir">🗑️</button>
        </div>
      </div>
      
      <div class="card-body">
        <h3 class="card-title">${room.name}</h3>
        ${room.style ? `<div class="card-style">✦ ${room.style}</div>` : ''}
        ${room.notes ? `<div class="card-notes">${room.notes}</div>` : ''}
      </div>
    `;

    roomsGrid.appendChild(card);
  });
}

function handleSaveRoom(e) {
  e.preventDefault();

  const id = editRoomId.value || Date.now().toString();
  const roomData = {
    id,
    name: roomNameInput.value.trim(),
    owner: roomOwnerSelect.value,
    image: roomImageInput.value.trim(),
    style: roomStyleInput.value.trim(),
    notes: roomNotesInput.value.trim()
  };

  const existingIndex = rooms.findIndex(r => r.id === id);
  if (existingIndex > -1) {
    rooms[existingIndex] = roomData;
  } else {
    rooms.push(roomData);
  }

  saveRoomsToStorage();
  renderRooms();
  closeModal(roomModal);
}

window.editRoom = function(id) {
  const room = rooms.find(r => r.id === id);
  if (!room) return;

  editRoomId.value = room.id;
  roomNameInput.value = room.name;
  roomOwnerSelect.value = room.owner;
  roomImageInput.value = room.image || "";
  roomStyleInput.value = room.style || "";
  roomNotesInput.value = room.notes || "";

  modalTitle.textContent = "Editar Cômodo";
  openModal(roomModal);
};

window.deleteRoom = function(id) {
  if (confirm("Deseja realmente remover esta inspiração do projeto?")) {
    rooms = rooms.filter(r => r.id !== id);
    saveRoomsToStorage();
    renderRooms();
  }
};

function saveRoomsToStorage() {
  localStorage.setItem("dream_house_rooms", JSON.stringify(rooms));
}

function openModal(modal) {
  modal.classList.add("active");
}

function closeModal(modal) {
  modal.classList.remove("active");
}