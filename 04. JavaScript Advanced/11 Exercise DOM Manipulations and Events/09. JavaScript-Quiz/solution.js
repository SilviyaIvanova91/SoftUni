function solve() {
  let correctAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
  ];
  let rightClick = 0;
  let index = 0;

  let result = document.querySelector("#results");
  let resH = document.querySelector("#results h1");

  Array.from(document.getElementsByClassName("answer-text")).map((x) =>
    x.addEventListener("click", answerClick)
  );

  function answerClick(event) {
    if (correctAnswers.includes(event.target.textContent)) {
      rightClick++;
    }

    let currSection = document.querySelectorAll("section")[index];
    currSection.style.display = "none";

    if (document.querySelectorAll("section")[index + 1]) {
      let nextSection = document.querySelectorAll("section")[index + 1];
      nextSection.style.display = "block";
      index++;
    } else {
      result.style.display = "block";

      rightClick === 3
        ? (resH.innerHTML = "You are recognized as top JavaScript fan!")
        : (resH.innerHTML = `You have ${rightClick} right answers`);
    }
  }
}

//--------------------------------------------------
// function solve() {
//   let correctAnswers = [
//     "onclick",
//     "JSON.stringify()",
//     "A programming API for HTML and XML documents",
//   ];
//   let rightAnswered = 0;
//   let index = 0;

//   Array.from(document.querySelectorAll(".answer-text")).map((x) =>
//     x.addEventListener("click", function nextSection(e) {
//       if (correctAnswers.includes(e.target.innerHTML)) {
//         rightAnswered++;
//       }

//       let currSection = document.querySelectorAll("section")[index];
//       currSection.style.display = "none";

//       if (document.querySelectorAll("section")[index + 1] !== undefined) {
//         let nextSection = document.querySelectorAll("section")[index + 1];
//         nextSection.style.display = "block";
//         index++;
//       } else {
//         document.querySelector("#results").style.display = "block";
//         if (rightAnswered !== 3) {
//           document.querySelector(
//             "#results h1"
//           ).innerHTML = `You have ${rightAnswered} right answers`;
//         } else {
//           document.querySelector("#results h1").innerHTML =
//             "You are recognized as top JavaScript fan!";
//         }
//       }
//     })
//   );
// }

//-------------------------------------------------------
// function solve() {
//   const answers = new Set([
//     "onclick",
//     "JSON.stringify()",
//     "A programming API for HTML and XML documents",
//   ]);
//   const result = document.querySelector("ul li h1");
//   const maxAnswers = 6;
//   let question = 0;

//   Array.from(document.querySelectorAll("section")).forEach((section) =>
//     section.addEventListener("click", onClick)
//   );

//   function onClick(e) {
//     if (e.target.tagName === "P") {
//       addAnswer(e);
//       changeSection(e);

//       if (question === 3) {
//         printResult();
//       }
//     }
//   }

//   function addAnswer(e) {
//     answers.add(e.target.textContent);
//     question++;
//   }

//   function changeSection(e) {
//     const section = e.currentTarget;
//     section.style.display = "none";
//     section.parentElement.children[question + 1].style.display = "block";
//   }

//   function printResult() {
//     result.textContent =
//       answers.size === 3
//         ? "You are recognized as top JavaScript fan!"
//         : `You have ${maxAnswers - answers.size} right answers`;
//   }
// }

//--------------------------------------------------
// function solve() {
//   let correct = 0

//   const mapper = {
//       'Question #1: Which event occurs when the user clicks on an HTML element?': 'onclick',
//       'Question #2: Which function converting JSON to string?': 'JSON.stringify()',
//       'Question #3: What is DOM?': 'A programming API for HTML and XML documents'
//   }

//   const questions = document.querySelectorAll('h2');
//   let sectionEl = Array.from(document.querySelectorAll('section'));

//   for (let i = 0; i < questions.length; i++) {
//       let currentQuestion = questions[i].textContent
//       let buttons = sectionEl[i].querySelectorAll('p');
//       for (el of buttons) {
//           el.addEventListener('click', clickAnswer)
//       }

//       function clickAnswer(e) {
//           if (e.currentTarget.textContent === mapper[currentQuestion]) {
//               correct += 1;
//               if (i < 2) {
//                   sectionEl[i].style.display = 'none';
//                   sectionEl[i + 1].style.display = 'block';

//               }
//           } else {
//               if (i < 2) {
//                   sectionEl[i].style.display = 'none';
//                   sectionEl[i + 1].style.display = 'block';
//               }
//           }

//           if (i === 2) {
//               if (correct === 3) {
//                   let result = document.querySelectorAll('.results-inner')[0].children;
//                   result[0].textContent = 'You are recognized as top JavaScript fan!';
//                   sectionEl[i].style.display = 'none';
//                   document.getElementById('results').style.display = 'block';
//               } else {
//                   let result = document.querySelectorAll('.results-inner')[0].children;
//                   result[0].textContent = `You have ${correct} right answers`;
//                   sectionEl[i].style.display = 'none';
//                   document.getElementById('results').style.display = 'block';
//               }
//           }
//       }
//   }
// }
