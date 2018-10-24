// add solution here
function theBeatlesPlay(a1,a2) {
  var strings = new Array();

  var i;
  for (i = 0; i < a1.length; i++) {
    strings[i] = a1[i] + " plays " + a2[i];
  }
  return strings;
}

function johnLennonFacts (facts) {
  var i = 0;
  while (facts[i]) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return
}
