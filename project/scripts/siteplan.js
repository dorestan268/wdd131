document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = "last Modification: " + document.lastModified

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle order
    function handleOrder(foodItem) {
        alert(`You have ordered a ${foodItem}.`);
        // Perform additional actions such as sending the order to a server
    }

    // Get references to order buttons
    const orderPizzaButton = document.getElementById("order-pizza");
    const orderBurgerButton = document.getElementById("order-burger");
    const orderFriteButton = document.getElementById("order-frite-Combo");
    const orderHotdogButton = document.getElementById("order-Hotdog");
    const orderChikenburgerButton = document.getElementById("order-Chiken-Burger");
    const orderChikenpizzaButton = document.getElementById("order-Chiken-Pizza");
    const orderDominosButton = document.getElementById("order-Dominos-special");
    const orderMcDonaldButton = document.getElementById("order-McDonald-Special");
    // Add more references as needed for other items

    // Add event listeners to buttons
    orderPizzaButton.addEventListener("click", function() {
        handleOrder("Pizza");
    });

    orderBurgerButton.addEventListener("click", function() {
        handleOrder("Burger");
    });
    orderFriteButton.addEventListener("click", function() {
        handleOrder("Frite-Combo");
    });
    orderHotdogButton.addEventListener("click", function() {
        handleOrder("Hot-Dog");
    });
    orderChikenburgerButton.addEventListener("click", function() {
        handleOrder("Chiken-Burger");
    });
    orderChikenpizzaButton.addEventListener("click", function() {
        handleOrder("Chiken-Pizza");
    });
    orderDominosButton.addEventListener("click", function() {
        handleOrder("Dominos-special");
    });
    orderMcDonaldButton.addEventListener("click", function() {
        handleOrder("McDonald-Special");
    });

   
});



    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 4000); // Change image every 4 seconds
    }


    //Add a Weather//

    function fetchWeather() {
        const apiKey = '9f26309485957c2bd9641a631b5817c8'; 
        const city = 'Haiti'; // Replace with your desired city name
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Weather Data:', data);
    
                // Update HTML elements with weather information
                let temperatureElement = document.getElementById('temperature');
                let conditionsElement = document.getElementById('conditions');
                let windSpeedElement = document.getElementById('wind-speed');
                let windChillElement = document.getElementById('wind-chill');
    
                temperatureElement.textContent = `${data.main.temp} °C`;
                conditionsElement.textContent = data.weather[0].description;
                windSpeedElement.textContent = `${data.wind.speed} m/s`;
    
                // Calculate and display wind chill (example calculation)
                let windChill = calculateWindChill(data.main.temp, data.wind.speed);
                windChillElement.textContent = `${windChill.toFixed(2)} °C`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                let weatherDataElements = document.querySelectorAll('.weather p span');
                weatherDataElements.forEach(element => {
                    element.textContent = 'N/A';
                });
            });
    }
    
    // Function to calculate wind chill (example calculation)
    function calculateWindChill(temperature, windSpeed) {
        return temperature - windSpeed;
    }
    
    // Call fetchWeather function when the page loads
    document.addEventListener('DOMContentLoaded', fetchWeather);
        
        

