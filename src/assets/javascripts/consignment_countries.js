/* global $ */

function update() {
  var consignedCountry = document.getElementById('consigned-country')
  if (consignedCountry) {
    var originCountry = document.getElementById('origin-country')
    if (originCountry) {
      consignedCountry.selectedIndex = originCountry.selectedIndex
    }
  }
}

function showRegion() {
  if($('#origin-country') && $('#region-code-optionYes') && $('#region-code-optionNo') &&  $('#region-code')){
    var region = document.getElementById('origin-country')
    var regionCode = region.options[region.selectedIndex].value
    var regionOptionYes = document.getElementById('region-code-optionYes')
    var regionOptionNo = document.getElementById('region-code-optionNo')
    if(regionOptionNo.checked){
      regionCode=''
    }
    if (regionCode !== '' && regionOptionYes.checked) {
      $('#region-of-consignment').removeClass('js-hidden')
          .addClass('panel panel-border-narrow')
    } else {
      $('#region-code').val(regionCode)
      $('#region-of-consignment').addClass('js-hidden')
    }
    $('#region-code-box').html(regionCode)
  }
}

function  showRegionOption() {
  if($('#origin-country')) {
    var region = document.getElementById('origin-country')
    var regionCode = region.options[region.selectedIndex].value
    if (regionCode !== '') {
      $('#region-of-consignment-option').removeClass('js-hidden')
    } else {
      $('#region-of-consignment-option').addClass('js-hidden')
    }
  }
}

function showRegionCode(){
  showRegion()
  showRegionOption()
}

function updateAndShowRegionCode(){
  update()
  showRegionOption()
  showRegion()
}

$(document).ready(function () {
  if($('#origin-country')){
    document.getElementById('origin-country').addEventListener('change', updateAndShowRegionCode)
  }
  if($('#region-code-optionYes') && $('#region-code-optionNo')){
    document.getElementById('region-code-optionYes').addEventListener('click', showRegion)
    document.getElementById('region-code-optionNo').addEventListener('click', showRegion)
  }

  // only show the box if javascript enabled
  if($('#region-code-input')) {
    $('#region-code-input').removeClass('hidden').css('display', 'inline-block')
  }
  showRegionCode()
})
