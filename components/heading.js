const Heading = ({ children }) => (
    <h2>
        { children }

        <style jsx>{`
            h2 {
                display: inline-block;
                font-size: 1.8em;
                font-weight: 700;
                margin: 0;
                position: relative;
                z-index: 1;
            }

            h2::after {
                background: #2C3E50;
                background: -webkit-linear-gradient(to right, #FD746C, #ffa39e);
                background: linear-gradient(to bottom, #FD746C, #ffa39e);
                bottom: 2px;
                content: '';
                display: block;
                height: 12px;
                left: 7px;
                position: absolute;
                right: -7px;
                z-index: -1;
            }
        `}</style>
    </h2>
);

export default Heading;
