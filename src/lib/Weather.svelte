<script lang="ts" context="module">
import {time,user} from './we'


const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

  
</script>

<div>

<h3>{formatter.format($time)}</h3>
&nbsp;
&nbsp;

{#if $user != null}
      <p class = "text-2xl">Manila</p>
	  <p class = "text-4xl">{Math.round($user.temp)}°C</p>
	 
	  <p class = "text-4xl">{Math.round($user.windspeed * 3.6)} kph</p>
{:else}
    <h1>Error while loading the data</h1>
{/if}
   
</div>


