let a, b, c, S, P, angle
const rad = 180, four = 4
a = prompt('Please enter lenght 1-st side of triangle',0)
b = prompt('Please enter lenght 2-nd side of triangle',0)
angle = prompt('Please enter value of angle between those side of triangle',0)
if (a < 0 || b < 0 || angle < 0) {
console.log('For input data',a,'(a lenght),',b,'(b lenght),',angle,'(α-angle):\n    ’Invalid data’')
} else{
    c = Math.sqrt(a*a + b*b - 2*a*b*Math.cos(angle*Math.PI/rad))
    P = +a + +b + +c
    S = Math.sqrt((+a + +b - c)*(+a - b + +c)*(-a + +b + +c)*(+a + +b + +c))/four
    if (Math.ceil(S) - S === 0) {
 S = Math.ceil(S) 
} else {
 S = S.toFixed(2) 
}
    if (Math.ceil(+c) - c === 0) {
 c = Math.ceil(+c) 
} else {
 c = c.toFixed(2)
}
    if (Math.ceil(P) - P === 0) {
 P = Math.ceil(P)
} else {
P = P.toFixed(2) 
}
    if (S <= 0 || c <= 0) {
        console.log('‘Invalid data’ - square or length of triangle’s side can’t be equal 0')
    } else {
 console.log('For input data',a,'(a lenght),',b,'(b lenght),',angle,'(α-angle):' +
     '\n    c lenght:',c,'\n    Triangle square:',S,'\n    Triangle perimeter:',P)
}
}