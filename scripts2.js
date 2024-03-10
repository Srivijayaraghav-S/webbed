document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const apiKey = 'gEBl5aqoUwgis0LFj9yAxYQTg77wKbIvd0XZS1qr'; 
    const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => displayApod(data))
        .catch(error => console.error('Error fetching APOD:', error));
    
    function displayApod(data) {
        const apodSection = document.getElementById('apod');
        if (apodSection) {
            apodSection.innerHTML = `<h3>${data.title}</h3>
                                     <h4>Date: ${data.date}</h4>
                                     <img src="${data.url}" alt="NASA Astronomy Picture of the Day" style="width:100%; border-radius: 8px;">
                                     <h4>${data.explanation}</h4>`;
        }
    }

    $(function() {
        $("#myCarousel").on("slide.bs.carousel", function(e) {
            var $e = $(e.relatedTarget);
            var idx = $e.index();
            var itemsPerSlide = 3;
            var totalItems = $(".carousel-item").length;

            if (idx >= totalItems - (itemsPerSlide - 1)) {
                var it = itemsPerSlide - (totalItems - idx);
                for (var i = 0; i < it; i++) {
                    if (e.direction === "left") {
                        $(".carousel-item").eq(i).appendTo(".carousel-inner");
                    } else {
                        $(".carousel-item").eq(0).appendTo(".carousel-inner");
                    }
                }
            }
        });
    });
});
