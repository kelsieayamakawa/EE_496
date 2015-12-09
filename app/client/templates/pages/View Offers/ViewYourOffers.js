

Template.ViewYourOffers.helpers({

  /**
   * @returns {*} All of the Contact documents.
   */
  viewBuyOffers: function () {
    return BuyOffer.find({studentID: Meteor.user().profile.name});
  },

  viewSellOffers: function () {
    return SellOffer.find({studentID: Meteor.user().profile.name})
  }
});

Template.ViewYourOffers.events({
  'click .deletebuy': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Meteor.call("deleteBuyOffer", currentPostId);
      Router.go('ViewYourOffers');
    }
  },
  'click .deletesell': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Meteor.call("deleteSellOffer", currentPostId);
      Router.go('ViewYourOffers');
    }
  }
});