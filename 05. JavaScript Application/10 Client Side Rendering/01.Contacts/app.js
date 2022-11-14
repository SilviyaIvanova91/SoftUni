import { html, render, nothing } from "https://unpkg.com/lit-html?module";
import { contacts as data } from "./contacts.js";

const contacts = data.map((c) => Object.assign({}, c, { active: false }));

const root = document.getElementById("contacts");

const contactCard = (contact, onToggle) => html`
  <div class="contact card">
    <div>
      <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
      <h2>Name: ${contact.name}</h2>
      <button
        id=${contact.id}
        class="detailsBtn"
        @click=${onToggle.bind(null, contact)}
      >
        Details
      </button>
      ${contact.active
        ? html` <div class="details">
            <p>Phone number: ${contact.phoneNumber}</p>
            <p>Email: ${contact.email}</p>
          </div>`
        : nothing}
    </div>
  </div>
`;

//root.addEventListener("click", toggleDetails);
update();

function update() {
  render(
    contacts.map((c) => contactCard(c, onToggle)),
    root
  );
}

function onToggle(contact) {
  contact.active = !contact.active;
  update();
}

// function toggleDetails(event) {
//   if (event.target.classList.contains("detailsBtn")) {
//     const id = event.target.id;
//     const contact = contacts.find((c) => c.id == id);
//     contact.active = !contact.active;
//     render(contacts.map(contactCard), root);
//     update();
//   }
//   //   if (event.target.classList.contains("detailsBtn")) {
//   //     const parent = event.target.parentElement;
//   //     const details = parent.querySelector(".details");
//   //     if (details.style.display == "block") {
//   //       details.style.display = "none";
//   //     } else {
//   //       details.style.display = "block";
//   //     }
//   //   }
// }
