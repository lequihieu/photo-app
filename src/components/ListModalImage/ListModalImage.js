import React, { useState } from 'react'
import jwt_decode from 'jwt-decode'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import PropTypes from 'prop-types'
import { add } from '../UserFunctions'
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
    const addElement = (element) => {

        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        const image = {url: element.urls.thumb, name: element.id, user: decoded.id} 
        console.log(image);
        add(image);
    } 
    return (
        <div>
            <div className="list-image">
                {prevImages.map((element, index) => {
                    return (
                        <div class="wrap"> 
                            <img
                                src={element.urls.thumb}
                                className="item"
                                key={index}
                                alt="hello"
                                onClick={() => showModalImage(index)}
                            />
                            <div class="overlay overlayFade">
                                <button onClick={() => addElement(element)}>ADD</button><br/>
                                <button onClick={() => showModalImage(index)}>ON SCREEN</button>
                            </div> 
                            
                        </div>
                    )
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
