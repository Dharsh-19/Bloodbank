// ===============================
// BLOOD AVAILABILITY DATA (25)
// ===============================

const availabilityData = [
  { name: "Ramesh Kumar", group: "A+", location: "Chennai", phone: "9876543210" },
  { name: "Priya S", group: "B+", location: "Avadi", phone: "9123456789" },
  { name: "Arjun M", group: "O+", location: "Tambaram", phone: "9988776655" },
  { name: "Divya R", group: "A-", location: "Velachery", phone: "9012345678" },
  { name: "Karthik V", group: "O-", location: "Anna Nagar", phone: "9345678210" },
  { name: "Meena L", group: "AB+", location: "T Nagar", phone: "9098765432" },
  { name: "Suresh P", group: "B-", location: "Porur", phone: "9871234560" },
  { name: "Nithya K", group: "A+", location: "Mylapore", phone: "9988123456" },
  { name: "Vijay R", group: "O+", location: "Guindy", phone: "9090987654" },
  { name: "Anitha S", group: "AB-", location: "Adyar", phone: "9876501234" },

  { name: "Rahul T", group: "B+", location: "Ambattur", phone: "9123098765" },
  { name: "Sneha M", group: "A+", location: "Poonamallee", phone: "9345612789" },
  { name: "Kavin R", group: "O-", location: "Thiruvanmiyur", phone: "9098123476" },
  { name: "Lakshmi P", group: "A-", location: "Perambur", phone: "9876234510" },
  { name: "Manoj K", group: "B-", location: "Kodambakkam", phone: "9988771122" },

  { name: "Deepa V", group: "AB+", location: "Ashok Nagar", phone: "9876112233" },
  { name: "Sathish N", group: "O+", location: "Vadapalani", phone: "9011223344" },
  { name: "Pooja R", group: "A+", location: "Egmore", phone: "9344556677" },
  { name: "Hari S", group: "B+", location: "Chromepet", phone: "9988001122" },
  { name: "Keerthi L", group: "AB-", location: "Pallavaram", phone: "9098776655" },

  { name: "Dinesh R", group: "O-", location: "Koyambedu", phone: "9877665544" },
  { name: "Swathi M", group: "A+", location: "Nungambakkam", phone: "9123445566" },
  { name: "Prakash V", group: "B-", location: "Triplicane", phone: "9988112233" },
  { name: "Monisha K", group: "AB+", location: "Saidapet", phone: "9012340099" },
  { name: "Ajay P", group: "O+", location: "Sholinganallur", phone: "9877001122" }
];

// ===============================
// DOM ELEMENTS
// ===============================

const listContainer = document.getElementById("availabilityList");
const searchInput = document.getElementById("searchInput");
const bloodFilter = document.getElementById("bloodFilter");

// ===============================
// RENDER TABLE
// ===============================

function renderTable(data) {
  listContainer.innerHTML = "";

  if (data.length === 0) {
    listContainer.innerHTML = `
      <div class="availability-row">
        <div colspan="5">No records found</div>
      </div>
    `;
    return;
  }

  data.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "availability-row";

    row.innerHTML = `
      <div>${index + 1}</div>
      <div>${item.name}</div>
      <div>${item.group}</div>
      <div>${item.location}</div>
      <div>${item.phone}</div>
    `;

    listContainer.appendChild(row);
  });
}

// ===============================
// APPLY SEARCH & FILTER
// ===============================

function applyFilters() {
  const searchValue = searchInput.value.toLowerCase().trim();
  const selectedGroup = bloodFilter.value;

  const filteredData = availabilityData.filter(item => {
    const matchText =
      item.name.toLowerCase().includes(searchValue) ||
      item.location.toLowerCase().includes(searchValue);

    const matchGroup =
      selectedGroup === "all" || item.group === selectedGroup;

    return matchText && matchGroup;
  });

  renderTable(filteredData);
}

// ===============================
// EVENT LISTENERS
// ===============================

searchInput.addEventListener("input", applyFilters);
bloodFilter.addEventListener("change", applyFilters);

// ===============================
// INITIAL LOAD
// ===============================

renderTable(availabilityData);
