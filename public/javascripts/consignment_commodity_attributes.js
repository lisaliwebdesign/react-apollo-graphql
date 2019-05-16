/* global $ */

function update (formId, buttonId, buttonName, buttonValue) {
  document.getElementById(buttonId).name = buttonName
  document.getElementById(buttonId).value = buttonValue
  document.getElementById(formId).submit()
}

function updateType () {
  update('categories', 'typeButtonId', 'typeButton', 'update')
}

function updateClass () {
  update('categories', 'classButtonId', 'classButton', 'update')
}

function updateFamily () {
  update('categories', 'familyButtonId', 'familyButton', 'update')
}

$(document).ready(function () {
  if(document.getElementById('type-select')) {
    document.getElementById('type-select').addEventListener('change', updateType)
  }
  if(document.getElementById('class-select')) {
    document.getElementById('class-select').addEventListener('change', updateClass)
  }
  if(document.getElementById('family-select')) {
    document.getElementById('family-select').addEventListener('change', updateFamily)
  }
})
