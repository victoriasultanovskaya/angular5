/**
 * tsc main.ts --target ES5 && node main.js
 */

import {LikeComponent} from './like.component';

let like = new LikeComponent(10, true);
like.onClick();
console.log(`likesCount: ${like.likesCount}, isSelected: ${like.isSelected}`);