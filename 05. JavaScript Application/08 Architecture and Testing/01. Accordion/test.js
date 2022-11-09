const { chromium } = require("playwright-chromium");
const { expect } = require("chai");

let browser, page; // Declare reusable variables

describe("E2E tests", function () {
  this.timeout(5000);

  before(async () => {
    browser = await chromium.launch({ headless: false, slowMo: 500 });
  });
  after(async () => {
    await browser.close();
  });
  beforeEach(async () => {
    page = await browser.newPage();
  });
  afterEach(async () => {
    await page.close();
  });

  it("load articles titeles", async () => {
    await page.goto(
      "http://127.0.0.1:5500/10%20Architecture%20and%20Testing/01.%20Accordion/index.html"
    );

    await page.waitForSelector(".accordion div.head>span");
    const content = await page.textContent("#main");

    expect(content).to.contain("Scalable Vector Graphics");
    expect(content).to.contain("Open standard");
    expect(content).to.contain("Unix");
    expect(content).to.contain("ALGOL");
  });

  it("has working More button", async () => {
    await page.goto(
      "http://127.0.0.1:5500/10%20Architecture%20and%20Testing/01.%20Accordion/index.html"
    );

    await page.click("text=More");
    await page.waitForSelector(".extra p");

    const text = await page.textContent(".extra p");
    const visible = await page.isVisible(".extra p");

    expect(text).to.contain(
      "Scalable Vector Graphics (SVG) is an Extensible Markup Language (XML)-based vector image format for two-dimensional graphics with support for interactivity and animation. The SVG specification is an open standard developed by the World Wide Web Consortium (W3C) since 1999."
    );
    expect(visible).to.be.true;
  });

  it("has working Less button", async () => {
    await page.goto(
      "http://127.0.0.1:5500/10%20Architecture%20and%20Testing/01.%20Accordion/index.html"
    );

    await page.click("text=More");
    await page.waitForSelector(".extra p");

    let visible = await page.isVisible(".extra p");
    expect(visible).to.be.true;

    await page.click("text=Less");
    visible = await page.isVisible(".extra p");
    expect(visible).to.be.false;
  });
});

// const { chromium } = require("playwright-chromium");
// const { expect } = require("chai");

// let browser, page;

// describe("E2E tests", function () {
//   this.timeout(6000);
//   before(async () => {
//     browser = await chromium.launch({ handless: false, slowMo: 500 });
//   });
//   after(async () => {
//     await browser.close();
//   });
//   beforeEach(async () => {
//     page = await browser.newPage();
//   });
//   afterEach(async () => {
//     await page.close();
//   });
//   it("load static page", async () => {
//     await page.goto("http://localhost:3030");

//     const content = await page.textContent(".accordion .head span");
//     expect(content).to.contains("Scalable Vector Graphics");
//   });

//   it("toggles content", async () => {
//     await page.goto("http://localhost:3030");

//     await page.click("#main>.accordion:first-child >> text=More");
//     await page.waitForSelector("#main>.accordion:first-child >> .extra p");
//     const visible = await page.isVisible(
//       "#main>.accordion:first-child >> .extra p"
//     );
//     expect(visible).to.be.true;
//   });

//   it("toggles content", async () => {
//     await page.goto("http://localhost:3030");

//     await page.click("#main>.accordion:first-child >> text=More");
//     await page.waitForSelector("#main>.accordion:first-child >> .extra p");
//     await page.click("#main>.accordion:first-child >> text=Less");

//     const visible = await page.isVisible(
//       "#main>.accordion:first-child >> .extra p"
//     );
//     expect(visible).to.be.false;
//   });
// });
