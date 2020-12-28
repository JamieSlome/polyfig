<template>
    <div class="container">
        <nav class="bg-gray-800 fixed z-40 w-screen inset-x-0 top-0">
            <div class="bg-white shadow p-4 flex">
                <span
                    class="w-auto flex justify-end items-center text-gray-500 p-2"
                >
                    <Logo class="w-40" />
                </span>
                <input
                    v-model="search"
                    class="w-full rounded p-2 text-center italic font-thin ml-4 mr-4"
                    type="text"
                    placeholder="Try 'Remove a substring from another string'"
                />
                <button
                    v-on:click="hidden = hidden ? false : true"
                    class="bg-fig hover:opacity-75 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded"
                >
                    <p v-if="!hidden" class="font-semibold text-xs">Hide</p>
                    <p v-else class="font-semibold text-xs">Show</p>
                </button>
            </div>
        </nav>
        <div>
            <div
                class="max-w-screen-lg w-screen mb-10 shadow-inner bg-gray-100"
                v-for="util in utils"
                :key="util"
            >
                <p
                    class="text-left font-hairline p-6 text-white bg-fig hover:font-semibold cursor-pointer sm:text-md lg:text-xl"
                >
                    <code>polyfig.{{ util.name[0] }}()</code>
                </p>
                <div class="p-6" v-if="!hidden">
                    <p class="text-left text-md text-gray-600 mb-1 italic">
                        {{ util.summary[0] }}
                    </p>
                    <div
                        class="underline mb-6 mt-2 text-left text-gray-700 italic text-xs font-light hover:text-black"
                    >
                        <a
                            target="_blank"
                            :href="
                                `https://github.com/JamieSlome/polyfig/blob/main/util/${util.name[0]}.js`
                            "
                            >Source code</a
                        >
                    </div>
                    <p class="text-left font-semibold text-sm text-gray-700">
                        Since
                    </p>
                    <p class="text-left text-xl p-6">
                        <code
                            class="bg-gray-200 rounded p-1 text-sm font-hairline shadow-inner"
                            >v{{ util.since[0] }}</code
                        >
                    </p>
                    <p class="text-left font-semibold text-sm text-gray-700">
                        Category
                    </p>
                    <p
                        class="text-left text-xl p-6"
                        v-for="category in util.category"
                        :key="category"
                    >
                        <code
                            class="bg-gray-200 rounded p-1 text-sm font-hairline shadow-inner"
                            >{{ category }}</code
                        >
                    </p>
                    <p
                        class="text-left font-semibold text-sm text-gray-700 mt-2 mb-2"
                    >
                        Arguments
                    </p>
                    <p
                        v-for="param in util.params"
                        :key="param"
                        class="text-left text-xl p-6"
                    >
                        <kbd class="text-base text-blue-500">{{
                            param.split("-")[0]
                        }}</kbd>
                        <kbd class="text-base"
                            >: {{ param.split("- ")[1] }}</kbd
                        >
                    </p>
                    <p
                        class="text-left font-semibold text-sm text-gray-700 mt-2 mb-2"
                    >
                        Returns
                    </p>
                    <p
                        v-for="ret in util.ret"
                        :key="ret"
                        class="text-left text-xl p-6"
                    >
                        <kbd class="text-base text-gray-700">{{
                            ret.split("}")[0] + "}"
                        }}</kbd>
                        <kbd class="text-base">:{{ ret.split("}")[1] }}</kbd>
                    </p>
                    <p
                        class="text-left font-semibold text-sm text-gray-700 mt-5"
                    >
                        Example
                    </p>
                </div>
                <div
                    v-for="example in util.example"
                    :key="example"
                    class="text-left p-6 bg-gray-800"
                >
                    <code class="text-white text-xs lg:text-base font-thin">{{
                        example
                    }}</code>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const utilities = await $content().fetch();

        return {
            utilities
        };
    },
    data() {
        return {
            search: "",
            hidden: false
        };
    },
    computed: {
        utils: function() {
            const searchTerm = this.search.toLowerCase();
            return this.utilities.filter(utility => {
                return (
                    utility.name[0].toLowerCase().includes(searchTerm) ||
                    utility.summary[0].toLowerCase().includes(searchTerm) ||
                    utility.since[0].includes(searchTerm) ||
                    utility.category[0].toLowerCase().includes(searchTerm)
                );
            });
        }
    }
};
</script>

<style></style>
