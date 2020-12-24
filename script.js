"use strict";

let panelState = false;

function $(selector) {
    return document.querySelector(selector);
};

function startSite() {
    $(".overlay").style.display = "none";
    $("#bgAudio").play();
    $(".siteContent").style.display = "block";
};

function showShelf(num) {
    $("#newAudio").play();
    $(".mainPanel").style.display = "block";
    if (panelState == false) {
        if (num === 1) {
            $(".mainPanel").innerHTML = `<h2>Our Christmas party!</h2>
            <img class="img-showcase" src="./christmas-5815034_640.jpg">
            <img class="img-showcase" src="./father-christmas-1149928_640.jpg">
            <img class="img-showcase" src="./gift-3030279_640.jpg">
            <img class="img-showcase" src="./gnome-5776661_640.jpg">`;
        } else if (num === 2) {
            $(".mainPanel").innerHTML = `<h2>Our Christmas Wishes!</h2>
            <i>May the magic of the Christmas season fill your home with joy and peace.<br>
             Sending lots of love to your family, and looking forward to the day we can see you again.<br> 
             Take care of yourselves and stay safe. </i><br>
             <img src="./Christmas-Tree-Animated-GIF.gif" class="img-showcase">`;
        } else if (num === 3) {
            $(".mainPanel").innerHTML = `<h2>Christmas carols we sung!</h2>
            <h4>Silent night</h4>
            <i>Silent night! holy night!<br>
            All is calm all is bright<br>
            Round yon virgin mother and child<br>
            Holy infant so tender and mild<br>
            Sleep in heavenly peace!<br>
            <br>
            Silent night! holy night!<br>
            Shepherds quake at the sight<br>
            Glories stream from heaven afar<br>
            
            Heavenly hosts sing Alleluia<br>
            Christ the Saviour is born!<br><br>
            
            Silent night! holy night!<br>
            Son of God love's pure light<br>
            Radiant beams from thy holy face<br>
            With the dawn of redeeming grace,<br>
            Jesus, Lord at thy birth.</i><br>
             <img src="./Christmas-Tree-Animated-GIF.gif" class="img-showcase"><br><br>
             <h4>Jingle bells</h4>
            <i>Dashing through the snow<br>
            In a one horse open sleigh<br>
            O'er the fields we go<br>
            Laughing all the way<br>
            <br>
            Bells on bob tails ring<br>
            Making spirits bright<br>
            What fun it is to laugh and sing<br>
            A sleighing song tonight<br>
            <br>
            Oh, jingle bells, jingle bells<br>
            Jingle all the way<br>
            Oh, what fun it is to ride<br>
            In a one horse open sleigh<br>
            <br>
            Jingle bells, jingle bells<br>
            Jingle all the way<br>
            Oh, what fun it is to ride<br>
            In a one horse open sleigh</i><br>
             <img src="./Christmas-Tree-Animated-GIF.gif" class="img-showcase">`;
        } else if (num === 4) {
            $(".mainPanel").innerHTML = `<h2>About our site!</h2>
            This site is an experimenting of creating a flash-like experience<br>
            in HTML5 - Sounds, animations, and small resolution of content.<br>
            I made this as Adobe Flash Player is going end of life this year.<br>
            Merry Christmas everybody!<br><br>
            <b>Thanks:</b><br>
            Pixabay - images<br>
            Homemade Gifts Made Easy - Wishes<br>
            Freesound & Youtube Audio Libary - Music and Sounds<br>
            Metrolyrics - Carols<br>
            You - using this <i>awesome</i> <del>flash</del> HTML5 Website!`;
        };
        panelState = true;
    } else {
        $("#newAudio").currentTime = 0;
        $("#newAudio").play();
        $(".mainPanel").style.animation = "panelBackAnim 2s linear 1 forwards";
        setTimeout(() => {
            $(".mainPanel").style.animation = "panelAnim 2s linear 1 forwards";
            if (num === 1) {
                $(".mainPanel").innerHTML = `<h2>Our Christmas party!</h2>
                <img class="img-showcase" src="./christmas-5815034_640.jpg">
                <img class="img-showcase" src="./father-christmas-1149928_640.jpg">
                <img class="img-showcase" src="./gift-3030279_640.jpg">
                <img class="img-showcase" src="./gnome-5776661_640.jpg">`;
            } else if (num === 2) {
                $(".mainPanel").innerHTML = `<h2>Our Christmas Wishes!</h2>
                <i>May the magic of the Christmas season fill your home with joy and peace.<br>
                 Sending lots of love to your family, and looking forward to the day we can see you again.<br> 
                 Take care of yourselves and stay safe. </i><br>
                 <img src="./Christmas-Tree-Animated-GIF.gif" class="img-showcase">`;
            } else if (num === 3) {
                $(".mainPanel").innerHTML = `<h2>Christmas carols we sung!</h2>
                <h4>Silent night</h4>
                <i>Silent night! holy night!<br>
                All is calm all is bright<br>
                Round yon virgin mother and child<br>
                Holy infant so tender and mild<br>
                Sleep in heavenly peace!<br>
                <br>
                Silent night! holy night!<br>
                Shepherds quake at the sight<br>
                Glories stream from heaven afar<br>
                
                Heavenly hosts sing Alleluia<br>
                Christ the Saviour is born!<br><br>
                
                Silent night! holy night!<br>
                Son of God love's pure light<br>
                Radiant beams from thy holy face<br>
                With the dawn of redeeming grace,<br>
                Jesus, Lord at thy birth.</i><br>
                 <img src="./Christmas-Tree-Animated-GIF.gif" class="img-showcase"><br><br>
                 <h4>Jingle bells</h4>
                <i>Dashing through the snow<br>
                In a one horse open sleigh<br>
                O'er the fields we go<br>
                Laughing all the way<br>
                <br>
                Bells on bob tails ring<br>
                Making spirits bright<br>
                What fun it is to laugh and sing<br>
                A sleighing song tonight<br>
                <br>
                Oh, jingle bells, jingle bells<br>
                Jingle all the way<br>
                Oh, what fun it is to ride<br>
                In a one horse open sleigh<br>
                <br>
                Jingle bells, jingle bells<br>
                Jingle all the way<br>
                Oh, what fun it is to ride<br>
                In a one horse open sleigh</i><br>
                 <img src="./Christmas-Tree-Animated-GIF.gif" class="img-showcase">`;
            } else if (num === 4) {
                $(".mainPanel").innerHTML = `<h2>About our site!</h2>
                This site is an experimenting of creating a flash-like experience<br>
                in HTML5 - Sounds, animations, and small resolution of content.<br>
                I made this as Adobe Flash Player is going end of life this year.<br>
                Merry Christmas everybody!<br><br>
                <b>Thanks:</b><br>
                Pixabay - images<br>
                Homemade Gifts Made Easy - Wishes<br>
                Freesound & Youtube Audio Libary - Music and Sounds<br>
                Metrolyrics - Carols<br>
                You - using this <i>awesome</i> <del>flash</del> HTML5 Website!`;
            };
        }, 2100);
    };
}