import React, { useState } from 'react'
import jwt_decode from 'jwt-decode'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import { add } from '../UserFunctions'
import {
    Modal,
    ModalHeader,
    ModalBody,
  } from "reactstrap";
import './ListModalImage.scss'

const ListModalImage = props => {

    const { images } = props;  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [prevImages, setPrevImages] = useState([]);
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

        alert("Added");
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        const image = {thumb: element.thumb, name: element.name, user: decoded.id, regular: element.regular} 
        console.log(image);
        add(image);
    } 
    return (
        <div className="container">
            <div className="list-image">
                {prevImages.map((element, index) => {
                    return (
                        <div className="wrap" key={element.name}> 
                            <img
                                src={element.thumb}
                                className="item"
                                alt="hello"
                                onClick={() => showModalImage(index)}
                            />
                            <div className="overlay overlayFade">
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
