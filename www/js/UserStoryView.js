var UserStoryView = function (adapter, template) {

    this.initialize = function() {
        this.el = $('<div/>');
        //this.el.on('click', '.add-location-btn', this.addLocation);
        //this.el.on('click', '.add-contact-btn', this.addToContacts);
        //this.el.on('click', '.change-pic-btn', this.changePicture);
        //this.el.on('click', '.change-pic-btn', this.changePicture);
        this.el.on('click', '.addtext-btn', this.addtext);
        this.el.on('click', '.addpicture-btn', this.addpicture);
        this.el.on('click', '.addvideo-btn', this.addvideo);
    };

    this.render = function() {
        this.el.html(template());
        return this;
    };

    this.addtext = function(event) {
        //document.body.innerHTML = document.body.insertBefore

        // var p = document.createElement("p");
        // p.innerHTML = "test3";
        //p.setAttribute("type","textarea");
        //p.innerHTML = (<textarea rows="4" cols="50" class="textarea" style="margin-left:10% ;margin-right:auto;margin-top:10px;">At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.</textarea>);
        //document.body.insertBefore(p, document.body.firstChild);

        var tag = document.createElement("textarea");
        tag.setAttribute("style","width: 1000px; background-color: yellow;");
        //tag.style.width = "80%";
                    /*text-align: left;
                    clear: both;
                    margin-left: auto;
                    margin-right:auto;
                    padding-left: 10px;
                    border: 1px solid #9daca9;
                    border-radius: 6px;
                    background-color: #ffffff;
                    color: #454545;
                    width: 80%;";*/
        tag.rows = 8;
        tag.cols = 50;
        tag.innerHTML = "Loons are so cool!";

        /*
        var body   = document.body || document.getElementsByTagName('body')[0],
        newpar = document.createElement('p');
        newpar.innerHTML = 'Man, someone just created me!';
        body.insertBefore(newpar,body.childNodes[0]);
        */

        var thisone = document.getElementsByClassName("storyadd")[0];
        thisone.insertBefore(tag, thisone.firstChild);

        //event.preventDefault();
        //alert("login");

        
        //var node=document.getElementsByClassName("addtext-btn").lastChild;
        //var list=document.getElementsByClassName("inserttext");
        //list.insertBefore(node,list.childNodes[0]);

        //document.body.insertBefore(list, node[0]);
        //$( "<p>Test</p>" ).insertBefore( "storyadd" );
        //$( ".storyadd" ).before( "<p>Test</p>" );

        //document.write("text")




        //--------------------------------------------
        /*
        function create(htmlStr) {
            var frag = document.createDocumentFragment(),
            temp = document.createElement('div');
            temp.innerHTML = htmlStr;
        while (temp.firstChild) {
            frag.appendChild(temp.firstChild);
        }
        return frag;
        }

        var fragment = create('<div>Hello!</div><p>...</p>');
        // You can use native DOM methods to insert the fragment:
        document.body.insertBefore(fragment, document.body.childNodes[0]);
        */
    };

    this.addpicture = function(event) {

    var tag = document.createElement("img");

    if (!navigator.camera) {
        alert("Camera API not supported", "Error");
        return;
    }
    var options =   {   quality: 50,
                        destinationType: Camera.DestinationType.DATA_URL,
                        sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
                        encodingType: 0     // 0=JPG 1=PNG
                    };
 
    navigator.camera.getPicture(
        function(imageData) {
            tag.src = "data:image/jpeg;base64," + imageData;
            tag.width = "300";
            tag.height = "300";
            //$('.employee-image', this.el).attr('src', "data:image/jpeg;base64," + imageData);
            var thisone = document.getElementsByClassName("storyadd")[0];
            thisone.insertBefore(tag, thisone.firstChild);
        },
        function() {
            alert('Error taking picture', 'Error');
        },
        options);
 
    return false;
    };
    
    this.addvideo = function(event) {

    var tag = document.createElement("video");
        if (!navigator.camera) {
        alert("Camera API not supported", "Error");
        return;
    }
    var options =   {   quality: 50,
                        destinationType: Camera.DestinationType.DATA_URL,
                        sourceType: 0,      // 0:Photo Library, 1=Camera, 2=Saved Album
                        //encodingType: 0,     // 0=JPG 1=PNG
                        mediaType: 1
                    };
 
    navigator.camera.getPicture(
        function(imageData) {
            tag.src = "data:image/jpeg;base64," + imageData;
            tag.width = "100";
            tag.height = "100";
            //$('.employee-image', this.el).attr('src', "data:image/jpeg;base64," + imageData);
            var thisone = document.getElementsByClassName("storyadd")[0];
            thisone.insertBefore(tag, thisone.firstChild);
        },
        function() {
            alert('Error taking picture', 'Error');
        },
        options);
 
    return false;
    };


    this.initialize();

};