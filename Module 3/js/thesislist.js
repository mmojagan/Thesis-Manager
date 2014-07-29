$(document).ready(function($) {
	$("table tr:nth-child(even)").addClass("info");

	function showSuccessToast() {
        $().toastmessage('showSuccessToast', "Success Dialog which is fading away ...");
    }
    function showStickySuccessToast() {
        $().toastmessage('showToast', {
            text     : 'Success Dialog which is sticky',
            sticky   : true,
            position : 'top-right',
            type     : 'success',
            closeText: '',
            close    : function () {
                console.log("toast is closed ...");
            }
        });

    }
    function showNoticeToast() {
        $().toastmessage('showNoticeToast', "Click table row for complete details");
    }
    function showStickyNoticeToast() {
        $().toastmessage('showToast', {
             text     : 'Notice Dialog which is sticky',
             sticky   : true,
             position : 'top-right',
             type     : 'notice',
             closeText: '',
             close    : function () {console.log("toast is closed ...");}
        });
    }
    function showWarningToast() {
        $().toastmessage('showWarningToast', "Oh Snap!.. Please fill up the all fields");
    }
    function showStickyWarningToast() {
        $().toastmessage('showToast', {
            text     : 'Warning Dialog which is sticky',
            sticky   : true,
            position : 'top-right',
            type     : 'warning',
            closeText: '',
            close    : function () {
                console.log("toast is closed ...");
            }
        });
    }
    function showErrorToast() {
        $().toastmessage('showErrorToast', "Error Dialog which is fading away ...");
    }
    function showStickyErrorToast() {
        $().toastmessage('showToast', {
            text     : 'Error Dialog which is sticky',
            sticky   : true,
            position : 'top-right',
            type     : 'error',
            closeText: '',
            close    : function () {
                console.log("toast is closed ...");
            }
        });
    }

    
      $(".clickableRow").click(function() {
            window.document.location = $(this).attr("href");

   });
showNoticeToast();

$(".drop1").hover(function(){
    $(".drop1").addClass("open");
    },function(){
    $(".drop1").removeClass("open");
  });

    $(".drop2").hover(function(){
    $(".drop2").addClass("open");
    },function(){
    $(".drop2").removeClass("open");
  });

    $(".drop3").hover(function(){
    $(".drop3").addClass("open");
    },function(){
    $(".drop3").removeClass("open");
  });

    $(".drop4").hover(function(){
    $(".drop4").addClass("open");
    },function(){
    $(".drop4").removeClass("open");
  });

    $(".drop5").hover(function(){
    $(".drop5").addClass("open");
    },function(){
    $(".drop5").removeClass("open");
  });
});

