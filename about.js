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
        