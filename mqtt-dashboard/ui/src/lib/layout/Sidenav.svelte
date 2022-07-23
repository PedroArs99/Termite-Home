<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte';
  import {
    faChevronDown,
    faChevronUp,
    faCommentDollar,
    faCommentDots,
    faPlus,
  } from '@fortawesome/free-solid-svg-icons';

  let areTopicsVisible = false;

  function toggleTopics() {
    areTopicsVisible = !areTopicsVisible;
  }
</script>

<aside class="menu" aria-label="Sidebar">
  <a href="/" class="brand">
    <img src="/Termite-Home-Filled.svg" class="mr-3 h-6 sm:h-7" alt="Termite Home Logo" />
    <div class="brand-text">
      <span class="brand-title">Termite Home</span>
      <span class="brand-subtitle">MQTT-Dashboard</span>
    </div>
  </a>
  <ul class="space-y-2">
    <li>
      <a href="/" class="menu-item">
        <Fa icon={faCommentDollar} size="lg" />
        <span class="ml-3">SYS</span>
      </a>
    </li>
    <li>
      <button type="button" class="menu-item dropdown-control" aria-controls="dropdown-example" on:click={toggleTopics}>
        <Fa icon={faCommentDots} size="lg" />
        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Topics</span>
        {#if areTopicsVisible}
          <Fa icon={faChevronUp} />
        {:else}
          <Fa icon={faChevronDown} />
        {/if}
      </button>
      {#if areTopicsVisible}
        <ul id="dropdown-example" class="py-2 space-y-2 ml-3">
          <li>
            <!-- TODO: Trigger Create Popup-->
            <a href="/" class="menu-item">
              <Fa icon={faPlus} />
              <span class="ml-3">Track new topic</span>
            </a>
          </li>
        </ul>
      {/if}
    </li>
  </ul>
</aside>

<style lang="scss">
  .brand {
    @apply flex items-center pl-2.5 mb-5;
  }

  .brand-text {
    @apply flex flex-col items-center;
  }

  .brand-title {
    @apply self-center text-xl font-semibold whitespace-nowrap;
  }

  .brand-subtitle {
    @apply self-center text-zinc-500;
  }

  .dropdown-control {
    @apply transition duration-75;
  }

  .menu {
    @apply w-64 overflow-y-auto m-4 py-4 px-3 bg-zinc-900 rounded-xl shadow-xl;
  }

  .menu-item {
    @apply flex items-center p-2 text-base font-normal rounded-lg w-full;
  }

  .menu-item:hover {
    @apply bg-zinc-800;
  }
</style>
