
import { selection, select, selectAll } from "d3-selection";

import { default as addClass } from './src/addClass';
import { default as after } from './src/after';
import { default as appendTo } from './src/appendTo';
import { default as before } from './src/before';
import { default as clear } from './src/clear';
import { default as css } from './src/css';
import { default as eq } from './src/eq';
import { default as first } from './src/first';
import { default as hasClass } from './src/hasClass';
import { default as hide } from './src/hide';
import { default as last } from './src/last';
import { default as moveToBack } from './src/moveToBack';
import { default as moveToFront } from './src/moveToFront';
import { default as on } from './src/on';
import { default as prepend } from './src/prepend';
import { default as removeClass } from './src/removeClass';
import { default as show } from './src/show';
import { default as toggle } from './src/toggle';
import { default as toggleClass } from './src/toggleClass';
import { default as trigger } from './src/trigger';


selection.prototype.addClass = addClass;
selection.prototype.after = after;
selection.prototype.appendTo = appendTo;
selection.prototype.before = before;
selection.prototype.clear = clear;
selection.prototype.css = css;
selection.prototype.eq = eq;
selection.prototype.first = first;
selection.prototype.hasClass = hasClass;
selection.prototype.hide = hide;
selection.prototype.last = last;
selection.prototype.moveToBack = moveToBack;
selection.prototype.moveToFront = moveToFront;
selection.prototype.on = on;
selection.prototype.prepend = prepend;
selection.prototype.removeClass = removeClass;
selection.prototype.show = show;
selection.prototype.toggle = toggle;
selection.prototype.toggleClass = toggleClass;
selection.prototype.trigger = trigger;


export { selection, select, selectAll }