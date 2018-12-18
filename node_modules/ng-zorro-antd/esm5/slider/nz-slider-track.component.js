/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var NzSliderTrackComponent = /** @class */ (function () {
    function NzSliderTrackComponent() {
        this._vertical = false;
        this._included = false;
        this.style = {};
    }
    Object.defineProperty(NzSliderTrackComponent.prototype, "nzVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Required
            this._vertical = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderTrackComponent.prototype, "nzIncluded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._included;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._included = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderTrackComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzIncluded"]) {
            this.style.visibility = this.nzIncluded ? 'visible' : 'hidden';
        }
        if (changes["nzVertical"] || changes["nzOffset"] || changes["nzLength"]) {
            if (this.nzVertical) {
                this.style.bottom = this.nzOffset + "%";
                this.style.height = this.nzLength + "%";
            }
            else {
                this.style.left = this.nzOffset + "%";
                this.style.width = this.nzLength + "%";
            }
        }
    };
    NzSliderTrackComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-slider-track',
                    preserveWhitespaces: false,
                    template: "<div [class]=\"nzClassName\" [ngStyle]=\"style\"></div>"
                }] }
    ];
    NzSliderTrackComponent.propDecorators = {
        nzOffset: [{ type: Input }],
        nzLength: [{ type: Input }],
        nzClassName: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzIncluded: [{ type: Input }]
    };
    return NzSliderTrackComponent;
}());
export { NzSliderTrackComponent };
function NzSliderTrackComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSliderTrackComponent.prototype._vertical;
    /** @type {?} */
    NzSliderTrackComponent.prototype._included;
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzOffset;
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzLength;
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzClassName;
    /** @type {?} */
    NzSliderTrackComponent.prototype.style;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O3lCQVEzQixLQUFLO3lCQUNMLEtBQUs7UUEyQnpCLGFBQWtHLEVBQUUsQ0FBQzs7SUFsQnJHLHNCQUNJLDhDQUFVOzs7O1FBSWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUEQsVUFDZSxLQUFjOztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7SUFNRCxzQkFDSSw4Q0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7Ozs7O0lBUUQsNENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxnQkFBYTtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUNoRTtRQUNELElBQUksT0FBTyxrQkFBZSxPQUFPLFlBQVMsSUFBSSxPQUFPLFlBQVMsRUFBRTtZQUM5RCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFNLElBQUksQ0FBQyxRQUFRLE1BQUcsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFNLElBQUksQ0FBQyxRQUFRLE1BQUcsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQU0sSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDO2FBQ3hDO1NBQ0Y7S0FDRjs7Z0JBakRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsaUJBQWlCO29CQUN0QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixtRUFBdUQ7aUJBQ3hEOzs7MkJBTUUsS0FBSzsyQkFDTCxLQUFLOzhCQUdMLEtBQUs7NkJBRUwsS0FBSzs2QkFTTCxLQUFLOztpQ0E3QlI7O1NBU2Esc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1zbGlkZXItdHJhY2snLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlclRyYWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfdmVydGljYWwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5jbHVkZWQgPSBmYWxzZTtcblxuICAvLyBEeW5hbWljIHByb3BlcnRpZXNcbiAgQElucHV0KCkgbnpPZmZzZXQ7XG4gIEBJbnB1dCgpIG56TGVuZ3RoO1xuXG4gIC8vIFN0YXRpYyBwcm9wZXJ0aWVzXG4gIEBJbnB1dCgpIG56Q2xhc3NOYW1lO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7IC8vIFJlcXVpcmVkXG4gICAgdGhpcy5fdmVydGljYWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56VmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56SW5jbHVkZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pbmNsdWRlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpJbmNsdWRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZWQ7XG4gIH1cblxuICBzdHlsZTogeyBib3R0b20/OiBzdHJpbmcsIGhlaWdodD86IHN0cmluZywgbGVmdD86IHN0cmluZywgd2lkdGg/OiBzdHJpbmcsIHZpc2liaWxpdHk/OiBzdHJpbmcgfSA9IHt9O1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekluY2x1ZGVkKSB7XG4gICAgICB0aGlzLnN0eWxlLnZpc2liaWxpdHkgPSB0aGlzLm56SW5jbHVkZWQgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpWZXJ0aWNhbCB8fCBjaGFuZ2VzLm56T2Zmc2V0IHx8IGNoYW5nZXMubnpMZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSBgJHt0aGlzLm56T2Zmc2V0fSVgO1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAke3RoaXMubnpMZW5ndGh9JWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0eWxlLmxlZnQgPSBgJHt0aGlzLm56T2Zmc2V0fSVgO1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gYCR7dGhpcy5uekxlbmd0aH0lYDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19