  let input = $("#input");
  let btn = $("#btn");
  let output = $("#output");

  btn.on('click', function () {
      output.html(`<h1>Hello there ${input.val()}!</h1>`)
  });