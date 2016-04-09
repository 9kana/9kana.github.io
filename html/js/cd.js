var $slider = $(".slider");

        // function calculateHeight(){
        //     var height = $(".slide.active").outerHeight();
        //     $slider.height(height);
        // }
        function resetSlides(){
            $(".slide.inactive").removeClass("inactiveBottom").removeClass("inactiveTop");
        }

        function gotoSlide($activeSlide, $slide, className){
             $activeSlide.removeClass("active").addClass("inactive "+className);
             $slide.removeClass("inactive").addClass("active");
            //  calculateHeight();
             setTimeout(resetSlides, 200);
        }

        $("#next").on("click", function(){
             var $activeSlide = $(".slide.active"),
                 $nextSlide = $activeSlide.next(".slide").length != 0 ? $activeSlide.next(".slide") : $(".slide:first-child");
                 gotoSlide($activeSlide, $nextSlide, "inactiveLeft");
        });

        $("#prev").on("click",  function(){
             var $activeSlide = $(".slide.active"),
                 $prevSlide = $activeSlide.prev(".slide").length != 0 ? $activeSlide.prev(".slide") : $(".slide:last-child");

                 gotoSlide($activeSlide, $prevSlide, "inactiveRight");
        });
        // calculateHeight();
