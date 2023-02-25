class NodePoint {
  constructor (x, y, z, time) {
    this.x = x * document.getElementById("space-slider").value;
    this.y = y * document.getElementById("space-slider").value;
    this.z = z * document.getElementById("space-slider").value;
    this.initialX = x;
    this.initialY = y;
    this.initialZ = z;
    this.time = time;
  }

  connect () {
    for ( let i = 1; i < words.length; i++) {
      if (frameCount  > this.time * i + this.time) {
        stroke (document.getElementById("textColor").value);
        strokeWeight (1);
        line (node[i - 1].x, node[i - 1].y, node[i - 1].z, node[i].x, node[i].y, node[i].z); // connects the words in sentence order
      }
    }
  }

  show (count) {
    for (let i = 0; i < words.length; i++) {
      if (frameCount > this.time * i + this.time) {
        
        fill (document.getElementById("textColor").value);

        // if (count === 0) {
        //   fill ("#F20505");
        //   words[0].toUpperCase();
        // } else {
        //   fill (document.getElementById("textColor").value);
        // }

        words[0].toUpperCase();

        textAlign (CENTER);
        noStroke();
        textFont (helvetica, 18);
        

        push();
        translate (this.x, this.y, this.z);
        let spin = radians(frameCount) *0.15;
        rotateY (spin);
        text(words[count], 0, 0);
        pop();
      }
    }
  }

  scale () {
      this.x = this.initialX * document.getElementById("space-slider").value; 
      this.y = this.initialY * document.getElementById("space-slider").value;
      this.z = this.initialZ * document.getElementById("space-slider").value; 
  }
}
