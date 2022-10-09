function solution(input) {
  let commands = {
    upvote: () => this.upvotes++,
    downvote: () => this.downvotes++,
    score: () => {
      let upVotes = this.upvotes;
      let downVotes = this.downvotes;
      let totalVotes = upVotes + downVotes;
      let balance = upVotes - downVotes;
      let inflateVotes = Math.ceil(Math.max(upVotes, downVotes) * 0.25);
      let rating = "new";
      if (upVotes > totalVotes * 0.66 && totalVotes >= 10) {
        rating = "hot";
      } else if (balance >= 0 && totalVotes > 100) {
        rating = "controversial";
      } else if (balance < 0 && totalVotes >= 10) {
        rating = "unpopular";
      }

      return totalVotes > 50
        ? [upVotes + inflateVotes, downVotes + inflateVotes, balance, rating]
        : [upVotes, downVotes, balance, rating];
    },
  };
  return commands[input]();
}

let post = {
  id: "3",
  author: "emil",
  content: "wazaaaaa",
  upvotes: 100,
  downvotes: 10,
};
solution.call(post, "upvote");
solution.call(post, "downvote");
let score = solution.call(post, "score"); // [127, 127, 0, 'controversial']
console.log(score);
solution.call(post, "downvote"); // (executed 50 times)
score = solution.call(post, "score");
