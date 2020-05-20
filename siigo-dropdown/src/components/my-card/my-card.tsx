import { Component, h } from '@stencil/core';

@Component({
    tag: 'my-card',
    styleUrl: 'my-card.scss',
    shadow: true
})
export class MyComponent {
    render() {
        return <div class="my-card">
            <img class="my-card__avatar" src="https://api.adorable.io/avatars/285/abott@adorable.png" alt='Avatar' ></img>
            <div class="my-card__text-container">
                <h4 class="my-card__text-title">Edison</h4>
                <p class="my-card__text-rol">UI developer</p>
            </div>
        </div>
    }
}