Template.ListSellOffer.helpers({

  /**
   * @returns {*} All of the BuyOffer documents.
   */
  sellOfferList: function () {
    var currDate = new Date();
    return SellOffer.find({ "expirationDate": {$gt: currDate} }, {sort: {book: 1, offer: 1}});
  }
});