<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package solutas_homepage
 */
get_header();

?>
    <div class="container" style="padding-top:52px">

<?php
	  the_post();
	  echo the_content()
	  ?>

    </div>
<?php /*
  <section class="hero is-danger" style="padding-top:52px">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
	  <?php bloginfo( 'name' ); ?>
      </h1>
      <h2 class="subtitle">
	  <?php bloginfo( 'description' ); ?>
      </h2>
    </div>
  </div>
</section>
<section class="section">
    <div class="container">
      <h1 class="title">SOLUTAS. New Kid on the block?</h1>
      <h2 class="subtitle">
	  Unserer Stärken
	  </h2>	  
	  <div class="content">
	  Über 20 Jahre Erfahrung im Furtune 100 Bereich und vorhandene KMU Erfahrung der Gesellschafter in den unterschiedlichsten Vertikalen. Das beduetet, dass die SOLUTAS GmbH sehr schnell das Potential der Kunden erkennt und in eine digitale Strategie übersetzen kann.
		  Im Herzen ist die SOLUTAS GmbH eine Software Engineering Firma, deswegen sind wir in der Lage in kürzester Zeit den grösst möglichen Nutzen für Sie, unseren Kunden zu erkennen und technich umzusetzen.
	  </div>
    </div>
  </section>
<div class="container">
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-info">
          <p class="title">Simplicity Matters...</p>
          <p class="subtitle">Alles was wir machen ist einfach. Einfach zu bedienen, einfach zu verstehen, einfach zu integrieren und einfach zu erweitern.
	  Es gibt keine komplexen Probleme, sondern kreative Lösungen.	  </p>
        </article>
        <article class="tile is-child notification ">
          <p class="title">...tiles</p>
          <p class="subtitle">Bottom tile</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification ">
          <p class="title">Dini MiniApp!</p>
		  <p class="subtitle">Wir setzten an der Stelle an, die Ihnen am meisten Nutzen bringt.</p>
		  <p class="content">Auch wenn man möchte, kann man nicht immer alles auf einmal umsetzen. Wir helfen Ihnen dabei Ihre Abläufe zu durchleuchten und mit kleinen Schritten das meiste in kürzester Zeit verwirklichen zu können.</p>
          <figure class="image is-4by3">
            <img src="http://localhost:8000/wp-content/uploads/2019/09/Screenshot-from-2019-03-07-10-11-41-1024x576.png">
          </figure>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger">
        <p class="title">Wide tile</p>
        <p class="subtitle">Aligned with the right tile</p>
        <div class="content">
          <!-- Content -->
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-warning">
      <div class="content">
        <p class="title">Unsere Methode</p>
		<p class="subtitle">Wir durchleuchten Sie in 4D!</p>
		<div class="content">
          <ul>
			  <li><strong>Discovery</strong></li>
			  <li><strong>Define</strong></li>
			  <li><strong>Develop</strong></li>
			  <li><strong>Delivery</strong></li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</div>


</div>
  


  <div class="section">
	  <div class="container">
	  <?php
	  the_post();
	  echo the_content()
	  ?>
	  </div>
  </div>
  <div class="container">
<div class="columns">
  <div class="column">
    First column
  </div>
  <div class="column">
    Second column
  </div>
  <div class="column">
    Third column
  </div>
  <div class="column">
    Fourth column
  </div>
</div>
  </div>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello Worldasdklfjlk
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>
  
  */
  
  ?>
  
<?php  get_footer();
?>
