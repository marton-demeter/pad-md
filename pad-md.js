Pad = function(options) {
  options = options || {};
  this.fl = options.fl || ' ';
  this.fr = options.fr || ' ';
}
Pad.prototype.setr = function(t, n) {
  if(t.trim().length>=n) return 0;
  else return n-t.trim().length;
}
Pad.prototype.setm = function(t, n) {
  if(Math.ceil(t.trim().length/2)>=n) return 1;
  else return n-Math.ceil(t.trim().length/2);
}
Pad.prototype.pad = function(arg1, arg2, arg3 = null) {
  if(typeof(arg1) === 'string') {
    if(arg1&&arg2&&!arg3) return(`${arg1}${this.fr.repeat(this.setr(arg1,arg2))}`);
    if(arg1&&arg2&&arg3) return(`${arg1}${arg3.repeat(this.setr(arg1,arg2))}`);
  } else {
    if(arg1&&arg2&&!arg3) return(`${this.fl.repeat(this.setr(arg2,arg1))}${arg2}`);
    if(arg1&&arg2&&arg3) return(`${arg3.repeat(this.setr(arg2,arg1))}${arg2}`);
  }
}
Pad.prototype.left = function(t, nl, tl = null) {
  if(nl&&t&&!tl) return(`${this.fl.repeat(this.setr(t,nl))}${t}`);
  if(nl&&t&&tl) return(`${tl.repeat(this.setr(t,nl))}${t}`);
};
Pad.prototype.right = function(t, nr, tr = null) {
  if(nr&&t&&!tr) return(`${t}${this.fr.repeat(this.setr(t,nr))}`);
  if(nr&&t&&tr) return(`${t}${tr.repeat(this.setr(t,nr))}`);
};
Pad.prototype.mid = function(t, nl, nr = null, fe = null) {
  if(nl&&t&&!nr) return(`${this.fl.repeat(this.setm(t,nl))}${t}${this.fr.repeat(this.setm(t,nl))}`);
  if(nl&&t&&nr&&!fe) return(`${this.fl.repeat(this.setm(t,nl))}${t}${this.fr.repeat(this.setm(t,nr))}`);
  if(nl&&t&&nr&&fe) return(`${fe}${this.fl.repeat(this.setm(t,nl)-1)}${t}${this.fr.repeat(this.setm(t,nr)-1)}${fe}`);
};
Pad.prototype.tl = function(f){ this.fl = f };
Pad.prototype.tr = function(f){ this.fr = f };
Pad.prototype.fill = function(f){ this.fl = f; this.fr = f; }
Pad.prototype.reset = function(){ this.fl = ' '; this.fr = ' '; }

const pad = new Pad();

module.exports = pad;