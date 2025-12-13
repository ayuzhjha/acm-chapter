import React, { useState } from "react";
import "./NotificationCard.css";

const NotificationCard = ({
    type = "standard", // "standard" or "event"
    title,
    subtitle,
    description,
    image,
    onClick,
    delay = 0
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = (e) => {
        e.stopPropagation();
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 500);
    };

    if (!isVisible) return null;

    const animationDelay = { animationDelay: `${delay}s` };

    if (type === "event") {
        return (
            <div
                className={`glass-card event-poster-card fade-in-right ${isClosing ? 'fade-out' : ''}`}
                style={animationDelay}
                onClick={onClick}
            >
                <button className="close-btn" onClick={handleClose} aria-label="Close">✕</button>
                <img src={image || "/placeholder_event.jpg"} alt={title} className="event-image" />
                <div className="event-overlay">
                    <div className="countdown">
                        02 : 12 : 45
                    </div>
                    <div className="text-sm font-bold mb-2">{title}</div>
                    <button className="view-btn">View Details</button>
                </div>
            </div>
        );
    }

    // Standard Card
    return (
        <div
            className={`glass-card notification-card fade-in-right ${isClosing ? 'fade-out' : ''}`}
            style={animationDelay}
            onClick={onClick}
        >
            <button className="close-btn" onClick={handleClose} aria-label="Close">✕</button>
            <div className="card-img">
                {image && <img src={image} alt="" className="w-full h-full object-cover rounded-[10px]" />}
            </div>
            <div className="card-text-box">
                <div className="card-title-row">
                    <p className="card-title">{title}</p>
                    {subtitle && <span className="card-subtitle">{subtitle}</span>}
                </div>
                <p className="card-desc">{description}</p>
            </div>
        </div>
    );
};

export default NotificationCard;
