const formgenerator = document.getElementById('form-generator')
const qrcode = document.getElementById('qrcode')

formgenerator.addEventListener('submit',generateQrCode)


function generateQrCode(e){
  e.preventDefault()
  const name = document.getElementById('Name').value
  const age = document.getElementById('Age').value
  const geneder = document.getElementById('gender').value
  const phoneNumber = document.getElementById('phoneNumbers').value
  const bloodgroup = document.getElementById('bloodgroup').value
  const address = document.getElementById('address').value
  


  const generateqrco = new QRCode('qrcode',{
     text:`This is the Emergency Details of the person 
     My Name is ${name} and my age is ${age} and i am ${geneder} this are some emergency contact numbers ${phoneNumber} and my blood group is ${bloodgroup} and home address ${address} please contact this when i am in emergency`,
    width:200,
    height:200
  })
  document.getElementById('clear').style.visibility = 'visible'
}

function clearrr (){
  window.location.reload()
}


