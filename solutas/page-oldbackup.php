
<div style="border:20px solid red">
    <?php 
$pages = get_pages(); 
foreach ($pages as $page_data) {
     $content = apply_filters(‘the_content’, $page_data->post_content); 
     $title = $page_data->post_title; 
     echo "<div style='border:5px solid blue'>".$content."</div>"; 
}
?>
</div>


		<?php
		
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		
		?>


	<!--nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Tweets</p>
      <p class="title">3,456</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Following</p>
      <p class="title">123</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Followers</p>
      <p class="title">456K</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>
  </div>
</nav-->
  <section class="section">
    <div class="container">
      <h1 class="title">Die Fehlenden 2%</h1>
      <h2 class="subtitle">
        Haben Sie eventuell schon eine Lösung, aber diese fühlt sich nicht zu 100% gut an?      <strong> Wir</strong> helfen die <strong>Lücke zu schliessen</strong>. <a href="">Starten Sie direkt mit uns durch</a>, um die 2% <strong>erst gar nicht entstehen zu lassen</strong>.
    </h2>
    <div class="content">      
    
    <blockquote>
    <strong>Unsere Arbeit ist erledigt, wenn Sie als glücklicher Anwender unsere für Sie massgeschneiderte Software benutzen und Ihr Alltag vereinfacht ist.</strong>
    </blockquote>            
    <a class="button is-primary is-outlined cta">Lassen Sie uns darüber reden!</a>
  </div>
	
  <div class="content">      
  <h1 class="title">Dini-Mini-Apps</h1>
<p>Unter der Marke "Dini Mini-Apps" bietet die SOLUTAS GmbH Festpreis Starter Pakete für Websites, Intranets, Mobile-Apps, Desktop-Apps, Digital Signate Lösungen, Ihre persönliche Internet-Of-Things Anwendung oder an was auch immer Sie denken.</p>
<p><strong>Das besondere an unserem Angebot: </strong></p>
<blockquote>
Sie bekommen nicht nur eine Webseite, Mobile-App oder eine Tool-Software - wir machen mit Ihnen einen vollen Digital Transformation Workshop und stellen sicher, dass ihr akutes Anliegen auch in eine langfristige Vision passt.
</blockquote>
<p>Wir helfen Ihnen dabei Ihre Resourcen effizient und sinnvoll einzusetzen. Sie werden überrascht sein, wieviel wir in küzester Zeit qualitativ hochwertig umsetzen können!</p> 
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box notification is-primary2 animated slideInLeft">
    Dini Mini-App
      <p class="title">Original Package</p>
	  <p class="subtitle">Dauer: 2.5 Tage</p>
	  <div class="content">
      
  <p>    <strong>Für wen?</strong>
  
  Sie fangen gerade erst an die nächsten oder die ersten Digitalisierungsschritte zu planen oder haben konkrete Verbesserungswünsche (z.B. Kontaktformulare, Mini-Website, etc.)</p>

    <p><strong>Ablauf</strong>
    <ul>
    <li>2 Stunden Discovery Workshop</li>
      <li>1 Tag Workshop / Konzept</li>
      <li>1 Tag Entwicklung</li>
      <li>4 Stunden Schulung / Übergabe und Konzeptbeprechung</li>
    </ul>
    </p>
    <a class="button is-white is-outlined cta">Unverbindliche Offerte</a>
    <a class="button is-white is-outlined cta">Fragen? Rufen Sie uns an!</a>
    <p><em>kleingedruckets</em></p>
    </div>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box notification is-brand-blue2 animated slideInDown">
      Dini Mini-App
      <p class="title">Turbo Package</p>
	  <p class="subtitle">Dauer: 5 Tage</p>
	  <div class="content">
      
      <p><strong>Für wen?</strong>	Sie haben bereits erste Erfahrungen gesammelt und wünschen sich eine starke, konkrete Verbesserung (neue Funktionen, konkrete analoge Abläufe digitalisieren, neue erweiterte Website, E-Commerce,...). </p>

    <p><strong>Ablauf</strong>
    <ul>
      <li>2 Stunden Discovery Workshop</li>
      <li>1 Tag Workshop / Konzept</li>
      <li>3 Tag Entwicklung</li>
      <li>1 Tag Schulung / Übergabe und Konzeptbeprechung</li>
    </ul>
    </p>
    <a class="button is-white is-outlined cta">Unverbindliche Offerte</a>
    <a class="button is-white is-outlined cta">Fragen? Rufen Sie uns an!</a>
    <p><em>kleingedruckets: bestehende software gibt es nicht zum festpreis, aber - wir finden integrationslösungen, ohne zeitverlust</em></p>
    </div>
    </article>
  </div>
  <div class="tile is-parent">
	<article class="tile is-child box notification is-success2 animated slideInRight" ddata-dir="<?=get_template_directory_uri()?>">		
  Dini Mini-App
  <p class="title">Super Charged Package</p>
	<p class="subtitle">Dauer: 2 Wochen</p>
  <div class="content">
      
     <p> <strong>Für wen?</strong>	Sie fangen gerade erst an und möchten ein gutes Konzept und eine stabile Basis. Oder Sie haben seit längerem ein grösseres Projekt geplant und wollen dieses Punktgenau umsetzen und den langfristigen Nutzen quantifizieren</p>

    <p><strong>Ablauf</strong>
    <ul>
      <li>2 Stunden Discovery Workshop</li>
      <li>1 Tag Workshop</li>
      <li>1 Tag Konzept</li>
      <li>1 Tag Vorstellung</li>
      <li>1 Tage Entwicklung</li>
      <li>1 Tag Abnahme und Schulung</li>
      <li>1 Tag Verbesserungen und Änderungen</li>
    </ul>
    </p>
    <a class="button is-white is-outlined cta">Unverbindliche Offerte</a>
    <a class="button is-white is-outlined cta">Fragen? Rufen Sie uns an!</a>
    <p><em>kleingedruckets</em></p>
    </div>
    </article>
  </div>
</div>
    <blockquote>
    "Because Simplicity Matters" - Alles was wir machen ist einfach - einfach zu bedienen, einfach zu verstehen, einfach zu integrieren und einfach weiter zu entwwicklen.#mainEs gibt keine komplexen Probleme, sondern kreative Lösungen.
    </blockquote>            
  
    </div>
<!--div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box notification is-primary">
      <p class="title">Sie haben bereits eine Lösung...</p>
	  <p class="subtitle">...aberdiese "fühlt" sich <strong>nicht 100% rund</strong> an? </p>
	  <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
	  <a class="button is-white is-outlined cta is-small">Wir helfen Ihnen!</a>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box notification  is-brand-blue">
      <p class="title">Täglich die gleichen Aufgaben?</p>
      <p class="subtitle">Sie wiederholen täglich immer wieder ähnliche Aufgaben und wundern sich, ob man diese automatisieren könnte? <a class="button is-white is-outlined cta is-small">Wir sind für Sie da!</a></p>
    </article>
  </div>
  <div class="tile is-parent">
	<article class="tile is-child box senol" data-dir="<?=get_template_directory_uri()?>">		
	<p class="title">.</p>
	<p class="subtitle">.</p>
      <div class="content">
        <p>Melden Sie sich bei uns <a class="button is-primary  cta is-small">Wir sind für Sie da!</a></p>
      </div>
    </article>
  </div>
</div-->


    </div>
  </section>
  
  
  <section class="hero is-brand">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Wir durchleuchten Sie in 4D.
      </h1>
      <h2 class="subtitle">
        Unser spezialisiertes agiles 4D Verfahren hilft uns dabei Ihnen qualitativ hochwertige Ergebnisse  zu liefern
	  </h2>
 	  
	

    </div>
  </div>
</section>

<section class="section">
<div class="container">
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Discovery</p>
	  <p class="subtitle">...aberdiese "fühlt" sich <strong>nicht 100% rund</strong> an? </p>
	  <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
	  <a class="button is-white is-outlined cta is-small">Wir helfen Ihnen!</a>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Define</p>
      <p class="subtitle">Sie wiederholen täglich immer wieder ähnliche Aufgaben und wundern sich, ob man diese automatisieren könnte? <a class="button is-white is-outlined cta is-small">Wir sind für Sie da!</a></p>
    </article>
  </div>
  <div class="tile is-parent">
	<article class="tile is-child box" data-dir="<?=get_template_directory_uri()?>">		
	<p class="title">Develop</p>
	<p class="subtitle">.</p>
      <div class="content">
        <p>Melden Sie sich bei uns <a class="button is-primary  cta is-small">Wir sind für Sie da!</a></p>
      </div>
    </article>
  </div>
  <div class="tile is-parent">
	<article class="tile is-child box " data-dir="<?=get_template_directory_uri()?>">		
	<p class="title">Delivery</p>
	<p class="subtitle">.</p>
      <div class="content">
        <p>Melden Sie sich bei uns <a class="button is-primary  cta is-small">Wir sind für Sie da!</a></p>
      </div>
    </article>
  </div> 
</div>
</div>
</section>





  <h1 class="title">Die Fehlenden 2%</h1>
      <h2 class="subtitle">
        Über 20 Jahre Erfahrung im ...... und vorhandene KMU Erfahrung der Gesellschafter in den unterschiedlichsten Bereichen. Das beduetet. dass die SOLUTAS GmbH <strong>sehr schnell Ihr Potential erkennt</strong> und in eine <strong>digitale Strategie übersetzt</strong>. 
	  </h2>

		</main><!-- #main -->
	</div><!-- #primary -->