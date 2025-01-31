export default defineNuxtConfig({
  compatibilityDate:'2025-02-01',
  devtools:{enabled:true},
  devServer:{
    port:80
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: '/bootstrap/css/bootstrap.min.css' // Path to local Bootstrap CSS
        }
      ],
      script: [
        {
          src: '/bootstrap/js/bootstrap.bundle.min.js', // Path to local Bootstrap JS
          tagPosition: 'bodyClose' // Ensures the script is loaded at the end of the body
        }
      ]
    }
  },
});