var BuyOfferMatchList;

Template.ListBuyOfferMatches.helpers({

  /**
   * @returns {*} All of the Contact documents.
   */
  buyOfferMatchList: function () {
    return BuyOfferMatchList;
  }
});

Template.AddBuyOffer.events({
  'click .matches': function(e) {
    e.preventDefault();

    var BookName = AutoForm.getFieldValue('book', 'AddBuyOfferForm');
    var currOffer = AutoForm.getFieldValue('offer', 'AddBuyOfferForm');
    var currCond = AutoForm.getFieldValue('condition', 'AddBuyOfferForm');

    if (currCond === "Don't Care") {
      BuyOfferMatchList =  SellOffer.find({book: BookName, offer: currOffer});
    }
    else {
      BuyOfferMatchList =  SellOffer.find({book: BookName, offer: currOffer, condition: currCond});
    }

    Router.go('ListBuyOfferMatches');
  }
});