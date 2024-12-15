function sendEmail() {
    const recipient = "abdmmulnivasiekta@gmail.com"; // Recipient's email address
    const subject = encodeURIComponent("Request to Conduct Elections Using Ballot Papers"); // Subject of the email
    const body = encodeURIComponent(
        `To the Honorable Central Election Commission,\n\nThe people of India are having doubts about the elections being conducted with EVMs in India. We are informing you of the opinions given by the people through e-mails that all future Legislative Assembly and Lok Sabha elections in the country should be conducted with "Ballot Papers" instead of EVMs.\n\nThank you.`
    ); // Body of the email

    // Construct the mailto link
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Redirect to the mailto link
    window.location.href = mailtoLink;
}