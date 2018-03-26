<?php
  require_once('contact.php');
?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8"/>
    <title>Portfolio</title>
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <![endif]-->
    <meta name="keywords" content="developpement web, création de sites web, accessibilité web, UX, green it, usabilité, conception de sites web Marseille" />
    <meta name="publisher" content="cooldev">
    <meta name="description" content="Réalisations Cooldev, collectif de développeur&#183;se&#183;s engagé&#183;e&#183;s" />
    <meta name="viewport" content="width=device-width initial-scale=1" />
    <meta name="google-site-verification" content="rBRnpj5XSqUqYyI27OQ52hRYjk1PkW2Z1i3E9ces7oE" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Comfortaa%7cRoboto" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="Shortcut icon" href="favicon.ico" type="image/x-icon" />
  <!-- Open Graph Meta Tags -->
  <!-- FACEBOOK -->
    <meta property="og:title" content="Portfolio" />
    <meta property="og:site_name" content="Cooldev">
    <meta property="og:url" content="http://www.cooldev.xyz/works.php" />
    <meta property="og:description" content="Réalisations Cooldev, collectif de développeur&#183;se&#183;s engagé&#183;e&#183;s" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="http://www.cooldev.xyz/assets/img/og-img.png" />
  <!-- TWITTER -->
    <meta name="twitter:site" content="@cooldev_crew">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="og:locale" content="fr_FR">
    <meta name="og:site_name" content="Cooldev">
    <meta property="og:title" content="Portfolio">
    <meta property="og:url" content="http://www.cooldev.xyz/works.php">
    <meta property="og:description" content="Réalisations Cooldev, collectif de développeur&#183;se&#183;s engagé&#183;e&#183;s" />
    <meta property="og:image" content="http://www.cooldev.xyz/assets/img/og-img.png" />

  <!-- Piwik -->
    <script type="text/javascript" defer>var _paq=_paq||[];_paq.push(["setCookieDomain","*.cooldev.xyz"]);_paq.push(['trackPageView']);_paq.push(['enableLinkTracking']);(function(){var u="//analytics.mpaw.xyz/piwik/";_paq.push(['setTrackerUrl',u+'piwik.php']);_paq.push(['setSiteId','5']);var d=document,g=d.createElement('script'),s=d.getElementsByTagName('script')[0];g.type='text/javascript';g.async=!0;g.defer=!0;g.src=u+'piwik.js';s.parentNode.insertBefore(g,s)})();</script>
  <!-- End Piwik Code -->
</head>
<body>
  <?php include('private/views/nav.php');?>
  <?php include('private/views/works-cards.php');?>
  <?php include('private/views/contact-form.php');?>
  <?php include('private/views/footer.php');?>

  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js" ></script>
  <script src="js/scrollMagic.js"></script>
  <script src="js/scrollMagic-anim.min.js"></script> -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
  <script src="js/main.js"></script>
</body>