import type { User } from "../interfaces/user.interface";
import { userService } from "../services/services";
import { render } from "../utils/html";

export async function renderUsersView(): Promise<void> {
  const users = await userService.getAll();

  const template = `
  <ul>
  ${users.map((user) => generateSingleUserHtml(user)).join("")}
  </ul>`;

  render(template);
}

function generateSingleUserHtml(user: User): string {
  return `
    <li>
     <h3>${user.name}</h3>
     <p>${user.email}</p>
    </li>
    `;
}
