import { Component, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'profile-image',
  styleUrl: 'profile-image.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class MyComponent {
  @Prop() defaultImg = 'defaultProfile.svg';
  @Prop() src: string | undefined;
  @Prop() alt: string | undefined;
  @Prop() size: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | undefined;

  render() {
    const classNames = `profilePic ${this.size ? this.size : null}`;
    return (
      <div class={this.src ? classNames : `defaultProfilePic ${classNames}`}>
        <img src={this.src || getAssetPath(`./assets/${this.defaultImg}`)} alt={this.alt || 'profile picture'} />
      </div>
    );
  }
}
