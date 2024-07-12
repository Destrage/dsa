const user = {
    name: 'John',
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}
const address = {
    city: 'New York',
    country: 'USA'
}

const userWithAddress = Object.assign(user, { ...address });
console.log(userWithAddress);