// alert("test");
// ### Problem 1
//
// Asks the user to enter 1 for 'count down' and 2 for 'count up'. Keep ask them them to do that until they enter 'q' to quit. If they enter 1,
// ask them what they want to count down to. Start from 0 and count down to that number by ones. If they enter 2, ask them what they want to count up to.
// Start from 0 and count up to the number by ones.



var UserEntry = parseInt(prompt("Enter '1' to count down, and Enter '2' to count up"));
// var Total = 0;
while (UserEntry !=="q")
console.log();
    if (UserEntry===1)
    {
        var UserEntry2 = parseInt(prompt("Enter Number to count from: "));
        // var ConTwo = parseInt(prompt("Enter 2nd Value"));
        if (UserEntry2 === 1)
        {
            for(var a = 0; a>UserEntry2; a--)
                console.log(a);
        }
    }
else if(UserEntry==="q")
    {
        alert("Thannks come again")
    }

    // console.log(x);
    // for (var x = 0; x <= UserEntry2; x = UserEntry2--)

    // {
        // alert(x);

   // {
       // Total=UserEntry;
       // alert(Total);
       // UserEntry = parseInt(prompt("Enter '1' to count down, and Enter '2' to count up"));
   // }
   // else if(UserEntry===2)
   // {
   //     Total=Total+UserEntry;
   //     alert(Total);
   //     UserEntry = parseInt(prompt("Enter '1' to count down, and Enter '2' to count up"));
   // }
// }









//
//     ### Challenge
//
// Asks the user to enter their name and keep asking them until they enter 'quit' to quit. If they enter Kevin say 'What's up Kevin'. If they enter Kenn say 'Hi Kenn'. If they enter Autumn say 'Good morning Autumn'. If they don't enter any of those names say 'Hello [NAME]'.
