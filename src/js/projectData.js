export const projSample = {
  name: '',
  description: '',
  status: '',
  tech: [],
  thumb: '',
  projectLink: '',
  index: 0,
};

export const projRaytracer = {
  name: 'Raytracer',
  description: "Following Peter Shirley's 'Raytracing' series, I wrote a basic raytracing engine which covers diffuse lighting, subsurface scattering, volmetric mediums and caustics, and collisions with boxes and spheres. I'm extending it with custom features such as custom scene configuration, extra noise functions and extended ray-triangle collisions.",
  status: 'Ongoing',
  tech: ['C++', 'SDL2'],
  thumb: require('../images/rendering/render.PNG'),
  projectLink: 'https://github.com/vanandrewnguyen/raytracerInOneWeekend',
  index: 0,
};

export const projRasterizer = {
  name: 'Rasterizer',
  description: 'I wrote a basic rasterizer renderer using OpenGL, as practice to learn lower level graphics. The plan was to link an Arduino Lidar scanner to process real-life mediums in a photoscan.',
  status: 'Cancelled',
  tech: ['C++', 'OpenGL'],
  thumb: require('../images/rendering/opengl.png'),
  projectLink: 'https://github.com/vanandrewnguyen/renderingEngine',
  index: 1,
};

export const shaderPathtracer = {
  name: 'Path tracer',
  description: 'Multiple rays are shot on each pixel into the scene, bouncing and accumulating an output. Final output is an average of every sample.',
  status: 'Finished',
  tech: ['GLSL'],
  thumb: require('../images/shaders/pathTracing3.PNG'),
  projectLink: 'https://www.shadertoy.com/view/7ljfzm',
  index: 2,
};

export const shaderWater = {
  name: 'Moana Water',
  description: 'This pixel shader uses a procedural volume built on layers of perlin and sine noise. Water is simulated with refracted rays, caustics is faked through voronoise.',
  status: 'Finished',
  tech: ['GLSL'],
  thumb: require('../images/shaders/water.png'),
  projectLink: 'https://www.shadertoy.com/view/fsKSWy',
  index: 3,
};

export const shaderMountain = {
  name: 'Himalayas',
  description: 'This pixel shader uses a texture as a multiple heightmaps to build a mountainous terrain.',
  status: 'Finished',
  tech: ['GLSL'],
  thumb: require('../images/shaders/himalayas.PNG'),
  projectLink: 'https://www.shadertoy.com/view/NsyXR1',
  index: 4,
};

export const shaderVolumetric = {
  name: 'Volumetric Model',
  description: 'This pixel shader explores the use of subsurface scattering. Light propagates in the volume, which is procedurally generated with perlin noise functions. This gives the appearance of a wax-like substance.',
  status: 'Finished',
  tech: ['GLSL'],
  thumb: require('../images/shaders/wax.png'),
  projectLink: 'https://www.shadertoy.com/view/sdsBDj',
  index: 5,
};

export const shaderGOF = {
  name: 'Game of Life CRT',
  description: 'This pixel shader makes use of shader buffers to seperate states of movement in cellular automata. My variation makes use of old-school inspired effects like vignetting.',
  status: '',
  tech: ['GLSL'],
  thumb: require('../images/shaders/gol.PNG'),
  projectLink: 'https://www.shadertoy.com/view/ftdXWn',
  index: 5,
};

export const shaderPlanet = {
  name: 'Planet',
  description: 'This pixel shader makes use of triplanar mapping to map perlin noise onto a sphere sdf, creating a planet. The atmosphere is simulated using a fake 2D bloom.',
  status: 'Finished',
  tech: ['GLSL'],
  thumb: require('../images/shaders/atmos.PNG'),
  projectLink: 'https://www.shadertoy.com/view/NljBWc',
  index: 6,
};

export const videoWater = {
  name: 'Water Breakdown',
  description: 'I unassembled my water shader to show how I made a procedurally animated terrain, basic refraction and shading, then some basic lighting elements.',
  status: 'Finished',
  tech: [],
  thumb: require('../images/youtube-thumbs/wtrBreakdownThumb.PNG'),
  projectLink: 'https://www.youtube.com/watch?v=-wgfJ-kZqTU',
  index: 7,
};

export const videoMountain = {
  name: 'Mountain Breakdown',
  description: 'I broke down my sixth iteration of mountainous terrain generation. This time I decided to focus on level based fog, as well as tree placement using noise, and broke down FBM noise for terrain map use.',
  status: 'Finished',
  tech: [],
  thumb: require('../images/youtube-thumbs/mtnBreakdownThumb.jpg'),
  projectLink: 'https://www.youtube.com/watch?v=j7_fsOJdZHM',
  index: 8,
};

export const gameTFTFU = {
  name: 'TFTFU',
  description: 'Fighting game that deals with mental health, won the 2020 Laurete Awards. Group project with two composers. My biggest project to date (16 months)!',
  status: 'Finished',
  tech: ['GML'],
  thumb: require('../images/game-screenshots/tftfuBed.png'),
  projectLink: 'https://vanandrew.itch.io/flames',
  index: 9,
};

export const gameKadent = {
  name: 'Kadent',
  description: 'Rhythm action game with major exploration on player UI/UX and local multiplayer options.',
  status: 'Finished',
  tech: ['GML'],
  thumb: require('../images/game-screenshots/kadent.png'),
  projectLink: 'https://vanandrew.itch.io/kadent',
  index: 10,
};

export const gameHorde = {
  name: 'Brooding Horde',
  description: 'TCP LAN multiplayer side-scrolling shooter, where I learnt how to deal with network congestion, lock-stepping and other interpolation tricks to help player experience.',
  status: 'Finished',
  tech: ['GML'],
  thumb: require('../images/game-screenshots/corridor.png'),
  projectLink: 'https://vanandrew.itch.io/horde',
  index: 11,
};

export const projPatterns = {
  name: 'Audio Tech Art',
  description: "I prototyped in P5.js to create interactive backgrounds as part of a major art piece. These backgrounds react to the user's microphone input.",
  status: 'Finished',
  tech: ['JS'],
  thumb: null,
  projectLink: 'https://editor.p5js.org/vanandrew/sketches',
  index: 12,
};

export const projDungeonMania = {
  name: 'Dungeon Mania',
  description: "A web turn-based dungeon game with a group of 5 using agile methodologies. Wrote medium-scale maintainable code using design patterns, such as map gen and turn-rewinding. Code available on request.",
  status: 'Finished',
  tech: ['Java', 'JavaFX'],
  thumb: null,
  projectLink: null,
  index: 13,
};

export const projSeams = {
  name: 'Seams',
  description: "(Microsoft Teams Clone) Group of 4 using agile methodologies. Basic CRUD messaging application with user authorisation and profiles. Code available on request.",
  status: 'Finished',
  tech: ['Python'],
  thumb: null,
  projectLink: null,
  index: 14,
};

export const projDNS = {
  name: 'DNS Resolver',
  description: "A DNS resolver implemented from scratch without Python's DNS libraries. Architected a client and server compatible with existing tools (e.g. dig, public DNS resolvers) to find the corresponding IP address of any valid domain, with error handling and multithreading. Code available on request.",
  status: 'Finished',
  tech: ['Python'],
  thumb: null,
  projectLink: null,
  index: 15,
};

export const projAirbrb = {
  name: 'Airbrb',
  description: "A React app inspired by Airbnb, where clients are able to host, publish, view and book available listings.",
  status: 'Finished',
  tech: ['JS', 'React', 'MUI'],
  thumb: null,
  projectLink: null,
  index: 16,
};

export const projPortfolio = {
  name: 'Portfolio',
  description: "This website!",
  status: 'Ongoing',
  tech: ['JS', 'GLSL', 'React', 'Three.js', 'MUI'],
  thumb: null,
  projectLink: null,
  index: 17,
};

export const shaderGallery = [
  require('../images/shaders/sandDune.PNG'),
  require('../images/shaders/clouds.PNG'),
  require('../images/shaders/canyon.png'),
  require('../images/shaders/warp.png'),
  require('../images/shaders/mountainsFog.PNG'),
  require('../images/shaders/water2.PNG'),
  require('../images/shaders/gerstner.png'),
];