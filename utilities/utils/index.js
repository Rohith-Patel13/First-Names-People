/*
utilities
    - utils
        - index.js        // contains a function that returns the first names of the people
*/

const getFirstNames = (list) => {
  return list.map((eachPerson) => eachPerson.firstName);
};
//console.log(list);
module.exports = getFirstNames;

/*
terminal:
root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2c# ls -a
.  ..  .gitignore  .theia  README.md  country  names  utilities
root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2c# cd utilities
root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2c/utilities# ls
utils
root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2c/utilities# cd utils
root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2c/utilities/utils# ls
index.js
root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2c/utilities/utils# node index.js
root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2c/utilities/utils# pwd
/home/workspace/coding-practices/coding-practice-2c/utilities/utils
root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2c/utilities/utils# node index.js
[
  { firstName: 'Dorothy', lastName: 'Randall' },
  { firstName: 'Victor', lastName: 'Abraham' },
  { firstName: 'Lillian', lastName: 'Short' },
  { firstName: 'Owen', lastName: 'Rampling' },
  { firstName: 'Julia', lastName: 'Glover' },
  { firstName: 'Donna', lastName: 'Wilson' },
  { firstName: 'Rose', lastName: 'Anderson' },
  { firstName: 'Nicholas', lastName: 'McGrath' },
  { firstName: 'Warren', lastName: 'Langdon' },
  { firstName: 'Austin', lastName: 'Vaughan' }
]
root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2c/utilities/utils# 
*/
