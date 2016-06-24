var result_arr = [];
var counter = 1;
var FileNames = [];
var age;
var gender;


var updateTextInput = function (val) {

    document.getElementById('valueDisplay').innerHTML = val;

    console.log(val);
};


var clickNext = function () {



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
    console.log(a);
    for(i=0;i<18;i++){
    a[i]= a[i]+1;
    }
    console.log(a);
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
    return files;
};

var start_survey = function () {
    $('#slide_container').show();
    $('#prog_bar').show();
    $('#tweet_container').show();
    $('#start_container').hide();
    $('#demografics').hide();



    age = document.getElementById('age').value;
    gender = document.getElementById('gender').value;

    console.log("age: " + age + " gender: " + gender);
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
    console.log(result_arr);


    if (counter <= 12) {
        $('#tweet_img').attr("src", "./tweets/" + FileNames[counter - 1]);

        var percent = ((counter) / 12) * 100;
        console.log("percent done: " + percent);
        $('.progress-bar').css('width', percent + '%').attr('aria-valuenow', percent).text(counter + "/12");
        counter++;
    } else {
        result_arr.shift()
        console.log(result_arr);
        $('#slide_container').hide();
        $('#end_container').show();
        $('#tweet_img').hide();
        $('#prog_bar').hide();

        var result = JSON.stringify(result_arr);

        $.post('sendToServer.php', {
            result: result,
            age: age,
            gender: gender
        });

    }


};



$(document).ready(function () {
    $('#demografics').hide();
    $('#slide_container').hide();
    $('#end_container').hide();
    $('#prog_bar').hide();

    var tweetNums = createTweetArray();

    FileNames = createFileArray(tweetNums);
    console.log(FileNames);
    

});

