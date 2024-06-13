<script>
let r = 10;

</script>


<svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg">

  <circle cx="20" cy="20" r="20" style="fill:red;">
    <animate
    attributeName="cx"
    begin="0s"
    dur="5s"
    from="50"
    to="90%"
    repeatCount="indefinite" />


  </circle>
    <circle cx="50" cy="50" r={r} style="fill:red;">
      <animate
        attributeName="cx"
        begin="0s"
        dur="19s"
        from="50"
        to="90%"
        repeatCount="indefinite" />
    </circle>
   
   
   
  </svg>