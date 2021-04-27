module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.js$": require.resolve("react-native/jest/preprocessor.js"),
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  setupFiles: ["./jest.mock.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transformIgnorePatterns: [
    // eslint-disable-next-line max-len
    "node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@freakycoder/react-native-custom-text|@react-navigation|bs-platform|(@[a-zA-Z]+/)?(bs|reason|rescript)-(.*)+)",
  ],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        filename: "jest.report.html",
        expand: true,
      },
    ],
  ],
};
