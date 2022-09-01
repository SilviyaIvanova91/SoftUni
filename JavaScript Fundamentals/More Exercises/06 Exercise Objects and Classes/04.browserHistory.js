function browserHistory(object, arr) {
  for (let list of arr) {
    if (list == "Clear History and Cache") {
      object["Open Tabs"] = [];
      object["Recently Closed"] = [];
      object["Browser Logs"] = [];
      continue;
    }
    let [command, site] = list.split(" ");
    if (command == "Open") {
      object["Open Tabs"].push(site);
      object["Browser Logs"].push(`${command} ${site}`);
    } else if (command == "Close") {
      if (object["Open Tabs"].includes(site)) {
        let index = object["Open Tabs"].indexOf(site);
        object["Open Tabs"].splice(index, 1);
        object["Recently Closed"].push(site);
        object["Browser Logs"].push(`${command} ${site}`);
      }
    }
  }
  console.log(object["Browser Name"]);
  console.log(`Open Tabs: ${object["Open Tabs"].join(", ")}`);
  console.log(`Recently Closed: ${object["Recently Closed"].join(", ")}`);
  console.log(`Browser Logs: ${object["Browser Logs"].join(", ")}`);
}

browserHistory(
  {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": [
      "Open YouTube",
      "Open Yahoo",
      "Open Google Translate",
      "Close Yahoo",
      "Open Gmail",
      "Close Gmail",
      "Open Facebook",
    ],
  },
  ["Close Facebook", "Open StackOverFlow", "Open Google"]
);

browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);

// function browserHistory(object, arr) {
//     arr.forEach(element => {
//         let [command, site] = element.split(' ');

//         if (command === "Open") {
//             openTab(command, site);
//         } else if (command === "Close") {
//             closeTab(command, site);
//         } else {
//             clearObject();
//         }
//     });

//     console.log(object["Browser Name"]);
//     console.log(`Open Tabs: ${object["Open Tabs"].join(', ')}`);
//     console.log(`Recently Closed: ${object["Recently Closed"].join(', ')}`);
//     console.log(`Browser Logs: ${object["Browser Logs"].join(', ')}`);

//     function openTab(command, site) {
//         object["Open Tabs"].push(site);

//         browerLogs(command, site);
//     }

//     function closeTab(command, site) {
//         if (object["Open Tabs"].includes(site)) {
//             let index = object["Open Tabs"].indexOf(site);
//             object["Open Tabs"].splice(index, 1);
//             object["Recently Closed"].push(site);

//             browerLogs(command, site);
//         }
//     }

//     function browerLogs(command, site) {
//         object["Browser Logs"].push(`${command} ${site}`);
//     }

//     function clearObject() {
//         object["Open Tabs"] = [];
//         object["Recently Closed"] = [];
//         object["Browser Logs"] = [];
//     }
// }

//------------------------------------------------------
// function solve(object, stringArray) {
//     // const brName = object['Browser Name'];

//     let newObj = {
//         'Browser Name': object['Browser Name'],
//         'Open Tabs': [...object['Open Tabs']],
//         'Recently Closed': [...object['Recently Closed']],
//         'Browser Logs': [...object['Browser Logs']],
//     };

//     for (let command of stringArray) {
//         let data = command.split(' ');
//         let currentCommand = data[0];
//         let site = data[1];

//         if (currentCommand === 'Open') {
//             openTab(object, site);
//             // openTab(object, site, newObj);
//             // browserLogs(object, command, newObj);
//         } else if (currentCommand === 'Close') {
//             close(object, site);
//             // close(object, site, newObj);
//             // browserLogs(object, command, newObj);
//         } else if (command === 'Clear History and Cache') {
//             deleteObject(object);
//         }
//     }

//     console.log(object['Browser Name']);
//     console.log(`Open Tabs: ${object['Open Tabs'].join(', ')}`);
//     console.log(`Recently Closed: ${object['Recently Closed'].join(', ')}`);
//     console.log(`Browser Logs: ${object['Browser Logs'].join(', ')}`);

//     function openTab(obj, site) {
//         // function openTab(obj, site, secondObj) {
//         // if (Object.keys(obj).length === 0) {
//         //     obj = { ...secondObj };
//         // } else {
//         //     obj['Open Tabs'].push(site);
//         // }
//         // return obj;

//         obj['Open Tabs'].push(site);
//         browserLogs(object, 'Open ' + site);
//     }

//     function browserLogs(obj, command) {
//         // function browserLogs(obj, command, secondObj) {
//         // if (obj && Object.keys(obj).length === 0 && obj.constructor === Object) {
//         //     obj = { ...secondObj };
//         // } else {
//         //     obj['Browser Logs'].push(command)
//         // }

//         obj['Browser Logs'].push(command)

//         // return obj
//     }

//     function close(obj, site, secondObj) {
//         // secondObj = Object.assign({}, obj);

//         // if (secondObj['Open Tabs'].includes(site)) {
//         //     let index = secondObj['Open Tabs'].findIndex(x => x === site);
//         //     let result = secondObj['Open Tabs'].splice(index, 1);
//         //     secondObj['Recently Closed'].push(result[0]);

//         //     return secondObj;
//         // }

//         if (obj['Open Tabs'].includes(site)) {
//             let index = obj['Open Tabs'].findIndex(x => x === site);
//             let result = obj['Open Tabs'].splice(index, 1);
//             obj['Recently Closed'].push(result[0]);
//             browserLogs(object, 'Close ' + site);
//         }
//     }

//     function deleteObject(obj) {
//         // secondObj = Object.assign({}, obj);
//         // delete secondObj['Browser Name'];
//         // delete secondObj['Open Tabs'];
//         // delete secondObj['Recently Closed'];
//         // delete secondObj['Browser Logs'];

//         // const emptyObject = {};
//         // obj = { ...emptyObject };
//         // return obj;

//         obj['Open Tabs'] = [];
//         obj['Recently Closed'] = [];
//         obj['Browser Logs'] = [];

//         // return obj;
//     }
// }
