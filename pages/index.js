import Head from 'next/head'
import Marquee from '../components/Marquee'


export default function Home() {


  return (
    

    <>
    <Head>
    <title>Jordan Houghton | Freelance Web Developer</title>
      <meta name="title" content="Freelance Web Designer |  Jordan Houghton"/>
      <meta name="description" content="Hi, I'm Jordan! A freelance web developer based in Sittingbourne, Kent.  Welcome to my Personal Site."/>
      <meta name="keywords" content="Web designer, freelance web designer, mobile responsive websites, mobile responsive, web developer, web maintenance, web consultant, seo, freelance web developer, web designer uk, web designer kent, web designer local"/>
      <meta name="robots" content="index, follow"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="en"/>
      <meta property="og:title" content="Freelance Web Designer | Web developer Kent, UK"/>
      <meta property="og:site_name" content="Houghton Web Design"/>
      <meta property="og:url" content="https://www.jordanhoughton.design/"/>
      <meta property="og:description" content="I'm Jordan Houghton a freelance web developer based in Kent, UK. Welcome to my Personal Site."/>
      <meta property="og:type" content="website"></meta>
    </Head>
    <div className="wrapper">
      <div className="relative grid grid-cols-1 md:grid-cols-2 space-x-4 py-32">
        <div className="relative md:pl-32 my-auto justify-center align-center">
          <div className="my-auto z-10 relative text-center md:text-left px-4 md:px-0">
          <h1 className="text-5xl">Hi, I'm Jordan Houghton</h1>
          <h2 className="text-md pt-4">Web Designer & Developer with a passion for Website Speed and User Experience</h2>     
          </div>   
          <div className="hidden md:block 2xl:hidden -my-16 absolute inset-y-0 mt-50px right-1/2 w-full bg-blue-50 dark:bg-gray-800 shadow-sm rounded-r-3xl lg:right-72"></div>        </div>
        <div className="z-10 relative">
        <div className="absolute top-0 left-0 grid-grey w-40 h-40 ml-8 mt-12"></div>     

          <img className="h-full z-10 relative w-full max-w-sm mx-auto" alt="mobile phone" src="/images/web-design-media.svg" />
        </div>
      </div>
      
    <div id="about" className="text-justify md:text-center pb-32 pt-6 px-4">
      <p className="text-3xl font-semibold pb-2 text-center">Who am I?</p>
      <p className="text-lg">My name is Jordan Houghton. I am a Web Designer and Developer based in Kent, United Kingdom. 
          I have a strong passion for creating and designing the best User Interfaces and the most 
          incredible User Experience possible. I am now open to working on new freelance projects! 
          <a className="text-indigo-500 hover:text-yellow-600 motion-safe:animate-pulse" href="mailto:jordanhoughton74@gmail.com"> Let's get started</a></p>
    </div>

  <div id="employment" className="sm:p-14">
  <div className="relative py-3">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div className="relative mx-auto px-4 py-10 bg-white dark:bg-gray-700 shadow-lg sm:rounded-3xl sm:p-10 lg:p-20">
      <div className="grid space-x-4 grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl">Employment History</h3>
            <h4 className="text-xl py-2">Web Designer | Houghton Web Design.  Dec 2020-Present</h4>
                  <p>Web Design and Developemt starting from the ground up.  Using React.JS and Next.JS 
                    as the main resource and building blocks.  What makes me different is every website is unique,
                    React allows me to customise the site exactly how the customer wants it, no cookie cutter templates.</p>
            <h4 className="text-xl py-2">PPI Quality Controller | December 2016-September 2020</h4>
                  <p>Responsible for feedback and coaching on a one to one basis, identifying and highlighting any issues.
                  Maintaining all quality records for team members on a daily basis.  
                  Supporting and assisting with the departmental recruitment process 
                  </p>
            <h4 className="text-xl py-2">PPI Premiums Administrator | February 2015 – December 2016:</h4>
                  <p>Working with accuracy and speed as to meet set SLAs to avoid financial penalties for the company. 
                    Meeting strict GDPR rules to avoid the loss of sensitive data.
              </p> 
         </div>
          <div className="m-auto">
            <img className="max-w-md " alt="work CV" src="/images/work-cv.svg" />
          </div>
      </div>
      </div>
    </div>
  </div>

  <div id="education" className="sm:p-14 my-20">
  <div className="relative py-3">
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl"></div>
    <div className="relative mx-auto px-4 py-10 bg-white dark:bg-gray-700 shadow-lg sm:rounded-3xl sm:p-10 lg:p-20">
      <div className="grid space-x-4 grid-cols-1 lg:grid-cols-2">
          <div>
          <h5 className="text-2xl">Education</h5>
            <h6 className="text-xl py-2">Bsc Hons Business Studies 2.1 | Canterbury Christ Church University. </h6>
            <p>A Business Studies degree with an emphasis on e-business and digitial marketing.  My long term passion
                for using the internet as a means to generate customer led success stemmed from my learnings.  
            </p>
            <h6 className="text-xl py-2">Level 3 BTEC Business Studies | Distinction</h6>
            <h6 className="text-xl py-2">BTEC First Diploma OCR I.T | Distinction</h6>
            <h6 className="text-xl py-2">BTEC Level 2 Certificate Engineering | Merit</h6>
            <h6 className="text-xl py-2">5 GCSE B Grades</h6>
         </div>
          <div className="m-auto">
            <img className="max-w-md " alt="education" src="/images/education.svg" />
          </div>
      </div>
      </div>
    </div>
  </div>
</div>
<div className="py-20">
  <h6 className="text-center text-3xl pb-10">Portfolio</h6>
<Marquee />
</div>

    </>
   
  )
}
