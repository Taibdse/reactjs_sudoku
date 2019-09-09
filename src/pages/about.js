import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    const fbLink = 'https://www.facebook.com/profile.php?id=100006632731348';
    const projectLink = 'https://github.com/Taibdse/reactjs_sudoku';

    return (
        <Layout>
            <div className="text-center" style={{ marginTop: '100px' }}>
                <h3 className="font-italic">This app is sponsored by <a href={fbLink}>Bui Duc Tai</a></h3>
                <p>You can follow <a href={projectLink}>this link</a> to get the full source code</p>
            </div>
        </Layout>
    );
};

export default AboutPage;
