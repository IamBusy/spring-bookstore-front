import React,{PropTypes} from 'react';

class Category extends React.Component{
    constructor(props){
        super(props);
    }

    onchange(){

    }

    render(){
        return (
            <div style={{backgroundColor:'#6e6568'}}>
                <li>{this.props.categoryList}</li>
            </div>
        );
    }
}

export default Category;