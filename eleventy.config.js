export const config = {
  dir: {
    // These are both relative to your input directory!
    includes: "_includes",
    layouts: "_layouts",
    output: "funkylevi.nekoweb.org",

  }
};

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("funkylevi/bg.png");
    eleventyConfig.addPassthroughCopy("funkylevi/favicon.png");
    eleventyConfig.addPassthroughCopy("funkylevi/styles.css");
};
