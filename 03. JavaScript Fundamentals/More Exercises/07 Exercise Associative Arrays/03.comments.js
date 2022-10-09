function comments(input) {
  let user = [];
  let article = [];
  let commentsByArticle = {};

  for (let line of input) {
    let token = line.split(" ");
    if (token.length == 2) {
      let command = token[0];
      let name = token[1];
      if (command == "user") {
        if (!user.includes(name)) {
          user.push(name);
        }
      } else if (command == "article") {
        if (!article.includes(name)) {
          article.push(name);
        }
      }
    } else {
      // let [userName, article] = comment.split(' posts on ');
      // let [articleName, title] = commentTokens.split(': ');
      // let [commentTitle, content] = commentInfo.split(', ');
      let [username, articleNew, title, content] = line
        .replace(" posts on ", "+")
        .replace(": ", "+")
        .replace(", ", "+")
        .split("+");
      if (user.includes(username) && article.includes(articleNew)) {
        if (!commentsByArticle.hasOwnProperty(articleNew)) {
          commentsByArticle[articleNew] = [];
        }
        commentsByArticle[articleNew].push({ username, title, content });
      }
    }
  }
  //console.log(Object.values(commentsByArticle));
  let sortedComments = Object.entries(commentsByArticle).sort(
    (a, b) => b[1].length - a[1].length
  );
  for (let [name, coments] of sortedComments) {
    console.log(`Comments on ${name}`);
    let sortedName = commentsByArticle[name].sort((a, b) =>
      a.username.localeCompare(b.username)
    );
    for (let final of sortedName) {
      console.log(
        `--- From user ${final.username}: ${final.title} - ${final.content}`
      );
    }
  }
}

comments([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);
comments([
  "user Mark",
  "Mark posts on someArticle: NoTitle, stupidComment",
  "article Bobby",
  "article Steven",
  "user Liam",
  "user Henry",
  "Mark posts on Bobby: Is, I do really like them",
  "Mark posts on Steven: title, Run",
  "someUser posts on Movies: Like",
]);
