import React from 'react';
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    ListGroup, 
    ListGroupItem, 
    Container 
} from 'reactstrap';
import Searchbar from './Searchbar';

const CollectionModal = ({className, modalOpen, toggle, mainList, modalInput, comment, handleAddComment}) => {
  const renderedCollections = mainList.map((given) => {
      return <ListGroupItem key={given.id} onClick={ () => handleAddComment(given, comment)} tag="button" action>
                <p>{given.name}</p>
             </ListGroupItem>;
    });
    
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggle} className={className} scrollable={true} size="lg">
        <ModalHeader toggle={toggle}>Select a collection</ModalHeader>
        <ModalBody>
            <Container fluid>
                <Searchbar handleFormSubmit={modalInput} searchType="collectionInput"/>
                <ListGroup flush>
                    {renderedCollections}
                </ListGroup>
            </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CollectionModal;