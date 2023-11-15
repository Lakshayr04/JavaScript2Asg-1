(function ($) {
    $.fn.photoViewer = function () {
        var $current;
        var cache = {};
        var $frame = $('#photo-viewer');
        var $thumbs = $('.thumbnail-anchor');

        function crossfade($img) {
            if ($current) {
                $current.stop().fadeOut('slow');
            }
            $img.css({
                marginLeft: -$img.width() / 2,
                marginTop: -$img.height() / 2
            });
            $img.stop().fadeTo('slow', 1);
            $current = $img;
        }

        $(document).on('click', '.thumbnail-anchor', function customPhotoViewer(e) {
            e.preventDefault();
            var $img;
            var src = this.href;

            $thumbs.removeClass('active');
            $(this).addClass('active');
            $frame.removeClass('default-text');

            if (cache.hasOwnProperty(src)) {
                if (cache[src].isLoading === false) {
                    crossfade(cache[src].$img);
                }
            } else {
                $img = $('<img/>');
                cache[src] = {
                    $img: $img,
                    isLoading: true
                };

                $img.on('load', function () {
                    $(this).hide();
                    $frame.removeClass('is-loading').append($img);
                    cache[src].isLoading = false;
                    if (src === request) {
                        crossfade($(this));
                    }
                });

                $frame.addClass('is-loading');
                $img.attr({
                    'src': src,
                    'alt': this.title || ''
                });
            }
        });
    };
})(jQuery);
