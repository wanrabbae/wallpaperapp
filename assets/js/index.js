// HOME
$('.searchAfter').css('display', 'none');


$.ajax({
    url: 'https://pixabay.com/api/',
    type: 'GET',
    dataType: 'json',
    data: {
        'key': '20941907-8ac1b123ba37b6b069336b547',
        'per_page': 200
    },
    success: (result) => {
        let img = result.hits;
        $.each(img, function (i, data) {
            $('.card-columns').append(`
                <div class="card-container">
                    <div class="card">
                        <a href="${data.largeImageURL}" target="_blank">
                            <img src="${data.webformatURL}" alt="" class="IMG img-fluid">
                        </a>
                    </div>
                </div>
             `);
        });
    }
});
// HOME

function searchWallpaper() {
    $('.card-columns').html('');

    $.ajax({
        url: 'https://pixabay.com/api/',
        type: 'GET',
        dataType: 'json',
        data: {
            'key': '20941907-8ac1b123ba37b6b069336b547',
            'q': $('#search-img').val(),
            'per_page': 190
        },
        success: (result) => {
            let img = result.hits;
            $.each(img, function (i, data) {
                $('.card-columns').append(`
                    <div class="card-container">
                        <div class="card">
                            <a href="${data.largeImageURL}" target="_blank">
                                <img src="${data.webformatURL}" alt="">
                            </a>
                        </div>
                    </div>
             `);
            });

            $('#search-img').val('');
        }
    });
}

$('#button-search').on('click', () => {
    searchWallpaper();
});

$('#search-img').on('keyup', (e) => {
    if (e.which == 13) {
        searchWallpaper();
    }
});

// $('.card-columns').on('click', '.IMG', function () {

// });



// Typing effect

const txtElement = ['Stock Images'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik() {

    if (count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex)
    document.querySelector('.auto').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 170);

})();

// Typing effect
