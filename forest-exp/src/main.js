AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var COLORS = ['red', 'green', 'blue'];
    var currentElement = this.el;
    this.el.addEventListener('click', function () {
      var camera_pos = document.querySelector("#camera").components.position;
      var element_pos = currentElement.components.position;
      console.log(element_pos);

      //teleport the player
      camera_pos.data.x = element_pos.data.x;
      camera_pos.data.z = element_pos.data.z;

    });
  }
});