BESTIE BIRTHDAY SURPRISE
==========================

Recipient: Ayesha
From: Faizan Khokhar

PROJECT FILES
-------------
index.html
style.css
script.js
README.txt
assets/
  photo1.jpeg
  photo2.jpeg
  photo3.jpeg
  photo4.jpeg
  photo5.jpeg
  photo6.jpeg

PHOTO SETUP
-----------
The website expects these exact relative paths:

./assets/photo1.jpeg
./assets/photo2.jpeg
./assets/photo3.jpeg
./assets/photo4.jpeg
./assets/photo5.jpeg
./assets/photo6.jpeg

Replace the included placeholder JPEG files with your own photos using the
same filenames. The website also has a graceful fallback if an image is
missing or cannot be loaded.

IMPORTANT
---------
The layout and functionality use HTML5, CSS3 and vanilla JavaScript.
There is no backend, database, API, Node.js, PHP, React, or build process.

The stylesheet imports Google Fonts for premium typography. If the site is
used offline or without internet access, the browser will automatically use
the listed local fallback fonts.

GITHUB PAGES DEPLOYMENT
-----------------------
1. Create a new GitHub repository.
2. Upload index.html, style.css, script.js, README.txt, and the entire assets folder.
3. Make sure index.html is in the repository ROOT.
4. Open the repository on GitHub.
5. Go to Settings.
6. Select Pages.
7. Under "Build and deployment", choose "Deploy from a branch".
8. Select the main branch.
9. Select /(root) as the folder.
10. Click Save.
11. Wait for GitHub Pages to publish the site.
12. Open the generated website URL shown in the Pages settings.

DIRECTORY REQUIREMENT
---------------------
Your repository root must look like this:

index.html
style.css
script.js
README.txt
assets/
  photo1.jpeg
  photo2.jpeg
  photo3.jpeg
  photo4.jpeg
  photo5.jpeg
  photo6.jpeg

No build command is required.

LOCAL TESTING
-------------
You can double-click index.html to preview the project in a browser.
For the most reliable local behavior, you can also open the repository
through a simple static web server, but GitHub Pages does not require one.

FUNCTIONALITY
-------------
There are exactly six stages. The button changes the stage without
reloading the page or changing the URL. The progress dots, title, message,
photo and button state update for every stage. On stage 6, the button
changes to "Experience Again ↻" and returns the experience to stage 1.
