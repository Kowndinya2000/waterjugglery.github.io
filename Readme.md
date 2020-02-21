<!DOCTYPE html>
<html>
    <body style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
        <h3 style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
            Demo Link
        </h3>
    <a href="https://kowndinya2000.github.io/waterjugglery.github.io/">WEB DEMO</a>
       <h3 style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
            WATER JUG PROBLEM SERVER CODE
            (used express, node.js, ajax - xhttprequest, ejs)
        </h3>
    <a href="https://drive.google.com/file/d/1dqsOsPOBJInphEHflia2ZdFoevwB-ssD/view?usp=sharing">SEVER CODE LINK</a>   
        <h6>
            Sample Test Case to try:
            Give the following 4 values
            1. Capacity of JUG 1
            2. Capacity of JUG 2
            3. Inital Quantity of water in JUG 1
            4. Inital Quantity of water in JUG 2
            5. Final Quantity of water you want 
        </h6>
        <h6>
            a) Click on START GAME 
            b) Give the RULE NUMBERS accordingly and reach to Goal
        </h6>
        <h3 style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
            About the Problem
        </h3>
        <h6>
            There are two JUGS A,B.
            There is a siphon which has boundless water quantity which you can use to fill the Jugs, 
            and the ground on which water might be poured.
            Neither one of the jugs has any estimating markings on it.  
        </h6>
        <h3 style="color: #456FFF;">RULES</h3>
        <h6>1. Fill JUG A to it's full capacity</h6>
        <h6>2. Fill JUG B to it's full capacity</h6>
        <h6>3. Empty JUG A (pour water onto ground)</h6>
        <h6>4. Empty JUG B (pour water onto ground)</h6>
        <h6>5. Pour Water from JUG B to fill JUG A</h6>
        <h6>6. Pour Water from JUG A to fill JUG B</h6>
        <h6>7. Pour all of water from Jug B into Jug A</h6>
        <h6>8. Pour all of water from Jug A into Jug B</h6>
        <h3 style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
            State Space Representation and Initial State
        </h3>
        <h6>
            The state of the problem is represented as a
            tuple (a, b) where a represents the amount of water in the jug1 (Let's say 5 gallons) and b (Let's say 3 gallons)
            represents the amount of water in the jug2. 
            Initial state can be a = 0, b = 0.  
        </h6>
        <h3 style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
            Goal
        </h3>
        <h6>
<<<<<<< HEAD
            State  = (4,b) where 0 &lt;= b &gt;= 3
=======
            State  = (4,b) where 0 &lt;= b =&gt; 3
>>>>>>> 166b6bd6ecf9f22c3fe45cd5541472ff1a39ec3f
        </h6>
        <h3 style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
            Operators
        </h3>
        <h6>
1. Fill JUG A to it's full capacity (a,b), a &lt; 5 &#8594; (5,b)<br>
2. Fill JUG B to it's full capacity (a,b), b &lt; 3 &#8594; (a,3)<br>
3. Empty JUG A on ground (a,b), a &gt; 0 &#8594; (0,b)<br>
4. Empty JUG B on ground (a,b), b &gt; 0 &#8594; (a,0)<br>
5. Pour Water from JUG B to fill JUG A (a,b), 0 &lt; a+b &gt;= 5 and b &gt; 0 &#8594; (5,b-(5-a))<br> 
6. Pour Water from JUG A to fill JUG B (a,b), 0 &lt; a+b &gt;= 3 and a &gt; 0 &#8594; (a-(3-b),3)<br>
7. Pour all of water from Jug B into Jug A (a,b), 0 &lt; a+b &lt;= 5 and b &gt;= 0    &#8594; (a+b,0)<br>
8. Pour all of water from Jug A into Jug B (a,b), 0 &lt; a+b &lt;= 3 and a &gt;= 0    &#8594; (0,a+b)<br>
        </h6>
        <h3 style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
            Solution
        </h3>
        <h6>
Gallons in JUG A &nbsp; Gallons in JUG B &nbsp; Rule Applied<br>
&nbsp;&nbsp;&nbsp; 0 &nbsp;&nbsp;&nbsp; 0 &nbsp;&nbsp;&nbsp; 1<br>
&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp; 0 &nbsp;&nbsp;&nbsp; 6<br>
&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp; 4<br>
&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp; 0 &nbsp;&nbsp;&nbsp; 8<br>
&nbsp;&nbsp;&nbsp; 0 &nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp; 1<br>
&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp; 6<br>
&nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp; Goal Reached<br>
        </h6>
    </body>
</html>
