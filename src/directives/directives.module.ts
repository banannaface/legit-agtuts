import { NgModule } from '@angular/core';
import { ParallaxDirective } from './parallax/parallax';
import { HideDirective } from './hide/hide';
@NgModule({
	declarations: [ParallaxDirective,
    HideDirective],
	imports: [],
	exports: [ParallaxDirective,
    HideDirective]
})
export class DirectivesModule {}
