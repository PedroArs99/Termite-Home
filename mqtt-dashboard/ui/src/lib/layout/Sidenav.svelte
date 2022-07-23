<!-- svelte-ignore a11y-invalid-attribute -->
<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte";
  import {
    faChevronDown,
    faChevronUp,
    faCommentDollar,
    faCommentDots,
  } from "@fortawesome/free-solid-svg-icons";
	import {page} from "$app/stores";

  let areTopicsVisible = false;

  function toggleTopics() {
    areTopicsVisible = !areTopicsVisible;
  }
</script>

<aside class="w-64" aria-label="Sidebar">
  <div
    class="overflow-y-auto m-4 py-4 px-3 bg-gray-50 rounded-xl shadow-xl dark:bg-zinc-900"
  >
    <a href="/" class="flex items-center pl-2.5 mb-5">
      <img
        src="/Termite-Home-Filled.svg"
        class="mr-3 h-6 sm:h-7"
        alt="Termite Home Logo"
      />
      <div class="flex flex-col items-center">
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >Termite Home</span
        >
        <span class="self-center dark:text-zinc-500">MQTT-Dashboard</span>
      </div>
    </a>
    <ul class="space-y-2">
      <li>
        <a
          href="/"
          class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Fa icon={faCommentDollar} size="lg" />
          <span class="ml-3">SYS</span>
        </a>
      </li>
      <li>
        <button
          type="button"
          class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          aria-controls="dropdown-example"
          on:click={toggleTopics}
        >
          <Fa icon={faCommentDots} size="lg" />
          <span
            class="flex-1 ml-3 text-left whitespace-nowrap"
            sidebar-toggle-item>Topics</span
          >
          {#if areTopicsVisible}
            <Fa icon={faChevronUp} />
          {:else}
            <Fa icon={faChevronDown} />
          {/if}
        </button>
        {#if areTopicsVisible}
          <ul id="dropdown-example" class="py-2 space-y-2">
            <li>
              <a
                href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >Products</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >Billing</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >Invoice</a
              >
            </li>
          </ul>
        {/if}
      </li>
    </ul>
  </div>
</aside>

<style>

</style>
