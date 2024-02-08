# NAF Fitness Store

## Overview

NAF Fitness is an online store that specializes in providing a wide range of fitness-related products, including apparel, supplements, and equipment. The unique feature of the store is its spin/loot crate system, where users can spin a wheel to win exciting discounts and rewards.

## GITHUB Link

https://github.com/lingmong-school/IP

## Compatibality

Works on different screens including mobile compatibility.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Pages](#pages)
   - [index.html](#indexhtml)
   - [apparel.html](#apparelhtml)
   - [NAF.html](#nafhtml)
   - [supps.html](#suppshtml)
   - [training.html](#traininghtml)
3. [Styles](#styles)
   - [style.css](#stylecss)
4. [Scripts](#scripts)
   - [api.js](#apijs)
   - [script.js](#scriptjs)
5. [Usage](#usage)
6. [Contact Form](#contact-form)
7. [License](#license)

## Project Structure

- **index.html:** Home page of the NAF Fitness store.
- **apparel.html:** Page showcasing fitness apparel available for purchase.
- **NAF.html:** Page featuring the spin/loot crate system with the prize wheel.
- **supps.html:** Page displaying various supplements offered by the store.
- **training.html:** Page allowing users to request training, with a contact form.

## Pages

### index.html

The main landing page of the NAF Fitness store, featuring navigation links to different sections such as equipment, supplements, apparel, and training.

### apparel.html

A page dedicated to showcasing fitness apparel products available for purchase. Each item includes an image, description, price, and an "Add to Cart" button.

### NAF.html

This page introduces the spin/loot crate system. Users can spin a wheel to win discounts and rewards. The page includes three different loot crate options, each with its own spin button.

### supps.html

A page displaying a variety of supplements offered by the store. Each supplement includes an image, description, price, and an "Add to Cart" button.

### training.html

This page encourages users to join the NAF Fitness community. It features an engaging GIF, a form to request training, and a contact form that sends data to the server using the [RESTDb](https://restdb.io/) API.

## Styles

### style.css

The main stylesheet for the project, providing a cohesive and visually appealing design across all pages.

## Scripts

## Contact Form

The contact form in the training.html page allows users to submit their name, email, and message. This information is sent to the server via the RESTDb API.

### api.js

This script handles the communication with the [RESTDb](https://restdb.io/) API for storing and retrieving contact information submitted through the training request form.

### script.js

This script controls the functionality of the spin wheel on the NAF.html page. When the user clicks the spin button, it generates a random degree of rotation and animates the wheel accordingly. After the animation, a congratulatory message is displayed.

## Usage

To use the NAF Fitness store:

1. Clone the repository.
2. Open the desired HTML file in a web browser.
3. Explore different sections, spin the wheel, and interact with the features.


