 // ***  HEADER & FOOTER  ***

          // Function to dynamically load the CSS
          function loadCSS(href) {
            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = href;
            document.head.appendChild(link);
        }

        // Load header and footer dynamically
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                // Create a temporary container to hold the loaded HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;

                // Extract the header and footer content
                const headerContent = tempDiv.querySelector('header').outerHTML;
                const footerContent = tempDiv.querySelector('footer').outerHTML;

                // Insert the header and footer content into the respective elements
                document.getElementById('header-placeholder').innerHTML = headerContent;
                document.getElementById('footer-placeholder').innerHTML = footerContent;

                // Load the CSS dynamically
                loadCSS('header.css');

                // Call function to add active class after header content is loaded
                addActiveClassToNavLink();
            });

        // Function to add active class to navigation links
        function addActiveClassToNavLink() {
            var currentUrl = window.location.href;

            // Object to store page URLs and their corresponding navigation link IDs
            var pageLinks = {
                'index.html': 'homeLink',
                'movies.html': 'moviesLink',
                'about.html': 'aboutLink',
                'contact.html': 'contactLink',
            };

            // Iterate over the pageLinks object and add the 'active' class to the corresponding navigation link
            for (var pageUrl in pageLinks) {
                if (currentUrl.endsWith(pageUrl)) {
                    document.getElementById(pageLinks[pageUrl]).classList.add('active');
                }
            }
        }
        
        /****  MOVIE DETAILS */
        
document.addEventListener('DOMContentLoaded', () => {
    // Get the movie parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const movie = params.get('movie');

    // Movie data
    const movies = {
        'frozen': {
            poster: 'Icons/frozen.jpg',
            director: 'Chris Buck',
            starring: 'Kristen Bell, Idina Menzel, Josh Gad',
            editor: 'Jeff Draheim',
            video: 'https://www.youtube.com/embed/-WdC4DaYIeQ?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie5' // Specific booking page
        },
     
        'encanto': {
            poster: 'Icons/encanto.jpg',
            director: 'Jared Bush',
            starring: 'Stephanie Beatriz, María Cecilia Botero, John Leguizamo',
            editor: 'Jeremy Milton',
            video: 'https://www.youtube.com/embed/CaimKeDcudo?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie3' // Specific booking page
        },
     
        'tangled': {
            poster: 'Icons/tangled.jpg',
            director: 'Nathan Greno',
            starring: 'Mandy Moore, Zachary Levi, Donna Murphy',
            editor: 'Tim Mertens',
            video: 'https://www.youtube.com/embed/pN4OKH-zswk?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie10' // Specific booking page
        },
     
        'moana': {
            poster: 'Icons/moana.jpg',
            director: 'John Musker',
            starring: 'wayne Johnson, Auliʻi Cravalho',
            editor: 'Jeff Draheim',
            video: 'https://www.youtube.com/embed/LKFuXETZUsI?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie15' // Specific booking page
        },
     
        'mini': {
            poster: 'Icons/mini.jpeg',
            director: 'Bobs Gannaway',
            starring: 'Russi Taylor, Kaitlyn Robrock, Tress MacNeille',
            editor: 'Mike Himelstein',
            video: 'https://www.youtube.com/embed/q4KsTHACXuE?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie2' // Specific booking page
        },
     
        'unicorn': {
            poster: 'Icons/unicorn.jpg',
            director: 'Cassi Simonds',
            starring: 'Sara Garcia, Sadie Laflamme-Snow, Gabriella Kosmidis',
            editor: 'Mike G. Moore',
            video: 'https://www.youtube.com/embed/mkEA_y_cQD4?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie4' // Specific booking page
        },
     
        'train': {
            poster: 'Icons/train.jpg',
            director: '	Dean DeBlois',
            starring: 'Jay Baruchel, America Ferrera, F. Murray Abraham',
            editor: 'John K. Carr',
            video: 'https://www.youtube.com/embed/2aMNpFefqGA?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie11' // Specific booking page
        },
     
        'elemental': {
            poster: 'Icons/elemental.jpg',
            director: '	Peter Sohn',
            starring: '	Leah Lewis, Mamoudou Athie, Ronnie del Carmen',
            editor: '	Stephen Schaffer',
            video: 'https://www.youtube.com/embed/hXzcyx9V0xw?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie9' // Specific booking page
        },
     
        'luca': {
            poster: 'Icons/luca.jpg',
            director: 'Enrico Casarosa',
            starring: 'Jacob Tremblay, Jack Dylan Grazer, Emma Berman',
            editor: 'Catherine Apple',
            video: 'https://www.youtube.com/embed/0hgHY9k-44U?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie1' // Specific booking page
        },
     
        'coco': {
            poster: 'Icons/coco.jpg',
            director: 'Adrian Molina',
            starring: ' Lee Unkrich; Jason Katz; Matthew Aldrich',
            editor: 'Catherine Apple',
            video: 'https://www.youtube.com/embed/Rvr68u6k5sI?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie13' // Specific booking page
        },
     
        'luca': {
            poster: 'Icons/luca.jpg',
            director: 'Enrico Casarosa',
            starring: 'Jacob Tremblay, Jack Dylan Grazer, Emma Berman',
            editor: 'Catherine Apple',
            video: 'https://www.youtube.com/embed/0hgHY9k-44U?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie1' // Specific booking page
        },
     
        'beauty': {
            poster: 'Icons/beauty.jpg',
            director: '	Gary Trousdale',
            starring: '	Paige OHara, Robby Benson, Richard White',
            editor: '	John Carnochan',
            video: 'https://www.youtube.com/embed/iurbZwxKFUE?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie6' // Specific booking page
        },
     
        'jerry': {
            poster: 'Icons/jerry.jpg',
            director: '	Phil Roman',
            starring: '	Richard Kind, Dana Hill, Anndi McAfee',
            editor: '	Tim J. Borquez',
            video: 'https://www.youtube.com/embed/bINxXgTT68I?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie14' // Specific booking page
        },
     
        'dragon': {
            poster: 'Icons/dragon.jpg',
            director: '	Chris Appelhans',
            starring: '	Jimmy Wong, John Cho, Constance Wu',
            editor: '	Michael Andrews',
            video: 'https://www.youtube.com/embed/uWIRyU5fuzU?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie8' // Specific booking page
        },
     
        'dory': {
            poster: 'Icons/dory.jpg',
            director: '	Andrew Stanton',
            starring: '	Ellen DeGeneres, Albert Brooks, Hayden Rolence',
            editor: '	Axel Geddes',
            video: 'https://www.youtube.com/embed/JhvrQeY3doI?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie7' // Specific booking page
        },
     
        'trolls': {
            poster: 'Icons/trolls.jpg',
            director: 'Mike Mitchell',
            starring: '	Anna Kendrick, Justin Timberlake, Zooey Deschanel',
            editor: '		Nick Fletcher',
            video: 'https://www.youtube.com/embed/PXrm5eU6HtY?controls=0&rel=0&modestbranding=1&autohide=1',
            bookingPage: 'book.html?movie=movie12' // Specific booking page
        }
        // Add more movies as needed
    };

    // Update the page based on the selected movie
    if (movie && movies[movie]) {
        const movieData = movies[movie];
        document.getElementById('poster').src = movieData.poster;
        document.getElementById('director').textContent = movieData.director;
        document.getElementById('starring').textContent = movieData.starring;
        document.getElementById('editor').textContent = movieData.editor;
        document.getElementById('video').src = movieData.video;
        document.getElementById('book-now-btn').href = movieData.bookingPage;
    } else {
        // Handle case where movie data is not found
        console.error('Movie not found');
    }
});
