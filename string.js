/**
 * gstring extends native String object
 * 
 * Extends strings as objects with additional commonly used cross 
 * language parsing features del/get left/right, available in 
 * javascript, perl, asp, php, xojo, vb, lingo, NodeRED, etc. GPL
 * or contact for commercial lic. in a language near you.  ;-)
 * 
 * Format and trim added from Michael Scribellito 
 * 
 * @author  Stephen J. Carnam, Michael Scribellito
 * @date    2-24-2012
 * @link    http://steveorevo.com
 * @license http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * copyright 2001-2018, Stephen J. Carnam
 */
String.prototype.delRightMost=function(sFind){
  for (var i = this.length; i >= 0; i = i - 1) {
    var f = this.indexOf(sFind, i);
    if (f != -1) {
       return this.substr(0, f);
       break;
    }
  }
  return this;
};
String.prototype.getRightMost=function(sFind){
  for (var i = this.length; i >= 0; i = i - 1) {
    var f = this.indexOf(sFind, i);
    if (f != -1) {
       return this.substr(f + sFind.length, this.length);
    }
  }
  return this;
};
String.prototype.delLeftMost=function(sFind){
  for (var i = 0; i < this.length; i = i + 1) {
    var f = this.indexOf(sFind, i);
    if (f != -1) {
       return this.substr(f + sFind.length, this.length);
       break;
    }
  }
  return this;
};
String.prototype.getLeftMost=function(sFind){
  for (var i = 0; i < this.length; i = i + 1) {
    var f = this.indexOf(sFind, i);
    if (f != -1) {
       return this.substr(0, f);
       break;
    }
  }
  return this;
};
String.prototype.replaceString=function(sFind,sReplace){
  var sParse = new String(this);
  var i = sParse.indexOf(sFind);
  while (i != -1) {
    var sOut = sParse.substr(0, i);
    sOut += sReplace;
    sOut += sParse.substr(i + sFind.length, sParse.length);
    sParse = sOut;
    i = sParse.indexOf(sFind, i + sReplace.length);
  }
  return sParse;
};
String.prototype.countPhrase=function(sFind){
  var sSearch = new String(this);
  iChar = 0;
  while (true) {
    iCount = sSearch.indexOf(sFind, 0);
    if (iCount == -1) {
        break;
    }
    iChar++;
    sSearch = sSearch.substr(iCount + 1, sSearch.length - iCount);
  }
  return iChar;
};
String.prototype.lTrim=function(){
  var whitespace = new String(" \t\n\r");
  var s = new String(this);
  if (whitespace.indexOf(s.charAt(0)) != -1) {
    var j=0; 
    var i = s.length;
    while (j < i && whitespace.indexOf(s.charAt(j)) != -1) {
        j++;
      s = s.substring(j, i);
    }
  }
  return s;
};
String.prototype.rTrim=function(){
  var whitespace = new String(" \t\n\r");
  var s = new String(this);
  if (whitespace.indexOf(s.charAt(s.length-1)) != -1) {
    var i = s.length - 1;
    while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1) {
             i--;
      s = s.substring(0, i+1);
    }
  }
  return s;
};
String.prototype.trim=function(){
    return this.lTrim().rTrim();
};
/**
 * Return the given string enclosed within double quotes
 * @returns {String}
 */
String.prototype.quote=function(){
    return String.fromCharCode(34) + this + String.fromCharCode(34);
};
/**
 * "{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET")
 *
 * outputs
 *
 * ASP is dead, but ASP.NET is alive! ASP {2}
 */
String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) { 
    return typeof args[number] != 'undefined'
      ? args[number]
      : match
    ;
  });
};
