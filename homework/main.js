const nameInput = document.getElementById('name-box')
const emailInput = document.getElementById('email-box')
const jobInput = document.getElementById('job-box')
const checkbox = document.getElementById('checkbox')
let check = false;
const getS = selector => document.querySelector(selector)

let info = []

function Input(name,surname,address,job) {
    this.name=name
    this.surname=surname
    this.address = address
    this.job = job
}
function inputSex(){
    let sex = event.target.value;
    if(sex == 'man'){
        getS('#user2').style.display = 'block'
        getS('#user').style.display = 'none'
    }else{
        getS('#user2').style.display = 'none'
        getS('#user').style.display = 'block'
    } 
}
checkbox.addEventListener('click',()=>{
    getS('.sign-up').style.backgroundColor = `mediumseagreen`
    check = !check
    if(!check){
        getS('.sign-up').style.backgroundColor = `cadetblue`
    }
})

getS('.sign-up').addEventListener('click',()=>{
    if(check){
        getS('.container').style.display = 'none'; 
        getS('.wrapper').style.display = 'block' ;
        info.push(new Input(getS('.form-name').value,getS('.form-surname').value,getS('.form-address').value,getS('#position').value))
        info.forEach((input) =>{
            nameInput.innerHTML = ` ${input.name} ${input.surname}`
            emailInput.innerHTML = ` ${input.address}`
            jobInput.innerHTML = `${input.job}`
        })
    }
    else{
       alert('agree all statements in terms of servise')
    }
})

getS('.sign-out').addEventListener('click',()=>{
    getS('.form-name').value = ``
    getS('.form-surname').value = ``
    getS('.form-address').value= ``
    getS('#checkbox').checked = false;
    check = false;
    getS('.container').style.display = 'block' 
    getS('.wrapper').style.display = 'none'
})



