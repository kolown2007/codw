<script lang="ts">
    import { onMount } from 'svelte';
  
    let ws: WebSocket | null = null;
    let message: string = '';
    let receivedMessages: string[] = []; // Store received messages in an array
  
    const connectWebSocket = () => {
      ws = new WebSocket('');
  
      ws.addEventListener('open', () => {
        console.log('WebSocket connected');
      });
  
      ws.addEventListener('message', (event) => {
        const receivedMessage = event.data.toString();
        receivedMessages = [...receivedMessages, receivedMessage]; // Append the new message
      });
  
      ws.addEventListener('close', () => {
        console.log('WebSocket closed');
      });
    };
  
    const sendMessage = () => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(message);
        message = ''; // Clear the message input field
      }
    };
  
    onMount(() => {
      connectWebSocket();
    });
  </script>
  
  
  
  <main class ="bg-slate-500 py-32 px-32">
    <!-- <h1>WebSocket Client</h1> -->
    <input type="text" bind:value={message} />
    <button on:click={sendMessage}>Send Message</button>
    
    <!-- Display received messages -->
    <div>
     
    </div>
  </main>
  