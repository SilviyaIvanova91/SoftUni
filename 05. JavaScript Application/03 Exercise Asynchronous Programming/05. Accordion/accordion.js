async function solution() {
  //1. fetch all articles from server
  //2. create divs with titles // toggle buttons
  //3. on click fetch datails data
  //4. update html with data

  try {
    let url = "http://localhost:3030/jsonstore/advanced/articles/list";
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error obtaining article list");
    }

    let data = await response.json();

    data.forEach((articleInfo) => {
      let articleEl = document.createElement("div");
      articleEl.classList.add("accordion");
      articleEl.innerHTML = `
        <div class="head">
            <span>${articleInfo.title}</span>
            <button class ="button" id="${articleInfo._id}" onclick="moreOnclick(event)">More</button>
        </div>
        <div class="extra"></div>
        `;
      let main = document.getElementById("main");
      main.appendChild(articleEl);
    });
  } catch (error) {
    console.log(error);
  }
}

async function moreOnclick(e) {
  try {
    let currtarget = e.currentTarget;
    let url =
      "http://localhost:3030/jsonstore/advanced/articles/details/" +
      currtarget.id;
    let parent = currtarget.parentNode.parentNode;
    let extraDiv = parent.querySelector("div.extra");

    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error obtaining article details");
    }

    let data = await response.json();

    extraDiv.innerHTML = `<p>${data.content}</p>`;

    if (currtarget.textContent == "More") {
      currtarget.textContent = "Less";
      extraDiv.style.display = "block";
    } else {
      currtarget.textContent = "More";
      extraDiv.style.display = "none";
    }
  } catch (error) {
    console.log(error);
  }
}

solution();
