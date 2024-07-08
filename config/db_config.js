let user = { username: "Evan", address: { adr1: 'trivandrum' } };

let userShalloCopy = { ...user };

userShalloCopy.username = 'Evan Victor Paul'

userShalloCopy.address.adr1 = "Kochi";


// console.log(user, userShalloCopy);

// 

let users = [{ "name": "Evan", "age": 21 }, { "name": "Asfab", "age": 22 }, { "name": "Krishna", "age": 21 }];
const expectedResult = { 21: ["Evan", "Krishna"], 22: ["Asfab"] }

users = users.reduce((prev, { name, age }) => {
    if (prev[age]) prev[age].push(name);
    else prev[age] = [name];
    return prev;
}, {});

// console.log(users);


let withUsersSkills = [
    {
        "name": "Evan", "age": 21,
        "skills":
            ["React", "Javascript", "Java"]
    },
    {
        "name": "Asfab", "age": 22,
        "skills": ["Java", "Angular"]
    },
    {
        "name": "Krishna", "age": 21,
        "skills": ["Python", "Django"]

    }]

// console.log(uniqueSkillsOnly);

function getUsers(skill) {
    let users = [];
    withUsersSkills.map(({ name, skills }) => {
        if (skills.includes(skill)) users.push(name)
    })

    return users;
}

// console.log(getUsers('Java')); 


const a = () => {
    let aa = 1;
    console.log(aa);
    const b = () => {
        let bb = 2;
        console.log(aa);
        console.log(bb);
    };
    b();
}; 

a();