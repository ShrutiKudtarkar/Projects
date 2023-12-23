function Solve(n) {
   var v = document.getElementById('input-value');
   v.value += n;
}

function Result() {
   var inp = document.getElementById('input-value').value;
   var res = eval(inp);
   document.getElementById('input-value').value = res;
}

function AllClear() {
   var inp = document.getElementById('input-value');
   inp.value = '';
}

function Back() {
   var ev = document.getElementById('input-value');
   ev.value = ev.value.slice(0,-1);
}