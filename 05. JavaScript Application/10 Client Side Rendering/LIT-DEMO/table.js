import { html } from "https://unpkg.com/lit-html?module";
import { styleMap } from "https://unpkg.com/lit-html/directives/style-map.js?module";
import { classMap } from "https://unpkg.com/lit-html/directives/class-map.js?module";
import { repeat } from "https://unpkg.com/lit-html/directives/repeat.js?module";

export const table = (items, onClick) => html`
  <table>
    ${repeat(
      items,
      (i) => i.id,
      (i) => tableRow(i, onClick)
    )}
  </table>
`;

const tableRow = (item, onClick) =>
  html` <tr style=${styleMap(item.style)}>
    <td class=${classMap(item.highlight) || {}}>${item.name}</td>
    <td>
      ${item.canEdit
        ? html`<button>Edit</button><button>Delete</button>`
        : null}
    </td>
  </tr>`;

//-----classMap
// export const table = (items, onClick) => html`
//   <table>
//     ${items.map((i) => tableRow(i, onClick))}
//   </table>
// `;

// const tableRow = (item, onClick) =>
//   html` <tr style=${styleMap(item.style)}>
//     <td class=${classMap(item.highlight) || {}}>${item.name}</td>
//     <td>
//       ${item.canEdit
//         ? html`<button>Edit</button><button>Delete</button>`
//         : null}
//     </td>
//   </tr>`;
