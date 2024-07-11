import React from 'react';

export default function GoogleMap() {
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12052.6994163675!2d106.66254825175503!3d10.83738545145207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a19af9c153%3A0x717ddd69f5567921!2zNjggxJAuIFPhu5EgMTksIEtodSBwaOG7kSAyLCBHw7IgVuG6pXAsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1719997143233!5m2!1sen!2s"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[50vh]"
      ></iframe>
    </div>
  );
}
