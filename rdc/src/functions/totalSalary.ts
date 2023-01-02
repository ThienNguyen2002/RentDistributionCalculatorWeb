
//Sumnation of the total salary of all roomates, based on the input of the user. 
import User  from '../models/users'


function totalSalary(users : User[]) : number {
    let totalSalary = 0;
    for (const user of users) {
            const salary = user.salary ? parseFloat(user.salary.toString()) : 0;
    totalSalary += salary;
    }

    //update the total salary when a user is removed 
    return totalSalary;
}

export default totalSalary;