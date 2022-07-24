<script lang="ts">
  import { initMessageTracking, messages } from "$lib/messages/messages.store";

  initMessageTracking();
</script>

<h1>This is the $Sys topic page</h1>

{#each $messages as message }
  <p>{message.topic} | {JSON.stringify(message.payload)} </p>
{/each}

