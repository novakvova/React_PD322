import plusImage from "../../../assets/images/plus.jpg";
import classNames from "classnames";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './style.css';
import {useState} from "react";

const MultiFileInput = ({label, field, value, error, onChange}) => {
    const img = value == null ? plusImage : URL.createObjectURL(value);

    const [images, setImages] = useState([]);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const imageFiles = files.map((file) => URL.createObjectURL(file));
        setImages(prevImages => [...prevImages, ...imageFiles]);
    };

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const reorderedImages = Array.from(images);
        const [movedImage] = reorderedImages.splice(result.source.index, 1);
        reorderedImages.splice(result.destination.index, 0, movedImage);

        setImages(reorderedImages);
    };
    // console.log("error", error);

    return (
        <>
            <div className="mb-3">
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor={field} className="form-label">
                            <img src={img} alt="" className={"img-fluid"}/>
                        </label>
                        <input type="file"
                               className={classNames("d-none")}
                               id={field}
                               name={field}
                               multiple={true}
                               onChange={handleFileChange}
                               aria-describedby="emailHelp"/>
                    </div>
                    {
                        error &&
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    }


                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="images">
                            {(provided) => (
                                <div
                                    className="image-preview-container"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {images.map((image, index) => (
                                        <Draggable key={image} draggableId={image} index={index}>
                                            {(provided) => (
                                                <div
                                                    className="image-preview"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <img src={image} alt={`Preview ${index}`}/>
                                                    <button onClick={() => removeImage(index)} className="remove-button">X
                                                    </button>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>

            </div>

        </>
    );
}

export default MultiFileInput;