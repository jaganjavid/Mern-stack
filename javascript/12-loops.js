// For loop


// Loop can execute a block of code number of times


for(let i = 0; i <= 10; i++){
    if(i === 2 || i === 6){
        
        if(i === 2){
            console.log(`2 is my fav number`);
            continue;
        }
        
        if(i === 6){
            console.log(`6 is evil number`);
            continue;
        }
    }

    if(i === 5){
        console.log(`I just hit 5 to stop`);
        break;
    }

    console.log(i);
}


// While Loop

// let i = 0;

// while ( i < 10 ){

    // if(i === 2){
    //     console.log(`2 is my fav number`);
    //     continue;
    // }

    // if(i === 5){
    //     console.log(`I just hit 5 to stop`);
    //     break;
    // }

//     console.log(i);

//     i++;
// }
