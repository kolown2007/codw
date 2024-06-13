<script>
    import "../app.css";
  </script>
  <slot />



  <style>
    :global(body) {
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
  
    :global(canvas) {
      width: 100%;
      height: 100%;
      display: block;
      outline: none;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0); /* mobile webkit */
    }
  </style>