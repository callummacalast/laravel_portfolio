module.exports = {
    content: [
        './storage/framework/views/*.php',
        './resources/**/*.blade',
        './resources/**/*.js',
        './resources/**/*.vue'
    ],
    theme: {
        extend: {},
    },
    plugins: [require("./plugin")],
}
