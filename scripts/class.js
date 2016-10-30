/*jshint esversion: 6 */

// classes
// utilize new shorthand method notation
// classes are not hoisted
// cant use call function with classes
class Task {
    showId() {
        return 99;
    }
}
let task = new Task();
let classType = typeof task; // object
task.showId(); // 99

// extends
class Project {
    constructor(name) {
        this.name = name;
    }
}
// if you dont call super in a subclass' constructor function
// you get an error 'this is not defined'
class SoftwareProject extends Project {
    constructor() {
        super();
        this.type = 'operating system';
    }
}
let p = new SoftwareProject('Windows'); // p.name = 'windows', p.type = 'operating system'

// methods with super
class Vehicle {
    getWheels() {
        return 2;
    }
}
// super looks up the prototype chain to find a function getWheels
class Car extends Vehicle {
    getWheels() {
        return super.getWheels() + 2;
    }
}

let c = new Car();
c.getWheels(); // 4

// easy way to set prototype
let project = {
    getTaskCount() {
        return 50;
    }
};
let softwareProject = {
    getTaskCount() {
        return super.getTaskCount() + 7;
    }
};

Object.setPrototypeOf(softwareProject, project);
softwareProject.getTaskCount(); // 57

// new.target simply references the original constructor call
