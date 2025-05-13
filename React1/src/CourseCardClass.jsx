import React, { Component } from 'react';
import './CourseCard.css';

class CourseCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    }

    render() {
        const { title, description, price, instructor } = this.props;
        
        return (
            <div 
                className="course-card"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="price">${price}</div>
                <div className="instructor">讲师: {instructor}</div>
            </div>
        );
    }
}

export default CourseCard;
