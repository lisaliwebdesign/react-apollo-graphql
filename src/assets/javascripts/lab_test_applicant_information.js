/* global $ */

function manageShowHide(select, document) {
  if (select.value === 'Other') {
    document.getElementById('container-laboratory-other').classList.remove('js-hidden')
  } else {
    document.getElementById('container-laboratory-other').classList.add('js-hidden')
  }
}

$(document).ready(function () {
  var select = document.getElementById('laboratory')
  manageShowHide(select, document)
  if (select) {
    select.addEventListener('change', function () {
      manageShowHide(select, document)
    })
  }
})
