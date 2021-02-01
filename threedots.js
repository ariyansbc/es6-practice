
const ages = [12,20,25];
const ages2 = [14,13,36,5];
const ages3 = [5,6,34]
const allAges = ages.concat(ages2).concat([100]).concat(ages3);

const allAges2 = [...ages,...ages2,100];
console.log(allAges);
console.log(allAges2);

const businessMan = 550;
const jobHolder= 350;
const mp = 650;
const maximum = Math.max(businessMan,jobHolder,mp);
console.log('maximum', maximum);

// finding maximum in array
const salary = [650,330,850,990];
// const maxSalary = Math.max(salary);
const maxSalary = Math.max(...salary);
console.log('maxSalary:', maxSalary);


