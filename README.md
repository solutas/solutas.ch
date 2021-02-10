# solutas.ch
solutas.ch / soluneo palyground components

until another way is found, copy following scss file into thems dialog of your site

```scss

@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap');


$sol-primary: #DD851B;
$sol-secondary: #0F0A0A;
$sol-brown: #875111;
$sol-white: #F5EFED;
$sol-info: #2292A4;
$sol-green: #BDBF09;
$sol-gray: #262625;
$sol-white-trans: rgba(245, 239, 237, 0.753);
$sol-secondary-trans: rgba(15, 10, 10, 0.753);


$body-bg: $sol-white;
$body-color: rgba($sol-secondary, 0.9);
$font-family-sans-serif:  'Roboto', sans-serif;
$yiq-text-light: $sol-white;
$yiq-text-dark: $sol-secondary;

$headings-margin-bottom: 15px;

$grid-gutter-width: 40px;

$theme-colors: (
  "primary": $sol-primary,
  "success": $sol-green,
  "info": $sol-info,
  "secondary": $sol-secondary,
  "white": $sol-white,
  "danger": #8f241e,
  "swiss": #E11A27
);


// __hamburger
.hamburger {
    cursor: pointer;
    fill: $sol-white;
    z-index: 1000;
    margin-left: auto;
    .line1 {
      transition: all 0.4s ease-in-out;
      transform-origin: 15% 50%;
    }
    .line2 {
      transition: all 0.4s ease-in-out;
    }

    .line3 {
      transition: all 0.4s ease-in-out;
      transform-origin: 25% 50%;
    }

    &.open {
      fill: $sol-white;

      .line1 {
        transform: rotate(45deg);
      }
      .line2 {
        opacity: 0;
      }

      .line3 {
        transform: rotate(-45deg);
      }
    }
  }
  
  [contentEditable]:empty:before{
    content:attr(data-sol-placeholder);
    color:grey;
    font-style:italic;
  }


```
