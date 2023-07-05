<script>
  import BottomNavBar from "$lib/components/BottomNavBar.svelte";
  import TopNavBar from "$lib/components/TopNavBar.svelte";
  import "../app.css";
</script>

<TopNavBar />

<main class="card w-11/12 bg-base-100 mx-auto shadow-lg ">
    <div class="card-body items-center text-center">
        <slot />
    </div>
</main>

<BottomNavBar />
