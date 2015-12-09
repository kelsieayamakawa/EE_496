Template.ListBuyOffer.helpers({

  /**
   * @returns {*} All of the BuyOffer documents.
   */
  buyOfferList: function () {
    return BuyOffer.find({}, {sort: {book: 1, offer: 1}});
  }
});