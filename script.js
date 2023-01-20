const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)

const data = { 
    exercise: ['01-01', '01-02', '01-06'], 
    water: ['01-01', '01-04', '01-05'],
    diet: ['01-01', '01-03', '01-06'],
    read: ['01-01', '01-03', '01-04', '01-06'],
    meditate: ['01-02', '01-03', '01-06', '01-09'],
  }
  
  nlwSetup.setData(data)
  nlwSetup.load()   