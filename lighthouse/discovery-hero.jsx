import React from 'react';

function Hero() {
  const urls = [
    "https://api.discovery.com/v1/images/5b4e34906b66d104f3500980",
    "https://api.discovery.com/v1/images/5b4e37226b66d104f3500983"
  ]

  return (
    <div class="hero">
      <div class="image-holder">
        {urls.map(CarouselImage)}
      </div>
    </div>
  )
}

function CarouselImage(url) {
  return (
    <div class="image-holder">
      <picture class="image image-holder-hi-res">
        <source srcset={url + "?width=500"}
          media="(max-width: 500px)"></source>
        <source srcset={url + "?width=800"}
          media="(max-width: 800px)"></source>
        <source srcset={url + "?width=1400"}
          media=""></source>
      </picture>
      <noscript>
        <img src={url + "?width=1400"}
          alt=""></img>
      </noscript>
    </div>
  )
}