import { useState } from "react";
import { Image, Modal, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const ProjectImage: React.FC<{ url: string }> = ({ url }) => {
	const [showModal, setShowModal] = useState(false);

	const fileName = url
		.match(/[^\\/]+$/) //Removes the path
		?.at(0)
		?.split(".") //Remove the file extension
		?.at(0);
	const pictureName = fileName?.replace("-", " ");
	const legend = pictureName ? pictureName.charAt(0).toUpperCase() + pictureName.slice(1) : fileName;

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<div onClick={toggleModal} className="project-image">
			<Image fluid src={url} alt={pictureName} />
			<p>{legend}</p>
			<Modal show={showModal} className="image-modal" onHide={toggleModal} centered backdrop key={pictureName}>
				<Modal.Header className="bg-dark">
					<Modal.Title>{legend}</Modal.Title>
					<Button onClick={toggleModal}>
						<FaTimes />
					</Button>
				</Modal.Header>
				<Modal.Body className="bg-dark">
					<Image src={url} alt={legend} className="w-100 h-100" />
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default ProjectImage;
