<script lang="ts">
    import { auth, user } from "$lib/firebase";
    import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
    import { goto } from "$app/navigation";

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
        goto(`/user`, { replaceState: true });
    }
</script>

{#if $user}
    <button on:click={() => signOut(auth)} class="btn btn-primary">Logout</button>
{:else}
    <h1 class="text-xl">Sign-up or Sign-in</h1>
    <p>We use Google Firebase authentication. Please select Continue with Google from the navagation area.</p>

{/if}
