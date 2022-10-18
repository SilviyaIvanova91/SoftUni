class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();

    let isFound = Object.keys(this.possibleArticles).find(
      (m) => m == articleModel
    );
    if (!isFound) {
      throw new Error("This article model is not included in this gallery!");
    }

    let article = this.listOfArticles.find((a) => a.articleName == articleName);
    if (article) {
      article.quantity += quantity;
    } else {
      let model = {
        articleModel,
        articleName,
        quantity,
      };
      this.listOfArticles.push(model);
    }

    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    let guest = this.guests.find((g) => g.guestName == guestName);
    if (guest) {
      throw new Error(`${guestName} has already been invited.`);
    }

    let points = 0;
    if (personality == "Vip") {
      points = 500;
    } else if (personality == "Middle") {
      points = 250;
    } else {
      points = 50;
    }

    this.guests.push({ guestName, points: points, purchaseArticle: 0 });
    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    let article = this.listOfArticles.find((a) => a.articleName == articleName);
    let model = this.listOfArticles.find((a) => a.articleModel == articleModel);

    if (!article) {
      throw new Error("This article is not found.");
    }
    if (article.articleModel != articleModel) {
      throw new Error("This article is not found.");
    }

    if (Number(article.quantity) == 0) {
      return `The ${articleName} is not available.`;
    }

    let guest = this.guests.find((g) => g.guestName == guestName);
    if (!guest) {
      return `This guest is not invited.`;
    }
    let neededPoints = Number(this.possibleArticles[articleModel]);
    if (Number(guest.points) < neededPoints) {
      return `You need to more points to purchase the article.`;
    } else {
      guest.points -= neededPoints;
      model.quantity--;
      guest.purchaseArticle++;
    }
    return `${guestName} successfully purchased the article worth ${neededPoints} points.`;
  }

  showGalleryInfo(criteria) {
    if (criteria == "article") {
      let all = this.listOfArticles.map(
        (a) => `${a.articleModel} - ${a.articleName} - ${a.quantity}`
      );
      return `Articles information:\n${all.join("\n")}`;
    } else if (criteria == "guest") {
      let g = this.guests.map((a) => `${a.guestName} - ${a.purchaseArticle}`);
      return `Guests information:\n${g.join("\n")}`;
    }
  }
}

//--------------------------- input 1 ------------------
// const artGallery = new ArtGallery("Curtis Mayfield");
// console.log(artGallery.addArticle("picture", "Mona Liza", 3));
// console.log(artGallery.addArticle("Item", "Ancient vase", 2));
// console.log(artGallery.addArticle("PICTURE", "Mona Liza", 1));

//--------------------------- input 2 ------------------
// const artGallery = new ArtGallery("Curtis Mayfield");
// console.log(artGallery.inviteGuest("John", "Vip"));
// console.log(artGallery.inviteGuest("Peter", "Middle"));
// console.log(artGallery.inviteGuest("John", "Middle"));

//--------------------------- input 3 ------------------
// const artGallery = new ArtGallery("Curtis Mayfield");
// artGallery.addArticle("picture", "Mona Liza", 3);
// artGallery.addArticle("Item", "Ancient vase", 2);
// artGallery.addArticle("picture", "Mona Liza", 1);
// artGallery.inviteGuest("John", "Vip");
// artGallery.inviteGuest("Peter", "Middle");
// console.log(artGallery.buyArticle("picture", "Mona Liza", "John"));
// console.log(artGallery.buyArticle("item", "Ancient vase", "Peter"));
// console.log(artGallery.buyArticle("item", "Mona Liza", "John"));

//--------------------------- input 4 ------------------
const artGallery = new ArtGallery("Curtis Mayfield");
artGallery.addArticle("picture", "Mona Liza", 3);
artGallery.addArticle("Item", "Ancient vase", 2);
artGallery.addArticle("picture", "Mona Liza", 1);
artGallery.inviteGuest("John", "Vip");
artGallery.inviteGuest("Peter", "Middle");
artGallery.buyArticle("picture", "Mona Liza", "John");
artGallery.buyArticle("item", "Ancient vase", "Peter");
console.log(artGallery.showGalleryInfo("article"));
console.log(artGallery.showGalleryInfo("guest"));
