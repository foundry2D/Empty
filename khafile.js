let project = new Project('Project');
project.addAssets('Assets/**');
project.addSources('Sources');
project.addShaders('Shaders/**');
project.addDefine("editor_dev");
project.addDefine("debug_editor");
project.addParameter("-debug");

//project.addParameter("--times");
// project.addDefine('macro-times');

project.targetOptions.html5.disableContextMenu = true;
project.targetOptions.html5.webgl = true;
await project.addProject('Libraries/foundsdk/khafs');
await project.addProject('Libraries/foundsdk/editor');
await project.addProject('Libraries/foundsdk/foundry2d');
resolve(project);