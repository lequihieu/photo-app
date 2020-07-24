import React, { useState } from 'react'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import PropTypes from 'prop-types'
import {
    Modal,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Col,
    Row,
    Container,
    Card,
    CardImgOverlay,
    CardImg,
    Button
  } from "reactstrap";
import './ListModalImage.scss'

const ListModalImage = props => {

    const { images } = props;  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [prevImages, setPrevImages] = useState([]);
    const [imageToShow, setImageToShow] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    if(images !== prevImages) 
    {   
        console.log(images, prevImages);
        setPrevImages(images);
    }

    const toggleModal = () => 
    {
        setIsModalOpen(!isModalOpen)
    }
    const showModalImage = (imageId) => 
    {   
        toggleModal();
        setCurrentIndex(imageId);
    }

    return (
        <div>
            <div className="list-image">
                {prevImages.map((element, index) => {
                    return <img
                            src={element.urls.thumb}
                            className="item"
                            key={index}
                            alt="hello"
                            onClick={() => showModalImage(index)}
                            />;
                })}
            </div>

            <Modal
                className="modal-xl"
                isOpen={isModalOpen}
                toggle={toggleModal}
                >
                <ModalHeader>Image Gallery</ModalHeader>
                <ModalBody>
                  
                            {/* <img 
                            src={prevImages[currentIndex]&&prevImages[currentIndex].urls.regular}
                            alt="hello"/> */}
                            <ImageCarousel images={prevImages} currentIndex={currentIndex}/>
                   
                </ModalBody>
            </Modal>
        </div>
    )
}

ListModalImage.propTypes = {

}

export default ListModalImage
