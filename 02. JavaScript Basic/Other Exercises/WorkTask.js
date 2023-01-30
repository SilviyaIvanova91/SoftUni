const data = JSON.parse(
  '[{"GroupName":"Appraisal","Label":"Appraisal Type As Stabilized","IdUser":null,"Id":10917},{"GroupName":"General","Label":"City","IdUser":null,"Id":10875},{"GroupName":"General","Label":"Property Type","IdUser":null,"Id":10882},{"GroupName":"CollateralUDF","Label":"second UDF retest","IdUser":null,"Id":10979},{"GroupName":null,"Label":"Omg this doesn\'t have a group name","IdUser":null,"Id":99999},{"GroupName":"CollateralUDF","Label":"Map Date","IdUser":null,"Id":10950},{"GroupName":"General","Label":"Value Actual Cost","IdUser":null,"Id":10895},{"GroupName":"General","Label":"Value Land Value","IdUser":null,"Id":10893},{"GroupName":"Appraisal","Label":"Appraisal Order Date","IdUser":null,"Id":10931},{"GroupName":"General","Label":"Value As Complete","IdUser":null,"Id":10891},{"GroupName":"CollateralUDF","Label":"Community No.","IdUser":null,"Id":10976}]'
);
const JSONTransformation = (input) => {};
let newObj = {};
for (const el of data) {
  let all = Object.values(el);

  if (!newObj.hasOwnProperty(all[0])) {
    newObj[all[0]] = [];
  }

  newObj[all[0]].push(el);
}
console.log(newObj);
