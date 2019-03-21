//What are types?
    //In a programming language, the types are what determine the amount of memory allocated to save a value. The type of a value also determine the operations and methods allowed to be performed on it.

//Primitive Types
    //When you access a primitive type, you work directly on it's value.

    //There are 6 different primitive types in JS
        //string
        //number
        //boolean
        //null
        //undefined
        //symbol

    //Example of using the primitve type
        const foo = 1;
        let bar = foo;

        bar = 10;

        console.log(foo, bar); // => 1, 10

//Complex Types
    //When you access a complex type, you are accessing the reference to a value

    //There are 3 different comples types in JS
        //Objects
        //Arrays
        //Funcitons

    //Example of using complex types
        const foo = [1,2];
        const bar = foo;

        bar[0] = 10;

        console.log(foo[0], bar[0]) // => 10,10