const validate = new Validate

document.getElementById('group1').children[1].addEventListener('blur', validate.validateName)
document.getElementById('group2').children[1].addEventListener('blur', validate.validateEmail)
document.getElementById('group3').children[1].addEventListener('blur', validate.validatePhone)
document.getElementById('group4').children[1].addEventListener('blur', validate.validateCity)
document.getElementById('group5').children[1].addEventListener('blur', validate.validatePincode)
document.getElementById('group6').children[1].addEventListener('blur', validate.validateState)
document.getElementById('group7').children[1].addEventListener('blur', validate.validateCountry)