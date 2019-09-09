import React from 'react';

const AboutPage = () => {
    const fbLink = 'https://www.facebook.com/profile.php?id=100006632731348';
    return (
        <div className="text-center" style={{ marginTop: '100px' }}>
            <h3 className="font-italic">This app is sponsored by <a href={fbLink}>Bui Duc Tai</a></h3>
        </div>
    );
};

export default AboutPage;
