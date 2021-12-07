

function isObject(subject) {
    return typeof subject == "object";
};

function isArray(subject) {
    return Array.isArray(subject);
};



function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if(subjectIsArray){
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject) {
           // copySubject[key] = deepCopy(subject[key]);
        } else {
            if(subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    } 

    return copySubject;
}



function SuperObject() {}

SuperObject.isObject = function (subject) {
    return typeof subject == "object";
};

SuperObject.deepCopy = function (subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if(subjectIsArray){
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject) {
           // copySubject[key] = deepCopy(subject[key]);
        } else {
            if(subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    } 

    return copySubject;
}



function LearningPath({
    name = requieredParam("name"),
    courses = [],
}) {

    this.name = name;
    this.courses = courses;
}

function requieredParam(param) {
    throw new Error(`${param} es obligatorio`);
}


function Student({
    name = requieredParam("name"),
    email = requieredParam("email"),
    age, 
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [], 
} = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };

    const private = {
        "_learningPaths": [],
    };

    Object.defineProperty(this, "learningPaths", {
        get() {
            return private["_learningPaths"];
        },
    
        set(newLP) {
            
            if (newLP instanceof LearningPath) {
                private["_learningPaths"].push(newLP);
            } else {
                console.warn("Algunos de los LPs no es una instancia del prototipo LearningPath");
            }
        },
        
    });


   
        
    for (learningPathIndex in learningPaths) {
        this.learningPaths = learningPaths[learningPathIndex];
    }

}
 


const escuelaWeb = new LearningPath({name: "Escuela de WebDev"});
const escuelaData = new LearningPath({name: "Escuela de Data Science"});
const juan = new Student({
    email: "juanito@frijoles.com", 
    name: "juanito",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});

/* Object.defineProperty(juan, "name", {
    value: "Juanito",
    configurable: false,
}); */


/* for(prop in obj1) { //Por cada propiedad en mi bojeto 1, lo que voy hacer es crear esa nueva
                                // propiedad, dentor del objeto 2
    obj2[prop] = obj1[prop];
}

const obj3 = Object.assign({}, obj1);
const obj4 = Object.create(obj1); */

/* function recursiva() {
    if(){

    } else {

    }
} */


//const numeritos = [0,2,4,5,7,8,5,21,2,4,5,4,2,12,5,];

/* let numerito = 0;
for(let index = 0; index < numeritos.length; index++) {
    numerito = numeritos[index];
    console.log({index, numerito});
} */

/* function recursiva(numbersArray) {
    if(numbersArray.lenght != 0) {
        const firstNum = numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();
        recursiva(numbersArray);
    }
} */

