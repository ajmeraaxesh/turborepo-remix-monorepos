/** @type {import('tailwindcss').Config} */

// getting all tailwind specific configuration from tailwing-config folder which is shared
// between UI library and specific apps. So only custom configuration must go in it
const config = require("tailwind-config/tailwind.config.js");

module.exports = config