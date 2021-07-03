<template>
    <div class="flex justify-between py-2 px-4">
        <router-link to="/" class="text-2xl">
            blo<span class="text-blue-700 font-bold text-3xl">gg</span>er.<span
                >dev</span
            >
        </router-link>
        <div>
            <ul class="flex gap-4">
                <li
                    class="
                        p-2
                        text-blue-500
                        rounded-md
                        w-min
                        duration-500
                        hover:bg-blue-100
                    "
                >
                    <router-link to="/">Home</router-link>
                </li>
                <li
                    class="
                        px-2
                        py-2
                        rounded-md
                        w-min
                        duration-500
                        hover:bg-blue-100
                    "
                >
                    <a href="/ab">About</a>
                </li>
                <li
                    class="
                        px-2
                        py-2
                        rounded-md
                        w-min
                        duration-500
                        hover:bg-blue-100
                    "
                >
                    Contact
                </li>
            </ul>
        </div>
        <div>
            <button
                class="
                    py-2
                    px-4
                    rounded-md
                    shadow
                    hover:bg-white hover:text-black
                    bg-blue-600
                    text-blue-50
                    duration-500
                "
            >
                Login
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style></style>
