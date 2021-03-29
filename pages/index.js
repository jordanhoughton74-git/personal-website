import Head from 'next/head';
import React, {useEffect} from "react";
import HomeTop from "../components/homeTop";
import Header from "../components/header"
import About from '../components/about';
import Employment from '../components/employment';
import Education from '../components/education'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'; 



export default function Home() {
  if (process.browser) {

  $(window).scroll(function() {
  
    var $window = $(window),
        $wrapper = $('.wrapper'),
        $panel = $('.panel');
    
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        $wrapper.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        $wrapper.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();
}





  return (
    <>
    <Head>
      <title>Jordan Houghton | Personal Website</title>
      <meta name="title" content="Jordan Houghton | Personal Website"/>
      <meta name="description" content="My name is Jordan Houghton and this my personal website, I hope you enjoy it. Website created by myself for Houghton Web Design."/>
      <meta name="keywords" content="Personal Website, Houghton Web Design, Web CV, Online CV"/>
      <meta name="robots" content="index, follow"/>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="en"/>
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
    </Head>

    <div className="wrapper">
    <Header />
    <HomeTop />
  
    <div className="panel" data-color="indigo">
    <About />
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>

    </div>
    <div className="panel" data-color="blue">
    <Employment />
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>

    </div>
    <div className="panel" data-color="orange">
    <Education />
    <div className="cross">x</div>
    <div className="cross">x</div>
    <div className="cross">x</div>
    <div className="cross">x</div>
    <div className="cross">x</div>
    <div className="cross">x</div>
    <div className="cross">x</div>
    </div>
    </div>
    <Footer />

    </>
  )
}
