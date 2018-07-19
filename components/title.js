const Title = ({ children }) => (
    <div>
        <h1>{ children }</h1>

        <style jsx>{`
            h1 {
                font-weight: 400;
                margin: 0;
            }
        `}</style>
    </div>
);

export default Title;
