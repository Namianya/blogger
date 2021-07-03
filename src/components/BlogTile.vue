<template>
    <div
        class="
            p-5
            max-w-screen-sm
            duration-500
            rounded-lg
            hover:-rotate-180 hover:shadow-lg
            cursor-pointer
        "
    >
        <div>
            <img
                src="https://source.unsplash.com/random/680x400"
                class="rounded-md"
                alt=""
            />
        </div>
        <div class="flex items-center">
            <div class="mr-8 py-5">
                <img
                    src="https://source.unsplash.com/random/50x50"
                    class="rounded-full"
                    alt=""
                />
            </div>
            <div>
                <p class="font-medium text-xl">{{author}}</p>
                <p class="text-gray-700 font-light text-sm">{{date}}</p>
            </div>
        </div>
        <div>
            <h1 class="font-bold text-3xl">{{ title }}</h1>
            <p class="truncate">
                {{ body }}
            </p>
        </div>
        <div>
            <div class="mt-2">
                <button
                    class="
                        px-2
                        text-blue-500
                        rounded-full
                        w-min
                        duration-500
                        hover:bg-blue-100
                    "
                >
                    #{{topic}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogTile',
    props: ['title', 'body', 'id', 'author','date', 'topic'],
}
</script>

<style scoped></style>
