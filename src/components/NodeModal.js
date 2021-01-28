// import React, { useState } from 'react'
// import Modal from 'react-bootstrap/Modal'
// import Button from "react-bootstrap/Button"

// export default function NodeModal(props) {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Launch demo modal
//         </Button>
    
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>{props.nodeTitle}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//               <p className={"modalPTags"}>Node ID: {props.id}</p>
//               <p className={"modalPTags"}>Progress of Delivery: {props.pOD}</p>
//               <p className={"modalPTags"}>Planned Delivery Date{props.pDD}</p>
//               <p className={"modalPTags"}>Forecast Estimated Time of completion: {props.forecast}</p>
//           </Modal.Body>
//         </Modal>
//       </>
//     );
// }
