<script lang="ts">
  import { io } from 'socket.io-client';
  const socket = io('ws://localhost:3000');
  // client-side
  socket.on('connect', () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
	console.log(socket.connected);

	socket.on('datetime', (payload) => {
		console.log(payload);
	})
  });

  socket.connect();
</script>

<h1>This is the $Sys topic page</h1>
