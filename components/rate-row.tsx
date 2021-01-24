import React from "react";
import { Rate } from "../api";
import Price from "./price";

interface Props {
    currency: string;
    rate: Rate;
}

class RateRow extends React.Component<Props> {
    render() {
        const { currency, rate } = this.props;
        return (
            <li>
                <h2>{currency}</h2>
                <p>Last 15 min Price: <Price value={rate["15m"]} symbol={rate.symbol}/></p>
                <p>Sell Price: <Price value={rate.sell} symbol={rate.symbol}/></p>
                <p>Buy Price: <Price value={rate.buy} symbol={rate.symbol}/></p>
            </li>
        );
    }
}

export default RateRow;