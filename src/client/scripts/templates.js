define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["client/templates/history.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h1>Historylist</h1>\n<ul id="historylist">\n\t';
 _.each(items, function(item) { ;
__p += '\n\t\t<li>' +
((__t = ( item.timerId )) == null ? '' : __t) +
'. ' +
((__t = ( item.begin )) == null ? '' : __t) +
' - ' +
((__t = ( item.end )) == null ? '' : __t) +
'</li>\n\t';
 }) ;
__p += '\n</ul>\n<a id="addNewTimeLink" href="#/history/' +
((__t = ( project_id )) == null ? '' : __t) +
'" alt="Add new item">Add new time</a>\n';

}
return __p
};

this["JST"]["client/templates/project_new.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>New Project</h1>\nName: <input id="projectName" type="text" />\nDescription: <input id="projectDesc" type="text" />\n<button id="saveNewProject">Save</button>\n';

}
return __p
};

this["JST"]["client/templates/projects.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Projects</h1>\n<div id="projectlist"></div>\n<a id="addNewProjectLink" href="#" alt="Add New Project">Add new project</a>\n';

}
return __p
};

this["JST"]["client/templates/single_project.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="project-name"><strong>' +
((__t = ( item.name )) == null ? '' : __t) +
'</strong></h2>\n<a class="removeProject" href="#">Remove this project</a>\n<p class="project-desc">' +
((__t = ( item.description )) == null ? '' : __t) +
'</p>\n';

}
return __p
};

this["JST"]["client/templates/times_new.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<input type="date" id="startTime" /><button id="saveNewTime" name="save">Save!</button>\n';

}
return __p
};

  return this["JST"];

});