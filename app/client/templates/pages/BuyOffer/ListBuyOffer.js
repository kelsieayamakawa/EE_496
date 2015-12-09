Template.ListBuyOffer.helpers({

  /**
   * @returns {*} All of the BuyOffer documents.
   */
  buyOfferList: function () {
    var currDate = new Date();
    return BuyOffer.find({ "expirationDate": {$gt: currDate} }, {sort: {book: 1, offer: 1}});
  }
});