let seats = document.querySelector(".all-seats");

// Clear any existing seats to avoid duplication if the script runs more than once
seats.innerHTML = '';

for (let i = 0; i < 60; i++) {  // Loop from 0 to 59 for seat numbering
    let seatNumber = i + 1;  // Seat numbers should start from 1
    let randint = Math.floor(Math.random() * 2);
    let booked = randint === 1 ? "booked" : "";
    let disabled = booked ? "disabled" : "";

    seats.insertAdjacentHTML(
        "beforeend",
        `<input type="checkbox" name="tickets" id="s${seatNumber}" ${disabled}/>
        <label for="s${seatNumber}" class="seat ${booked}">${seatNumber}</label>`
    );
}

let tickets = seats.querySelectorAll("input");
tickets.forEach((ticket) => {
    ticket.addEventListener("change", () => {
        let amountElem = document.querySelector(".amount");
        let countElem = document.querySelector(".count");

        let amount = Number(amountElem.innerHTML);
        let count = Number(countElem.innerHTML);

        if (ticket.checked) {
            count += 1;
            amount += 200;
        } else {
            count -= 1;
            amount -= 200;
        }
        amountElem.innerHTML = amount;
        countElem.innerHTML = count;

        // Enable or disable the "Book" button based on seat selection
        document.querySelector(".btn").disabled = count === 0;
    });
});

function showAlert(message) {
    const alertPopup = document.createElement('div');
    alertPopup.classList.add('alert-popup');
    alertPopup.innerHTML = `
        <div class="alert-content">
            <p>${message}</p>
            <button type="button" onclick="closeAlert()">OK</button>
        </div>
    `;
    document.body.appendChild(alertPopup);
}

function closeAlert() {
    const alertPopup = document.querySelector('.alert-popup');
    if (alertPopup) {
        alertPopup.remove();
    }
}

function openPopup() {
    // Extract seat numbers from checked inputs
    const selectedSeats = Array.from(document.querySelectorAll("input[name='tickets']:checked"))
        .map(input => {
            const seatLabel = input.nextElementSibling;
            return seatLabel.textContent.trim(); // Get only text content of the label
        })
        .join(', ');

    const totalSeats = document.querySelector(".count").innerHTML;
    const totalPrice = document.querySelector(".amount").innerHTML;

    // Check if seats are selected
    if (totalSeats === "0") {
        showAlert("Please select at least one seat before booking.");
        return;
    }

    // Get selected date and time
    const selectedDate = document.querySelector('input[name="date"]:checked + label .date')?.innerText || '';
    const selectedDay = document.querySelector('input[name="date"]:checked + label .day')?.innerText || '';
    const selectedTime = document.querySelector('input[name="time"]:checked + label')?.innerText || '';

    // Get the movie title
    const movieTitle = document.getElementById('movie-title').textContent;

    const message = `
        <p>You have selected the following seats: <span style="color: #521B59; font-weight:600;">${selectedSeats}</span>.</p>
        <p>Date: <span style="color: #521B59; font-weight:600;">${selectedDay} ${selectedDate}</span></p>
        <p>Time: <span style="color: #521B59; font-weight:600;">${selectedTime}</span></p>
        <p>Total seats: <span style="color: #521B59; font-weight:600;">${totalSeats}</span></p>
        <p>Total price: <span style="color: #521B59; font-weight:600;">₹${totalPrice}</span></p>
    `;

    document.getElementById("popup-message").innerHTML = message;
    document.getElementById("popup-movie-title").textContent = movieTitle;

    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.querySelector(".tickets").style.visibility = "hidden";
}


function closePopup() {
    // Redirect to the booking page
    window.location.href = 'booking.html';
}






// ***** MOVIE TITTLE *****


document.addEventListener("DOMContentLoaded", function() {
    // Function to get query parameters
    function getQueryParams() {
        let params = {};
        location.search.substr(1).split("&").forEach(function(item) {
            let [key, value] = item.split("=");
            params[key] = value;
        });
        return params;
    }

    let params = getQueryParams();
    let movie = params.movie;

    // Define movie details
    let movieDetails = {
        movie1: { image: 'Icons/lucacover.jpg', title: 'Luca' },
        movie2: { image: 'Icons/minicover.jpg', title: 'Minnie’s Bow-Toons' },
        movie3: { image: 'Icons/encantocover.jpg', title: 'Ecanto' },
        movie4: { image: 'Icons/unicorncover.jpg', title: 'Unicorn Academy' },
        movie5: { image: 'Icons/frozencover.jpg', title: 'Frozen' },
        movie6: { image: 'Icons/beautycover.jpg', title: 'Beauty & The Beast' },
        movie7: { image: 'Icons/dorycover.jpg', title: 'Finding Dory' },
        movie8: { image: 'Icons/dragoncover.jpg', title: 'Wish Dragon' },
        movie9: { image: 'Icons/elementalcover.jpg', title: 'Elemental' },
        movie10: { image: 'Icons/tangledcover.jpg', title: 'Tangled' },
        movie11: { image: 'Icons/traincover.jpg', title: 'How to train Your Dragon' },
        movie12: { image: 'Icons/trollscover.jpg', title: 'Trolls' },
        movie13: { image: 'Icons/cococover.jpg', title: 'Coco' },
        movie14: { image: 'Icons/jerrycover.jpg', title: 'Tom & Jerry' },
        movie15: { image: 'Icons/moanacover.jpg', title: 'Moana' },
        // Add more movies and their corresponding details
    };

    // Set background image and movie title based on selected movie
    let details = movieDetails[movie] || { image: '', title: 'Default Movie' }; // Fallback details
    document.getElementById('main-container').style.backgroundImage = `url('${details.image}')`;
    document.getElementById('movie-title').textContent = details.title;
});

