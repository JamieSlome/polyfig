<template>
    <div class="container">
        <div>
            <Logo />
            <div class="mt-5">
                <p class="subtitle">A simple JavaScript utility library</p>
            </div>
            <div class="mt-5 block">
                <a href="https://www.npmjs.com/package/polyfig">
                    <img
                        class="inline-block"
                        alt="version"
                        src="https://img.shields.io/npm/v/polyfig?color=%23301934"
                /></a>
                <a href="https://en.wikipedia.org/wiki/MIT_License">
                    <img
                        class="inline-block"
                        alt="license"
                        src="https://img.shields.io/npm/l/polyfig?color=%23301934"
                /></a>
                <a href="https://github.com/JamieSlome/polyfig">
                    <img
                        class="inline-block"
                        alt="repo_size"
                        src="https://img.shields.io/github/repo-size/JamieSlome/polyfig?color=%23301934"
                /></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.subtitle {
    font-weight: 600;
}

.links {
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>
