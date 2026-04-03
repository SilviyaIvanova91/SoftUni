import { ContentManager } from "./content-manager";
import { Movie, Series } from "./content-types";
import { Viewer } from "./models";

async function main() {
  // ------------------------------------------------------------
  // Input 1
  // const manager = new ContentManager();
  // const duneMovie = new Movie(
  //   1, "Dune: Part Two", new Date("2024-03-01"), "Denis Villeneuve"
  // );
  // const theLastOfUsSeries = new Series(
  //   2, "The Last of Us", new Date("2023-01-15"), "http://hbo.com/the-last-of-us"
  // );
  // const inceptionMovie = new Movie(
  //   3, "Inception", new Date("2010-07-16"), "Christopher Nolan"
  // );
  // const theCrownSeries = new Series(
  //   4, "The Crown", new Date("2016-11-04"), "http://netflix.com/the-crown"
  // );
  // console.log(manager.addContent(duneMovie));
  // console.log(manager.addContent(theLastOfUsSeries));
  // console.log(manager.addContent(inceptionMovie));
  // console.log(manager.addContent(theCrownSeries));
  // ------------------------------------------------------------
  // Input 2
  //   const manager = new ContentManager();
  //   const duneMovie = new Movie(
  //     1,
  //     "Dune: Part Two",
  //     new Date("2024-03-01"),
  //     "Denis Villeneuve",
  //   );
  //   const theLastOfUsSeries = new Series(
  //     2,
  //     "The Last of Us",
  //     new Date("2023-01-15"),
  //     "http://hbo.com/the-last-of-us",
  //   );
  //   const inceptionMovie = new Movie(
  //     3,
  //     "Inception",
  //     new Date("2010-07-16"),
  //     "Christopher Nolan",
  //   );
  //   const theCrownSeries = new Series(
  //     4,
  //     "The Crown",
  //     new Date("2016-11-04"),
  //     "http://netflix.com/the-crown",
  //   );
  //   console.log(manager.addContent(duneMovie));
  //   console.log(manager.addContent(theLastOfUsSeries));
  //   console.log(manager.addContent(inceptionMovie));
  //   console.log(manager.addContent(theCrownSeries));
  //   const alice: Viewer = { name: "Alice Smith", email: "alice@example.com" };
  //   const bob: Viewer = { name: "Bob Johnson", email: "bob@example.com" };
  //   const charlie: Viewer = {
  //     name: "Charlie Brown",
  //     email: "charlie@example.com",
  //   };
  //   console.log("\n--- MARKING AS WATCHED ---\n");
  //   console.log(manager.markAsWatched(1, alice));
  //   console.log(manager.markAsWatched(3, bob));
  //   console.log(manager.markAsWatched(3, charlie));
  //   console.error(manager.markAsWatched(999, bob));
  // ------------------------------------------------------------
  // Input 3
  //   const manager = new ContentManager();
  //   const duneMovie = new Movie(
  //     1,
  //     "Dune: Part Two",
  //     new Date("2024-03-01"),
  //     "Denis Villeneuve",
  //   );
  //   const theLastOfUsSeries = new Series(
  //     2,
  //     "The Last of Us",
  //     new Date("2023-01-15"),
  //     "http://hbo.com/the-last-of-us",
  //   );
  //   const inceptionMovie = new Movie(
  //     3,
  //     "Inception",
  //     new Date("2010-07-16"),
  //     "Christopher Nolan",
  //   );
  //   const theCrownSeries = new Series(
  //     4,
  //     "The Crown",
  //     new Date("2016-11-04"),
  //     "http://netflix.com/the-crown",
  //   );
  //   console.log(manager.addContent(duneMovie));
  //   console.log(manager.addContent(theLastOfUsSeries));
  //   console.log(manager.addContent(inceptionMovie));
  //   console.log(manager.addContent(theCrownSeries));
  //   const alice: Viewer = { name: "Alice Smith", email: "alice@example.com" };
  //   const bob: Viewer = { name: "Bob Johnson", email: "bob@example.com" };
  //   const charlie: Viewer = {
  //     name: "Charlie Brown",
  //     email: "charlie@example.com",
  //   };
  //   console.log("\n--- MARKING AS WATCHED ---\n");
  //   console.log(manager.markAsWatched(1, alice));
  //   console.log(manager.markAsWatched(3, bob));
  //   console.log(manager.markAsWatched(3, charlie));
  //   console.error(manager.markAsWatched(999, bob));
  //   manager.listAllContent().forEach((line) => console.log(line));
  // ------------------------------------------------------------
  // Input 4
  //   const manager = new ContentManager();
  //   const duneMovie = new Movie(
  //     1,
  //     "Dune: Part Two",
  //     new Date("2024-03-01"),
  //     "Denis Villeneuve",
  //   );
  //   const theLastOfUsSeries = new Series(
  //     2,
  //     "The Last of Us",
  //     new Date("2023-01-15"),
  //     "http://hbo.com/the-last-of-us",
  //   );
  //   const inceptionMovie = new Movie(
  //     3,
  //     "Inception",
  //     new Date("2010-07-16"),
  //     "Christopher Nolan",
  //   );
  //   const theCrownSeries = new Series(
  //     4,
  //     "The Crown",
  //     new Date("2016-11-04"),
  //     "http://netflix.com/the-crown",
  //   );
  //   console.log(manager.addContent(duneMovie));
  //   console.log(manager.addContent(theLastOfUsSeries));
  //   console.log(manager.addContent(inceptionMovie));
  //   console.log(manager.addContent(theCrownSeries));
  //   const alice: Viewer = { name: "Alice Smith", email: "alice@example.com" };
  //   const bob: Viewer = { name: "Bob Johnson", email: "bob@example.com" };
  //   const charlie: Viewer = {
  //     name: "Charlie Brown",
  //     email: "charlie@example.com",
  //   };
  //   console.log("\n--- MARKING AS WATCHED ---\n");
  //   console.log(manager.markAsWatched(1, alice));
  //   console.log(manager.markAsWatched(3, bob));
  //   console.log(manager.markAsWatched(3, charlie));
  //   console.error(manager.markAsWatched(999, bob));
  //   manager.listAllContent().forEach((line) => console.log(line));
  //   console.log("\n--- SEARCH TESTS ---\n");
  //   console.log("TEST 1: Search for ID 3.");
  //   console.log(`\n Searching for content with ID: 3...`);
  //   let found1 = manager.findContent(3);
  //   if (found1) console.log(`SEARCH 1 (ID 3): Found "${found1.title}"`);
  //   console.log("\nTEST 2: Search for ID 2.");
  //   console.log(`\n Searching for content with ID: 2...`);
  //   let found2 = manager.findContent(2);
  //   if (found2) console.log(`SEARCH 2 (ID 2): Found "${found2.title}"`);
  //   console.log("\nTEST 3: Search for non-existent ID 999.");
  //   console.log(`\nSearching for content with ID: 999...`);
  //   let found3 = manager.findContent(999);
  //   if (!found3) console.log(`SEARCH 3 (ID 999): Not found.`);
  // ------------------------------------------------------------
  // Input 5
  const manager = new ContentManager();
  const duneMovie = new Movie(
    1,
    "Dune: Part Two",
    new Date("2024-03-01"),
    "Denis Villeneuve",
  );
  const theLastOfUsSeries = new Series(
    2,
    "The Last of Us",
    new Date("2023-01-15"),
    "http://hbo.com/the-last-of-us",
  );
  const inceptionMovie = new Movie(
    3,
    "Inception",
    new Date("2010-07-16"),
    "Christopher Nolan",
  );
  const theCrownSeries = new Series(
    4,
    "The Crown",
    new Date("2016-11-04"),
    "http://netflix.com/the-crown",
  );
  console.log(manager.addContent(duneMovie));
  console.log(manager.addContent(theLastOfUsSeries));
  console.log(manager.addContent(inceptionMovie));
  console.log(manager.addContent(theCrownSeries));
  const alice: Viewer = { name: "Alice Smith", email: "alice@example.com" };
  const bob: Viewer = { name: "Bob Johnson", email: "bob@example.com" };
  const charlie: Viewer = {
    name: "Charlie Brown",
    email: "charlie@example.com",
  };
  console.log("\n--- MARKING AS WATCHED ---\n");
  console.log(manager.markAsWatched(1, alice));
  console.log(manager.markAsWatched(3, bob));
  console.log(manager.markAsWatched(3, charlie));
  console.error(manager.markAsWatched(999, bob));
  // // ------------------------------------------------------------
}

main();
