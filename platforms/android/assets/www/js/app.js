// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
    var employeeTpl = Handlebars.compile($("#employee-tpl").html());
    var loginTpl = Handlebars.compile($("#login-tpl").html());


    var userworkspaceTpl = Handlebars.compile($("#userworkspace-tpl").html());
    var userstoryTpl = Handlebars.compile($("#userstory-tpl").html());
    var userresourceTpl = Handlebars.compile($("#userresources-tpl").html());

    

    //var detailsURL = /^#employees\/(\d{1,})/;
    var loginsuccess = 'login';
    var moveToWorkspace = 'workspace';
    var moveToStory = 'story';
    var moveToResources = 'resources';

    var slider = new PageSlider($('body'));

    var adapter = new MemoryAdapter();
        adapter.initialize().done(function () {
        route();
    });

    /* --------------------------------- Event Registration -------------------------------- */
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
    function route() {
        var hash = window.location.hash;
        if (!hash) {
            //slider.slidePage(new HomeView(adapter, homeTpl, employeeLiTpl).render().el);
            slider.slidePage(new LoginView(adapter, loginTpl).render().el);
            return;
        }
        //var match = hash.match(detailsURL);
        var match = hash.match(loginsuccess);
        if (match) {
            slider.slidePage(new UserWorkspaceView(adapter, userworkspaceTpl).render().el);
            //slider.slidePage(new HomeView(adapter, homeTpl, employeeLiTpl).render().el);
            /*
            adapter.findById(Number(match[1])).done(function(employee) {
                slider.slidePage(new EmployeeView(adapter, employeeTpl, employee).render().el);

            });
            */
        }

        var workMatch = hash.match(moveToWorkspace);
        if (workMatch) {
            $('body').html(new UserWorkspaceView(adapter, userworkspaceTpl).render().el);
        }
        var storyMatch = hash.match(moveToStory);
        if (storyMatch) {
            //slider.slidePage(new UserStoryView(adapter, userstoryTpl).render().el);
            $('body').html(new UserStoryView(adapter, userstoryTpl).render().el);
        }
        var resourceMatch = hash.match(moveToResources);
        if (resourceMatch) {
            //slider.slidePage(new UserResourceView(adapter, userresourceTpl).render().el);
            $('body').html(new UserResourceView(adapter, userresourceTpl).render().el);
        }
        
    }

}());