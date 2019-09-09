<?php

function displayTopNavigation() {
    class Description_Walker extends Walker_Nav_Menu
{
    function start_el(&$output, $item, $depth, $args)
    {
        $classes = empty($item->classes) ? array () : (array) $item->classes;
        $class_names = join(' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) );
        !empty ( $class_names ) and $class_names = ' class="'. esc_attr( $class_names ) . '"';
        $output .= "";
        $attributes  = '';
        !empty( $item->attr_title ) and $attributes .= ' title="'  . esc_attr( $item->attr_title ) .'"';
        !empty( $item->target ) and $attributes .= ' target="' . esc_attr( $item->target     ) .'"';
        !empty( $item->xfn ) and $attributes .= ' rel="'    . esc_attr( $item->xfn        ) .'"';
        !empty( $item->url ) and $attributes .= ' href="'   . esc_attr( $item->url        ) .'"';
        $title = apply_filters( 'the_title', $item->title, $item->ID );
        
        /*$item_output = $args->before
        . ""
        . $args->link_before
        . $title
        . ''
        . $args->link_after
        . $args->after;*/
        $classes = $item->classes;
        if(in_array('page_item', $classes)) {
            array_push($classes,  'is-active');
        }
        
        /*$classes = array_push($classes, 'is-active');
        
        if(in_array('current_page', $item->classes)) {
            array_push($item->classes, 'is-active');
        }*/
        
        $classNames  = join($classes, ' ');
        $item_output ="<a class='navbar-item ".$classNames."' href='".esc_attr( $item->url )."'>".$title."</a>";

        $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
    }
}




  echo      strip_tags(wp_nav_menu( array( 'theme_location' => 'header-menu',
        'container_class' => 'navbar-start',
        'menu-item' => 'navbar-item',
        'walker'          => new Description_Walker,
        'items_wrap' => '%3$s' ) )
, '<a>'); 
}
function register_my_menu() {
    register_nav_menu('header-menu',__( 'Header Menu' ));
}
add_action( 'init', 'register_my_menu' );

add_theme_support( 'post-thumbnails' );
// Image size for single posts
add_image_size( 'hero-image', 1920, 1080 );
add_image_size( 'sidebar-thumb', 120, 120, true ); // Hard Crop Mode
add_image_size( 'homepage-thumb', 220, 180 ); // Soft Crop Mode
add_image_size( 'singlepost-thumb', 590, 9999 ); // Unlimited Height Mode
?>