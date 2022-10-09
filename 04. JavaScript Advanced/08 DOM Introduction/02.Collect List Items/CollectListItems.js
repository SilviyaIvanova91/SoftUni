function extractText() {
  //--------------variable 1
  let items = Array.from(document.querySelectorAll("li"));
  let result = items.map((e) => e.textContent).join("\n");
  document.getElementById("result").value = result;

  //--------------variable 2
  //document.getElementsByTagName("li");

  //--------------variable 3
  //   document.getElementById("items");
  //   list.children;
  //   list.children[0].textContent;
  //   document.getElementById("result");
  //   document.getElementById("result").value = "";
}
