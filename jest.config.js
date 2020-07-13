module.exports = {
  projects: [
    {
      globalSetup: "./project-1/global-setup.js",
      testMatch: ["**/project-1/**/*.test.js"],
    },
    {
      testMatch: ["**/project-2/**/*.test.js"],
    },
  ],
};
