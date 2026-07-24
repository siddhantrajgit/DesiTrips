function searchTrip() {

    const destination = document.getElementById("destination").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const travellers = document.getElementById("travellers").value;

    if (
        destination === "" ||
        checkin === "" ||
        checkout === ""
    ) {
        alert("⚠️ Please fill all booking details.");
        return;
    }

    alert(
`✈️ Booking Summary

📍 Destination : ${destination}

📅 Check In : ${checkin}

📅 Check Out : ${checkout}

👨 Travellers : ${travellers}

🎉 Thank you for choosing DesiTrips!

Our travel expert will contact you shortly.
Have a wonderful journey! ❤️`
    );

}