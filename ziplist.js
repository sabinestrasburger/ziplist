const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function ziplist(list1, list2) {
  let i = 0;
  let j = 0;
  const newlist = [];
  while (i < list1.length && j < list2.length) {
    newlist.push(list1[i], list2[j]);
    i++;
    j++;
  }
  return newlist;
}

console.log(ziplist(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testList1, testList2));
