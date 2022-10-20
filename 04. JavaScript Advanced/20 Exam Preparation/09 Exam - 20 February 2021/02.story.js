class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length == 0) {
      return `${this.title} has 0 likes`;
    } else if (this._likes.length == 1) {
      return `${this._likes[0]} likes this story!`;
    }

    return `${this._likes[0]} and ${
      this._likes.length - 1
    } others like this story!`;
  }

  like(username) {
    if (this._likes.includes(username)) {
      throw new Error("You can't like the same story twice!");
    }

    if (this.creator == username) {
      throw new Error("You can't like your own story!");
    }

    this._likes.push(username);
    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    if (!this._likes.includes(username)) {
      throw new Error("You can't dislike this story!");
    }

    let index = this._likes.indexOf(username);
    this._likes.splice(index, 1);
    return `${username} disliked ${this.title}`;
  }

  comment(username, content, id) {
    let findComment = this._comments.find((c) => c.id === id);

    let comment = { id, username, content, replies: [] };

    if (findComment) {
      let replyId = Number(
        findComment.id + "." + (findComment.replies.length + 1)
      );

      let reply = {
        id: replyId,
        username,
        content,
      };

      findComment.replies.push(reply);
      return `You replied successfully`;
    }

    comment.id = this._comments.length + 1;
    this._comments.push(comment);

    return `${username} commented on ${this.title}`;
  }

  toString(sortingType) {
    let comRepliesAll = [];

    if (this._comments.length !== 0) {
      let sortedComOrRep = null;
      if (sortingType === "asc") {
        sortedComOrRep = this._comments.sort((a, b) => a.id - b.id);
      } else if (sortingType === "desc") {
        sortedComOrRep = this._comments.sort((a, b) => b.id - a.id);
      } else if (sortingType === "username") {
        sortedComOrRep = this._comments.sort((a, b) =>
          a.username.localeCompare(b.username)
        );
      }

      for (let comment of sortedComOrRep) {
        comRepliesAll.push(
          `-- ${comment.id}. ${comment.username}: ${comment.content}`
        );
        if (comment.replies.length > 0) {
          let sorted = null;

          if (sortingType === "asc") {
            sorted = comment.replies.sort((a, b) => a.id - b.id);
          } else if (sortingType === "desc") {
            sorted = comment.replies.sort((a, b) => b.id - a.id);
          } else if (sortingType === "username") {
            sorted = comment.replies.sort((a, b) =>
              a.username.localeCompare(b.username)
            );
          }
          sorted.forEach((r) =>
            comRepliesAll.push(`--- ${r.id}. ${r.username}: ${r.content}`)
          );
        }
      }
    }

    let res = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${
      this._likes.length
    }\nComments:\n${comRepliesAll.join("\n")}`;

    return res.trim();
  }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log();
console.log(art.toString("username"));
console.log();
art.like("Zane");
console.log(art.toString("desc"));

// let art = new Story("My Story", "Anny");
// art.like("John");
// //art.dislike("Sally");
// art.like("Ivan");
// art.like("Steven");
// art.comment("Anny", "Some Content");
// art.comment("Ammy", "New Content", 1);
// art.comment("Zane", "Reply", 2);
// art.comment("Jessy", "Nice :)");
// art.comment("SAmmy", "Reply@", 2);
// console.log(art.toString("asc"));
// assert.equal(
//   art.toString("asc"),
//   `Title: My Story
// Creator: Anny
// Likes: 3
// Comments:
// -- 1. Anny: Some Content
// --- 1.1. Ammy: New Content
// -- 2. Zane: Reply
// --- 2.1. SAmmy: Reply@
// -- 3. Jessy: Nice :)`
// );

// class Story {
//   constructor(title, creator) {
//       this.title = title;
//       this.creator = creator;
//       this._comments = [];
//       this._likes = [];
//   }

//   get likes() {
//       if (this._likes.length === 0) {
//           return `${this.title} has 0 likes`;
//       } else if (this._likes.length === 1) {
//           return `${this._likes[0]} likes this story!`;
//       }

//       return `${this._likes[0]} and ${this._likes.slice(1).length} others like this story!`;
//   }

//   like(username) {
//       if (this._likes.includes(username)) {
//           throw new Error("You can't like the same story twice!");
//       }

//       if (username === this.creator) {
//           throw new Error("You can't like your own story!");
//       }

//       this._likes.push(username);
//       return `${username} liked ${this.title}!`;
//   }

//   dislike(username) {
//       if (!this._likes.includes(username)) {
//           throw new Error("You can't dislike this story!");
//       }

//       this._likes = this._likes.filter(user => user !== username);

//       return `${username} disliked ${this.title}`;
//   }

//   comment(username, content, id) {
//       let comment = {
//           Id: id,
//           Username: username,
//           Content: content,
//           Replies: [],
//       };

//       let commentWithId = this._comments.find(c => c.Id === id);

//       if (commentWithId) {
//           let replyID = Number(commentWithId.Id + '.' + (commentWithId.Replies.length + 1));
//           let reply = {
//               Id: replyID,
//               Username: username,
//               Content: content,
//           };

//           commentWithId.Replies.push(reply);

//           return 'You replied successfully';
//       }

//       comment.Id = this._comments.length + 1;
//       this._comments.push(comment);

//       return `${username} commented on ${this.title}`;
//   }

//   toString(sortingType) {
//       let result = [];
//       result.push(`Title: ${this.title}`);
//       result.push(`Creator: ${this.creator}`);
//       result.push(`Likes: ${this._likes.length}`);
//       result.push('Comments:');

//       if (this._comments.length > 0) {
//           let sortedComments = this._sortCriteria(this._comments, sortingType);
//           result.push(this._sortThem(sortedComments, sortingType));
//       }
//     return result.join('\n');
//   }

//   _sortCriteria(commentsOrReplies, criteria) {
//       let copyCommentsOrReplies = commentsOrReplies.slice();
//       let sortedCommentsOrReplies = null;

// if (criteria === 'asc') {
//     sortedCommentsOrReplies = copyCommentsOrReplies.sort((a, b) => a.Id - b.Id);
// } else if (criteria === 'desc') {
//     sortedCommentsOrReplies = copyCommentsOrReplies.sort((a, b) => b.Id - a.Id);
// } else if (criteria === 'username') {
//     sortedCommentsOrReplies = copyCommentsOrReplies.sort((a, b) => a.Username.localeCompare(b.Username));
// }

//       return sortedCommentsOrReplies;
//   }

//   _sortThem(sortedComments, criteria) {
//       let commentAndReplies = [];

//       for (let comment of sortedComments) {
//           commentAndReplies.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`);

//           if (comment.Replies.length > 0) {
//               let sortedReplies = this._sortCriteria(comment.Replies, criteria);
//               sortedReplies.forEach(r => commentAndReplies.push(`--- ${r.Id}. ${r.Username}: ${r.Content}`));
//           }
//       }

//       return commentAndReplies.join('\n');
//   }
// }
