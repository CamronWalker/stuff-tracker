<script>
    import "../app.css";
</script>

<div class="navbar bg-base-100 shadow-lg sm:hidden md:hidden lg:flex mb-5">
    <div class="navbar-start">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl" href="/">Stuff Tracker</a>
          </div>
      <div class="dropdown">
        <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end">
      <a class="btn" href="/login">Login</a>
    </div>
  </div>

<main class="card w-11/12 bg-base-100 mx-auto shadow-lg ">
    <div class="card-body items-center text-center">
        <slot />
    </div>
</main>

<div class="btm-nav lg:hidden bg-base">
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.75 10a.75.75 0 0 0-1.5 0h1.5Zm-14 0a.75.75 0 0 0-1.5 0h1.5Zm14.72 2.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM12 3l.53-.53a.75.75 0 0 0-1.06 0L12 3Zm-9.53 8.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM7 21.75h10v-1.5H7v1.5ZM19.75 19v-9h-1.5v9h1.5Zm-14 0v-9h-1.5v9h1.5Zm15.78-7.53l-9-9l-1.06 1.06l9 9l1.06-1.06Zm-10.06-9l-9 9l1.06 1.06l9-9l-1.06-1.06ZM17 21.75A2.75 2.75 0 0 0 19.75 19h-1.5c0 .69-.56 1.25-1.25 1.25v1.5Zm-10-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 7 21.75v-1.5Z"/></svg>
    <span class="btm-nav-label">Home</span>
  </button>
  <button class="active">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="m1155 1920l128 128H256V256h512q0-53 20-99t55-82t81-55t100-20q53 0 99 20t82 55t55 81t20 100h512v1027l-128 128V384h-128v256H512V384H384v1536h771zM640 384v128h768V384h-256V256q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50v128H640zm1389 1069l-557 558l-269-270l90-90l179 178l467-466l90 90z"/></svg>
    <span class="btm-nav-label">Items</span>
  </button>
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="M1.911 7.383a8.491 8.491 0 0 1 1.78-3.08a.5.5 0 0 1 .54-.135l1.918.686a1 1 0 0 0 1.32-.762l.366-2.006a.5.5 0 0 1 .388-.4a8.532 8.532 0 0 1 3.554 0a.5.5 0 0 1 .388.4l.366 2.006a1 1 0 0 0 1.32.762l1.919-.686a.5.5 0 0 1 .54.136a8.491 8.491 0 0 1 1.78 3.079a.5.5 0 0 1-.153.535l-1.555 1.32a1 1 0 0 0 0 1.524l1.555 1.32a.5.5 0 0 1 .152.535a8.491 8.491 0 0 1-1.78 3.08a.5.5 0 0 1-.54.135l-1.918-.686a1 1 0 0 0-1.32.762l-.366 2.007a.5.5 0 0 1-.388.399a8.528 8.528 0 0 1-3.554 0a.5.5 0 0 1-.388-.4l-.366-2.006a1 1 0 0 0-1.32-.762l-1.918.686a.5.5 0 0 1-.54-.136a8.49 8.49 0 0 1-1.78-3.079a.5.5 0 0 1 .152-.535l1.555-1.32a1 1 0 0 0 0-1.524l-1.555-1.32a.5.5 0 0 1-.152-.535Zm1.06-.006l1.294 1.098a2 2 0 0 1 0 3.05l-1.293 1.098c.292.782.713 1.51 1.244 2.152l1.596-.57a2 2 0 0 1 2.64 1.525l.305 1.668a7.556 7.556 0 0 0 2.486 0l.304-1.67a1.998 1.998 0 0 1 2.641-1.524l1.596.571a7.492 7.492 0 0 0 1.245-2.152l-1.294-1.098a1.998 1.998 0 0 1 0-3.05l1.294-1.098a7.491 7.491 0 0 0-1.245-2.152l-1.596.57a2 2 0 0 1-2.64-1.524l-.305-1.669a7.555 7.555 0 0 0-2.486 0l-.304 1.669a2 2 0 0 1-2.64 1.525l-1.597-.571a7.491 7.491 0 0 0-1.244 2.152ZM7.502 10a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0Zm1 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Z"/></svg>
    <span class="btm-nav-label">Settings</span>
  </button>
</div>