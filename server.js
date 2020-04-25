const express = require("express")
const path = require("path")
const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const data = {
        users: [
            { name: 'John' },
            { name: 'Mike' },
            { name: 'Samantha' }
        ]
    }
    return res.render('index', data)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))