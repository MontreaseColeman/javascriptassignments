let code = true;
let counter = 100;
while (code == true) {
    
    console.log("code is working");
    counter -= 2




    if (counter % 5 == 0) {
        console.log("code is working i'm on number" + counter);

    }
    else if (!counter % 5) {
        console.log("not divisible by 5");
    }



    if (counter <= 0) {
        code = false
        break
    }

}
