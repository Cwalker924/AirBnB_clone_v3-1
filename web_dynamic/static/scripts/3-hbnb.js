$(document).ready(function () {

  const storage = {};

  $('li :checkbox').change(function () {
    let amen_id = $(this).attr('data-id');
    let amen_name = $(this).attr('data-name');

    if (this.checked) {
      storage[amen_id] = amen_name;
    } else {
      delete storage[amen_id];
    }

    $('div.amenities h4').empty();

    let added_text = $.map(storage, function (v) {
      return v;
    }).join(', ');

    $('div.amenities h4').text(added_text);
  });



  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    type: 'GET',
    contentType: 'application/json',
    success: function (stat) {
      if (stat.status !== 'OK') {
	$('DIV#api_status').removeClass('available');
      } else {
	$('DIV#api_status').addClass('available');
      }
    },
    error: function (stat) {
      $('DIV#api_status').removeClass('available');
    }
  });


});
