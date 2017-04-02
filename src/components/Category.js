import React, { PropTypes } from 'react';

class Category extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            current: null,
        }
        this.onchange = this.onchange.bind(this);
    }


    onchange(category) {
        this.setState({
            current: category,
        });
    }

    render() {
        return (
            <div style={{ backgroundColor: '#6e6568' }}>
                <ul>
                {
                    this.props.categoryList.map((category) => (
                        <li key={category.name} onClick={()=>this.onchange(category)}>{category.name}</li>
                    ))
                }
                </ul>
                
            </div>
        );
    }
}



Category.propTypes = {
    categoryList: PropTypes.array.isRequired
};

export default Category;