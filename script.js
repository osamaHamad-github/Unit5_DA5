let height
let width

document.getElementById('submit-button').addEventListener('click', calculateArea)

function calculateArea (){
  height = document.getElementById('height').value
  width = document.getElementById('width').value

  let area = parseFloat(height)*parseFloat(width)
  alert(`Answer: ${area}`)
}