import React, { PropTypes } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

class Category extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      current: null,
    };
    this.onchange = this.onchange.bind(this);
  }


  onchange(category) {
    //const { onChange } = this.props;
    this.setState({
      current: category,
    });
    //onChange(category);
  }

  render() {
    return (
      <div style={{ backgroundColor: '#ececec', height: '100%' }}>
        <Menu
          theme="dark"
          style={{ background: null }}
          
        >
          {
            this.props.categoryList.map(category => (
              <Menu.Item key={category.id}>
                {category.icon &&
                <Icon type={category.icon} />
                }
                <Link to={`categories/${category.id}`}>{category.name}</Link>

                
              </Menu.Item>
            ))
          }
        </Menu>


      </div>
    );
  }
}

Category.propTypes = {
  categoryList: PropTypes.array.isRequired,
};

export default Category;
