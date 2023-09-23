export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="API playground" />
                <link rel="icon" href="public/logo.png" />
                <link rel="stylesheet" type="text/css" href="css/global.css" />
                <title>RM</title>
            </head>

            <body>
                {children}
                <script type="module" src="js/main.js"></script>
                <script
                    src="js/on-scroll-event.js"
                    crossorigin="anonymous"
                ></script>
                <script
                    src="js/fetch-chars.js"
                    crossorigin="anonymous"
                ></script>
            </body>

        </html>
    )
}
