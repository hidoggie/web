      var currentEvent;
      var VidEntity;
      var videoEl;
      var VidPlaying = "false";  

      window.addEventListener("load", function () {
      });

      document
        .getElementById("start_btn")
        .addEventListener("click", function () {
          //    var Start_Area = document.getElementById("start_area");
          var PlayBtn = document.getElementById("start_btn");
          var VidEntity = document.getElementById("selector2");
          var videoEl = VidEntity.getAttribute("material").src;
          var BtmStart = document.getElementById("vstartbtn");
          var BtmStop = document.getElementById("vstopbtn");

          if (!videoEl) {
            return;
          }
          VidPlaying = "true";
          VidEntity.setAttribute("visible", "true");
          videoEl.play();
          PlayBtn.style.display = "none";

          BtmStart.style.display = "none";
          BtmStop.style.display = "inline-block";
        });

      window.addEventListener("load", function () {
        // you can access the THREE.Light object from the shadow-light element
        var lightEl = document.querySelector("a-shadow-light");
        console.log(lightEl.shadowLight);
      });

      // the component has to be defined before the <a-scene>
      AFRAME.registerComponent("show-entity", {
        // a schema, so we can provide different <a-text>s
        schema: {
          image: { type: "selector" },
          text: { type: "selector" },
          text2: { type: "selector" },
          text1: { type: "selector" },
          image1: { type: "selector" },
          image2: { type: "selector" },
        },
        // called upon initialisation
        init: function () {
          // on each click - toggle the visibility
          this.el.addEventListener("click", (evt) => {
            // if the text is invalid - lets get outta here
            if (!this.data.image) return;
            if (!this.data.text) return;
            if (!this.data.text2) return;
            if (!this.data.text1) return;
            if (!this.data.image1) return;
            if (!this.data.image2) return;

            this.data.image.setAttribute("visible", "true");
            this.data.text.setAttribute("visible", "false");
            this.data.text2.setAttribute("visible", "false");
            this.data.text1.setAttribute("visible", "false");

            if (VidPlaying == "true") {            
              this.data.image1.setAttribute("visible", "true");
            }
            else {
               this.data.image1.setAttribute("visible", "false");            
            }

            this.data.image2.setAttribute("visible", "true");
            var StartBtn = document.getElementById("start_btn");

            var BtmStart = document.getElementById("vstartbtn");
            var BtmStop = document.getElementById("vstopbtn");

            var VIDChk = document.getElementById("vid");

            if (VIDChk.paused) {
              StartBtn.style.display = "inline-block";
              BtmStart.style.display = "inline-block";
              BtmStop.style.display = "none";
            } else {
              StartBtn.style.display = "none";
              BtmStart.style.display = "none";
              BtmStop.style.display = "inline-block";
            }
          });
        },
      });

      function play(id) {
        const audioElement = document.getElementById(id);

 //       resetAll();

        if (audioElement.paused) {
          audioElement.play();
        }
      }

      function resetAll() {
        const audioElements = document.querySelectorAll('audio[id^="sound-"]');

        audioElements.forEach((audioElement) => {
          audioElement.pause();
          audioElement.currentTime = 0;
        });
      }

function vidstart() {
   var VID = document.getElementById("vid");
   var BtmStart = document.getElementById("vstartbtn");
   var BtmStop = document.getElementById("vstopbtn");

   BtmStart.style.display = "none";
   BtmStop.style.display = "inline-block";
   VID.play();
//   play('sound-birth');
   
}

function vidstop() {
   var VID = document.getElementById("vid");
   var BtmStart = document.getElementById("vstartbtn");
   var BtmStop = document.getElementById("vstopbtn");

   BtmStart.style.display = "inline-block";
   BtmStop.style.display = "none";
   VID.pause();
//   pause('sound-birth');
}
