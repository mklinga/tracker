define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["client/templates/projects.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'Project ' +
((__t = ( id )) == null ? '' : __t) +
': <strong>' +
((__t = ( name )) == null ? '' : __t) +
'</strong>\n';

}
return __p
};

this["JST"]["client/templates/times.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'Time ' +
((__t = ( timerId )) == null ? '' : __t) +
': <strong>' +
((__t = ( userId )) == null ? '' : __t) +
'</strong> - ' +
((__t = ( begin )) == null ? '' : __t) +
' - ' +
((__t = ( end )) == null ? '' : __t) +
'\n';

}
return __p
};

  return this["JST"];

});