// HOME

$('.searchAfter').css('display', 'none');


$.ajax({
    url: 'https://api.unsplash.com/photos',
    type: 'GET',
    dataType: 'json',
    data: {
        'client_id': '7HIvQ9iYY8_0rgvLZHiWCFtxVOuLrbmKgSuDRe_2noo',
        'per_page': 150
    },
    success: (result) => {
        for (let i = 0; i < result.length; i++) {
            $('.card-columns').append(`
                 <div class="card-container">
                     <div class="card">
                         <a href="${result[i].urls.regular}" target="_blank">
                             <img src="${result[i].urls.regular}" alt="" class="IMG img-fluid">
                         </a>
                     </div>
                 </div>
              `);

        }
    }
});
// HOME

function searchWallpaper() {
    $('.card-columns').html('');

    $.ajax({
        url: 'https://api.unsplash.com/search/photos',
        type: 'GET',
        dataType: 'json',
        data: {
            'client_id': '7HIvQ9iYY8_0rgvLZHiWCFtxVOuLrbmKgSuDRe_2noo',
            'per_page': 50,
            'query': $('#search-img').val()
        },
        success: (result) => {
            console.log(result.total_pages);
            for (let i = 0; i < result.results.length; i++) {
                $('.card-columns').append(`
                     <div class="card-container">
                         <div class="card">
                             <a href="${result.results[i].urls.regular}" target="_blank">
                                 <img src="${result.results[i].urls.regular}" alt="" class="IMG img-fluid">
                             </a>
                         </div>
                     </div>
                  `);

            }

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
