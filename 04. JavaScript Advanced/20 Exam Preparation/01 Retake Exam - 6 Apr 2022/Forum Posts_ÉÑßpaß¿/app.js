function solve() {
  document.getElementById("publish-btn").addEventListener("click", publishing);

  function publishing(e) {
    e.preventDefault();

    let titleInput = document.getElementById("post-title");
    let categoryInput = document.getElementById("post-category");
    let contentInput = document.getElementById("post-content");

    if (!titleInput.value || !categoryInput.value || !contentInput.value) {
      return;
    }

    let reviewList = document.getElementById("review-list");

    let li = createElements("li");
    li.className = "rpost";

    let article = createElements("article");

    let title = createElements("h4", `${titleInput.value}`);
    article.appendChild(title);

    let pCategory = createElements("p", `Category: ${categoryInput.value}`);
    article.appendChild(pCategory);

    let pContent = createElements("p", `Content: ${contentInput.value}`);
    article.appendChild(pContent);

    li.appendChild(article);

    let btnApprove = createElements("button", "Approve");
    btnApprove.className = "action-btn approve";
    li.appendChild(btnApprove);

    let btnEdit = createElements("button", "Edit");
    btnEdit.className = "action-btn edit";
    li.appendChild(btnEdit);

    reviewList.appendChild(li);

    titleInput.value = "";
    categoryInput.value = "";
    contentInput.value = "";

    function createElements(tagName, content) {
      let el = document.createElement(tagName);
      if (content) {
        el.textContent = content;
      }
      return el;
    }

    btnApprove.addEventListener("click", (ev) => {
      document.querySelector("#published-list").appendChild(li);
      li.removeChild(btnEdit);
      li.removeChild(btnApprove);
    });

    btnEdit.addEventListener("click", (ev) => {
      titleInput.value = title.textContent;
      categoryInput.value = pCategory.textContent.split("Category: ")[1];
      contentInput.value = pContent.textContent.split("Content: ")[1];
      li.remove(e.target.parentNode.children);
    });

    let clesrBtn = document.getElementById("clear-btn");
    clesrBtn.addEventListener("click", (ev) => {
      let elements = document
        .querySelector("#published-list")
        .querySelectorAll("li");
      for (const el of elements) {
        el.remove();
      }
    });
  }
}

//------------!!!!!!!!!!!!!!!!!!!!!-------------------
// function solve() {
//   document.querySelector("#publish-btn").addEventListener("click", publishPost);

//   function publishPost(e) {
//     e.preventDefault();
//     let titleElement = document.querySelector("#post-title");
//     let categoryElement = document.querySelector("#post-category");
//     let contentElement = document.querySelector("#post-content");

//     if (
//       !titleElement.value ||
//       !categoryElement.value ||
//       !contentElement.value
//     ) {
//       return;
//     }
//     let ulElement = document.querySelector("#review-list");

//     let liElement = htmlGenerator("li");
//     let articleElement = htmlGenerator("article");
//     let h4Element = htmlGenerator("h4", `${titleElement.value}`);
//     let pCategoryElement = htmlGenerator(
//       "p",
//       `Category: ${categoryElement.value}`
//     );
//     let pContentElement = htmlGenerator(
//       "p",
//       `Content: ${contentElement.value}`
//     );

//     let editBtn = htmlGenerator("button", "Edit");
//     let approveBtn = htmlGenerator("button", "Approve");

//     liElement.className = "rpost";
//     editBtn.className = "action-btn edit";
//     approveBtn.className = "action-btn approve";

//     articleElement.appendChild(h4Element);
//     articleElement.appendChild(pCategoryElement);
//     articleElement.appendChild(pContentElement);
//     liElement.appendChild(articleElement);
//     liElement.appendChild(approveBtn);
//     liElement.appendChild(editBtn);
//     ulElement.appendChild(liElement);

//     titleElement.value = "";
//     categoryElement.value = "";
//     contentElement.value = "";

//     function htmlGenerator(tagName, content) {
//       let el = document.createElement(tagName);
//       if (content) {
//         el.textContent = content;
//       }
//       return el;
//     }

//     editBtn.addEventListener("click", (e) => {
//       // e.preventDefault();
//       titleElement.value = h4Element.textContent;
//       categoryElement.value =
//         pCategoryElement.textContent.split("Category: ")[1];
//       contentElement.value = pContentElement.textContent.split("Content: ")[1];
//       liElement.remove(e.target.parentNode.children);
//     });

//     approveBtn.addEventListener("click", () => {
//       let publishedList = document.querySelector("#published-list");
//       publishedList.appendChild(liElement);
//       liElement.removeChild(editBtn);
//       liElement.removeChild(approveBtn);
//     });

//     document.querySelector("#clear-btn").addEventListener("click", (e) => {
//       let publishedList = document.querySelector("#published-list");
//       let lis = publishedList.querySelectorAll("li");
//       for (let li of lis) {
//         li.remove();
//       }
//     });
//   }
// }

//--------------------------------------

// function solve() {
//   let reviewList = document.getElementById("review-list");
//   //Btn Publish
//   document.getElementById("publish-btn").addEventListener("click", publishing);

//   let clesrBtn = document.getElementById("clear-btn");
//   clesrBtn.addEventListener("click", onClear);

//   function publishing() {
//     let titleInput = document.getElementById("post-title").value;
//     let categoryInput = document.getElementById("post-category").value;
//     let contentInput = document.getElementById("post-content").value;

//     if (titleInput == "" || categoryInput == "" || contentInput == "") {
//       return;
//     }

//     let li = document.createElement("li");
//     li.className = "rpost";

//     let article = document.createElement("article");

//     let title = document.createElement("h4");
//     title.textContent = titleInput;
//     article.appendChild(title);

//     let pCategory = document.createElement("p");
//     pCategory.textContent = `Category: ${categoryInput}`;
//     article.appendChild(pCategory);

//     let pContent = document.createElement("p");
//     pContent.textContent = `Content: ${contentInput}`;
//     article.appendChild(pContent);

//     li.appendChild(article);

//     let btnEdit = document.createElement("button");
//     btnEdit.className = "action-btn edit";
//     btnEdit.textContent = "Edit";
//     li.appendChild(btnEdit);

//     let btnApprove = document.createElement("button");
//     btnApprove.className = "action-btn approve";
//     btnApprove.textContent = "Approve";
//     li.appendChild(btnApprove);

//     reviewList.appendChild(li);

//     document.getElementById("post-title").value = "";
//     document.getElementById("post-category").value = "";
//     document.getElementById("post-content").value = "";

//     btnEdit.addEventListener("click", edit);
//     btnApprove.addEventListener("click", approve);
//   }

//   function edit(ev) {
//     let titleEdit = document.querySelector(
//       "#review-list > li > article > h4"
//     ).textContent;
//     document.getElementById("post-title").value = titleEdit;

//     let categoryEdit = Array.from(
//       document
//         .querySelector("#review-list > li > article > p:nth-child(2)")
//         .textContent.split("Category: ")
//     )[1];
//     document.getElementById("post-category").value = categoryEdit;

//     let contentEdit = Array.from(
//       document
//         .querySelector("#review-list > li > article > p:nth-child(3)")
//         .textContent.split("Content: ")
//     )[1];
//     document.getElementById("post-content").value = contentEdit;

//     document.querySelector("#review-list > li").remove();
//   }

//   function approve(ev) {
//     let parentLi = document.querySelector("li.rpost");
//     document.querySelector("#published-list").appendChild(parentLi);
//     let btnS = Array.from(document.querySelectorAll("li.rpost button"));
//     for (const btn of btnS) {
//       btn.remove();
//     }
//     // ev.target.remove();
//     // parentLi.querySelector("button").remove();
//   }

//   function onClear(ev) {
//     // let ul = document.querySelector("#published-list");
//     // let liElements = ul.querySelectorAll("li");

//     // liElements.forEach(function (el) {
//     //   el.remove();
//     // });
//     let liEl = document.querySelector("#published-list > li");
//     liEl.remove();
//   }
// }
