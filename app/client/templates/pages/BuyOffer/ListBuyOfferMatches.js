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
    var currDate = new Date();

    if (currCond === "Don't Care") {
      BuyOfferMatchList =  SellOffer.find({book: BookName, offer: { $lte : currOffer}, expirationDate: {$gt: currDate} });
    }
    else if (currOffer == null && currCond == null) {
      BuyOfferMatchList =  SellOffer.find({book: BookName, expirationDate: {$gt: currDate}});
    }
    else if (currOffer == null) {
      BuyOfferMatchList =  SellOffer.find({book: BookName, condition: currCond, expirationDate: {$gt: currDate}});
    }
    else if (currCond == null) {
      BuyOfferMatchList =  SellOffer.find({book: BookName, offer: { $lte : currOffer}, expirationDate: {$gt: currDate} });
    }
    else {
      BuyOfferMatchList =  SellOffer.find({book: BookName, offer: { $lte : currOffer}, condition: currCond, expirationDate: {$gt: currDate}});
    }

    Router.go('ListBuyOfferMatches');
  }
});