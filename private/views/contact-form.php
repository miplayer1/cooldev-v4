<section id="contact" class="scrollspy">
	<div class="container">
	 <div class="row">
	    <div class="col s12">
	      <h2 class="dark-green center-align">Contactez-nous !</h2>	      
	     </div>
	     <div class="separator col s2 offset-s5 divider"></div>
	 
	    <form class="col s12" action="#contact" method="POST">
	
	      <div class="row">
	        <div class="input-field col s12">
	          <i class="material-icons prefix">account_circle</i>
	          <input id="name" name="nom" type="text" class="validate" required aria-required="true">
	          <label for="name">Votre nom</label>
	        </div>
	      </div>
	      <div class="row">
	        <div class="input-field col s12">
	          <i class="material-icons prefix">email</i>
	          <input id="email" name="email" type="email" class="validate" required aria-required="true">
	          <label for="email">Votre adresse mail</label>
	        </div>
	      </div>
	      <div class="row">
	        <div class="input-field col s12">
	          <i class="material-icons prefix">subject</i>
	          <input id="subject" name="objet" type="text" class="validate" required aria-required="true">
	          <label for="subject">Sujet</label>
	        </div>
	      </div>
	      <div class="row">
	        <div class="input-field col s12">
	          <i class="material-icons prefix">textsms</i>
	          <textarea id="message" name="message" type="text" class="materialize-textarea" required aria-required="true"></textarea>
	          <label for="message">Votre message</label>
	        </div>
	      </div>
	      <div class="row">
	        <div class="col s12 center-align">
	          <button class="btn waves-effect waves-light cyan darken-3" id="submit" type="submit" name="submit">Envoyer
	            <i class="material-icons right">send</i>
	          </button>
	        </div>
	      </div>
	      <div id="feedback">
	        <?php echo $feedback; ?>
	      </div>
	    </form>
		</div>
	  </div>
	</section><!--SECTION CONTACT FORM-->