import React from 'react';
import './CourseCard.css';

const CourseCard = ({
    title,
    price,
    language,
    duration,
    location,
    isNew = false,
    imageUrl
}) => {
    return (
        <div className="course-card">
            <div className="course-image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="course-content">
                <div className="course-header">
                    <div className="course-title">{title}</div>
                    <div className="course-price">${price}</div>
                </div>
                <div style={{flex:1}}></div>
                <div className="course-info">
                    <p className="course-language">{language}</p>
                    <p className="course-duration">{duration}</p>
                    <p className="course-location">{location}</p>
                </div>
                {isNew && <span className="course-isNew">New!</span>}
            </div>
        </div>
    );
};

export default CourseCard;