let n: number = 1;
alert('n is ' + n);

function foo(a: any, b: any, c: any) {
  var d;
  if (a) {
    if (b) {
      while (c ? d = 12 : d = 15) {
        if (d == 12 || c == 14 && a == b) {
          return a;
        }
      }
    }
  }
  return b;
}
