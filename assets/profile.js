let newElemetProfileImage = document.createElement("img");
newElemetProfileImage.setAttribute("src", "assets/images/profile.jpg");
newElemetProfileImage.setAttribute("alt", "Profileku");

let profileElement = document.getElementById("profile");
profileElement.appendChild(newElemetProfileImage);

let newElementProfileDescription = document.createElement("section");
newElementProfileDescription.innerHTML = '<p>I Kadek Yoga Darma Putra</p><p>kadekyoga125@gmail.com</p><p>Denpasar</p>';
profileElement.appendChild(newElementProfileDescription);