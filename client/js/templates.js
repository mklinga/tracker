this["JST"] = this["JST"] || {};

this["JST"]["client/templates/times.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'Time for userid: <strong>' +
((__t = ( userId )) == null ? '' : __t) +
'</strong> (' +
((__t = ( timerId )) == null ? '' : __t) +
') - ' +
((__t = ( begin )) == null ? '' : __t) +
' - ' +
((__t = ( end )) == null ? '' : __t) +
'\n';

}
return __p
};