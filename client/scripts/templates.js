define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["client/templates/history.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Historylist</h1>\n<ul id="historylist"></ul>\n<a id="addNewTimeLink" href="#/history/' +
((__t = (project_id)) == null ? '' : __t) +
'" alt="Add new item">Add new time</a>\n';

}
return __p
};

this["JST"]["client/templates/projects.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'Project ' +
((__t = (id)) == null ? '' : __t) +
': <a href="#history/' +
((__t = (id)) == null ? '' : __t) +
'"><strong>' +
((__t = (name)) == null ? '' : __t) +
'</strong></a>\n';

}
return __p
};

this["JST"]["client/templates/time_item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'Time ' +
((__t = (timerId)) == null ? '' : __t) +
': <strong>' +
((__t = (userId)) == null ? '' : __t) +
'</strong> - ' +
((__t = (begin)) == null ? '' : __t) +
' - ' +
((__t = (end)) == null ? '' : __t) +
'\n';

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