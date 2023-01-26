function back () {
    location.href = 'https://lovekimnguyen.github.io/sign-in';
}
let c = 1 ;
function enter () {
    let a =  document.getElementById('name__ny').value;
    if(a == 'Trần Thị Kim Nguyên' && c == 1){
    c = 0 ;
    document.getElementById("ten").innerHTML = 'Username : lovekimnguyen' ;
    document.getElementById("mk").innerHTML = 'Password : lovehanguyen';
    }
    else if(a != 'Trần Thị Kim Nguyên' ) alert("Sai tên !!!");
    else {
        document.getElementById("ten").innerHTML = '';
        document.getElementById("mk").innerHTML = '';
        c = 1 ;
    }
}