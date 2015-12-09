var SellOfferMatchList;

Template.ListSellOfferMatches.helpers({

  /**
   * @returns {*} All of the Contact documents.
   */
  sellOfferMatchList: function () {
    return SellOfferMatchList;
  }
});

Template.AddSellOffer.events({
  'click .matches1': function(e) {
    e.preventDefault();

    var BookName = AutoForm.getFieldValue('book', 'AddSellOfferForm');
    var currOffer = AutoForm.getFieldValue('offer', 'AddSellOfferForm');
    var currCond = AutoForm.getFieldValue('condition', 'AddSellOfferForm');

    if (currCond === "Don't Care") {
      SellOfferMatchList =  BuyOffer.find({book: BookName, offer: { $gte : currOffer} });
    }
    else if (currOffer == null && currCond == null) {
      SellOfferMatchList =  BuyOffer.find({book: BookName});
    }
    else if (currOffer == null) {
      SellOfferMatchList =  BuyOffer.find({book: BookName, condition: currCond});
    }
    else if (currCond == null) {
      SellOfferMatchList =  BuyOffer.find({book: BookName, offer: { $gte : currOffer} });
    }
    else {
      SellOfferMatchList =  BuyOffer.find({book: BookName, offer: { $gte : currOffer}, condition: currCond});
    }

    Router.go('ListSellOfferMatches');
  }
});