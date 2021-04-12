import React from 'react';
import './Card.css';
import BackIcon from '../assets/social-media-icons/arrow.png';

export default function Card({color,Icon,description,url}) {
    return (

        <div className="link-card" style={{backgroundColor:color}}>
            <div className="link-card-content">
                {Icon === "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAABoklEQVQ4je3Uv2/OURQG8M/7pkWRYKFpTMLQRJEY/AEWTJUYLCQmg10iYaqtiURjsPgL6GQz2IqIpmlTgo0mpJEIg0RpHbl9b+P1vbd9GWye5CzPufe5555frYjQA+dxDkNYxg+08BnjGwkcw230Yx4P8CYL7MUF7JEEKjYcHdyo+NZsV0RM1hzJnkbE1QrfbYMRcb9dBM4oduN64fkd37DUV9CcwcuC7eAormHrWlJrEQzidcFyCs9WE8dbTONmLYIBfChYxlLZcLmbrEWwKf+viagJryfQKtgO198k0xdu5eQs4isOYaK4zkIO/yC2YydmUiemhNzBvdxhCzmJyw2BbRjBDrzDaZzsy68+xvNs6+ELnnT5TmClnfNQq0YvpGg+tnOoSz0O13AAL9LLm3ER+3KTvMckPjUu7cfxXIkVHF7tyogYj4hXETEdEVN5Cs9Whudu9s1GxGJEPIyILbUpm4mIKxX+UUSMNflaI22EosH+VqDAf4F/JJAWR9r9Nf6Pypi4NLoJae7TAk1Iq65AbQrncAlH8pwkfMdw3om/gJ8FZhN9REmo4wAAAABJRU5ErkJggg=="?<img src={Icon} className="img-fluid fb-icon" alt="icon"/>: <img src={Icon} className="img-fluid icon" alt="icon"/>}
                <a href={ url} target="_blank" rel="noreferrer" className="text-white description text-decoration-none">{description}</a>
                <img src={BackIcon} className="img-fluid back-icon ml-auto" alt="icon"/>
            </div>
        </div>
    )
}
