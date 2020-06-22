document.addEventListener('DOMContentLoaded', appStart)
let imgRes
let filters

function appStart() {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    filters = new Filters(canvas, ctx)


    canvas.height = window.innerHeight - 100
    canvas.width = window.innerWidth
    let painting = false;


    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition)
    canvas.addEventListener('mousemove', draw)


    document.getElementById('openFile').addEventListener("click", () =>
        document.getElementById('insertImage').click())
    document.getElementById('insertImage').addEventListener('change', (e) => {
        photo = new Images(e)
        e = imgRes
    })


    document.getElementById('color').addEventListener('change', function() {
        ctx.strokeStyle = this.value
    })
    document.getElementById('size').addEventListener('change', function() {
        ctx.lineWidth = this.value
    })


    document.getElementById('circle').addEventListener("click", () =>
        ctx.lineCap = "round")
    document.getElementById('square').addEventListener("click", () =>
        ctx.lineCap = "square")
    document.getElementById('butt').addEventListener("click", () =>
        ctx.lineCap = "butt")
    document.getElementById('clear').addEventListener("click", () =>
        ctx.clearRect(0, 0, canvas.width, canvas.height))


    document
        .querySelector('#darken')
        .addEventListener('click', () => filters.darkenFilter())
    document
        .querySelector('#blur')
        .addEventListener('click', () => filters.blurFilter())
    document
        .querySelector('#contrast')
        .addEventListener('click', () => filters.contrastFilter())
    document
        .querySelector('#negative')
        .addEventListener('click', () => filters.negativeFilter())
    document
        .querySelector('#brightness')
        .addEventListener('click', () => filters.lightenFilter())




}