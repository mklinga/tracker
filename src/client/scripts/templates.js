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

this["JST"]["client/templates/projects.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h1>Projects</h1>\n<ul id="projectlist">\n\t';
 _.each(items, function(item) { ;
__p += '\n\t\t<li>' +
((__t = ( item.projectId )) == null ? '' : __t) +
'. ' +
((__t = ( item.name )) == null ? '' : __t) +
'</li>\n\t';
 }) ;
__p += '\n</ul>\n<a id="addNewProjectLink" href="#/projects/new" alt="Add New Project">Add new project</a>\n';

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