
// Rent percentage * Monthly salary = Rent to each mate 

 function rentToMate(rentPer, salary) {
    if (typeof rentPer === "undefined") {
        return; 
}  
        return ((rentPer/100) * salary);
        
    
    
}

export default rentToMate;