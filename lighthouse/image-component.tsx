import * as React from 'react';
import CarsComponent from "../lib/cars-component";
import { downsampleImage } from "../lib/image-helpers";

export class LazyImage extends CarsComponent {
  public async render(opts) {
    const src = opts
    const widths = opts.widths
    const lqip = await downsampleImage(src)
    let srcset = widths.map((w) => `${src}?w=${w} ${w}w`).join(",")
    return [
      <img className="cars-lazy"
        src={lqip}
        data-src={src}
        srcSet={srcset += `,${lqip}`} />,
      <noscript>
        <img src={src} srcSet={srcset} />
      </noscript>
    ]
  }

  public get clientModules() {
    return [
      { css: "lazy-images.css" },
      {
        style: `<noscript>
                  <style type="text/css">
                    .cars-lazy { display: none; }
                  </style>
                </script>`},
      { script: "lazy-images.js" }
    ]
  }
}}

import { LazyImage } from "../components/lazy-image"

async function renderCarousel(urls) {
  return urls.map((src) => (
    <div class="tile">
      <LazyImage src={src} widths={[400, 900, 1400]} />
    </div>
  ))
}