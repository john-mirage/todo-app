module.exports = {
    plugins: [
        {
            name: "removeAttrs",
            params: {
                attrs: "(fill|stroke)"
            }
        },
        {
            name: "removeDimensions",
            active: true,
        },
        {
            name: "prefixIds",
            active: true,
        }
    ],
};