const fs = require('fs');
const path = require('path');

// Define the list of required images
const requiredImages = [
  {
    name: 'fitmonk-logo.png',
    type: 'Logo',
    description: 'Circular logo with monk lifting weights'
  },
  {
    name: 'fitness-workout.jpg',
    type: 'Hero Image',
    description: 'Person working out in the gym'
  },
  {
    name: 'fitness-app-mobile.jpg',
    type: 'App Screenshot',
    description: 'Fitness app on mobile device'
  },
  {
    name: 'user1.jpg',
    type: 'User Avatar',
    description: 'Testimonial user profile picture'
  },
  {
    name: 'user2.jpg',
    type: 'User Avatar',
    description: 'Testimonial user profile picture'
  },
  {
    name: 'user3.jpg',
    type: 'User Avatar',
    description: 'Testimonial user profile picture'
  }
];

// Path to the images directory
const imagesDir = path.join(__dirname, '../public/images');

console.log('FitMonk Image Status Check');
console.log('=========================');
console.log('');

// Check if the images directory exists
if (!fs.existsSync(imagesDir)) {
  console.error('❌ Images directory not found at:', imagesDir);
  console.log('Please create the directory: public/images/');
  process.exit(1);
}

// Check each required image
console.log('Required Images Status:');
console.log('----------------------');

let allImagesPresent = true;
let missingImages = [];

requiredImages.forEach(image => {
  const imagePath = path.join(imagesDir, image.name);
  
  if (fs.existsSync(imagePath)) {
    // Check if it's really an image file (at least not a text file)
    try {
      const content = fs.readFileSync(imagePath, 'utf8').substring(0, 20);
      if (content.includes('Binary image') || content.includes('This is a placeholder')) {
        console.log(`❌ ${image.name} (${image.type}): File exists but contains text, not image data`);
        missingImages.push(image);
        allImagesPresent = false;
      } else {
        // This is a binary file, likely an actual image
        console.log(`✅ ${image.name} (${image.type}): Present`);
      }
    } catch (e) {
      // If we can't read as UTF-8, it's probably a real image (binary file)
      console.log(`✅ ${image.name} (${image.type}): Present`);
    }
  } else {
    console.log(`❌ ${image.name} (${image.type}): Missing`);
    missingImages.push(image);
    allImagesPresent = false;
  }
});

console.log('');

if (allImagesPresent) {
  console.log('✅ All required images are present.');
} else {
  console.log('❌ Some required images are missing:');
  console.log('');
  
  // Instructions for missing images
  missingImages.forEach(image => {
    console.log(`${image.name}: ${image.description}`);
    console.log(`  - Save this image to: public/images/${image.name}`);
    console.log('');
  });
  
  console.log('To fix the logo specifically:');
  console.log('1. Save the monk logo image as "fitmonk-logo.png"');
  console.log('2. Place it in the public/images/ directory');
  console.log('3. It should be the circular gold logo with the monk lifting weights');
}

console.log('');
console.log('See public/images/IMAGES-README.md for more details about required images.'); 