// here we aer going to select the entire form 
// and the event is a submit type of event 
const from = document.querySelector('form')

from.addEventListener('submit', function(e){
    e.preventDefault()
    // this si going to prevent the default action
    // we aer taking 2 values
    const height = parseInt(document.querySelector('#height').value)
    // this is going to select value
    // this is going to be in th eform of string , we ar going to parse that 
    const weight = parseInt(document.querySelector('#weight').value)
    // these values are extracted after clicking submit button 
    // therefore we should be selecting the values here only after the event

    const results = document.querySelector('#results')
    const guidance = document.querySelector('#guidance')

// the below isNaN is importnat method
    if(height ==="" || height <0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    }

    else if(weight ==="" || weight <0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }

    else{
      const bmi =  (weight/ ((height * height)/10000)).toFixed(2)
        // tofix is importnat to maake to 2 decimal
        // showing result 
        results.innerHTML = `<span>${bmi}</span>`
    }
    if(weight<18.6){
        guidance.innerHTML = `<span>You are underweight</span>`
    }
    else if(weight >= 18.6 && weight <24.9){
        guidance.innerHTML = `<span>You are in normal range</span>`
    }
   else{
        guidance.innerHTML = `<span>You are overweight</span>`
    }

})
