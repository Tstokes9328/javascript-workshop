//What are objects?
    //An object in Javascript is a collection of data and functionality. These collections consists of variables and functions that are referred to as properties and methods. Data is stored in key-value pairs

    //Use the literal syntax for object creation
        //bad
        const obj = new Object();

        //good
        const obj = {};

    //Use object method shorthand
        //bad
        const obj = {
            value: 1,

            addValue: function(value){
                return obj.value + value;
            },
        }

        //good
        const obj = {
            value: 1,

            addValue(value){
                return obj.value + value;
            },
        }

    //Use property value shorthand
        const firstName = 'Tayte';

        //bad
        const obj = {
            firstName: firstName
        }

        //good
        const obj = {
            firstName
        }

    //Group you property shorthands together at the top of the object
        //Why? It's easier to tell what properties are using the shorthand

        const firstName = 'Tayte';
        const lastName = 'Stokes';

        //bad
        const obj = {
            firstName,
            age: 22,
            gender: 'male',
            lastName
        }

        //good
        const obj = {
            firstName,
            lastName,
            age: 21,
            gender: 'male'
        }

    //Only quote properties that are invalid identifiers
        //Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

        //bad
        const obj = {
            'foo': 3,
            'bar': 4,
            'data-blah': 5,
        }

        //good
        const obj = {
            foo: 3,
            bar: 4,
            'data-blah': 5,
          };

    //Do not call Object.prototype methods directly
          //bad
          console.log(Object.hasOwnProperty(key));

          //good
          console.log(Object.prototype.hasOwnProperty(object, key))

          //best
          const has = Object.prototype.hasOwnProperty() // ==> this will cache the look up in the module scope

    //Use the object ...spread operator over Object.assign to make shallow copies of objects
          //bad
          const obj = {a:1, b:2};
          const copyObj = Object.assign(obj, {c:3}) // ==> this will mutate the original object

          //good
          const obj = {a:1, b:2};
          const copyObj = {...obj, c: 3};