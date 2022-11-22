import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as petShop from "../api/petShop.js";

let detailsTemplate = (
  pets,
  user,
  onDelete,
  donatePet,
  donationAmount,
  isDonated
) => html`
  <!--Details Page-->
  <section id="detailsPage">
    <div class="details">
      <div class="animalPic">
        <img src=${pets.image} />
      </div>
      <div>
        <div class="animalInfo">
          <h1>Name: ${pets.name}</h1>
          <h3>Breed: ${pets.breed}</h3>
          <h4>Age: ${pets.age}</h4>
          <h4>Weight: ${pets.weight}</h4>
          <h4 class="donation">Donation: ${donationAmount}$</h4>
        </div>
        ${pets.isOwner && user
          ? html`
              <!-- if there is no registered user, do not display div-->
              <div class="actionBtn">
                <!-- Only for registered user and creator of the pets-->
                <a href="/edit/${pets._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove"
                  >Delete</a
                >
              </div>
            `
          : nothing}
        ${!pets.isOwner && user && !isDonated
          ? html`
              <div class="actionBtn">
                <!--(Bonus Part) Only for no creator and user-->
                <a @click=${donatePet} href="#" class="donate">Donate</a>
              </div>
            `
          : nothing}
      </div>
    </div>
  </section>
`;

export async function detailsPage(ctx) {
  const petId = ctx.params.id;
  const pets = await petShop.getWithId(petId);

  //BONUS
  let user = JSON.parse(localStorage.getItem("user"));
  let donateAmout = (await petShop.getDonateAmout(petId)) * 100;
  let isDonated = false;

  if (ctx.user) {
    pets.isOwner = pets._ownerId == ctx.user._id;
    //BONUS
    let totalDonations = await petShop.totalDonateAmout(petId, user._id);
    isDonated = totalDonations > 0;
  }

  ctx.render(
    detailsTemplate(pets, ctx.user, onDelete, donatePet, donateAmout, isDonated)
  );

  async function onDelete() {
    const conf = confirm(`Are you sure you want to delete this ${pets.name}?`);
    if (conf) {
      await petShop.deletePet(petId);
      ctx.page.redirect("/");
    }
  }

  //BONUS;
  async function donatePet() {
    await petShop.donateToPet({
      petId: petId,
    });
  }
}
