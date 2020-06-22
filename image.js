class Images {
    constructor(element) {
        this.element = element.target.files
        this.image = new Image()
        this.reader = new FileReader()
        this.loadImage(this.image, this.reader, this.element)
    }
    loadImage(image, reader, element) {
        let file = element[0]
        reader.readAsDataURL(file)
        reader.onloadend = function(e) {
            image.src = e.target.result
            image.onload = function() {
                let wRatio = canvas.width / image.width
                let hRatio = canvas.height / image.height
                let ratio = Math.min(wRatio, hRatio);
                let centerShift_x = (canvas.width - image.width * ratio) / 2;
                let centerShift_y = (canvas.height - image.height * ratio) / 2;
                let ctx = canvas.getContext('2d')
                ctx.drawImage(image, 0, 0, image.width, image.height,
                    centerShift_x, centerShift_y, image.width * ratio, image.height * ratio)
            }
        }
    }
    reset() {
        return this.image
    }
}