function attachEvents() {
  document.getElementById("btnLoadPosts").addEventListener("click", getPost);
  document.getElementById("btnViewPost").addEventListener("click", getComments);
  const selectOp = document.getElementById("posts");
  const titleElement = document.getElementById("post-title");
  const postBodyElement = document.getElementById("post-body");
  const postCommentsElelemnt = document.getElementById("post-comments");

  async function getPost() {
    try {
      const url = "http://localhost:3030/jsonstore/blog/posts";
      selectOp.innerHTML = "";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();

      Object.values(data).forEach((post) => {
        const op = document.createElement("option");
        op.value = post.id;
        op.textContent = post.title;
        selectOp.appendChild(op);
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getComments() {
    try {
      const postUrl = "http://localhost:3030/jsonstore/blog/posts";
      postCommentsElelemnt.innerHTML = "";
      const postResponse = await fetch(postUrl);
      if (!postResponse.ok) {
        throw new Error("Error");
      }
      const postData = await postResponse.json();

      let id = selectOp.value;
      let title = selectOp.options[selectOp.selectedIndex].text;
      const selectedPost = Object.values(postData).find(
        (post) => post.title == title
      );

      titleElement.textContent = title;
      postBodyElement.textContent = selectedPost.body;

      const commentsUrl = "http://localhost:3030/jsonstore/blog/comments";
      postCommentsElelemnt.innerHTML = "";
      const commentsResponse = await fetch(commentsUrl);
      if (!commentsResponse.ok) {
        throw new Error("Error");
      }
      const commentsData = await commentsResponse.json();
      Object.values(commentsData).forEach((comment) => {
        if (id === comment.postId) {
          const li = document.createElement("li");
          li.textContent = comment.text;
          li.id = comment.id;
          postCommentsElelemnt.appendChild(li);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  }
}
attachEvents();

//-------------------t--------------------
// function attachEvents() {
//   document.getElementById("btnLoadPosts").addEventListener("click", getPost);
//   document.getElementById("btnViewPost").addEventListener("click", getComments);
// }

// async function getPost() {
//   const selectOp = document.getElementById("posts");
//   const url = "http://localhost:3030/jsonstore/blog/posts";
//   selectOp.innerHTML = "";
//   const response = await fetch(url);
//   const data = await response.json();

//   Object.values(data).forEach((post) => {
//     const op = document.createElement("option");
//     op.value = post.id;
//     op.textContent = post.title;
//     selectOp.appendChild(op);
//   });
// }

// async function getComments() {
//   const postUrl = "http://localhost:3030/jsonstore/blog/posts";
//   const commentsUrl = "http://localhost:3030/jsonstore/blog/comments";

//   const selectedOp = document.getElementById("posts").selectedOptions[0].value;
//   const titleElement = document.getElementById("post-title");
//   const postBodyElement = document.getElementById("post-body");
//   const postCommentsElelemnt = document.getElementById("post-comments");

//   postCommentsElelemnt.innerHTML = "";

//   const postResponse = await fetch(postUrl);
//   const postData = await postResponse.json();

//   const commentsResponse = await fetch(commentsUrl);
//   const commentsData = await commentsResponse.json();

//   const selectedPost = Object.values(postData).find(
//     (post) => post.id == selectedOp
//   );
//   titleElement.textContent = selectedPost.title;
//   postBodyElement.textContent = selectedPost.body;

//   const comments = Object.values(commentsData).filter(
//     (c) => c.postId === selectedOp
//   );

//   comments.forEach((comment) => {
//     const li = document.createElement("li");
//     li.textContent = comment.text;
//     li.setAttribute("id", `${comment.id}`);
//     postCommentsElelemnt.appendChild(li);
//   });
// }

//----------------------------------------------
// const baseUrl = 'http://localhost:3030/jsonstore/blog';
// const select = document.getElementById('posts');
// const btnViewPosts = document.getElementById('btnViewPost');
// const title = document.getElementById('post-title');
// const body = document.getElementById('post-body');
// const postComments = document.getElementById('post-comments');

// const loadPostsBtn = document.getElementById('btnLoadPosts');
// loadPostsBtn.addEventListener('click', loadPosts);

// async function loadPosts() {
//     try {
//         const response = await fetch(baseUrl + '/posts');
//         const data = await response.json();

//         select.innerHTML = '';
//         for (const key in data) {
//             const option = document.createElement('option');
//             option.value = key;
//             option.textContent = data[key].title;
//             select.appendChild(option);
//         }

//         btnViewPosts.addEventListener('click', () => viewPosts(data));
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// async function viewPosts(dataSelect) {
//     try {
//         const response = await fetch(baseUrl + '/comments');
//         const data = await response.json();

//         const comments = Object
//             .values(data)
//             .filter(obj => select.value === obj.postId);

//         const selectedOption = [...select.options]
//             .find(o => o.value === select.value);

//         title.textContent = selectedOption.textContent;
//         body.textContent = dataSelect[select.value].body;

//         postComments.innerHTML = '';
//         comments.forEach(comment => {
//             const li = document.createElement('li');
//             li.id = comment.id;
//             li.textContent = comment.text;
//             postComments.appendChild(li);
//         });
//     } catch (error) {
//         console.log(error.message);
//     }
// }
