const { DateTime } = require("luxon");



module.exports = function(eleventyConfig) {
    
    eleventyConfig.addWatchTarget("./src/styles/sass/");
    eleventyConfig.addPassthroughCopy("./src/styles/css/");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    eleventyConfig.addFilter("sortByOrder", (values) => {
        let vals = [...values];
        return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
    });

    // Set custom directories for input, output, includes, and data
    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data",
            output: "_site"
        }
    };
};