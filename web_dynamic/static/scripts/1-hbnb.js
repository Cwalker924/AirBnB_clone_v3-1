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

});
