// create a class rect
class rect{

//list the properties for class rect
length;
breadth;

//create a constructor method for class rect
constructor(len, bre){
this.length=len;
this.breadth=bre;
}

//define method getPerimeter() with 2 parameters 'len' and 'bre'   
getPerimeter(len,bre){
    
let perimeter= (parseInt(this.length) + parseFloat(this.breadth))*2
return perimeter
}

//define method getArea() with 2 parameters 'len' and 'bre'     
getArea(len,bre){
    let area=parseFloat(this.length*this.breadth)
    return area
    }
}

//export rect class
export {rect}