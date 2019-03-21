//What is a reference in Javascript?
    //Javascript is always pass by value, but when a variable refers to an object (including arrays), the "value" is a reference to the object.

    //Always use the const keyword for your references, try to avoid using the var keyword as much as possible.
        //This ensures that you don't re-assign your references which could lead to bugs that are difficult to debug.

    //Don't
    var a = 1;
    var b = 2;

    //Do
    const a = 1;
    const b = 2;

    //If you need to re-assign your references, use the let keyword to define your reference.
        //let is block-scoped rather than function-scoped like var
    
    //Don't
    var count = 1;
    if(true){
        count += 2;
    };

    //Do
    let count = 1;
    if(true){
        count += 2;
    }

    //the let and const keywords are both block-scoped meaning they only exist in the block of code that they are defined.
    
    {
        let a = 1;
        const b = 2;
    }

    console.log(a); // => undefined
    console.log(b); // => undefined