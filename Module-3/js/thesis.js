$(document).ready(function($) {

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
        $().toastmessage('showNoticeToast', "Notice  Dialog which is fading away ...");
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
        $().toastmessage('showWarningToast', "Oh Snap!.. Please fill up all fields");
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
	$( "#submit" ).click(function() {
		if ($("#title").val() ==="" || $("#description").val() ==="" || $(".syear").val() ==="emptythesis" || $("#status").val() ==="" ){
  		showWarningToast();
		return false;
		}else{return true;}
	});
    $( "#submit" ).click(function() {
        if ($("#intro").val() ==="" || $("#fname").val() ==="" || $("#lname").val() ==="" || $("#email").val() ==="" || $("#number").val() ==="" || $("#department").val() ==="" ){
        showWarningToast();
        return false;
        }else{return true;}
    });
    $( "#submit" ).click(function() {
        if ($("#introstudent").val() ==="" || $("#firstname").val() ==="" || $("#lastname").val() ==="" || $("#email_add").val() ==="" || $("#snum").val() ==="" || $(".remarks").val() ==="" ){
        showWarningToast();
        return false;
        }else{return true;}
    });

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

});

