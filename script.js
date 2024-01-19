document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'YOUR_API_KEY';
    const catGallery = document.getElementById('catGallery');

    // Function to fetch cat images
    function fetchCatImages() {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10', {
            headers: {
                'x-api-key': apiKey,
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayCatImages(data);
        })
        .catch(error => {
            console.error('Error fetching cat images:', error);
        });
    }

    // Function to display cat images
    function displayCatImages(images) {
        catGallery.innerHTML = '';

        images.forEach(image => {
            const catCard = document.createElement('div');
            catCard.classList.add('col-md-4', 'mb-4');

            const img = document.createElement('img');
            img.src = image.url;
            img.alt = 'Cat Image';
            img.classList.add('img-fluid', 'rounded');

            catCard.appendChild(img);
            catGallery.appendChild(catCard);
        });
    }

    // Fetch cat images when the page is loaded
    fetchCatImages();
});
