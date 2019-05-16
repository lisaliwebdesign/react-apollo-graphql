$(document).ready(function () {
  var selectedCommodity = $('input[name=selectedCommodity]').val()

  // check that the value is not the parent - all commodities
  if (selectedCommodity !== 'root') {
    location.href = '#commodity-' + selectedCommodity
  }
})