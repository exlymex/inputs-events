const moveButton = document.getElementById('button')
const inputInfo = document.getElementById('info')
const inputTake = document.getElementById('take-it')
const inputPlaceholder = document.getElementById('placeholder')
// moveButton.addEventListener('click',()=>{
  
// })
moveButton.addEventListener('click',()=>{
    if(inputInfo.value.length>0){
        inputTake.value = inputInfo.value
        inputInfo.value = ''
    }
})
inputPlaceholder.addEventListener('mouseenter',()=>{
    if(inputPlaceholder.value.length>0){ 
        inputPlaceholder.placeholder = inputPlaceholder.value
        inputPlaceholder.value = ''
    }else{
        console.log('fuck')
    }
})