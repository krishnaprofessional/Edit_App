import React from 'react';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bgColor: "#0392F2", width: 50,height: 50, radius: 10}

  }

  handleChange = (e, name) => {
    this.setState({[name]: e.target.value});
};

  handleSave = () => {
    this.props.addItem(this.state);
  }

  render() {
    return (
      <div className="row" id="editor_container">

        <div className="col-md-1" id= "box1">
            <img src="/img/save.png" id="save" />
            <button type="button" onClick={this.handleSave} className="btn btn-light" >Save</button>
        </div>

        <div  className="col-md-9" id="box2">
            <div  style={{ alignSelf:"center", backgroundColor:this.state.bgColor,height: this.state.height+"px",width: this.state.width+"px",borderRadius: this.state.radius+"px"}}></div>
        </div>

        <div className="col-md-2" id="box3">

            <div className="form-group">
                <label htmlFor="bg-color" id="item1">BACKGROUND COLOR </label>
                <input value = {this.state.bgColor} type="color" onChange={(e) => this.handleChange(e, "bgColor")}/>
            </div>

            <div className="form-group">
                Size:
            </div>

            <div className="form-group" >
                <label htmlFor="size" id="item2">Width:</label>
                <input className="form-control" id="size" value={this.state.width} type="number" onChange={(e) => this.handleChange(e, "width")}/>
            </div>

            <div className="form-group">
                <label htmlFor="size" id="item3">Height:</label>
                <input className="form-control" id="size" value={this.state.height} type="number" onChange={(e) => this.handleChange(e, "height")}/>
            </div>

            <div className="form-group" >
                <label htmlFor="radius">Radius:</label>
                <input type="range" min="1" max="100" value={this.state.radius} onChange={(e) => this.handleChange(e, "radius")} className="form-control" id="radius"  />
            </div>

         </div>

      </div>
    );
  }

}

export default Editor;
