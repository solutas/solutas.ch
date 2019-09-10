<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package solutas
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">


    <?php
$menu_name = 'menu-1';
$menu_item = wp_get_nav_menu_object( get_nav_menu_locations( $menu_name )[ $menu_name ] )->name;

$items = wp_get_nav_menu_items($menu_item);
foreach( $items as $item2) {
  $id =  $item2->object_id;
  $post   = get_post( $id );
  ?>
  <section class="hero" id="section<?=$item2->ID?>">
  <div class="hero-body">
    <div class="container">
    <h1 class="title"><?=$post->post_title?></h1>
      <h2 class="subtitle">
        <?=$post->subtitle?>
      </h2>
      <div class="content">
    <?=$post->post_content?>
  </div>
    </div>
  </div>
</section>
  

  <?
  

}

/*wp_nav_menu( array(
    'theme_location' => $menu_name,
    'container'      => ''
) );*/
 

    ?>



<?php
get_sidebar();
get_footer();
