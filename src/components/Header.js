import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="header-message">테이블 주문 확인</h1>
            <div id="header-description">
                <a>NFC 테이블 주문 시스템</a>
            </div>
        </div>
    );
};

export default Header;