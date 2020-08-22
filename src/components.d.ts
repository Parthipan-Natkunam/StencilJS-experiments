/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ProfileImage {
        "alt": string | undefined;
        "defaultImg": string;
        "size": 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | undefined;
        "src": string | undefined;
    }
}
declare global {
    interface HTMLProfileImageElement extends Components.ProfileImage, HTMLStencilElement {
    }
    var HTMLProfileImageElement: {
        prototype: HTMLProfileImageElement;
        new (): HTMLProfileImageElement;
    };
    interface HTMLElementTagNameMap {
        "profile-image": HTMLProfileImageElement;
    }
}
declare namespace LocalJSX {
    interface ProfileImage {
        "alt"?: string | undefined;
        "defaultImg"?: string;
        "size"?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | undefined;
        "src"?: string | undefined;
    }
    interface IntrinsicElements {
        "profile-image": ProfileImage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "profile-image": LocalJSX.ProfileImage & JSXBase.HTMLAttributes<HTMLProfileImageElement>;
        }
    }
}
