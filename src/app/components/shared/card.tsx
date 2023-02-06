import React from "react";

export interface CardProps {
	children: React.ReactNode;
}

const Card = (props: CardProps) => {
	return <div className="card-wrapper">{props.children}</div>;
};

export default Card;
