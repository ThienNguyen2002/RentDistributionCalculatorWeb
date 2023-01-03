
// Total rent percentage calculated by dividing the rent by the salary. 



function rentPercentage(rent, totalSalary) {

        if (typeof rent === "undefined") {
                return; 
        }
        else if (totalSalary !== 0) {        
        return (rent / totalSalary) * 100;
        }
    
}

export default rentPercentage;