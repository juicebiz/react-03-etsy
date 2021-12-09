import React from 'react'
import PropTypes from 'prop-types'
import './css/main.css';

export default function Listing(props) {
    const items = props.items
    const list = items.map((item) =>                     
                <div className="item" key="{listing_id}">
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} alt={item.title} />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{item.title.length > 50 ? item.title.substr(50)+'...' : item.title}</p>
                        <p className="item-price">{item.price_item}</p>
                        <p className={item.class_quantity}>{item.quantity} left</p>
                    </div>
                </div>
                )
    return (
        <div>
            <div className="wrapper">
                <div className="item-list">
                {list}
                </div>
            </div>
        </div>
    )
}

Listing.propTypes = {
    items: PropTypes.array.isRequired
}
