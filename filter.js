 class Filters {
     constructor(canvas, ctx) {
         this.canvas = canvas
         this.ctx = ctx

     }
     darkenFilter(amount = 30) {
         const canvasData = this.ctx.getImageData(0, 0, canvas.width, canvas.height)
         console.log(canvasData.data[0])
         for (let i = 0; i < canvasData.data.length; i += 4) {
             canvasData.data[i] -= amount;
             canvasData.data[i + 1] -= amount;
             canvasData.data[i + 2] -= amount;
         }
         this.ctx.putImageData(canvasData, 0, 0)
     }
     contrastFilter(amount = 7) {
         const canvasData = this.ctx.getImageData(0, 0, canvas.width, canvas.height)
         for (let i = 0; i < canvasData.data.length; i += 4) {
             const r = canvasData.data[i]
             const g = canvasData.data[i + 1]
             const b = canvasData.data[i + 2]
             const avg = (r + g + b) / 3
             if (avg <= 127) {
                 amount = -amount
             }
             canvasData.data[i] += amount
             canvasData.data[i + 1] += amount
             canvasData.data[i + 2] += amount
         }
         this.ctx.putImageData(canvasData, 0, 0)
     }

     negativeFilter(amount = 150) {
         const canvasData = this.ctx.getImageData(0, 0, canvas.width, canvas.height)
         for (let i = 0; i < canvasData.data.length; i += 4) {
             canvasData.data[i] = (canvasData.data[i] + canvasData.data[i + 4])
             canvasData.data[i + 1] = (canvasData.data[i + 1] + canvasData.data[i + 5])
             canvasData.data[i + 2] = (canvasData.data[i + 2] + canvasData.data[i + 6])
         }
         this.ctx.putImageData(canvasData, 0, 0)
     }

     lightenFilter(amount = 30) {
         const canvasData = this.ctx.getImageData(0, 0, canvas.width, canvas.height);
         for (let i = 0; i < canvasData.data.length; i += 4) {
             canvasData.data[i] += amount;
             canvasData.data[i + 1] += amount;
             canvasData.data[i + 2] += amount;
         }
         this.ctx.putImageData(canvasData, 0, 0);
     }

     blurFilter() {
         const canvasData = this.ctx.getImageData(0, 0, canvas.width, canvas.height)
         for (let i = 0; i < canvasData.data.length; i += 4) {
             canvasData.data[i] = (canvasData.data[i] + canvasData.data[i + 4]) / 2
             canvasData.data[i + 1] = (canvasData.data[i + 1] + canvasData.data[i + 5]) / 2
             canvasData.data[i + 2] = (canvasData.data[i + 2] + canvasData.data[i + 6]) / 2
         }
         this.ctx.putImageData(canvasData, 0, 0)
     }
 }