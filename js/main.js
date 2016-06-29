var result_arr = [];
var counter = 1;
var FileNames = [];
var age;
var gender;
var mobile;
var order;
var num;
var updateTextInput = function (val) {

    document.getElementById('valueDisplay').innerHTML = val;

    console.log(val);
};


var clickNext = function () {



};
window.mobilecheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);


    return check;
};


var getOrder = function () {

    //    $.getJSON("latin-square.json", function (data) {
    //        console.log("yay");
    //        console.log(data);
    //    });

    $.ajax({
        type: "GET",
        url: "latin2.json",
        dataType: "text",
        success: function (data) {
            order = JSON.parse(data);
            console.log(order);
        }
    });



};



var createTweetArray = function () {

    for (var a = [], i = 0; i < 18; ++i) a[i] = i;

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;
        if (top)
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        return array;
    }

    a = shuffle(a);
    //  console.log(a);
    for (i = 0; i < 18; i++) {
        a[i] = a[i] + 1;
    }
    //  console.log(a);
    return a;
};

var createFileArray = function (nums) {
    var files = []
    for (i = 1; i < 7; i++) {
        var name1 = "s" + i + "t" + nums[i - 1] + "o1.jpg";
        files.push(name1);
    }

    for (i = 1; i < 7; i++) {
        var name2 = "s" + i + "t" + nums[i - 1] + "o2.jpg";
        files.push(name2);
    }

    console.log(files);
    var reihenfolge = order[num];
    console.log("Reihenfolge:" + reihenfolge)
    var latinfiles = [];

    for (var i = 0; i < 12; i++) {


        latinfiles[i] = files[reihenfolge[i] - 1]
    }


    return latinfiles;
};

var start_survey = function () {
    $('#slide_container').show();
    $('#prog_bar').show();
    $('#tweet_container').show();
    $('#start_container').hide();
    $('#demografics').hide();



    age = document.getElementById('age').value;
    gender = document.getElementById('gender').value;

    //  console.log("age: " + age + " gender: " + gender);
    nextTweet();
};

var start_demografics = function () {
    $('#start_container').hide();
    $('#tweet_container').hide();
    $('#demografics').show();


};

var nextTweet = function () {
    console.log("Tweet number : " + counter);

    var imagename = $('#tweet_img').attr('src').substring(9);
    imagename = imagename.slice(0, -4);
    var prev = {
        image: imagename,
        score: $('#valueDisplay').text()
    };

    result_arr.push(prev);

    document.getElementById('valueDisplay').innerHTML = "50";
    document.getElementById('slider').value = 50;

    if (counter <= 12) {
        $('#tweet_img').attr("src", "./tweets/" + FileNames[counter - 1]);

        var percent = ((counter) / 12) * 100;
        console.log("percent done: " + percent);
        $('.progress-bar').css('width', percent + '%').attr('aria-valuenow', percent).text(counter + "/12");
        counter++;
    } else {
        result_arr.shift()

        $('#slide_container').hide();
        $('#end_container').show();
        $('#tweet_img').hide();
        $('#prog_bar').hide();

        var result = JSON.stringify(result_arr);

        var device = "";
        if (mobile == true) {
            device = "mobile"
        } else {
            device = "desktop"
        }
        console.log(mobile);
        console.log(device);

        var nextnum = parseInt(num);


        $.post('sendToServer.php', {
            result: result,
            age: age,
            gender: gender,
            device: device,
            num: nextnum
        });

    }


};

function processData(allText) {

    var record_num = 27; // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    console.log(allTextLines);
    var size = allTextLines.length;
    console.log("size: " + size);


    if (size == 1) {

        num = 0;
        console.log("first entry");
    } else if (size == 2) {
        num = 1;
        console.log("second entry");

    } else {
        var entries = allTextLines[size - 2].split(',');
        num = parseInt(entries[0]) + 1;
        console.log("third or later entry");
        if (num == 6) {
            num = 0;
        }

    }





    console.log("num: " + num);
};







$(document).ready(function () {
    $('#demografics').hide();
    $('#slide_container').hide();
    $('#end_container').hide();
    $('#prog_bar').hide();

    mobile = window.mobilecheck();
    console.log(mobile);
    var tweetNums = createTweetArray();



    getOrder();

    $.ajax({
        type: "GET",
        url: "scores.csv",
        dataType: "text",
        success: function (data) {
            processData(data);
            FileNames = createFileArray(tweetNums);
        }
    });



});
