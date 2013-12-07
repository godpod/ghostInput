/**
 *
 *  jQuery ghostWriter Plugin for adding subdomain in forms
 *
 *  Author: GODPOD (Ravi Rajendra)
 *
 *  URL: https://github.com/godpod/javascript/ghostWriter
 *
**/
(function($) {
    $.fn.ghostInput = function(options) {
        var o = $.extend({
            ghostText: ".ghosttext",
            ghostPlaceholder: "Add subdomain",
            ghostTextClass: "ghost-text"
        }, options);
        return this.each(function(i, element){
            var $element = $(element);
            if($element.ghostInputValidate)
                return true;
            $element.ghostInputValidate = true;
            var r = $element.attr("id") || "";
            o.ghostPlaceholder = $element.attr("placeholder") || o.ghostPlaceholder;
            $element.attr("placeholder")?$element.removeAttr("placeholder"):"";
            o.ghostText = $element.attr("data-ghost-text") || o.ghostText;
            o.ghosttextspan = $("<label />").text(o.ghostPlaceholder);
            o.ghostHider = $("<label />").css({"visibility":"hidden"});
            o.ghostBox = $("<label />").attr("for", r).addClass(o.ghostTextClass).append(o.ghostHider).append(o.ghosttextspan);
            $element.parent().prepend(o.ghostBox);
            $element.bind("keyup keydown keypress change",function() {
                setTimeout(function() {
                    var t = "" == $.trim($element.val()) ? o.ghostPlaceholder: o.ghostText;
                    o.ghostHider.text($element.val());
                    o.ghosttextspan.text(t)
                }, 0)
            });
            return true;
        });
    };
})(window.jQuery);
jQuery("[rel=ghostInput]").ghostInput();