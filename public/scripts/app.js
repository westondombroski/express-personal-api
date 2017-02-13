console.log("Sanity Check: JS is working!");

  $(document).ready( function(){
    $("form").on("submit", function(e) {
     e.preventDefault();

     getDrummer();
    });
  });

    function getDrummer() {
      $.ajax({
        method: "GET",
        url: "",
        data: $("form").serialize(),
        success: onSuccess,
        error: onError
      });
    }

    function postDrummer(){
      $.ajax({
        method: "POST",
        url: "",
        data: $("form").serialize(),
        success: onSuccess,
        error: onError
      });
    }








});
