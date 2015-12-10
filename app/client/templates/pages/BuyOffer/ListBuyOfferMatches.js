var BuyOfferMatchList;

Template.ListBuyOfferMatches.helpers({

  /**
   * @returns {*} All of the Contact documents.
   */
  buyOfferMatchList: function () {
    return BuyOfferMatchList;
  },
  formatDate: function (date) {
    return moment(date).format('ll');
  },
  formatTime: function (date) {
    return moment(date).format('h:mm a');
  }
});

Template.AddBuyOffer.events({
  'click .matches': function(e) {
    e.preventDefault();



    var BookName = AutoForm.getFieldValue('book', 'AddBuyOfferForm');
    var currOffer = AutoForm.getFieldValue('offer', 'AddBuyOfferForm');
    var currCond = AutoForm.getFieldValue('condition', 'AddBuyOfferForm');

    if (currCond === "Don't Care") {
      BuyOfferMatchList =  SellOffer.find({book: BookName, offer: { $lte : currOffer} });
    }
    else if (currOffer == null && currCond == null) {
      BuyOfferMatchList =  SellOffer.find({book: BookName});
    }
    else if (currOffer == null) {
      BuyOfferMatchList =  SellOffer.find({book: BookName, condition: currCond});
    }
    else if (currCond == null) {
      BuyOfferMatchList =  SellOffer.find({book: BookName, offer: { $lte : currOffer} });
    }
    else {
      BuyOfferMatchList =  SellOffer.find({book: BookName, offer: { $lte : currOffer}, condition: currCond});
    }

    Router.go('ListBuyOfferMatches');
  }
});