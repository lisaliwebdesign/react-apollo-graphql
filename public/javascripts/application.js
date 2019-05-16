/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

// Add 'js-enabled' style to body element since this has been removed from
// govuk_template.html for security reasons (inline script injection)
$('body').addClass('js-enabled')

$(document).ready(function () {

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  let showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()

  initBackButtonFunctionality()
  updateManagementAccountUrl()

  // Initialise govuk-frontend as we use its Tabs functionality
  window.GOVUKFrontend.initAll()
})

function initBackButtonFunctionality() {
  window.onpageshow = function (event) {
    if (event.persisted) {
      location.reload(true)
    }
  }
  //polyfill for IE10 and also needed for some pages because of etag
  if (window.performance && window.performance.navigation.type
    == window.performance.navigation.TYPE_BACK_FORWARD) {
    location.reload(true)
  }
  //show back button
  if (!$('#back-link-container').children().length) {
    $('#back-link-container').append(
        '<a class="link-back" href="#" id="link-back" data-qa-id="Link-Back">Back</a>')
  } else {
    const backLinkName = $('#back-link-name').text()
    $('#back-link-container').append(
        '<a class="link-back" href="#" id="link-back" data-qa-id="Link-Back">'+backLinkName+'</a>')
  }
  $('#link-back').click(function(e) {
    e.preventDefault()
    window.history.go(-1)
  })
}

function updateManagementAccountUrl() {
  let hash = window.location.hash
  let link = document.getElementById('manage-account-link')
  if (hash && link) {
    let encodedHash = encodeURIComponent(hash)
    link.href += encodedHash
  }
}
