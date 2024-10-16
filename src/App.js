import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence,} from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { Globe, Mail, Phone, Code, Palette, Calendar, Users, Award, Target, Zap, Mic, Film, Video, Smartphone, Megaphone, MapPin, Send, Linkedin, Twitter, Facebook, Briefcase } from 'lucide-react';


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";


const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

  :root {
    --primary-color: #3b82f6;
    --secondary-color: #1e40af;
    --background-color: #000000;
    --text-color: #ffffff;
    --header-bg: #edf2f4;
    --footer-bg: #111827;
  }

  body {
    background-color: white;
    color: var(--text-color);
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

   .header {
  background-color: var(--header-bg);
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

/* Navigation container */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Company name */
.company-name {
  font-family: 'Playfair Display', serif;
  background: linear-gradient(45deg, var(--primary-color), #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
}

/* Navigation links (for desktop) */
.nav-links {
  display: flex;
  align-items: center;
}

.nav-link {
  color: #343a40;
  text-decoration: none;
  margin-left: 2rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Hamburger menu button (hidden by default) */
.hamburger {
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  display: none; /* Hidden on larger screens */
  color: #343a40;
}

/* Responsive styling for mobile view */
@media screen and (max-width: 768px) {
  .hamburger {
    display: block; /* Show hamburger in mobile view */
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--header-bg);
    flex-direction: column;
    align-items: center;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.3s ease, opacity 0.3s ease;
    z-index: 999;
  }

  .nav-links.open {
    transform: translateY(0); /* Slide down when open */
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    margin-left: 0 !important;
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
}


  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6rem 2rem 2rem;
    // text-align: center;
  }

  .page-content {
    max-width: 800px;
  }

  .home-text-and-image {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.home-text-content {
  width:60%;
  margin-right: 60px;
}

.home-image {
  max-width: 600px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

  .page h1 {
    font-size: 4.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
    font-family: 'Playfair Display', serif;
  }

  .home_view{
  min-height:80vh;
  }

  .page p {
    font-size: 1.1rem;
    line-height: 1.6;
    color:black;
  }

 .home-page {
    min-height: 100vh; 
    // background: linear-gradient(135deg, #000000, #1a1a1a);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    padding-top: 0 !important;
  }

  .home-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:white;
    // background: url('https://source.unsplash.com/random/1920x1080?technology') no-repeat center center;
    background-size: cover;
    opacity: 0.2;
    z-index: 1;
  }

  .feature_head_title{
  color:var(--primary-color);
  font-size:3.5rem;
  text-align:center;
  }

  .home-company-name {
    font-family: 'Playfair Display', serif;
    font-size: 7.5rem;
    background: linear-gradient(45deg, var(--primary-color), #60a5fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .home-tagline {
    font-size: 1.5rem !important;
    color: #212529 !important;
    max-width: 800px;
    margin: 0 auto 2rem;
    font-weight:bold;
    // text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  .home-description {
    font-size: 1.2rem;
    color: #e0e0e0;
    max-width: 800px;
    margin: 0 auto 3rem;
    line-height: 1.6;
  }
   .cta-container {
    display: flex;
    // justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .cta-button {
    display: inline-block;
    background-color: var(--primary-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    background-color: var(--secondary-color);
  }
  .cta-button.secondary {
    background-color: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
  }

  .cta-button.secondary:hover {
    background-color: var(--primary-color);
    color: white;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    padding:0 !important;
  }

 .feature-card {
  background: #e2fdff !important;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08); /* Drop shadow */
}

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
    border:2px solid white;
  }

  .feature-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .icon1{
  background-color:#ffd60a !important; 
  }

  .icon2{
  background-color:#fe7f2d !important; 
  }

  .icon3{
    background-color:#7ae582 !important; 
  }
  .icon4{
    background-color:#8367c7 !important; 
  }

  .feature-description {
    font-size: 0.9rem;
    color: #b0b0b0 !important;
    margin-top:0 !important;
  }
    
  .tech-carousel-title {
  text-align: center;
  margin-top: 50px;
  font-size: 2rem;
  color:var(--primary-color);
  margin-bottom: 3rem;
  margin-top: 5rem;
}

.tech-carousel {
  margin: 20px auto;
  width: 90%;
}

.tech-logo {
  max-width: 100px;
  height: auto;
  margin: 0 auto;
  filter: grayscale(100%); /* Makes the logo grey */
  transition: filter 0.3s ease-in-out; /* Smooth transition on hover */
}

.tech-logo:hover {
  filter: grayscale(0%); /* Removes the grayscale on hover, revealing original color */
}

@media (max-width: 768px) {

.features-grid{
padding:0 !important;
}

.tech-carousel{
max-width:90%}
  .tech-logo {
    max-width: 80px;
  }
}


@media (max-width: 768px) {
  .home-company-name {
    font-size: 4rem;
  }
  .home-tagline {
    font-size: 1.4rem;
  }
  .home-description {
    font-size: 1rem;
  }
  
  /* Centering the buttons vertically */
    .cta-container {
      flex-direction: column;
      width:80%;
      justify-content: center;
      margin:auto;
    }

  /* Stack the text and image vertically */
  .home-text-and-image {
    flex-direction: column-reverse;
    text-align: center;
    align-items: center; /* Ensures both text and image are centered */
    justify-content: center;
  }

  /* Adjust text width and padding */
  .home-text-content {
    width: 90%;
    padding: 0 15px;
    margin-right:0 !important;
  }

  /* Center content and remove side padding */
  .home-content {
  max-width:100%;
    padding-left: 0;
    padding-right: 0;
    margin: auto;
    text-align: center;
  }

  /* Ensure the image is centered */
  .home-image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px; /* Adds space below the image */
  }

  .home-image {
    max-width: 300px; /* Adjust the size of the image for mobile */
    width: 100%;
    height: auto;
  }
  
  /* Feature grid adjusts to a single column on mobile */
  .features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center; /* Center-align text for features */
  }
}

.client_carousel_section {
  margin: 50px 0; /* Adjust spacing as needed */
  text-align: center; /* Center the title */
}

.client_carousel_title {
  font-size: 3rem; /* Title size */
  margin-bottom: 50px; /* Space below title */
  color:var(--primary-color);
}

.client_carousel {

  margin: 0 auto; /* Center the carousel */
  width: 100%; /* Carousel width */
}

.client_logo {
  max-width: 200px; /* Limit logo width */
  height: auto; /* Maintain aspect ratio */
  display: block; 
  margin: auto; /* Center the logos horizontally */
  
}

/* Centering SwiperSlide */
.swiper-slide {
  display: flex; /* Use flexbox for vertical centering */
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
  height: auto; 
}

/* Mobile View */
@media (max-width: 768px) {
  .client_logo {
    max-width: 120px; 
  }
}






  .contact-link {
    display: flex;
    align-items: center;
    color: var(--primary-color);
    text-decoration: none;
    margin: 1rem 0;
    transition: transform 0.3s ease;
  }

  .contact-link:hover {
    transform: translateY(-2px);
  }

  .contact-link svg {
    margin-right: 0.5rem;
  }

  .footer {
    background-color: var(--footer-bg);
    padding: 1rem;
    text-align: center;
    margin-top: auto;
  }

  @media (max-width: 768px) {
    .header {
      padding: 1rem;
    }
    .company-name {
      font-size: 1.5rem;
      padding-right:50px;
    }
    .nav-link {
      font-size: 0.8rem;
      margin-left: 1rem ;
    }
    .page h1 {
      font-size: 3.5rem;
    }
    .page p {
      font-size: 1rem;
    }
    .home-company-name {
      font-size: 4rem;
    }
    .home-tagline {
      font-size: 1.3rem !important;
    }
  }

.profile_cards_section {
  margin: 150px 0; /* Adjust margin as needed */
  text-align: center; /* Center the title */
}

.profile_cards_container {
  display: flex; /* Flexbox for responsive layout */
  flex-wrap: wrap; /* Allow wrapping */
  justify-content: center; /* Center the cards */
  margin-top:100px;
}

.profile_card {
  width: 300px; /* Set a fixed width for the card */
  margin: 20px; /* Space between cards */
  border: 1px solid #ccc; /* Border for the card */
  border-radius: 15px; /* Rounded corners */
  padding: 30px 20px 20px; /* Top padding for the image */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  position: relative; /* Position relative for the image */
  overflow: visible; /* Allow overflow to show the image outside */
}

.profile_image_container {
  width: 125px; /* Width of the image container */
  height: 125px; /* Height of the image container */
  position: absolute; /* Position absolute for floating effect */
  top: -20%; /* Move the image up to be half inside and half outside */
  left: calc(45% - 50px); /* Center the image horizontally */
  overflow: hidden; /* Hide overflow */
  border-radius: 50%; /* Make it circular */
  border: 5px solid white; /* White border */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Shadow for the image */
}

.profile_image {
  width: 200%; /* Full width of the container */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Display block */
  position: relative; /* Relative positioning */
  left: -25%; 
  
}

.profile_info {
  margin-top: 60px; /* Space below the image */
}

.profile_name {
  font-size: 1.5rem; /* Name font size */
  font-weight: bold; /* Bold font */
  color:var(--primary-color);
}

.profile_description {
  font-size: 1rem; /* Description font size */
  color: #666; /* Description color */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .profile_card {
    width: 90%; /* Reduce width on mobile */
  }
}


  .about-page {
  color: #ffffff;
  padding: 4rem 0 0 0;
  width: 100%;
}

.about-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  min-height: 90vh;
  width:100%
}

.about-text {
  flex: 1;
  margin-right: 20px;
  margin-left: 5%;
}

.about-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.about-description {
  font-size: 18px;
  line-height: 1.6;
  color:#6c757d;
}

.about-gif {
  flex: 1;
  display: flex;
  justify-content: center;
}

.gif {
  max-width: 100%;
  height: auto;
}

.about-content {
  // max-width: 1200px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-title {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.about-subtitle {
  font-size: 1.5rem;
  color: #b0b0b0;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 3rem;
}



/* Timeline Section */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline_maintitle{
color:#343a40 !important;
text-align:center;
font-size: 5rem;
margin:60px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 4px;
  height: 100%;
  background: var(--primary-color);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-bottom: 2rem;
  width: calc(50% - 40px);
  box-sizing: border-box;
}

.timeline-item::before {
  content: '';
  position: absolute;
  top: 50%;
  right: -14%;
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border-radius: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.timeline-item::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -13%;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.timeline-item:nth-child(even) {
  margin-left: calc(50% + 40px);
}

.timeline-item:nth-child(even)::before {
  left: -14%;
  right: auto;
}

.timeline-item:nth-child(even)::after {
  left: -13%;
  right: auto;
}

.timeline-date {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: var(--primary-color);
}

.timeline-description {
  font-size: 0.9rem;
  line-height: 1.4;
  color:black;
}

/* Feature Cards Section */
.features-grid {
  display: flex; /* Changed from grid to flex */
  flex-wrap: wrap; /* Allow wrapping of cards */
  justify-content: center; /* Center the cards */
  gap: 2rem; 
  padding: 1rem 4rem;
}

.feature-card {
margin-top:40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2.5rem 1.5rem 1.5rem; /* Added top padding to make space for the icon */
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  width: calc(34% - 2rem); /* Set width of each card */
  box-sizing: border-box; /* Include padding and border in element's total width and height */
}

.about_sec_title{
text-align:center;
color:#212529 !important;
font-size: 3rem;
margin:60px 0 30px 0;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  font-size: 1rem;
  border-radius: 50%;
  color: #fff;
  padding: 1.3rem;
  width: 40px;
  height: 40px;
  position: absolute;
  top: -35px; /* Adjusted to make sure the icon is placed correctly */
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-color); 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.feature-title {
  margin-top: 30px; /* Reduced margin to ensure proper spacing */
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--primary-color);
}

.feature-description {
  font-size: 0.9rem;
  color: #b0b0b0;
}

/* Make sure the layout adjusts on smaller screens */
@media (max-width: 768px) {

.about-page{
  max-width:80%;
}
  .feature-card {
    width: calc(50% - 1rem); /* Each card takes half the width on smaller screens */
  }

  .feature-icon {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }

  .feature-title {
    font-size: 1rem;
  }

  .feature-description {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .feature-card {
    width: 100%; /* Full width for small mobile devices */
    margin-bottom: 2rem;
  }
    .feature-icon {
    width:35px;
    height:35px;
    }
}

.innovation-section {
  display: flex; /* Use flexbox for layout */
  align-items: flex-start; /* Align items at the top */
  gap: 2rem; /* Space between gif and text */
  background-color: rgba(255, 255, 255, 0.1); /* Optional background */
  border-radius: 10px; /* Rounded corners */
  margin-top: 3rem; /* Margin above the section */
  transition: all 0.3s ease; /* Smooth transition */
}

.motion-content {
  display: flex; /* Flexbox layout for content */
  flex-direction: row; /* Align items in a row */
  width: 100%; /* Full width */
  background-color: #edf2f4;
  padding:2rem 0;
}

.motion-gif {
  flex: 0 0 40%; /* Fixed width for the GIF on larger screens */
  max-width: 40%; /* Ensure responsive */
  height: auto; /* Maintain aspect ratio */
}

.motion-text {
  flex: 1; /* Take remaining space */
}

.motion-heading {
  font-size: 1.5rem; /* Heading font size */
  font-weight: bold; /* Bold font */
  color: var(--primary-color); /* Use your primary color */
  margin-bottom: 1rem; /* Space below heading */
}

.motion-paragraph {
  font-size: 1rem; /* Paragraph font size */
  color: #b0b0b0; /* Text color */
  line-height: 1.5; /* Line height for readability */
}

/* Responsive styles */
@media (max-width: 768px) {
  .innovation-section {
    flex-direction: column !important; 
    align-items: flex-start; /* Align items to the start */
  }

  .motion-content {
    display: flex;
    flex-direction: column; /* Ensure content is stacked vertically */
    width: 100%; /* Full width for mobile */
  }

  .motion-gif {
    width: 100%; /* Set GIF to take full width */
    max-width: 300px; /* Optionally set a max width to prevent it from getting too big */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 1rem; /* Space below the GIF */
  }

  .motion-heading {
    font-size: 1.25rem; /* Reduce heading size */
  }

  .motion-paragraph {
    font-size: 0.9rem; /* Reduce paragraph size */
  }
}


@media (max-width: 480px) {
  .motion-heading {
    font-size: 1.1rem; /* Further reduce heading size */
  }

  .motion-paragraph {
    font-size: 0.85rem; /* Further reduce paragraph size */
  }
}


@media (max-width: 768px) {
.about-header-container{
flex-direction: column-reverse;
}
.about-text{
  text-align: center;
  padding:20px;}
  .timeline::before {
    left: 0;
  }

  .timeline-item {
    width: 100%;
    margin-left: 0;
  }

  .timeline_maintitle{
  font-size: 3rem;
  }

  .timeline-item:nth-child(even) {
    margin-left: 0;
  }

  .timeline-item::before, .timeline-item::after {
    left: -14%;
    right: auto;
  }

  .timeline-item:nth-child(even)::before {
  left: -9%;}
}



.contact-page {
  /* background: linear-gradient(135deg, #1a1a1a, #2a2a2a); */
  color: black;
  padding: 4rem 6rem;
  min-height: 100vh;
}

.contact-content {
  // max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap; /* To ensure responsiveness */
}

.contact-header {
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
}

.contact-title {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.contact-subtitle {
  font-size: 1.5rem;
  color: #b0b0b0;
}

.contact-form,
.contact-info {
  flex: 1; /* Flex 1 ensures that both the form and info sections take equal space */
  max-width: 50%;
}

.info-item span{
font-size:1.5rem !important;}


.contact-form {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  min-width:600px !important;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
  font-size:1.3rem;
}

.form-input,
.form-textarea {
  width: 95%;
  padding: 0.9rem;
  border: 2px solid #c0c0c0 !important;
  background: rgba(255, 255, 255, 0.05);
  color: black;
  border-radius: 5px;
  font-size: 1rem;
}

.info-item span{
font-size:1.3rem;}

.form-input,{
border:1px solid black;
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-button {
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-button:hover {
  background-color: var(--secondary-color);
}

.submit-button svg {
  margin-left: 0.5rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top:3rem;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.info-item svg {
  margin-right: 1rem;
  color: var(--primary-color);
}

.location-link {
  color: var(--primary-color);
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s ease;
}

.location-link:hover {
  color: var(--secondary-color);
}

.social-links {
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-left:2rem;
}

.social-link {
  color: var(--primary-color);
  margin-right: 1rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: var(--secondary-color);
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
  }

  .contact-page{
  padding: 4rem 0;}

  .contact-title {
    font-size: 2.5rem;
  }

  .contact-subtitle {
    font-size: 1.2rem;
  }

  .contact-form,
  .contact-info {
    max-width: 100%; /* Take full width in smaller screens */
  }

  .contact-form{
  min-width:250px !important;}
  }

  .contact-info{
  align-items:center;
  padding:0 30px;
  }
}


.services_grid {
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: space-around;
  gap: 2rem;
  padding: 2rem;
  overflow: visible; /* Ensure content outside the cards is visible */
}

.service-card {
  position: relative;
  flex: 1 1 280px;
  max-width: 300px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: visible; /* Make sure the icon outside the card is visible */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 65%;
  margin: 2rem 0 2rem 0;
  max-height: 500px;
}

.service-icon {
  font-size: 3rem;
  background-color: var(--primary-color); /* Blue color for the circle */
  color: white; /* White icon */
  border-radius: 50%; /* Makes the icon container circular */
  padding: 1.8rem;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -50px; /* Moves half of the circle outside the card */
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  border:5px solid white !important;  
 box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 4px 3px rgba(0, 0, 0, 0.08);

}

.service-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
  margin-top:3.5rem;
  color: black;
}

.service-description {
  font-size: 1rem;
  color: #b0b0b0;
  position: relative;
  z-index: 2;
  flex-grow: 1; /* Allows the description to grow and fill available space */
}

.service_img {
  height: 300px;
  object-fit: cover; /* Ensures images maintain aspect ratio and cover the space */
}

.services-title, .services-subtitle{
text-align:center;
}

.services-title{
margin-top:1rem;
}

.services-subtitle{
margin-bottom: 2.5rem !important;
}

.service-content{
margin-top:100px}

@media (max-width: 768px) {

.services_grid{
margin-bottom:100px;
}
  .services-title {
    font-size: 2.5rem;
  }
  .services-subtitle {
    font-size: 1.2rem;
  }
  .service-card {
    padding: 1.5rem;
    height:65%;
    margin-top:5rem;
  }

  .service-icon {
    width:30px;
    height:30px;
    padding:1.6rem;
  }

  .service_img {
    height: 200px;
  }
}





.portfolio-page {
    display: flex; /* Enable flexbox layout */
    height: 100vh; /* Full height for viewport */
    padding-top: 50px !important;
}

.main_portfolio{
display: flex; 
}
.portfolio-content {
    flex: 1; /* Take the remaining space */
    display: flex;
    flex-direction: column; /* Align items vertically */
    justify-content: center; /* Center items vertically */
    padding: 2rem; /* Add padding for aesthetics */
    position: relative;
    padding-top: 0;
} 

.portfolio-image {
    width: 50%; /* Take half of the width */
    display: flex;
    justify-content: center; /* Center the image horizontally */
    align-items: center; /* Center the image vertically */
}

.portfolio-image img {
    max-width: 80%; /* Responsive image */
    height: auto; /* Maintain aspect ratio */
}

.portfolio-header {
    text-align: center;
    margin-bottom: 2rem;
}

.portfolio-title {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
    margin-top:0 !important; 
}

.portfolio-subtitle {
    font-size: 1.5rem;
    color: #b0b0b0;
}

.portfolio_time-item { /* renamed class */
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 15px;
    max-width: 600px;
    text-align: center;
    position: relative;
}

.portfolio_time-date { /* renamed class */
    font-size: 1.6rem;
    color: black;
    margin-top: 2rem;
    font-weight:bold;
}

.portfolio_time-title { /* renamed class */
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: var(--primary-color);
    margin-top: 0.5rem !important;
}

.portfolio_time-description { /* renamed class */
    font-size: 1.1rem;
    color: #b0b0b0;
    line-height: 1.6;
}

.portfolio_time-icon { /* renamed class */
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    background: var(--primary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.scroll-indicator {
    position: absolute; /* Position it absolutely within the content area */
    bottom: 0.1rem; 
    left: 45%; /* Center horizontally */
    transform: translateX(-50%); /* Adjust to truly center it */
    font-size: 1rem; /* Font size */
    color: var(--primary-color); /* Color of text */
    display: flex;
    flex-direction: column; /* Align text and icon vertically */
    align-items: center; /* Center contents */
}

.scroll-indicator svg {
    margin-top: 0.5rem;
    animation: bounce 1s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

@media (max-width: 768px) {

.scroll-indicator{
left:45%
}

.main_portfolio{
flex-direction: column;
}

.portfolio-image{
width:100%;
margin-top:12rem;
}

.portfolio-image img{
width: 100%;
}

.portfolio-content{
  padding: 0;
}

.portfolio-content{
padding:0
}
    .portfolio-title {
        font-size: 2.5rem;
    }
    .portfolio-subtitle {
        font-size: 1.2rem;
    }
    .portfolio_time-title {
        font-size: 1.5rem;
    }
    .portfolio_time-description {
        font-size: 1rem;
    }
}

.contact_section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  color:black !important;
}

.contact_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 2rem;
}

.contact_text {
  flex: 1;
  padding-right: 2rem;
}

.contact_heading {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.contact_description {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.contact_button {
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.contact_button:hover {
  background-color: var(--secondary-color);
}

.contact_image_container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.contact_image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.contact_image img{
max-width:90%}

@media (max-width: 768px) {
  .contact_content {
    flex-direction: column;
    text-align: center;
  }

  .contact_text {
    padding-right: 0;
  }

  .contact_image_container {
    margin-bottom: 2rem;
  }
}

`;


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        {/* Hamburger icon on the left (visible only in mobile view) */}
        <button className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </button>

        {/* Company name on the right */}
        <Link to="/" className="company-name">
          Zodiactech
        </Link>

        {/* Navigation links (hidden in mobile view, visible on larger screens) */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>
    </header>
  );
};




const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 Innovate. All rights reserved.</p>
  </footer>
);

const ProfileCards = () => (
  <div className="profile_cards_section">
    <h3 className="client_carousel_title">Meet Our Team</h3>
    <div className="profile_cards_container">
      <div className="profile_card">
        <div className="profile_image_container">
          <img src="/images/Picture1.png" alt="Profile 1" className="profile_image" />
        </div>
        <div className="profile_info">
          <div className="profile_name">John Doe</div>
          <p className="profile_description">Lead Developer - Expert in JavaScript and React.js. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tempore vero quas, maxime provident ducimus voluptas atque dolor. Dolores, doloribus!</p>
        </div>
      </div>
      <div className="profile_card">
        <div className="profile_image_container">
          <img src="/images/profile2.jpg" alt="Profile 2" className="profile_image" />
        </div>
        <div className="profile_info">
          <div className="profile_name">Jane Smith</div>
          <p className="profile_description">UI/UX Designer - Creating intuitive user experiences. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quia nihil itaque mollitia debitis quos sit fugit excepturi fuga nulla.</p>
        </div>
      </div>
      <div className="profile_card">
        <div className="profile_image_container">
          <img src="/images/profile3.jpg" alt="Profile 3" className="profile_image" />
        </div>
        <div className="profile_info">
          <div className="profile_name">Alice Johnson</div>
          <p className="profile_description">Project Manager - Ensuring timely delivery and quality. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam recusandae quasi quod tempora animi nemo aliquid rem nesciunt cupiditate culpa!</p>
        </div>
      </div>
      {/* Add more profile cards as needed */}
    </div>
  </div>
);


const HomePage = () => (
  <div className="page home-page">
    <div className="home-bg"></div>
    <div className="home-content">
      <div className="home_view">
        <div className="home-text-and-image">
          {/* Left side: Text content */}
          <div className="home-text-content">
            <motion.h1
              className="home-company-name"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              Zodiactech
            </motion.h1>
            <motion.p
              className="home-tagline"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              Transforming ideas into digital reality
            </motion.p>
            <motion.p
              className="home-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              At Innovate, we blend creativity with cutting-edge technology to deliver exceptional digital solutions. Our team of experts is passionate about turning your vision into a powerful, user-friendly reality that drives your business forward.
            </motion.p>
            <motion.div
              className="cta-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.1 }}
            >
              <Link to="/contact" className="cta-button">Get Started</Link>
              <Link to="/portfolio" className="cta-button secondary">View Our Work</Link>
            </motion.div>
          </div>

          {/* Right side: Image */}
          <motion.div
            className="home-image-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.1 }}
          >
            <img src="/images/img2.png" alt="Zodiactech Logo" className="home-image" />
          </motion.div>
        </div>
      </div>

      <h3 className="feature_head_title">Services</h3>

      <motion.div
        className="features-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.4 }}
      >
        <div className="feature-card">
          <h3 className="feature-title">Cutting-edge Development</h3>
          <img src="/images/consulting.gif" alt="Cutting-edge Development" className="service_img" />
          <p className="feature-description">We use the latest technologies to build robust and scalable solutions.</p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Stunning Design</h3>
          <img src="/images/management.gif" alt="Stunning Design" className="service_img" />
          <p className="feature-description">Our designs are not just beautiful, they're intuitive and user-focused.</p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Lightning-Fast Performance</h3>
          <img src="/images/software.gif" alt="Lightning-Fast Performance" className="service_img" />
          <p className="feature-description">We optimize every aspect to ensure your digital presence is blazingly fast.</p>
        </div>
      </motion.div>

      {/* Infinite carousel of technology logos */}
      <h3 className="tech-carousel-title">Technologies We Use</h3>
      <Swiper
  spaceBetween={20}
  slidesPerView={5} // Default for larger screens
  loop={true}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  modules={[Autoplay]}
  breakpoints={{
    320: { // For mobile screens (320px and above)
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: { // For tablets (768px and above)
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: { // For desktops (1024px and above)
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1440: { // For larger desktops (1440px and above)
      slidesPerView: 5,
      spaceBetween: 20,
    },
  }}
  className="tech-carousel"
>

        <SwiperSlide><img src="/images/nodejs.png" alt="Node.js" className="tech-logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/react.png" alt="React.js" className="tech-logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/html.png" alt="HTML" className="tech-logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/css.png" alt="CSS" className="tech-logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/js.png" alt="JavaScript" className="tech-logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/python.png" alt="Python" className="tech-logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/nextjs.png" alt="Next.js" className="tech-logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/typescript.png" alt="TypeScript" className="tech-logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/tailwind.png" alt="Tailwind CSS" className="tech-logo" /></SwiperSlide>
        <SwiperSlide><img src="/images/angular.png" alt="Angular" className="tech-logo" /></SwiperSlide>
      </Swiper>

      <motion.div
  className="contact_section"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, delay: 1.6 }}
>
  <div className="contact_content">
    {/* Left Side: Text Content */}
    <div className="contact_text">
      <h2 className="contact_heading">Have a Project in Mind?</h2>
      <p className="contact_description">
        Get in touch with Zodiactech to turn your ideas into reality. Our team is dedicated to providing innovative solutions tailored to your business needs. Experience the difference with our expertise and commitment to quality.
      </p>
      <Link to="/contact" className="contact_button">Contact Us</Link>
    </div>

    {/* Right Side: Image */}
    <motion.div className="contact_image_container">
      <img src="/images/idea.png" alt="Get in Touch" className="contact_image" />
    </motion.div>
  </div>
</motion.div>

<motion.div
  className="client_carousel_section"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, delay: 1.8 }}
>
  <h3 className="client_carousel_title">Our Clients</h3>
  <Swiper
  spaceBetween={20}
  slidesPerView={4} // Default for larger screens
  loop={true}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  modules={[Autoplay]}
  breakpoints={{
    320: { // For mobile screens (320px and above)
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: { // For tablets (768px and above)
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: { // For desktops (1024px and above)
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }}
  className="client_carousel"
>

    <SwiperSlide><img src="/images/Picture1.png" alt="Client 1" className="client_logo" /></SwiperSlide>
    <SwiperSlide><img src="/images/Picture2.png" alt="Client 2" className="client_logo" /></SwiperSlide>
    <SwiperSlide><img src="/images/Picture5.png" alt="Client 3" className="client_logo" /></SwiperSlide>
    <SwiperSlide><img src="/images/Picture4.png" alt="Client 4" className="client_logo" /></SwiperSlide>
    <SwiperSlide><img src="/images/Picture6.png" alt="Client 5" className="client_logo" /></SwiperSlide>
    <SwiperSlide><img src="/images/Picture7.png" alt="Client 5" className="client_logo" /></SwiperSlide>
    {/* Add more clients as needed */}
  </Swiper>
</motion.div>
<ProfileCards />


    </div>
  </div>
);




const AboutPage = () => (
  <div className="about-page">
    <div className="about-content">
      {/* Section with GIF on the right and text on the left */}
      <div className="about-header-container">
        <div className="about-text">
          <motion.h1
            className="about-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Zodiactech
          </motion.h1>
          <motion.p
            className="about-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Zodiactech Software and IT Services Pvt Ltd, based in Pathanpura, Chandrapur, is a beacon of innovation in the digital landscape. Since our inception in February 2017, we've been on a relentless pursuit of excellence, crafting digital solutions that not only meet but exceed our clients' expectations. Our journey is marked by a commitment to quality, customer-centricity, and cutting-edge technology.
          </motion.p>
        </div>
        <motion.div
          className="about-gif"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Add the GIF here */}
          <img
            src="/images/management.gif"
            alt="Zodiactech Innovation"
            className="gif"
          />
        </motion.div>
      </div>

      {/* Timeline section */}
      <h2 className="timeline_maintitle">Our Timeline</h2>
      <motion.div
        className="timeline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="timeline-item timeline-left">
          <div className="timeline-content">
            <div className="timeline-date">February 2017</div>
            <div className="timeline-title">The Beginning of a Digital Revolution</div>
            <div className="timeline-description">Zodiactech was founded with a vision to transform the IT landscape in Chandrapur and beyond.</div>
          </div>
        </div>

        <div className="timeline-item timeline-right">
          <div className="timeline-content">
            <div className="timeline-date">2019</div>
            <div className="timeline-title">Expanding Horizons</div>
            <div className="timeline-description">We broadened our service portfolio, venturing into cutting-edge technologies and expanding our client base.</div>
          </div>
        </div>

        <div className="timeline-item timeline-left">
          <div className="timeline-content">
            <div className="timeline-date">2021</div>
            <div className="timeline-title">Recognition and Growth</div>
            <div className="timeline-description">Earned the JD Verified and JD Pay stamps, validating our commitment to excellence and customer satisfaction.</div>
          </div>
        </div>

        <div className="timeline-item timeline-right">
          <div className="timeline-content">
            <div className="timeline-date">Today</div>
            <div className="timeline-title">Shaping the Future</div>
            <div className="timeline-description">Continuing to innovate and lead in software development and IT services, setting new industry standards.</div>
          </div>
        </div>
      </motion.div>

  <motion.h1
    className="about_sec_title"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Our Core Values
  </motion.h1>
      <motion.div 
        className="features-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
      <div className="feature-card">
          <Users className="feature-icon icon1" />
          <h3 className="feature-title">Customer-Centric Approach</h3>
          <p className="feature-description">Building long-term relationships through exceptional service and support.</p>
        </div>
        <div className="feature-card">
          <Award className="feature-icon icon2" />
          <h3 className="feature-title">Quality Assurance</h3>
          <p className="feature-description">Committed to delivering top-notch products and services that exceed expectations.</p>
        </div>
        <div className="feature-card">
          <Target className="feature-icon icon3" />
          <h3 className="feature-title">Innovative Solutions</h3>
          <p className="feature-description">Crafting bespoke software and IT solutions tailored to unique business needs.</p>
        </div>
        <div className="feature-card">
          <Zap className="feature-icon icon4" />
          <h3 className="feature-title">Cutting-Edge Technology</h3>
          <p className="feature-description">Leveraging the latest tech to keep our clients ahead of the curve.</p>
        </div>
        </motion.div>

        <motion.div
      className="innovation-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="motion-content">
        <img src="\images\chart.gif" alt="Innovation GIF" className="motion-gif" />
        <div className="motion-text">
          <h2 className="motion-heading">Innovating for the Future</h2>
          <p className="motion-paragraph">
            Located at Jai Bhavan, Samadhi Ward, Pathanpura Road, Zodiactech has become synonymous with digital innovation in Chandrapur. Our presence on India's leading B2B marketplace, JD Mart, showcases our commitment to reaching a wider audience and facilitating seamless business interactions for enterprises of all sizes.
            <br /><br />
            At Zodiactech, we don't just build software; we craft digital experiences that drive businesses forward. Join us in our journey to reshape the digital landscape, one innovation at a time.
          </p>
        </div>
      </div>
    </motion.div>
    </div>
  </div>
);



const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="service-card"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="service-icon" size={48} />
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </motion.div>
);

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "It is the process of designing, creating, testing, and maintaining computer programs and applications."
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "It includes creating, maintaining the website which enhances user experience...."
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Digital marketing uses online platforms to attract and retain customers through targeted campaigns."
    },
    {
      icon: Target,
      title: "SEO (Search Engine Optimization)",
      description: "SEO, or search engine optimization, is the process of improving website visibility on search engines."
    },
    {
      icon: Smartphone,
      title: "Mobile App Creation",
      description: "Develop cutting-edge mobile applications for iOS and Android platforms."
    },
    {
      icon: Megaphone,
      title: "Windows App Development",
      description: "Web app development builds applications accessible through web browsers, focusing on performance and user experience."
    },
    
    {
      icon: Mic,
      title: "Podcast Production",
      description: "Create engaging audio content with our professional podcast production services."
    },
    {
      icon: Film,
      title: "Film Production",
      description: "Bring your stories to life with our expert film production team."
    },
    {
      icon: Video,
      title: "Livestream Services",
      description: "Connect with your audience in real-time through high-quality livestreaming."
    },
 
    {
      icon: Globe,
      title: "Web Development",
      description: "Build responsive and user-friendly websites that drive your business forward."
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Boost your online presence with our comprehensive digital marketing strategies."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create intuitive and visually appealing user interfaces for seamless user experiences."
    },
   
  ];

  return (
    <div className="page services-page">
      <div className="services-content ">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">Empowering Your Digital Journey</p>
        </motion.div>

        <motion.div 
  className='services_grid'
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }} // Apply flex here
>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}; 

const portfolioData = [
  {
    date: "February 2017",
    title: "Company Founded",
    description: "Zodiactech Software and IT Services Pvt Ltd was established in Pathanpura, Chandrapur, with a vision to transform the local IT landscape.",
    icon: Calendar
  },
  {
    date: "2018",
    title: "First Major Project",
    description: "Successfully completed our first large-scale software development project, marking a significant milestone in our growth journey.",
    icon: Briefcase
  },
  {
    date: "2019",
    title: "Expansion of Services",
    description: "Broadened our horizons by introducing cutting-edge mobile app development and digital marketing services to meet evolving client needs.",
    icon: Zap
  },
  {
    date: "2020",
    title: "Team Growth",
    description: "Doubled our talented team to keep pace with increasing demand, bringing fresh perspectives and expanded capabilities to our projects.",
    icon: Users
  },
  {
    date: "2021",
    title: "JD Verified Status",
    description: "Earned the prestigious JD Verified and JD Pay stamps, a testament to our unwavering commitment to excellence and customer satisfaction.",
    icon: Award
  },
  {
    date: "2023",
    title: "Global Reach",
    description: "Expanded our client base internationally, showcasing our expertise on a global stage and bringing innovative solutions to businesses worldwide.",
    icon: Globe
  }
];
// Ensure you import your icons correctly


const PortfolioPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);
  const scrollTimeout = useRef(null);

  const handleScroll = useCallback((e) => {
    e.preventDefault();
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      if (e.deltaY > 0 && currentIndex < portfolioData.length - 1) {
        setDirection(1);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setDirection(-1);
        setCurrentIndex(prevIndex => prevIndex - 1);
      }
    }, 200);
  }, [currentIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, [handleScroll]);

  const currentItem = portfolioData[currentIndex];
  const Icon = currentItem.icon;

  return (
    <div className="page portfolio-page" ref={containerRef}>
      <div className='main_portfolio'>
      <div className="portfolio-image">
        <img src="/images/tech.gif" alt="Portfolio" /> {/* Replace with your image path */}
      </div>
      <div className="portfolio-content">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="portfolio-title">Our Journey</h1>
          <p className="portfolio-subtitle">Scroll to explore Zodiactech's milestones</p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="portfolio_time-item" // renamed class
            initial={{ opacity: 0, y: direction > 0 ? 50 : -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction > 0 ? -50 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="portfolio_time-icon"> {/* renamed class */}
              <Icon size={30} color="#ffffff" />
            </div>
            <div className="portfolio_time-date">{currentItem.date}</div> {/* renamed class */}
            <h3 className="portfolio_time-title">{currentItem.title}</h3> {/* renamed class */}
            <p className="portfolio_time-description">{currentItem.description}</p> {/* renamed class */}
          </motion.div>
        </AnimatePresence>

        <div className="scroll-indicator">
          {currentIndex < portfolioData.length - 1 ? "Scroll to explore" : "You've reached the end"}
          {currentIndex < portfolioData.length - 1 && (
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          )}
        </div>
      </div>
      </div>

      
    </div>
  );
};


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const openInMaps = () => {
    const address = "Jai Bhavan, Samadhi Ward, Pathanpura Road, Chandrapur";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="page contact-page">
      <div className="contact-content">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">We'd love to hear from you</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='contact_cont'
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="info-item">
            <Mail size={24} />
            <span>info@zodiactech.com</span>
          </div>
          <div className="info-item">
            <Phone size={24} />
            <span>+1 (234) 567-890</span>
          </div>
          <div className="info-item">
            <MapPin size={40} />
            <span className="location-link" onClick={openInMaps}>
              Jai Bhavan, Samadhi Ward, Pathanpura Road, Chandrapur
            </span>
          </div>

          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={35} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Twitter size={35} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Facebook size={35} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <HomePage />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <AboutPage />
          </motion.div>
        } />
        <Route path="/services" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ServicesPage />
          </motion.div>
        } />
        <Route path="/portfolio" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <PortfolioPage />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ContactPage />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const RefinedMultiPagePortfolio = () => {
  return (
    <Router>
      <style>{styles}</style>
      <div className="portfolio-container">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default RefinedMultiPagePortfolio;