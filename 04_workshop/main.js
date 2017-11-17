$(function () {
    var cuteness = 5;

    var $minusBtn = $("#minusBtn");
    var $plusBtn = $("#plusBtn");
    var $emojiImg = $("#emojiImg");
    var $slider = $("#slider");
    var $cutenessDisplay = $("#cutenessDisplay");

    $minusBtn.click(function () {
        if (cuteness != 0) {
            cuteness--;
            $cutenessDisplay.html(cuteness);
            $slider.val(cuteness);
            changeImageToDisplay()
        }
    });

    $plusBtn.click(function () {
        if (cuteness != 10) {
            cuteness++;
            $cutenessDisplay.html(cuteness);
            $slider.val(cuteness);
            changeImageToDisplay();
        }
    });

    $slider.on('change', function () {
        cuteness = $(this).val();
        $cutenessDisplay.html(cuteness);
        changeImageToDisplay();
    });

    function changeImageToDisplay() {
        if (cuteness >= 0 && cuteness <= 2) {
            $emojiImg.attr('src', 'emojis/crying.jpg');
        }
        else if (cuteness >= 3 && cuteness <= 5) {
            $emojiImg.attr('src', 'emojis/sad.jpg');
        }
        else if (cuteness >= 6 && cuteness <= 8) {
            $emojiImg.attr('src', 'emojis/angry.png');
        }
        else if (cuteness >= 9 && cuteness <= 10) {
            $emojiImg.attr('src', 'emojis/happy.jpg');
        }
    }
});
