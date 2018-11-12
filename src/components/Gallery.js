import React from 'react';

class Gallery extends React.Component {
constructor(props) {
super(props);
}

render() {
  return (
    <div className="row">{
      this.props.boxes.map((item, index) => {
        return <div className="col-sm-12" key={index}>       
          <div  className="col-sm-12" style={{margin: "10px",padding: "4px", backgroundColor:item.bgColor,height: item.height+"px",width: item.width+"px",borderRadius: item.radius+"px"}}>
            <button onClick = {() => this.props.removeItem(index)} style={{ borderRadius: "20px", border: "0px", float: "right"}}>x</button>
          </div>

        </div>;
      })
    }

      </div>
  );
}
}

export default Gallery;
