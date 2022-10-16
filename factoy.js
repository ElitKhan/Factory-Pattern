function Developer(name, type) {
    this.name = name;
    this.type = type;
}

function Manager(name, type) {
    this.name = name;
    this.type = type;
}


function EmployeeFactory() {
    this.create = (type, name) => {
        switch (type) {
            case 'Developer':
                return new Developer(name, type);
                break;
            case 'Manager':
                return new Manager(name, type);
            default:
                return null;
        }
    }
}

const factory = new EmployeeFactory();
const employees = [];

function say() {
    console.log('My name is ' + this.name + ' and, I am a ' + this.type)
}

employees.push(factory.create('Developer', 'Qaisar'));
employees.push(factory.create('Manager', 'Amir'));
employees.push(factory.create('Developer', 'Yasir'));

for (let emp of employees) {
    say.call(emp)
}