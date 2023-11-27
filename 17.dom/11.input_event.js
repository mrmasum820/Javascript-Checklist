let name = document.getElementById('name')

name.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('show-name').innerHTML = `Your name is: ${event.target.value}`
        event.target.value = ''
    }
})

//work with checkbox
let skills = document.getElementsByName('skills')
let result = document.getElementById('result')

let checkedSkills = [];

[...skills].forEach(skill => {
    skill.addEventListener('change', function (event) {
        // console.log(event.target.checked); //true / false
        if (event.target.checked) {
            checkedSkills.push(event.target.value)
            // console.log(checkedSkills);
            outputSkills(result, checkedSkills)
        } else {
            let index = checkedSkills.indexOf(event.target.value)
            checkedSkills.splice(index, 1)
            // console.log(checkedSkills);  //show empty array if any skills aren't selected
            outputSkills(result, checkedSkills)
        }
    })
})

function outputSkills(parent, skills) {
    let result = ''
    skills.forEach((skill, index) => {
        result += `(${index + 1}) ${skill} `
    })
    parent.innerHTML = result
}