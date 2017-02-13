$(document).ready( function(){
   getDrummers();
});

  function getDrummers() {
    $.ajax({
      method: "GET",
      url: "https://calm-scrubland-61487.herokuapp.com/api/drummers",
      success: onSuccess,
      error: onError
    });
  }

  function onSuccess(json) {
    $("#results").html("");

    for(var i=0; i<json.length; i++) {
      var name = json[i].name;
      var image = json[i].image;
      var url = json[i].url;

      $("#results").append($(`
        <div class="col-md-2 drummers btn">
            <div><a href="${url}" target="_blank"><img src="${image}" class="img-responsive"></a></div>
            <div><h4>${name}<h4></div>
            <div><h4 class="btn DELETE">X</h4></div>
        </div>`)
        )
    }
  }

  function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.dir(xhr);
  }


  // $(".DELETE").on("click", function(e) {
  //   this.drummer._id.remove(function (err, product) {
  //     if (err) return handleError(err);
  //     this.drummer.findById(drummers._id, function (err, product) {
  //       console.log(product) // null
  //     })
  //   })
  // });
