import React from "react";

interface Props {
    value: number;
    symbol: string;
}

class Price extends React.Component<Props> {
    render() {
        const { value, symbol } = this.props;
        return (
            <span>{value} {symbol}</span>
        );
    }
}

export default Price;