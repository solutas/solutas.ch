<?php

/**
 * solutas functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package solutas
 */

if ( ! function_exists( 'solutas_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function solutas_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on solutas, use a find and replace
		 * to change 'solutas' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'solutas', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'solutas' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'solutas_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'solutas_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function solutas_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'solutas_content_width', 640 );
}
add_action( 'after_setup_theme', 'solutas_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function solutas_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'solutas' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'solutas' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
//add_action( 'widgets_init', 'solutas_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function solutas_scripts() {
	wp_enqueue_style( 'solutas-style', get_stylesheet_uri() );

	//wp_enqueue_script( 'solutas-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

//	wp_enqueue_script( 'solutas-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );
global $wp_styles;

	// loop over all of the registered scripts
	foreach ($wp_styles->registered as $handle => $data)
	{
		// remove it
		wp_deregister_style($handle);
		wp_dequeue_style($handle);
	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	function getVersionNumber($filepath) {		
		return filemtime($filepath);
	}

	$scriptPath = get_template_directory_uri() . '/dist/main.js';

	wp_enqueue_script ( 'bundle-script-main',$scriptPath, array(), getVersionNumber(get_template_directory()."/dist/main.js"),true );
	wp_enqueue_style ( 'bundle-main-css', get_template_directory_uri() . '/dist/main-bundle.css', array(), filemtime(get_template_directory()."/dist/main-bundle.css") );
}
add_action( 'wp_enqueue_scripts', 'solutas_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */ 
require get_template_directory() . '/inc/customizer.php';


function displayTopNavigation() {
    class Description_Walker extends Walker_Nav_Menu
{
	//function start_el(&$output, $item, $depth, $args)
	function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) 
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
        	//array_push($classes,  'is-active');
        }
        array_push($classes,  'scroll-navigation');
        /*$classes = array_push($classes, 'is-active');
        
        if(in_array('current_page', $item->classes)) {
            array_push($item->classes, 'is-active');
        }*/
        
		$classNames  = join($classes, ' ');
		
        $item_output ="<a data-navigation-target='".str_replace(home_url(),'', $item->url)."' class='navbar-item ".$classNames."' href='".esc_attr( $item->url )."'>".$title."</a>";

        $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
    }
}




  echo      strip_tags(wp_nav_menu( array( 'theme_location' => 'menu-1',
        'container_class' => 'navbar-start',
        'menu-item' => 'navbar-item',
        'walker'          => new Description_Walker,
        'items_wrap' => '%3$s' ) )
, '<a>'); 
}

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	//require get_template_directory() . '/inc/jetpack.php';
}

add_filter( 'content_save_pre', 'remove_nbsps' ) ;

function remove_nbsps( $content ) {

	 $content = str_replace( '&nbsp;', ' ', $content ) ;
	 $content = str_replace( 'SCHEISSE;', ' ', $content ) ;

     return $content ;

} 



$createEmail = require get_template_directory() . '/inc/email.php';
function getContent($request) {
	
	$params = $request->get_json_params();




$verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
$secret = "6Lcbt7cUAAAAALZJY4YSNtAPGvW7aHh-cCIPA-3_";
$token = $params["g-recaptcha-response"];

$data = array('secret' => $secret, 'response' => $token);




$noRobot = true;
$status = 200;

$response_check = wp_remote_post( $verifyUrl, array('body' => $data));
if ( is_wp_error( $response_check ) ) {
    $res = $response_check->get_error_message();
} else {
	$res = json_decode($response_check['body'], true);
    $noRobot =  $res["success"];
}


if($noRobot) {
	$headers = array('Content-Type: text/html; charset=UTF-8');

	$mailBody = createEmail(
		$params["subject"], 
		$params["name"], 
		$params["company"],  
		$params["phone"], 
		$params["email"],
		nl2br($params["message"]));

	$email_sent = true;// wp_mail( 'senol@solutas.ch', $params["subject"].' von '.$params["name"] , $mailBody, $headers );


$args = array(
	'subject' =>$params["subject"], 
	'name' => $params["name"], 
	'company' => $params["company"],  
	'phone' => $params["phone"], 
	'email' => $params["email"],
	'message' =>$params["message"],
	'email-sent' => $email_sent	
);


$phoenixUrl = "https://us-central1-phoenix-solutas.cloudfunctions.net/helloWorld";
$phoenixSecret = "5e586e2c-fbda-48c3-bd0f-07040a57cfbe";
$phoenix = wp_remote_post( $phoenixUrl, array('body' => $args,
'headers' => array(
	'secret' => $phoenixSecret,
)));

if ( is_wp_error( $phoenix ) ) {
	 $phoenix->get_error_message();
	 $status = "444";	 
} else {
	//$res = json_decode($phoenix['body'], true);
   // $noRobot =  $res["success"];
}

} else {
	$args = array(
		'error' => $res
		);
	$status = 400;
}


$response = new WP_REST_Response($args);
    $response->set_status($status);
    return $response;

}

add_action('rest_api_init', function () {
	register_rest_route( 'solutas/v1', 'contact',array(
				  'methods'  => 'POST',
				  'callback' => 'getContent'
		));
  });


// config php mailer stuff
add_action( 'phpmailer_init', 'config_ionos_mail' );
function config_ionos_mail( $phpmailer ) {
    $phpmailer->isSMTP();     
    $phpmailer->Host = 'smtp.ionos.com';
    $phpmailer->SMTPAuth = true; // Force it to use Username and Password to authenticate
    $phpmailer->Port = 587;
    $phpmailer->Username = 'do-not-reply@manage.solutas.ch';
	$phpmailer->Password = 's,5D4@d_8uk-Hr<&';
	$phpmailer->SMTPSecure = "tls";
	$phpmailer->AddReplyTo = "info@solutas.ch";
	$phpmailer->AddReplyToName = "SOLUTAS Office";
	$phpmailer->Sender = "do-not-reply@manage.solutas.ch";
	$phpmailer->From = "do-not-reply@manage.solutas.ch";
	$phpmailer->FromName = "SOLUTAS GmbH Backoffice";
    // Additional settings…
    //$phpmailer->SMTPSecure = "tls"; // Choose SSL or TLS, if necessary for your server
    //$phpmailer->From = "you@yourdomail.com";
    //$phpmailer->FromName = "Your Name";
}


add_action( 'wp_mail_failed', 'onMailError', 10, 1 );
    function onMailError( $wp_error ) {
        echo "<pre>";
        print_r($wp_error);
        echo "</pre>";
	}       
	

	function solutas_theme_body_classes( $classes ) {
			$classes[] = 'solutas-body';
		
		return $classes;
	}
	add_filter( 'body_class', 'solutas_theme_body_classes' );