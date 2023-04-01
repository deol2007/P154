AFRAME.registerComponent("turtle", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      var id = `hurdle${i}`;

      var posX = Math.random() * 3000 + -1000;
      var posY = Math.random() * 2 + -1;
      var posZ = Math.random() * 3000 + -1000;

      var position = { x: posX, y: posY, z: posZ };

      this.turtles(id, position);
    }
  },
  turtles: (id, position) => {
    var terrainEl = document.querySelector("#terrain");

    var turtleEl = document.createElement("a-entity");

    turtleEl.setAttribute("id", id);

    turtleEl.setAttribute("position", position);
    turtleEl.setAttribute("scale", { x: 500, y: 500, z: 500 });

    turtleEl.setAttribute("gltf-model", "./assets/models/turtle/scene.gltf");

    turtleEl.setAttribute("animation-mixer", {});

    terrainEl.appendChild(turtleEl);
  },
});
