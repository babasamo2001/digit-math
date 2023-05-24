         A.   This is an example of a very simple frontend ONLY javascript app


          1.  -A simple UI is created to accept the following information from user namely,
              lenght and breadth of rectangle and to view the resulting
              Area and Perimeter after clicking "Calculate" button.
        

	  2.  -A class named 'rect' is created inside rectangle.js (referred to as "module") with 
	       zero parameters; length and breadth.
              -This class has 2 methods; getArea() and getPerimeter(), both containing 2 parameters, 
              'len' and 'bre' for length and breadth properties respectively, and returning Area and Perimeter 
               values whenever they are called on the object 'rect'.
              -The class is finally exported(exposed) to any module(javascript file) that may want to import 
	       the class, create an object out of it, and call the object functionality (properties (lenth and breadth) 
	       and methods (getArea() and getPerimeter())).
        
        
          3. -A Click event procedure is created for "Calculate" button.


 	  4. -rect class (library) is imported into home.js (module) from rectangle.js module.
             -An object is created from rect class with unset(no initialization)
             lenght and breadth properties in a process called "class instantiation and initialization".
         

	  5. -Form fields(length and breadth) are looked up (read) in HTML and stored into 'L' and 'B' variables ('number'                 type)
             -These variables are then passed as arguments into the getArea() and getPerimeter() methods 'len' and 'bre'                   parameters when the 2 methods get called on rect object
             -Lastly, the results of the Area and Perimeter are passed (written) into HTML form's Area and Perimeter 
	            DOM's objects ('number' type) respectively.  
	      End!!
        
          B. How to run the code on your local machine
     1. Install WAMP Server (recent version).
     2. Install Visual Studio Code (recent version)
     3. Start the WAMP server by double clicking and ensure 3 services running status are shown on the WAMP server icon and         icon changes to green colour.
     4. Create your project folder, give it a name.
     5. Download the files in digi-math and paste them into your project folder
     6. Open the project folder in Visual Studio Code and edit all references to the following project files in accordance           with your project folder location path.
     7. Run the code
        Enjoy!
        
