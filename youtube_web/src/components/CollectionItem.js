import React from 'react';
import { 
    Button, 
    Row,
    Col,
    ListGroup, 
    ListGroupItem, 
    Container 
} from 'reactstrap';
import sortCommentByCreatorName from '../sort/sort_by_creator_name';

const CollectionItem = ({className, collection, deleteCollect, deleteComment}) => {
  const renderedComments = collection.comments.sort(sortCommentByCreatorName).map((given) => {
      return <ListGroupItem key={given.id}>
             <Row>
                <Col xs="12" md="6">
                   <p className="font-weight-bold">{given.creator}</p>
                   <p>{given.content}</p>                
                </Col>
                <Col xs="12" md="6">
                    <Button color="danger" onClick={() => deleteComment(given.id, collection.id)}>Delete comment</Button>
                </Col>
             </Row>
             </ListGroupItem>;
    });
    
  return (
    <div>
        <hr style={{height: "1px", borderTop: "1px", borderStyle: "solid", borderColor: "black"}}/>
        <Container fluid>
            <h4>{collection.name}</h4>
            <ListGroup flush>
                {renderedComments}
            </ListGroup>
            <Button color="danger" onClick={() => deleteCollect(collection.id)}>Delete collection</Button>
        </Container>
    </div>
  );
}

export default CollectionItem;