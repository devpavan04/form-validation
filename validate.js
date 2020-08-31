class Validate {
  constructor() {
    this.name = document.getElementById('group1')
    this.email = document.getElementById('group2')
    this.phone = document.getElementById('group3')
    this.city = document.getElementById('group4')
    this.pincode = document.getElementById('group5')
    this.state = document.getElementById('group6')
    this.country = document.getElementById('group7')
  }

  validateName = (e) => {
    const name = e.target.value,
      re = /^[a-zA-Z]{2,30}$/

    if (!re.test(name)) {
      this.name.children[2].style.display = 'block'
      this.name.children[1].className = 'invalid-input'
    } else {
      this.name.children[2].style.display = 'none'
      this.name.children[1].className = ''
    }
  }

  validateEmail = (e) => {
    const email = e.target.value,
      re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (!re.test(email)) {
      this.email.children[2].style.display = 'block'
      this.email.children[1].className = 'invalid-input'
    } else {
      this.email.children[2].style.display = 'none'
      this.email.children[1].className = ''
    }
  }

  validatePhone = (e) => {
    const phone = e.target.value,
      re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/

    if (!re.test(phone)) {
      this.phone.children[2].style.display = 'block'
      this.phone.children[1].className = 'invalid-input'
    } else {
      this.phone.children[2].style.display = 'none'
      this.phone.children[1].className = ''
    }
  }

  validateCity = (e) => {
    const city = e.target.value,
      re = /^[a-zA-Z]{2,20}$/

    if (!re.test(city)) {
      this.city.children[2].style.display = 'block'
      this.city.children[1].className = 'invalid-input'
    } else {
      this.city.children[2].style.display = 'none'
      this.city.children[1].className = ''
    }
  }

  validatePincode = (e) => {
    const pincode = e.target.value,
      re = /^[0-9]{6}$/

    if (!re.test(pincode)) {
      this.pincode.children[2].style.display = 'block'
      this.pincode.children[1].className = 'invalid-input'
    } else {
      this.pincode.children[2].style.display = 'none'
      this.pincode.children[1].className = ''
    }
  }

  validateState = (e) => {
    const state = e.target.value,
      re = /^[a-zA-Z]{2,20}(.)[a-zA-Z]{2,20}$/

    if (!re.test(state)) {
      this.state.children[2].style.display = 'block'
      this.state.children[1].className = 'invalid-input'
    } else {
      this.state.children[2].style.display = 'none'
      this.state.children[1].className = ''
    }
  }

  validateCountry = (e) => {
    const country = e.target.value,
      re = /^[a-zA-Z]{2,20}(.)[a-zA-Z]{2,20}$/

    if (!re.test(country)) {
      this.country.children[2].style.display = 'block'
      this.country.children[1].className = 'invalid-input'
    } else {
      this.country.children[2].style.display = 'none'
      this.country.children[1].className = ''
    }
  }
}