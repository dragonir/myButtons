let mix              = require('laravel-mix');
let LiveReloadPlugin = require('webpack-livereload-plugin');

mix
    .setPublicPath('../Hover-Buttons')
    .setResourceRoot('../Hover-Buttons')
    .options(
        {
            processCssUrls: false,
            postCss: [
                require('autoprefixer')({
                    browsers: ['last 5 versions'],
                    cascade: false
                })
            ]
        })
    .sass('scss/hoverbuttons.scss', 'css/hoverbuttons.css')
    .sass('src/css/style.scss', 'src/css/style.css')
    .combine(
        [
            'css/hoverbuttons.css',
            'src/css/style.css'
        ], 'src/css/core.css'
    )

;