/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.appControls.events({
    "click #sidebar-toggle": function(ev, template) {
        var $el = $(ev.target);
        $("#Anigiri").toggleClass("sidebar-mode");
    },
    "click #fullscreen-toggle": function(ev, template) {
        var $el = $(ev.target);
        
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
            $("#Anigiri").addClass("fullscreen-mode");

            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            $("#Anigiri").removeClass("fullscreen-mode");

            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
});
