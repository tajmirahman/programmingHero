function claculateTicketPrice(age, student = false) {

    const ticketPrice = 800;

    if (age < 10) {
        return 0;
    } else {
        if (student == true) {
            return ticketPrice * .5;
        } else {
            if (age >= 60) {
                return ticketPrice * .85;
            } else {
                return ticketPrice;
            }
        }
    }

}

console.log(claculateTicketPrice(11));
console.log(claculateTicketPrice(20, false));
console.log(claculateTicketPrice(59));
console.log(claculateTicketPrice(30));