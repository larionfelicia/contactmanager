var ContactManager = new Marionette.Application();

ContactManager.addRegions({
  mainRegion: "#main-region"
});

ContactManager.Contact = Backbone.Model.extend({});

ContactManager.ContactView = Marionette.ItemView.extend({
  template: "#contact-template",
  events: {
    'click p':'alertPhone'
  },
  alertPhone: function(){
    alert(this.model.escape('phoneNumber'));
  }
});

ContactManager.ContactItemView = Marionette.ItemView.extend({
  template: '#contact-item-list', 
  tagName: 'li'
});

ContactManager.ContactCollection = Backbone.Collection.extend({
  model: ContactManager.Contact
});

ContactManager.ContactCollectionView = Marionette.CollectionView.extend({
  tagName: 'ul',
  itemView: ContactManager.ContactItemView
});

ContactManager.on("initialize:after", function(){
  // var alice = new ContactManager.Contact({
  //   firstName: "Alice",
  //   lastName: "Arten",
  //   phoneNumber: "55-889d"
  // });

  // var aliceView = new ContactManager.ContactView({
  //   model: alice
  // });

  // ContactManager.mainRegion.show(aliceView);
  
  var contacts = new ContactManager.ContactCollection([
    {firstName: "Bob", lastName: "Joseph", phoneNumber: "4325425-435"},
    {firstName: "Alice", lastName: "Grey", phoneNumber: "4325545-435"},
    ]);
  var contactsView = new ContactManager.ContactCollectionView({collection: contacts});
  ContactManager.mainRegion.show(contactsView);
});

ContactManager.start();