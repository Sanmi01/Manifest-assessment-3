let evenNumbers = [ ];
let oddNumbers = [ ];

const segementUser = (users) => {
    
    for (let i = 1; i <= users; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
         } else {
             oddNumbers.push(i)
        }
    }

    console.log("Even Numbered Users: " + evenNumbers)
    console.log("Odd Numbered Users : " + oddNumbers)
    

}

segementUser(100)
