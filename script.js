const data = {
  name: "MIDI",
  children: [
    {
      name: "Game OST",
      children: [
        { name: "Zelda.mid", value: 1200 },
        { name: "Mario.mid", value: 900 }
      ]
    }
  ]
};

const width = 800;
const height = 500;

const root = d3.hierarchy(data)
  .sum(d => d.value);

d3.treemap()
  .size([width, height])
  .padding(2)(root);

const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg.selectAll("rect")
  .data(root.leaves())
  .enter()
  .append("rect")
  .attr("x", d => d.x0)
  .attr("y", d => d.y0)
  .attr("width", d => d.x1 - d.x0)
  .attr("height", d => d.y1 - d.y0)
  .attr("fill", "steelblue");

svg.selectAll("rect")
  .on("click", (event, d) => {
    window.open("midis/" + d.data.name);
  });
