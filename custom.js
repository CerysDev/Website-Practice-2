// Toggle Collapse for the FAQ
$('.faq li .question').click(function () {
  $(this).find('.plus-minus-toggle').toggleClass('collapsed');
  $(this).parent().toggleClass('active');
});

// Adds things to the basket.
function AddedBasket() {
  alert ("Added to basket!");
}

// Brings up the message saying your message was sent.
function Message() {
  alert ("Your message has been sent!");
}
