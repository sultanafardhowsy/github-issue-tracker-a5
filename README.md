1️⃣ What is the difference between var, let, and const?

Ans: The difference between var let and const in javascript lies in their initializing, scoping and reassignability.
     1.var has global scope but let and const are block scoped, their scope is inside the curly braces inside wher they are declared.
     2. var is mutable and reassginable, let can be can be changed but not reassigned in the same scope. the value of const is constant so can not be changed and can not be reassigned.
     3. before assignment all are hoisted but only var is initialized as undefined. let and const is hoisted but not defined they are leading to the temporal zone.

2️⃣ What is the spread operator (...)?

Ans: Spread oparator is introduced in ES6. this feature helps to merge data of array or object. it gives opportunity to get the array element as single element, and bring the key and value of object as single pair. it provides cleaner method then concat() or object.assign().

3️⃣ What is the difference between map(), filter(), and forEach()?

Ans: The difference between map(), filter(), and forEach() lies in the purpose of their use and return value;
foreach is used to iterrating an array to execute specific funtion on every element but nothing is returned. map transform every element in a new value.filter returns only matching element. foreach cannot be chained with other array method.map and filter can be chained with other array method.

4️⃣ What is an arrow function?

Ans: arrow mehtod is introduced in ES6. it is a concised form of writing funtion using arrow sign. this expression improves readability. while passing single statment curle braces and return can be ommitted. 

5️⃣ What are template literals?

Ans: template literals is a modern javascript method introduced in ES6. it's backtic(``) delimited. its provides easier and multiple line string operation. it allows variables and expressions to be directly inserted using the ${variable} syntax.
