// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());

    /* ---------------------------------- Local Variables ---------------------------------- */
    var adapter = new MemoryAdapter();
    adapter.initialize().done(function () {
        //renderHomeView();
        $('body').html(new HomeView(adapter, homeTpl, employeeLiTpl).render().el);
        console.log("Data adapter initialized");
    });

    /* --------------------------------- Event Registration -------------------------------- */
    /*
    $('.search-key').on('keyup', findByName);
    $('.help-btn').on('click', function() {
        alert("Some help here...")
    });
    */


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
    /*
    function findByName() {
    adapter.findByName($('.search-key').val()).done(function (employees) {
        $('.employee-list').html(employeeLiTpl(employees));
        });
    }

    function renderHomeView() {
        $('body').html(homeTpl());
        $('.search-key').on('keyup', findByName);
    }
    */

}());

