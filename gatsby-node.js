exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-spring-3d-carousel/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
