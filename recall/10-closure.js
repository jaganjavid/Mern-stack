

// function buildFunction(){
//     var arr = [];

//     for(var i = 0; i < 3; i++){

//         arr.push(function(){
//             console.log(j);
//         })
//     }

//     return arr;
// }

// var fs = buildFunction();

// fs[0]();
// fs[1]();
// fs[2]();


function buildFunction2(){
    var arr = [];

    for(var i = 0; i < 3; i++){
        arr.push((function(j){
          console.log(j)
        }(i)))
    }

    return arr;
}

var fs = buildFunction2();

fs[0];
fs[1];
fs[2];
