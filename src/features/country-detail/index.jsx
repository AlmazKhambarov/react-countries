import React from "react";

const CountryDetail = () => {
  const path = "https://goo.gl/maps/JjmyUuULujnDeFPf7"
  const getEmbedUrl = (mapUrl) => {
    const url = new URL(mapUrl);
    return `https://www.google.com/maps/embed?pb=${url.searchParams.get('q')}`;
  };
  const embedUrl = getEmbedUrl(path);
  return (
    <div>
      <div className='map'>
        <iframe
        src={embedUrl}
          width={"100%"}
          height='450'
          style={{border:"0px"}}
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'></iframe>
      </div>
    </div>
  );
};

export default CountryDetail;
