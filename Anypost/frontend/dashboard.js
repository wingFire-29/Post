const tickets = [
  {
    id: 1,
    tokenId: 2024001,
    endUser: "Shivam",
    issue: "Cannot login to my account after password reset.",
    status: "In Progress",
    date: "2024-07-28",
    assignedAgent: "Parag",
  },
  {
    id: 2,
    tokenId: 2024002,
    endUser: "Shubham",
    issue: "Payment failed with a new credit card.",
    status: "Open",
    date: "2024-07-28",
    assignedAgent: "Mohit",
  },
  {
    id: 3,
    tokenId: 2024003,
    endUser: "Shivam",
    issue: "The main dashboard is loading very slowly.",
    status: "Closed",
    date: "2024-07-27",
    assignedAgent: "Parag",
  },
  {
    id: 4,
    tokenId: 2024004,
    endUser: "Shubham",
    issue: "How can I upgrade my current subscription plan?",
    status: "Open",
    date: "2024-07-26",
    assignedAgent: "Mohit",
  },
  {
    id: 5,
    tokenId: 2024005,
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

const statusClasses = {
  Open: "status-open",
  "In Progress": "status-in-progress",
  Closed: "status-closed",
};

const renderTickets = (ticketsToRender) => {
  noResultsDiv.classList.toggle("hidden", ticketsToRender.length > 0);

  const ticketsHTML = ticketsToRender
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

searchInput.addEventListener("keyup", handleSearch);

renderTickets(tickets);