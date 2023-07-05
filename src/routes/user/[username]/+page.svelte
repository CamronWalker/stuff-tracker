<script lang="ts">
    import { user } from "$lib/firebase";
    import { page } from "$app/stores";
</script>

<!-- todo update this to be based on page username rather than $user
    this will require the db value for the user which I haven't done yet. -->
<div class="card w-96 bg-base-100 shadow-xl">        
    <figure class="px-10 pt-10">
        <img src={$user?.photoURL} alt={`${$user?.displayName}\'s Profile Photo`} class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title">{$user?.displayName}</h2>
        <p>User ID: {$page.params.username}</p>
        <p>Last Sign In: {$user?.metadata.lastSignInTime}</p>
        <p>Email: {$user?.email}</p>
    </div>
</div>


