function findAge(array) {
        return array.reduce((obj, person) => {   
        const yearOfDeath = person.yearOfDeath || new Date().getFullYear();
        const age = yearOfDeath - person.yearOfBirth;
   
        obj[person.name] = age;

        return obj;
    }, {});
};

const findTheOldest = function(array) {
    const ages = findAge(array);
    
    const oldestPerson = Object.entries(ages).reduce((oldest, current) => {
        return current[1] > oldest[1] ? current : oldest
    });
    
    return array.find(person => person.name === oldestPerson[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
