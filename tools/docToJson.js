const fs = require("fs");

(async () => {
    let utilMeta = [];

    await fs.readdirSync("../util").forEach(async (file) => {
        const fileContents = await fs.readFileSync(`../util/${file}`, "utf-8");

        const code =
            fileContents.split("\n\n")[1] +
            "\n\n" +
            fileContents.split("\n\n")[2];

        const name = fileContents.match(/(?<=\@name ).*/g);

        const summary = fileContents.match(/(?<=\@summary ).*/g);

        const since = fileContents.match(/(?<=\@since ).*/g);

        const category = fileContents.match(/(?<=\@category ).*/g);

        const params = fileContents.match(/(?<=\@param ).*/g);

        const ret = fileContents.match(/(?<=\@return ).*/g);

        const example = fileContents.match(/(?<=\* => ).*/g);

        const meta = {
            name,
            fileContents,
            code,
            summary,
            since,
            category,
            params,
            ret,
            example
        };

        utilMeta.push(meta);
    });

    fs.writeFileSync(
        "../docs/content/util.json",
        JSON.stringify(utilMeta, null, 4)
    );
})();
