function winningTicket(input) {
  let separator = /[,| ]+/g;
  input = input.trim().split(separator);

  for (let el of input) {
    if (el.length != 20) {
      console.log(`invalid ticket`);
    } else {
      let matchOfTicket = /@{6,}|#{6,}|\${6,}|\^{6,}/g;
      let length = el.length / 2;
      let firstHalf = el.slice(0, length);
      let secHalf = el.slice(length, el.length);
      let matchesFirst = firstHalf.match(matchOfTicket);
      let matchesSecond = secHalf.match(matchOfTicket);
      if (matchesFirst == null || matchesSecond == null) {
        console.log(`ticket "${el}" - no match`);
      } else if (
        matchesFirst[0].length == 10 &&
        matchesSecond[0].length == 10 &&
        matchesFirst[0][0] == matchesSecond[0][0]
      ) {
        console.log(`ticket "${el}" - ${10}${matchesFirst[0][0]} Jackpot!`);
      } else if (matchesFirst[0][0] == matchesSecond[0][0]) {
        console.log(
          `ticket "${el}" - ${Math.min(
            matchesFirst[0].length,
            matchesSecond[0].length
          )}${matchesFirst[0][0]}`
        );
      } else {
        console.log(`ticket "${el}" - no match`);
      }
    }
  }
}

winningTicket("@@th@@@@@@emo@@@@@@e");
winningTicket("@@th@@@@@@e@@m@@@@@@"); //6
winningTicket("@@@@@@@@@@et@@@@@@@@"); //8
winningTicket("Cash$$$$$$Ca$$$$$$sh");
winningTicket("$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey");
winningTicket("validticketnomatch:(");

//------- Решение с коментари---------------------------------
// function winningTicket(input) {
//   let separator = /[,| ]+/g;
//   input = input.trim().split(separator);

//   for (let el of input) {
//     if (el.length != 20) {
//       console.log(`invalid ticket`);
//     } else {
//       let matchOfTicket = /@{6,}|#{6,}|\${6,}|\^{6,}/g;
//       let length = el.length / 2;
//       let firstHalf = el.slice(0, length);
//       let secHalf = el.slice(length, el.length);

//       //на всяка половина от тикета изпълняваме регекс-а, за да имаме 2 масива....
//       // в противен случай "12@@@@@@@@@@@@@@@@34" го правеше като 1 масив и ставаше по сложно :)
//       let matchesFirst = firstHalf.match(matchOfTicket);
//       let matchesSecond = secHalf.match(matchOfTicket);

//       //проверяваме дали имаме 2-масива - валидни
//       if (matchesFirst == null || matchesSecond == null) {
//         console.log(`ticket "${el}" - no match`);
//       }
//       // ако дължините и на 2-та са по 10 и са с еднакви символи -> JACKPOT!
//       else if (
//         matchesFirst[0].length == 10 &&
//         matchesSecond[0].length == 10 &&
//         matchesFirst[0][0] == matchesSecond[0][0]
//       ) {
//         console.log(`ticket "${el}" - ${10}${matchesFirst[0][0]} Jackpot!`);
//       }
//       // регекса ги е хванал ако са 6 или повече, така че само може да проверим дали са с еднакви символи
//       //и ако са да ги изпечатаме колко са....
//       // тук тънкоста е че ако имаме "12@@@@@@аа@@@@@@@@34", това е валиден тикет с 6 познати, но на десния масив размера ще е 8,
//       // затова вземаме Math.min
//       else if (matchesFirst[0][0] == matchesSecond[0][0]) {
//         console.log(
//           `ticket "${el}" - ${Math.min(
//             matchesFirst[0].length,
//             matchesSecond[0].length
//           )}${matchesFirst[0][0]}`
//         );
//       } else {
//         console.log(`ticket "${el}" - no match`);
//       }
//     }
//   }
// }
//--------80 първо решение-------------------------------
// function winningTicket(input) {
//   let separator = /[, ]+/g;
//   input = input.split(separator);
//   for (let el of input) {
//     let validTicket = /[\w@#\$\^]{20}/g;
//     if (el.length != 20) {
//       console.log(`invalid ticket`);
//       continue;
//     }
//     if (validTicket != null) {
//       let matchOfTicket = /@{6,}|#{6,}|\${6,}|\^{6,}/g;
//       let matches = el.match(matchOfTicket);
//       let length = el.length / 2;
//       let firstHalf = el.slice(0, length);
//       let secHalf = el.slice(length, el.length);
//       if (matches != null) {
//         if (
//           matches[0].length < 10 &&
//           firstHalf.includes(matches[0]) &&
//           secHalf.includes(matches[0])
//         ) {
//           console.log(`ticket "${el}" - ${matches[0].length}${matches[0][0]}`);
//         } else if (
//           matches[0].length >= 10 &&
//           ((firstHalf.includes(matches[0]) && secHalf.includes(matches[0])) ||
//             firstHalf + secHalf == matches[0])
//         ) {
//           console.log(
//             `ticket "${el}" - ${firstHalf.length}${matches[0][0]} Jackpot!`
//           );
//         }
//       } else {
//         console.log(`ticket "${el}" - no match`);
//       }
//     }
//   }
// }

//-----------------------70%---------------------------------
// function winningTicket(input) {
//   let separator = /[,| ]+/g;
//   let matchOfTicket = /(@{6,}|#{6,}|\${6,}|\^{6,})/g;

//   input = input.split(separator);
//   for (let el of input) {
//     let match = matchOfTicket.exec(el);
//     if (match != null) {
//       if (
//         (match[0].length >= 6 && match[0].length <= 9) ||
//         (match[1].length >= 6 && match[1].length <= 9)
//       ) {
//         if (match[0].length >= match[1].length) {
//           console.log(`ticket "${el}" - ${match[1].length}${match[0][0]}`);
//         } else if (match[0].length < match[1].length) {
//           console.log(`ticket "${el}" - ${match[0].length}${match[0][0]}`);
//         }
//       } else if (match[0].length >= 6 && match[0].length <= 9) {
//       } else if (match[0].length == 10) {
//         console.log(
//           `ticket "${el}" - ${match[0].length}${match[0][0]} Jackpot!`
//         );
//       }
//     } else if (el.length != 20) {
//       console.log(`invalid ticket`);
//     } else {
//       console.log(`ticket "${el}" - no match`);
//     }
//   }
// }

// //-------100%---------------------------------------------
// function winningTicket(str) {
//   let VALID_TICKET_LENGTH = 20;
//   let tickets = str.trim().split(/\s*,\s*/);
//   let pattern = /(?=.{20}).*?(?=(?<char>[@#$^]))(?<match>\k<char>{6,}).*(?<=.{10})\k<match>.*/;

//   for (let ticket of tickets) {
//     let validTicket = pattern.exec(ticket);

//     if (validTicket) {
//       let len = validTicket.groups.match.length;
//       let char = validTicket.groups.char;

//       if (len >= 6) {
//         let message = `ticket "${ticket}" - ${len}${char}`;

//         if (len === 10) {
//           message += ' Jackpot!';
//         }

//         console.log(message);
//       }
//     } else if (ticket.length !== VALID_TICKET_LENGTH) {
//       console.log('invalid ticket');
//     } else {
//       console.log(`ticket "${ticket}" - no match`);
//     }
//   }
// }
