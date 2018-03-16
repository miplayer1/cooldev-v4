<?php
  require_once('contact.php');
?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8"/>
    <title>Mentions légales</title>
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <![endif]-->
    <meta name="keywords" content="developpement web, création de sites web, accessibilité web, UX, green it, usabilité, conception de sites web Marseille" />
    <meta name="publisher" content="cooldev">
    <meta name="description" content="Mentions légales. Collectif Cooldev, pour un web accessible, respectueux des gens et de la planète" />
    <meta name="viewport" content="width=device-width initial-scale=1" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Comfortaa%7cRoboto" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css" />
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css" />
    <link rel="Shortcut icon" href="favicon.ico" type="image/x-icon" />
<!-- Open Graph Meta Tags -->
<!-- FACEBOOK -->
	<meta property="og:title" content="Mentions légales. Cooldev, collectif de développeur&#183;se&#183;s engagé&#183;e&#183;s" />
	<meta property="og:site_name" content="Cooldev">
	<meta property="og:url" content="http://www.cooldev.xyz/mentions-legales.php" />
	<meta property="og:description" content="Pour un web accessible, respectueux des gens et de la planète" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="http://www.cooldev.xyz/assets/img/og-img.png" />
<!-- TWITTER -->
	<meta name="twitter:site" content="@cooldev_crew">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="og:locale" content="fr_FR">
	<meta name="og:site_name" content="Cooldev">
	<meta property="og:title" content="Mentions légales. Cooldev, collectif de développeur&#183;se&#183;s engagé&#183;e&#183;s">
	<meta property="og:url" content="http://www.cooldev.xyz/mentions-legales.php">
	<meta property="og:description" content="Pour un web accessible, respectueux des gens et de la planète" />
	<meta property="og:image" content="http://www.cooldev.xyz/assets/img/og-img.png" />

<!-- Piwik -->
<script type="text/javascript" defer>var _paq=_paq||[];_paq.push(["setCookieDomain","*.cooldev.xyz"]);_paq.push(['trackPageView']);_paq.push(['enableLinkTracking']);(function(){var u="//analytics.mpaw.xyz/piwik/";_paq.push(['setTrackerUrl',u+'piwik.php']);_paq.push(['setSiteId','5']);var d=document,g=d.createElement('script'),s=d.getElementsByTagName('script')[0];g.type='text/javascript';g.async=!0;g.defer=!0;g.src=u+'piwik.js';s.parentNode.insertBefore(g,s)})();</script>
<!-- End Piwik Code -->
</head>
<body>
<?php include('private/views/nav.php');?>
	<section class="ml cyan lighten-4">
		<div class="container">
			<h1 class="deep-purple-text text-darken-4 no-margin-top padding-top">Mentions Légales</h1>
			<div class="underlign-r"></div>
			<h2 class="deep-purple-text text-darken-4 h2-title">SIRET</h2>
			<p>Sous CAPE Cosens SIRET 419 369 798 00048</p>
			<p>2, rue de Rome</p>
			<p>13001 Marseille</p>
			<h2 class="deep-purple-text text-darken-4 h2-title">Hébergement :</h2>
			<p>GANDI SAS, Société par Actions Simplifiée au capital de 300.000€ ayant son siège social au 63-65 boulevard Massena à Paris (75013) FRANCE, immatriculée sous le numéro 423 093 459 RCS PARIS N° TVA FR81423093459 Téléphone : +33.(0) 1 70.37.76.61 . </p>
			<h2 class="h2-title deep-purple-text text-darken-4">Co-responsables de la publication :</h2>
			<p>Lionel Lafont</p>
			<p>Mylène Hiezely</p>
			<h2 class="h2-title deep-purple-text text-darken-4">Gestion des données personnelles :</h2>
			<p>Votre vie privée est très importante pour nous. Pour connaître le trafic sur ce site internet, Nous utilisons Matomo. Matomo est une solution d’analytics qui respecte votre vie privée conformément aux recommandations de la CNIL et ne demande aucune déclaration préalable.</p>
			<div class="center-align padding-top padding-bottom"><iframe class="center-align" style="border: 0;" src="http://analytics.mpaw.xyz/piwik/index.php?module=CoreAdminHome&action=optOut&language=fr"></iframe></div>
		</div>
	</section>
	<?php include('private/views/contact-form.php');?>
	<?php include('private/views/footer.php');?>
	<script src="js/main.min.js"></script>
</body>
</html>
