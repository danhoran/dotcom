const Card = ({ children }) => (
    <div className="card">
        <div className="content">{ children }</div>
        <style jsx>{`
            .card {
                background-color: #fff;
                padding: 1rem;
            }

            .content {
                margin: 0 auto;
                max-width: 48rem;
            }

            @media (min-width: 960px) {
                .card {
                    padding: 8rem 0;
                }
            }
        `}</style>
    </div>
);

export default Card;
