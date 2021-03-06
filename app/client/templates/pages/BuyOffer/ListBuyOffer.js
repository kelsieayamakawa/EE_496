Template.ListBuyOffer.helpers({

  /**
   * @returns {*} All of the BuyOffer documents.
   */
  buyOfferList: function () {
    var currDate = new Date();
    return BuyOffer.find({ "expirationDate": {$gt: currDate} }, {sort: {book: 1, offer: 1}});
  },
  formatDate: function (date) {
    return moment(date).format('ll');
  },
  formatTime: function (date) {
    return moment(date).format('h:mm a');
  }
});