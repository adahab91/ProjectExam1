<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="author" content="Ada Håberg">
    <meta name="description" content="Be a part of the Crew Dragons cabin crew team and work in outer space">
    <meta name="keywords" content="participate, work, space, Nasa, spaceX, women astronaut, gender equality, equality,  Crew Dragon, Dragon, outer space, commercial spacecraft">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Audiowide|Bungee" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <title>WOMEN ASTRONAUTS - Thanks for applying! </title>
</head>
<body>
    
<!---HEADER---> 
    <div id="forms-bg"> 
        <div id="header" class="container col-12">
        <nav id="navbar" class="navbar navbar-expand-lg">
            <a class="navbar-brand " href="index.html">
                <img id="logo" src="images/womeninspace_white.png" alt="Logo of Women Astronauts, gender equality to space">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span><i class="fa fa-bars"></i></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <hr>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a id="arrowStartPoint" class="nav-link" href="aboutdragon.html"><nobr>ABOUT CREW DRAGON</nobr></a>
                    </li>
                    <hr class="nav-hr">
                    <li  class="nav-item">
                        <a class="btn participate-btn hvr-icon-forward" href="forms.html" role="button">Apply now <i class="fa fa-angle-right hvr-icon"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
<!---/HEADER--->   
    
        
        
        
        
<!----THANKS CONTENT----> 
    <div class="container col-12">
        <div class="row justify-content-center">
            <div class="col-md-12 col-lg-5 col-xl-4 thanks-background">
                 <div class="row justify-content-center">
                            <div class="col-sm-12 thanks-content">
                                <?php echo "<h2 class='contact-form-heading'>Thanks " . $_POST["firstname"] .  " !</h2>" ?>
                                <h3 class="thanks-h3">Thanks for applying, your contribution has been sendt.</h3> <br>                     
                                <p class="thanks-p"s>Our goald is to get more female representators in space science and engineering, and we are hoping to encourage more women to persue careers in these fullfilling industries.</p>
                                <p class="thanks-p">We want women as much as men to help shape the future in space.</p>
                                <p class="thanks-p">We recommend reading more about <a href="aboutdragon.html"> Crew Dragon</a> or the founder of this campain, <a href="http://www.spacex.com/" target="_blank"> SpaceX.</a></p>
                                <p class="share-p">Share with your friends on</p>
                                <a href="#"><i title="Facebook" class="share-social-fb fa fa-facebook-official"></i></a><a href="#"><i title="Twitter" class="share-social-twitter fa fa-twitter"></i></a>
                                <a href="#"><i title="Google+" class="share-social-google fa fa-google-plus"></i></a><a href="#"><i title="Linked In" class="share-social-linked-in fa fa-linkedin"></i></a><br>
                                <a class="btn back-btn hvr-icon-back" href="index.html" role="button"><i class="fa fa-angle-left hvr-icon"></i> Back to front page </a>
                            </div>
                </div><!--/row-->  
            </div><!--/col-->
        </div><!--/row-->
    </div><!--/container-->
<!-----/THANKS CONTENT---->

        
        
    
<!---FOOTER--->
    <footer>
        <div class="footer">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6 text-center">
                        <a href="#"><i title="Facebook" class="social fa fa-facebook-official"></i><i title="YouTube" class="social fa fa-youtube-square"></i><i title="Instagram" class="social fa fa-instagram"></i><i title="Linked In" class="social fa fa-linkedin-square"></i></a>
                    </div>
                    <div class=" col-md-6 text-center">
                        <p class="cooporation">In cooperation with <a class="footer-spaceX" href="http://www.spacex.com/" target="_blank"> SpaceX</a></p> 
                    </div>
                </div>
            </div>
        </div><!--copyright-->
    </footer><!--Footer-->  
</div><!--bg-image-->
<!--/FOOTER-->
    
    <script src="scripts/thanks.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
</body>
</html>