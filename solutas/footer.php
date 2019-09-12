<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package solutas
 */

?>

	</div><!-- #content -->

	<footer class="footer" style="justify-content: center">
  <div class="container">


<div class="columns">
<div class="column"><?=the_custom_logo()?></div>
  <div class="column"><strong>SOLUTAS GmbH</strong>
Paradieshofstrasse 117<br>
4054 Basel, Switzerland</div>
  
  <div class="column">
  <div>
    <a href="tel:+41795975006"><i class="fas fa-phone"></i> 079 59 75 00 6</a>
  </div>
  
  <div>
    <a href="#/kontakt/"><i class="fas fa-envelope"></i> info solutas.ch</a>
  </div>
  
  </div>
  <div class="column">CH VAT No CH-234.973.545 MWST<br>
USt-IdNr CH-234.973.545</div>
</div>

  </div>
</footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
