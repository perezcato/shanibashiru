import React from 'react';
import Gallery from "react-photo-gallery";
import {photos} from "../assets/media-images";
import Carousel, {Modal, ModalGateway} from "react-images";


const Media = () => {

  const [currentImage, setCurrentImage] = React.useState(0);
  const [viewerIsOpen, setViewerIsOpen] = React.useState(false);

  const openLightbox = React.useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <div className="hidden md:block banner-color py-16">
        <div className="text-white font-black text-5xl container mx-auto md:px-16">
          Media.
        </div>
      </div>
      <div className="container mx-auto md:px-16 my-10">
        <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
      </div>
    </div>
  )
}

export default Media;
