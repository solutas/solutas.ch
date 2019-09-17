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

    <?
    if (get_post_meta(get_queried_object_id(), 'microsite', true) === "yes") { ?>

      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title"><?= get_post_meta(get_queried_object_id(), 'page_title', true) ?></h1>
            <h2 class="subtitle">
              <?= get_post_meta(get_queried_object_id(), 'page_subtitle', true) ?>
            </h2>
            <div class="content">
              <?
                the_post();
                the_content();
                ?>
            </div>
          </div>
        </div>
      </section>



    <? } else {

      ?>
      <?php
        $menu_name = 'menu-1';
        $menu_item = wp_get_nav_menu_object(get_nav_menu_locations($menu_name)[$menu_name])->name;

        $items = wp_get_nav_menu_items($menu_item);
        foreach ($items as $item2) {
          $id =  $item2->object_id;
          $post   = get_post($id);
          //$item2->ID
          ?>
        <section class="hero" id="<?= str_replace(home_url(), '', $item2->url) ?>">
          <div class="hero-body">
            <div class="container">
              <h1 class="title"><?= $post->post_title ?></h1>
              <h2 class="subtitle">
                <?= $post->subtitle ?>
              </h2>
              <div class="content">
                <?= $post->post_content ?>
              </div>
            </div>
          </div>
        </section>
    <?
      }
    }

    /*wp_nav_menu( array(
    'theme_location' => $menu_name,
    'container'      => ''
) );*/
    ?>


    <?php
    get_sidebar();
    get_footer();
