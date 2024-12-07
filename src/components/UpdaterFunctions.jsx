//!=> We will set our state functions with updater functions for safer updating for ex:

import { useState } from "react";

const [ year, setYear ] = useState(2024);

//TODO=> If we want to update our function 2 times in 1 if case we probably do it like this:

if(true){
    setYear(year + 1);
    setYear(year + 1);
    setYear(year + 1);
}

//!=> We think that if we run this code the year value of the year state will be 2027 but it will not
//?=> Because at the code above we are setting our current state that's why instead of that we will do it like this

if(true){
    setYear(y => y + 1);
    setYear(prevYear => prevYear + 1);
}

//TODO=> This part of the code will work and this type of the functions are called UPDATER FUNCTIONS 
//?=> You can see we give 2 types of name as parameter to our updater function by taking the first letter of the variable that we gave to our useState wich is y for year in this case
//?=> Or we can set the name as prev for the shortened version of the previous