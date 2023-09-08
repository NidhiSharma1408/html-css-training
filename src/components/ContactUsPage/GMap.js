const GMap = () => {
    return (
        <iframe title="googlemap"
            className="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77495163993!2d77.30128426370027!3d12.954459520042743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sbd!4v1694078750262!5m2!1sen!2sbd"
            frameBorder="0" style={{ minHeight: 350 + 'px', border: 0 }} allowFullScreen="" aria-hidden={false}
            tabIndex="0"></iframe>
    );
}
export default GMap;