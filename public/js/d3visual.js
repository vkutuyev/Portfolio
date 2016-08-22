var canvas = d3.select("canvas"),
    context = canvas.node().getContext("2d"),
    width = canvas.property("width"),
    height = canvas.property("height");

var worker = new Worker("js/randomTrav.js");
worker.postMessage({width: width, height: height});
worker.addEventListener("message", function(event) {
  worker.terminate();

  var N = 1 << 0,
      S = 1 << 1,
      W = 1 << 2,
      E = 1 << 3;

  var cells = event.data,
      distance = 0,
      visited = new Array(width * height),
      frontier = [(height - 1) * width],
      image = context.createImageData(width, height);

  function flood() {
    var frontier1 = [],
        i0,
        n0 = frontier.length,
        i1,
        // color = d3.hsl((distance += .5) % 360, 1, .5).rgb();
        color = d3.rgb( 0, 153, 204);

    for (var i = 0; i < n0; ++i) {
      i0 = frontier[i] << 2;
      image.data[i0 + 0] = color.r;
      image.data[i0 + 1] = color.g;
      image.data[i0 + 2] = color.b;
      image.data[i0 + 3] = 255; //255 = full, 0 = transparent
    }

    for (var i = 0; i < n0; ++i) {
      i0 = frontier[i];
      if (cells[i0] & E && !visited[i1 = i0 + 1]) visited[i1] = true, frontier1.push(i1);
      if (cells[i0] & W && !visited[i1 = i0 - 1]) visited[i1] = true, frontier1.push(i1);
      if (cells[i0] & S && !visited[i1 = i0 + width]) visited[i1] = true, frontier1.push(i1);
      if (cells[i0] & N && !visited[i1 = i0 - width]) visited[i1] = true, frontier1.push(i1);
    }

    frontier = frontier1;
    return !frontier1.length;
  }

  d3.timer(function() {
    for (var i = 0, done; i < 1 && !(done = flood()); ++i);
    context.putImageData(image, 0, 0);
    return done;
  });
});