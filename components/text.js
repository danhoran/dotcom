const Text = ({ children }) => (
    <p>
        { children }
        <style jsx>{`
            p {
                font-size: 1.25rem;
                line-height: 1.6;
                margin-bottom: 5rem;
                max-width: 20em;
            }
        `}</style>
    </p>
);

export default Text;
