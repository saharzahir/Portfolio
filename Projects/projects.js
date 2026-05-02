import { fetchJSON, renderProjects } from '../global.js';
import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm';

const projects = await fetchJSON('../lib/projects.json');

const projectsContainer = document.querySelector('.projects');

renderProjects(projects, projectsContainer, 'h2');

const title = document.querySelector('.projects-title');

if (title) {
  title.textContent = `${projects.length} Projects`;
}

let data = [1, 2];

let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);

let sliceGenerator = d3.pie();

let arcData = sliceGenerator(data);

let arcs = arcData.map(d => arcGenerator(d));

let colors = ['gold', 'purple'];

let svg = d3.select('#projects-pie-plot');

arcs.forEach((arc, i) => {
  svg.append('path')
    .attr('d', arc)
    .attr('fill', colors[i]);
});