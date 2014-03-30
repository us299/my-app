var LoginView = function (adapter, template) {

    this.initialize = function() {
        this.el = $('<div/>');
        //this.el.on('click', '.add-location-btn', this.addLocation);
        //this.el.on('click', '.add-contact-btn', this.addToContacts);
        //this.el.on('click', '.change-pic-btn', this.changePicture);
        //this.el.on('click', '.change-pic-btn', this.changePicture);
        //this.el.on('click', '.login-btn', this.login);
    };

    this.render = function() {
        this.el.html(template());
        return this;
    };

    //this.login = function(event) {
        //event.preventDefault();
        //alert("login");
    //};

    this.initialize();

}