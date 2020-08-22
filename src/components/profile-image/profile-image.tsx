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
    return this.src ? (
      <div class={classNames}>
        <img src={this.src} alt={this.alt} />
      </div>
    ) : (
      <div class={`defaultProfilePic ${classNames}`}>
        <img src={getAssetPath(`./assets/${this.defaultImg}`)} alt="default profile picture" />
      </div>
    );
  }
}
