const tickets = [
  {
    id: 1,
    tokenId: 2025001,
    endUser: "Shivam",
    issue: "Cannot login to my account after password reset.",
    status: "In Progress",
    date: "2024-07-28",
    assignedAgent: "Parag",
  },
  {
    id: 2,
    tokenId: 2025002,
    endUser: "Shubham",
    issue: "Payment failed with a new credit card.",
    status: "Open",
    date: "2024-07-28",
    assignedAgent: "Mohit",
  },
  {
    id: 3,
    tokenId: 2025003,
    endUser: "Shivam",
    issue: "The main dashboard is loading very slowly.",
    status: "Closed",
    date: "2024-07-27",
    assignedAgent: "Parag",
  },
  {
    id: 4,
    tokenId: 2025004,
    endUser: "Shubham",
    issue: "How can I upgrade my current subscription plan?",
    status: "Open",
    date: "2024-07-26",
    assignedAgent: "Mohit",
  },
  {
    id: 5,
    tokenId: 2025005,
    endUser: "Shivam",
    issue: "It would be great to have a dark mode option.",
    status: "In Progress",
    date: "2024-07-25",
    assignedAgent: "Parag",
  },
];

const tableBody = document.getElementById("tickets-table-body");
const searchInput = document.getElementById("searchInput");
const noResultsDiv = document.getElementById("no-results");

const navDashboard = document.getElementById("nav-dashboard");
const navNewTicket = document.getElementById("nav-new-ticket");
const navLinks = document.querySelectorAll(".nav-item");

const dashboardSection = document.getElementById("dashboard-section");
const newTicketSection = document.getElementById("new-ticket-section");

const newTicketForm = document.getElementById("new-ticket-form");

const statusClasses = {
  Open: "status-open",
  "In Progress": "status-in-progress",
  Closed: "status-closed",
};

const renderTickets = (ticketsToRender) => {
  const sortedTickets = ticketsToRender.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  noResultsDiv.classList.toggle("hidden", sortedTickets.length > 0);

  const ticketsHTML = sortedTickets
    .map((ticket) => {
      const statusClass = statusClasses[ticket.status] || "status-default";
      return `
        <tr>
          <td><div class="token-id">#${ticket.tokenId}</div></td>
          <td><div class="name">${ticket.endUser}</div></td>
          <td><div class="issue-text">${ticket.issue}</div></td>
          <td><div class="name">${ticket.assignedAgent}</div></td>
          <td><span class="status-badge ${statusClass}">${ticket.status}</span></td>
          <td><div class="date-text">${ticket.date}</div></td>
        </tr>
      `;
    })
    .join("");

  tableBody.innerHTML = ticketsHTML;
};

const handleSearch = () => {
  const query = searchInput.value.toLowerCase().trim();
  const filtered = tickets.filter(
    (ticket) =>
      ticket.tokenId.toString().includes(query) ||
      ticket.endUser.toLowerCase().includes(query) ||
      ticket.issue.toLowerCase().includes(query) ||
      ticket.assignedAgent.toLowerCase().includes(query)
  );
  renderTickets(filtered);
};

const switchView = (targetId) => {
  dashboardSection.classList.add("hidden");
  newTicketSection.classList.add("hidden");

  const sectionToShow = document.getElementById(targetId);
  if (sectionToShow) {
    sectionToShow.classList.remove("hidden");
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(newTicketForm);
  const newTicket = {
    id: tickets.length + 1,
    tokenId: 2025000 + tickets.length + 1,
    endUser: formData.get("endUser"),
    issue: formData.get("issue"),
    status: "Open",
    date: new Date().toISOString().split("T")[0],
    assignedAgent: formData.get("assignedAgent"),
  };

  tickets.push(newTicket);
  renderTickets(tickets);
  newTicketForm.reset();
  switchView("dashboard-section");
};

searchInput.addEventListener("keyup", handleSearch);

navDashboard.addEventListener("click", (e) => {
  e.preventDefault();
  switchView("dashboard-section");
});

navNewTicket.addEventListener("click", (e) => {
  e.preventDefault();
  switchView("new-ticket-section");
});

newTicketForm.addEventListener("submit", handleFormSubmit);

renderTickets(tickets);