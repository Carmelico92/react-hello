import React from "react";
// style={{marginRight: spacing + 'em'}}

const Card = () => {
    return (
     
  <div className="col">
    <div className="card h-100">
      <img src="https://picsum.photos/id/63/200/300" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer bg-light">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
    </div>
    <div/>
    </div>

  
      );
    };

    
export default Card;