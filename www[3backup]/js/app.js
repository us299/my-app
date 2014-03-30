// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
    var employeeTpl = Handlebars.compile($("#employee-tpl").html());
    var detailsURL = /^#employees\/(\d{1,})/;
    var adapter = new MemoryAdapter();
    var slider = new PageSlider($('body'));
    adapter.initialize().done(function () {
        $('body').html(new HomeView(adapter, homeTpl, employeeLiTpl).render().el);
        route();
    });



    /* --------------------------------- Event Registration -------------------------------- */
    /*
    $('.help-btn').on('click', function() {
        alert("Some help here...")
    });
    */

    $(window).on('hashchange', route);

    document.addEventListener('deviceready', function () {

        FastClick.attach(document.body);

        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Workshop", // title
                    'OK'        // buttonName
                );
            };
        }
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
    
    /* FUNCTION ROUTE()
    If there is no hash tag in the URL, display the HomeView
    If there is a hash tag matching the pattern for an employee details URL, display an EmployeeView for the specified employee.
    */

    function route() {
    var hash = window.location.hash;
    if (!hash) {
        //$('body').html(new HomeView(adapter, homeTpl, employeeLiTpl).render().el);
        slider.slidePage(new HomeView(adapter, homeTpl, employeeLiTpl).render().el);
        return;
    }
    var match = hash.match(detailsURL);
    if (match) {
        adapter.findById(Number(match[1])).done(function(employee) {
            //$('body').html(new EmployeeView(adapter, employeeTpl, employee).render().el);
            slider.slidePage(new EmployeeView(adapter, employeeTpl, employee).render().el);
        });
    }
    }

}());